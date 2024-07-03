import {
  AffiliatePrograms,
  CommissionCalculationType,
  CustomerDiscountType,
  EarningType,
  ProgramStatusType,
  Programs,
} from '../../generated';
import { paginationType } from '.';

export type getProgramsType = Partial<paginationType> & {
  status?: ProgramStatusType;
  searchQuery?: string;
  storeId: number;
};

export type getProgramType = {
  storeId: number;
  programId: number;
};

export type createProgramType = {
  storeId: number;
  title: string;
  description: string;
  status?: ProgramStatusType;
  currencyCode: string;
  commissionType: EarningType;
  commissionValue: number;
  discountType: CustomerDiscountType;
  discountValue: number;
  discountOptions: any;
};

export type updateProgramType = Omit<
  Partial<createProgramType> & { programId: number; storeId: number },
  ''
>;

export type updateProgramStatusType = {
  programId: number;
  status: ProgramStatusType;
  storeId: number;
};

export type ProgramPrismaInterface = Programs & {
  affiliate_programs: AffiliatePrograms[];
};
