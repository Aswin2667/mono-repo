import {
  Commissions,
  ContactType,
  DiscountStatusType,
  OrderStatusType,
  Orders,
  PaymentType,
  Prisma,
  Settings,
  StatusType,
  StoreStatusType,
  Stores,
} from '../../generated';
import { JsonObject } from '../../generated/runtime/library';
import { PaymentStatusType } from '../index.enum';

// common
export type paginationType = {
  offSet?: number;
  numOfRows?: number;
};

// stores
export type StoreCreateInputType = {
  shopify_store_id: number;
  domain: string;
  myshopify_domain: string;
  email: string;
  blacklisted: boolean;
  currency_code: string;
  country_code: string;
  language: string;
  status: StoreStatusType;
  store_details: JsonObject;
  admin_access_token: string;
  storefront_access_token: string;
};

export type StoreUpdateInputType = Partial<StoreCreateInputType>;

export interface StoresPrismaInterface extends Stores {
  settings: Settings;
}

export type StoreContactInputType = {
  contact_name: string;
  contact_email: string;
  contact_phone?: string | null;
};

// members
export type MemberInputType = {
  first_name: string;
  last_name: string;
  contact_type: ContactType;
  phone: string | null;
  email: string | null;
  member_details: JsonObject;
};

// commissions
export type getCommissionHistoryType = Partial<paginationType> & {
  affiliateId?: number;
  storeId: number;
};

// discounts
export type createDiscountType = {
  storeId: number;
  affiliateId: number;
  discountId: bigint;
  discountCode: string;
  status?: DiscountStatusType;
};

export type updateDiscountType = {
  storeId: number;
  affiliateId: number;
  discountId: bigint;
  status: DiscountStatusType;
};

export type deleteDiscountType = Omit<
  createDiscountType,
  'discountCode' | 'status'
>;

// orders
export type getOrdersType = {
  requiredType?: 'PROGRAM' | 'AFFILIATE';
  requiredValue?: number;
  storeId?: number;
};

export type CreateOrderInputType = Omit<UpdateOrderInputType, 'id'>;

export type UpdateOrderInputType = {
  id: number;
  storeId: number;
  affiliateId?: number;
  customerId?: number;
  programId?: number;
  orderId?: number;
  shopify_order_number: number;
  shop_order_currency_code: string;
  shop_order_amount: number;
  customer_order_currency_code: string;
  customer_order_amount: number;
  financial_status: PaymentStatusType;
  order_details: JsonObject;
  status: OrderStatusType;
};

export type OrdersType = Orders & {
  commissions: Commissions;
};

// payouts
export type getPayoutsType = Partial<paginationType> & {
  storeId: number;
};

export type createPayoutType = {
  storeId: number;
  affiliateId: number;
  currencyCode: string;
  notes: string;
  amount: number;
  paymentMethod: PaymentType;
  status: StatusType;
};

export type getPayoutHistoryType = Partial<paginationType> & {
  affiliateId?: number;
  storeId: number;
};

export type PaymentGatewayData = {
  client_id: string;
  client_secret: string;
};
