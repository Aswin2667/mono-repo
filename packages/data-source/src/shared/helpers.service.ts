import { Injectable } from '@nestjs/common';
import {
  AffiliatePrograms,
  Programs,
  StoreStatusType,
  TransactionReferenceType,
  TransactionType,
} from '../../generated';
import { PrismaService } from '../shared/prisma.service';
import { getOrdersType } from '../types';

@Injectable()
export class HelpersModelService {
  constructor(private readonly prisma: PrismaService) { }

  async validateStore(
    myshopify_domain: string,
    throwError: boolean = true,
    status: StoreStatusType = StoreStatusType.INSTALLED,
  ) {
    try {
      const existingStore = await this.prisma.stores.findUnique({
        where: {
          myshopify_domain: myshopify_domain,
          blacklisted: false,
          status: status,
        },
        include: {
          settings: true,
        },
      });
      if (!existingStore && throwError) throw new Error('Store is not valid');
      return existingStore;
    } catch (e) {
      throw e;
    }
  }

  async validateAffiliate(affiliateId: number, storeId: number) {
    try {
      const existingAffiliate = await this.prisma.affiliates.findUnique({
        where: {
          id: affiliateId,
          store_id: storeId,
        },
        include: {
          members: true,
          affiliate_programs: true,
          stores: true,
        },
      });

      if (!existingAffiliate) throw new Error('Affiliate is not valid');
      return existingAffiliate;
    } catch (e) {
      throw e;
    }
  }

  async validateAffiliateExistInAnyProgram(
    storeId: number,
    affiliateId: number,
  ): Promise<AffiliatePrograms> {
    try {
      const affiliateExistsInProgram =
        await this.prisma.affiliatePrograms.findUnique({
          where: {
            store_id_affiliate_id: {
              store_id: storeId,
              affiliate_id: affiliateId,
            },
          },
        });

      return affiliateExistsInProgram;
    } catch (e) {
      throw e;
    }
  }

  async isMemberEmailAlreadyExists(email: string) {
    try {
      const existingMember = await this.prisma.members.findUnique({
        where: {
          email: email,
        },
      });

      if (existingMember) throw new Error(`${email} email is already exists`);
      return;
    } catch (e) {
      throw e;
    }
  }

  async isMemberPhoneAlreadyExists(phone: string) {
    try {
      const existingMember = await this.prisma.members.findUnique({
        where: {
          phone: phone,
        },
      });

      if (existingMember) throw new Error(`${phone} phone is already exists`);
      return;
    } catch (e) {
      throw e;
    }
  }

  async isAffiliateEmailAlreadyExists(
    storeId: number,
    email: string,
  ): Promise<boolean> {
    try {
      const existingMember = await this.prisma.members.findUnique({
        where: {
          email: email,
        },
      });
      if (!existingMember) return;
      const existingAffiliate = await this.prisma.affiliates.findUnique({
        where: {
          store_id_member_id: {
            store_id: storeId,
            member_id: existingMember.id,
          },
        },
      });

      if (existingAffiliate)
        throw new Error(`${email} email is already exists`);
      return false;
    } catch (e) {
      throw e;
    }
  }

  async isAffiliatePhoneAlreadyExists(
    storeId: number,
    phone: string,
  ): Promise<boolean> {
    try {
      const existingMember = await this.prisma.members.findUnique({
        where: {
          phone: phone,
        },
      });
      if (!existingMember) return;
      const existingAffiliate = await this.prisma.affiliates.findUnique({
        where: {
          store_id_member_id: {
            store_id: storeId,
            member_id: existingMember.id,
          },
        },
      });

      if (existingAffiliate)
        throw new Error(`${phone} phone is already exists`);
      return;
    } catch (e) {
      throw e;
    }
  }

