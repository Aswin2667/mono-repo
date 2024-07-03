
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.1
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.16.1",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StoresScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  domain: 'domain',
  myshopify_domain: 'myshopify_domain',
  email: 'email',
  blacklisted: 'blacklisted',
  currency_code: 'currency_code',
  country_code: 'country_code',
  language: 'language',
  status: 'status',
  store_details: 'store_details',
  remote_details: 'remote_details',
  admin_access_token: 'admin_access_token',
  storefront_access_token: 'storefront_access_token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  shopify_store_id: 'shopify_store_id',
  landing_page_id: 'landing_page_id',
  portal_page_id: 'portal_page_id',
  contact_email: 'contact_email',
  contact_name: 'contact_name',
  contact_phone: 'contact_phone',
  webhook_registration_check: 'webhook_registration_check'
};

exports.Prisma.MembersScalarFieldEnum = {
  id: 'id',
  member_id: 'member_id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  phone: 'phone',
  member_details: 'member_details',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProgramsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  title: 'title',
  description: 'description',
  currency_code: 'currency_code',
  program_details: 'program_details',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TiersScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  program_id: 'program_id',
  tier_type: 'tier_type',
  min_value: 'min_value',
  max_value: 'max_value',
  commission_type: 'commission_type',
  commission_rate: 'commission_rate',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CustomerDiscountsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  program_id: 'program_id',
  discount_rate: 'discount_rate',
  discount_options: 'discount_options',
  created_at: 'created_at',
  updated_at: 'updated_at',
  discount_type: 'discount_type'
};

exports.Prisma.OrdersScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  customer_id: 'customer_id',
  order_id: 'order_id',
  shopify_order_number: 'shopify_order_number',
  shop_order_currency_code: 'shop_order_currency_code',
  shop_order_amount: 'shop_order_amount',
  customer_order_currency_code: 'customer_order_currency_code',
  customer_order_amount: 'customer_order_amount',
  financial_status: 'financial_status',
  order_details: 'order_details',
  attribute_type: 'attribute_type',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  program_id: 'program_id'
};

exports.Prisma.OrderItemsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  customer_id: 'customer_id',
  order_id: 'order_id',
  item_id: 'item_id',
  product_id: 'product_id',
  variant_id: 'variant_id',
  product_title: 'product_title',
  variant_title: 'variant_title',
  quantity: 'quantity',
  shop_item_currency_code: 'shop_item_currency_code',
  shop_item_amount: 'shop_item_amount',
  customer_item_currency_code: 'customer_item_currency_code',
  customer_item_amount: 'customer_item_amount',
  item_details: 'item_details',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CommissionsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  order_id: 'order_id',
  currency_code: 'currency_code',
  amount: 'amount',
  status: 'status',
  approval_mode: 'approval_mode',
  review_on: 'review_on',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PayoutsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  transaction_id: 'transaction_id',
  currency_code: 'currency_code',
  amount: 'amount',
  notes: 'notes',
  payment_method: 'payment_method',
  payment_details: 'payment_details',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id',
  job_id: 'job_id'
};

exports.Prisma.BonusScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  title: 'title',
  description: 'description',
  bonus_associate: 'bonus_associate',
  target_type: 'target_type',
  target_goal: 'target_goal',
  bonus_type: 'bonus_type',
  bonus_rate: 'bonus_rate',
  status: 'status',
  begin_datetime: 'begin_datetime',
  expire_datetime: 'expire_datetime',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.GiftsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  title: 'title',
  description: 'description',
  products: 'products',
  gift_type: 'gift_type',
  status: 'status',
  shipping_method: 'shipping_method',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  reference_type: 'reference_type',
  reference_id: 'reference_id',
  currency_code: 'currency_code',
  type: 'type',
  is_reverted: 'is_reverted',
  amount: 'amount',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SettingsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  commission_delay: 'commission_delay',
  commission_approval_mode: 'commission_approval_mode',
  commission_calculation: 'commission_calculation',
  details: 'details',
  min_threshold: 'min_threshold',
  primary_color: 'primary_color',
  secondary_color: 'secondary_color',
  created_at: 'created_at',
  updated_at: 'updated_at',
  current_email_lang: 'current_email_lang',
  email_limit: 'email_limit',
  notify_once: 'notify_once'
};

exports.Prisma.JobsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  job_metadata: 'job_metadata',
  status: 'status',
  type: 'type',
  job_details: 'job_details',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CustomersScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  shopify_customer_id: 'shopify_customer_id',
  first_name: 'first_name',
  last_name: 'last_name',
  contact_type: 'contact_type',
  email: 'email',
  phone: 'phone',
  customer_details: 'customer_details',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AffiliatesScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  member_id: 'member_id',
  first_name: 'first_name',
  last_name: 'last_name',
  phone: 'phone',
  referral_code: 'referral_code',
  status: 'status',
  affiliate_details: 'affiliate_details',
  payout_requested: 'payout_requested',
  created_at: 'created_at',
  updated_at: 'updated_at',
  source: 'source'
};

exports.Prisma.AffiliateProgramsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  program_id: 'program_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AffiliateProgramHistoryScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  program_id: 'program_id',
  program_name: 'program_name',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AffiliateDiscountsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  discount_id: 'discount_id',
  discount_code: 'discount_code',
  is_deleted: 'is_deleted',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AffiliateGiftsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  gift_id: 'gift_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AffiliateBonusScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  bonus_id: 'bonus_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProgramBonusScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  program_id: 'program_id',
  bonus_id: 'bonus_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OtpScalarFieldEnum = {
  id: 'id',
  code: 'code',
  email: 'email',
  expire_at: 'expire_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  id: 'id',
  notification_id: 'notification_id',
  store_id: 'store_id',
  type: 'type',
  receiver_type: 'receiver_type',
  subject: 'subject',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  languages: 'languages'
};

exports.Prisma.ActivityLogScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  affiliate_id: 'affiliate_id',
  program_id: 'program_id',
  order_id: 'order_id',
  payout_id: 'payout_id',
  entity_type: 'entity_type',
  message: 'message',
  created_at: 'created_at'
};

exports.Prisma.MessageHistoryScalarFieldEnum = {
  id: 'id',
  status: 'status',
  referenceId: 'referenceId',
  metaData: 'metaData',
  created_at: 'created_at',
  store_id: 'store_id'
};

exports.Prisma.PaymentGatewayScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  payment_uuid: 'payment_uuid',
  provider: 'provider',
  credentials: 'credentials',
  webhook_id: 'webhook_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AppSubscriptionScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  plan_id: 'plan_id',
  name: 'name',
  price: 'price',
  status: 'status',
  currency_code: 'currency_code',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.IntegrationsScalarFieldEnum = {
  id: 'id',
  store_id: 'store_id',
  integration_type: 'integration_type',
  status: 'status',
  api_key: 'api_key',
  api_secret: 'api_secret',
  created_at: 'created_at',
  updated_at: 'updated_at',
  integration_details: 'integration_details'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.StoreStatusType = exports.$Enums.StoreStatusType = {
  INSTALLED: 'INSTALLED',
  UNINSTALLED: 'UNINSTALLED',
  STORE_REOPENED: 'STORE_REOPENED',
  STORE_CLOSED: 'STORE_CLOSED'
};

exports.ProgramStatusType = exports.$Enums.ProgramStatusType = {
  ACTIVE: 'ACTIVE',
  DRAFT: 'DRAFT',
  ARCHIVED: 'ARCHIVED'
};

exports.TierType = exports.$Enums.TierType = {
  TOTAL_AMOUNT: 'TOTAL_AMOUNT',
  TOTAL_SALES: 'TOTAL_SALES',
  TOTAL_REFERRALS: 'TOTAL_REFERRALS',
  DEFAULT: 'DEFAULT'
};

exports.EarningType = exports.$Enums.EarningType = {
  FLAT: 'FLAT',
  PERCENTAGE: 'PERCENTAGE'
};

exports.CustomerDiscountType = exports.$Enums.CustomerDiscountType = {
  FLAT: 'FLAT',
  PERCENTAGE: 'PERCENTAGE',
  FREE_SHIPPING: 'FREE_SHIPPING',
  NO_DISCOUNT: 'NO_DISCOUNT'
};

exports.OrderAttributeType = exports.$Enums.OrderAttributeType = {
  REFERRAL_SALE: 'REFERRAL_SALE',
  RECURRING_SALE: 'RECURRING_SALE'
};

exports.OrderStatusType = exports.$Enums.OrderStatusType = {
  SUCCESSFUL: 'SUCCESSFUL',
  UNSUCCESSFUL: 'UNSUCCESSFUL',
  FRAUDULENT: 'FRAUDULENT'
};

exports.StatusType = exports.$Enums.StatusType = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED'
};

exports.ApprovalModeType = exports.$Enums.ApprovalModeType = {
  MANUAL: 'MANUAL',
  IMMEDIATE: 'IMMEDIATE',
  AUTOMATIC: 'AUTOMATIC'
};

exports.PaymentType = exports.$Enums.PaymentType = {
  OFFLINE: 'OFFLINE',
  PAYPAL: 'PAYPAL',
  GIFT_CARD: 'GIFT_CARD',
  COUPON: 'COUPON',
  TREMENDOUS: 'TREMENDOUS'
};

exports.BonusType = exports.$Enums.BonusType = {
  MEMBERS: 'MEMBERS',
  PROGRAMS: 'PROGRAMS'
};

exports.GiftType = exports.$Enums.GiftType = {
  DISCOUNTED: 'DISCOUNTED',
  FREE: 'FREE'
};

exports.ShippingType = exports.$Enums.ShippingType = {
  NOT_INCLUDED: 'NOT_INCLUDED',
  INCLUDED: 'INCLUDED'
};