  async isReferralCodeAlreadyExists(
    code: string,
    storeId: number,
  ): Promise<boolean> {
    try {
      const existingCode = await this.prisma.affiliates.findUnique({
        where: {
          store_id_referral_code: {
            store_id: storeId,
            referral_code: code,
          },
        },
      });

      if (existingCode)
        throw new Error(`${code} referral code is already exists`);
      return false;
    } catch (e) {
      throw e;
    }
  }

  async validateProgram(programId: number, storeId: number) {
    try {
      const existingProgram = await this.prisma.programs.findUnique({
        where: {
          id: programId,
          store_id: storeId,
        },
        include: {
          affiliate_programs: true,
          tiers: true,
          customer_discounts: true,
        },
      });

      if (!existingProgram) throw new Error('Program is not valid');
      return existingProgram;
    } catch (e) {
      throw e;
    }
  }

  async validateProgramName(programName: string, storeId: number) {
    try {
      const existingProgram = await this.prisma.programs.findUnique({
        where: {
          store_id_title: {
            store_id: storeId,
            title: programName,
          },
        },
        include: {
          tiers: true,
          customer_discounts: true,
        },
      });

      return existingProgram;
    } catch (e) {
      throw e;
    }
  }

  async getUniqueAffiliate(affiliateId: number, storeId: number) {
    try {
      const affiliate = await this.prisma.affiliates.findUnique({
        where: {
          id: affiliateId,
          store_id: storeId,
        },
        include: {
          members: true,
        },
      });
      return affiliate;
    } catch (e) {
      throw e;
    }
  }

  async getUniqueProgram(programId: number, storeId: number) {
    try {
      const program = await this.prisma.programs.findUnique({
        where: {
          id: programId,
          store_id: storeId,
        },
        include: {
          customer_discounts: true,
        },
      });
      return program;
    } catch (e) {
      throw e;
    }
  }

  async getManyAffiliatePrograms(programId: number, storeId: number) {
    try {
      const affiliatePrograms = await this.prisma.affiliatePrograms.findMany({
        where: {
          program_id: programId,
          store_id: storeId,
        },
        include: {
          affiliates: true,
        },
      });

      return affiliatePrograms;
    } catch (e) {
      throw e;
    }
  }

  async getUniqueAffiliateDiscount(affiliateId: number, storeId: number) {
    try {
      const affiliateDiscount = await this.prisma.affiliateDiscounts.findFirst({
        where: {
          affiliate_id: affiliateId,
          store_id: storeId,
        },
        include: {
          affiliates: true,
        },
      });

      return affiliateDiscount;
    } catch (e) {
      throw e;
    }
  }

  async getManyAffiliate(
    storeId: number,
    numOfRows: number = 10,
    offset: number = 0,
  ) {
    try {
      const affiliate = await this.prisma.affiliates.findMany({
        skip: offset * numOfRows,
        take: numOfRows,
        where: {
          store_id: storeId,
        },
      });

      const affiliatesCount = this.prisma.affiliates.count({
        where: {
          store_id: storeId,
        },
      });

      return { affiliate, affiliatesCount, offset, numOfRows };
    } catch (e) {
      throw e;
    }
  }

  async getOrdersCount(orderInput: getOrdersType) {
    try {
      const { requiredType, requiredValue, storeId } = orderInput;
      let whereClause = {
        store_id: storeId,
      };
      if (requiredType === 'PROGRAM') {
        whereClause['program_id'] = requiredValue;
      } else {
        whereClause['affiliate_id'] = requiredValue;
      }
      const order = await this.prisma.orders.count({
        where: whereClause,
      });
      return order ?? 0;
    } catch (e) {
      throw e;
    }
  }

  async isTransactionAlreadyCreated(
    storeId: number,
    orderId: number,
    transactionType: TransactionType,
  ) {
    try {
      const transactions = await this.prisma.transactions.findFirst({
        where: {
          AND: [
            { store_id: storeId },
            { reference_id: `${orderId}` },
            { reference_type: TransactionReferenceType.ORDER },
            { type: transactionType },
          ],
        },
      });
      return transactions;
    } catch (e) {
      throw e;
    }
  }
}