exports.TransactionReferenceType = exports.$Enums.TransactionReferenceType = {
  ORDER: 'ORDER',
  PAYOUT: 'PAYOUT'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

exports.CommissionCalculationType = exports.$Enums.CommissionCalculationType = {
  BOTH: 'BOTH',
  NORMAL: 'NORMAL',
  WITHOUT_TAXES: 'WITHOUT_TAXES',
  WITHOUT_SHIPPING: 'WITHOUT_SHIPPING'
};

exports.JobsStatusType = exports.$Enums.JobsStatusType = {
  CREATED: 'CREATED',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

exports.JobType = exports.$Enums.JobType = {
  IMPORT_CSV: 'IMPORT_CSV',
  PAYOUT_PROCESS: 'PAYOUT_PROCESS'
};

exports.ContactType = exports.$Enums.ContactType = {
  BOTH: 'BOTH',
  PHONE: 'PHONE',
  EMAIL: 'EMAIL'
};

exports.AffiliateStatusType = exports.$Enums.AffiliateStatusType = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  ARCHIVED: 'ARCHIVED'
};

exports.AffiliateSourceType = exports.$Enums.AffiliateSourceType = {
  MANUAL_UPLOAD: 'MANUAL_UPLOAD',
  MANUAL_CREATE: 'MANUAL_CREATE',
  SIGN_UP_FORM: 'SIGN_UP_FORM'
};

exports.ProgramHistoryStatusType = exports.$Enums.ProgramHistoryStatusType = {
  ADDED: 'ADDED',
  REMOVED: 'REMOVED'
};

exports.DiscountStatusType = exports.$Enums.DiscountStatusType = {
  ACTIVATED: 'ACTIVATED',
  DEACTIVATED: 'DEACTIVATED'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  AFFILIATE_APPLICATION_RECEIVED: 'AFFILIATE_APPLICATION_RECEIVED',
  AFFILIATE_APPLICATION_APPROVED: 'AFFILIATE_APPLICATION_APPROVED',
  AFFILIATE_APPLICATION_REJECTED: 'AFFILIATE_APPLICATION_REJECTED',
  AFFILIATE_SALE_MADE: 'AFFILIATE_SALE_MADE',
  AFFILIATE_COMMISSION_APPROVED: 'AFFILIATE_COMMISSION_APPROVED',
  AFFILIATE_PAYOUT_REQUEST_RECEIVED: 'AFFILIATE_PAYOUT_REQUEST_RECEIVED',
  AFFILIATE_PAYOUT_PROCESSED: 'AFFILIATE_PAYOUT_PROCESSED'
};

exports.NotificationReceiverType = exports.$Enums.NotificationReceiverType = {
  AFFILIATE: 'AFFILIATE',
  STORE_OWNER: 'STORE_OWNER'
};

exports.NotificationStatusType = exports.$Enums.NotificationStatusType = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED'
};

exports.ActivityEntityType = exports.$Enums.ActivityEntityType = {
  AFFILIATES: 'AFFILIATES',
  STORES: 'STORES',
  PROGRAMS: 'PROGRAMS',
  COMMISSIONS: 'COMMISSIONS',
  DISCOUNTS: 'DISCOUNTS',
  PAYOUTS: 'PAYOUTS',
  ORDERS: 'ORDERS'
};

exports.MessageHistoryStatusType = exports.$Enums.MessageHistoryStatusType = {
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED'
};

exports.AppSubscriptionType = exports.$Enums.AppSubscriptionType = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

exports.IntegrationType = exports.$Enums.IntegrationType = {
  KLAVIYO: 'KLAVIYO',
  ZAPIER: 'ZAPIER'
};

exports.Prisma.ModelName = {
  Stores: 'Stores',
  Members: 'Members',
  Programs: 'Programs',
  Tiers: 'Tiers',
  CustomerDiscounts: 'CustomerDiscounts',
  Orders: 'Orders',
  OrderItems: 'OrderItems',
  Commissions: 'Commissions',
  Payouts: 'Payouts',
  Bonus: 'Bonus',
  Gifts: 'Gifts',
  Transactions: 'Transactions',
  Settings: 'Settings',
  Jobs: 'Jobs',
  Customers: 'Customers',
  Affiliates: 'Affiliates',
  AffiliatePrograms: 'AffiliatePrograms',
  AffiliateProgramHistory: 'AffiliateProgramHistory',
  AffiliateDiscounts: 'AffiliateDiscounts',
  AffiliateGifts: 'AffiliateGifts',
  AffiliateBonus: 'AffiliateBonus',
  ProgramBonus: 'ProgramBonus',
  Otp: 'Otp',
  Notifications: 'Notifications',
  ActivityLog: 'ActivityLog',
  MessageHistory: 'MessageHistory',
  PaymentGateway: 'PaymentGateway',
  AppSubscription: 'AppSubscription',
  Integrations: 'Integrations'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
