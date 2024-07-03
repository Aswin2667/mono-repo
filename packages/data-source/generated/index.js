
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/cartrabbit/final-repo/packages/data-source/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/cartrabbit/final-repo/packages/data-source/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../prisma",
  "clientVersion": "5.16.1",
  "engineVersion": "34ace0eb2704183d2c05b60b52fba5c43c13f303",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../generated\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Stores {\n  id                         Int                       @id @default(autoincrement())\n  store_id                   String                    @unique @default(uuid())\n  domain                     String\n  myshopify_domain           String                    @unique\n  email                      String\n  blacklisted                Boolean\n  currency_code              String\n  country_code               String\n  language                   String\n  status                     StoreStatusType\n  store_details              Json\n  remote_details             Json?\n  admin_access_token         String\n  storefront_access_token    String\n  created_at                 BigInt\n  updated_at                 BigInt\n  shopify_store_id           BigInt?\n  landing_page_id            BigInt?\n  portal_page_id             BigInt?\n  contact_email              String                    @default(\"\")\n  contact_name               String                    @default(\"\")\n  contact_phone              String?\n  webhook_registration_check Boolean?                  @default(false)\n  activity_log               ActivityLog[]\n  affiliate_bonus            AffiliateBonus[]\n  affiliate_discounts        AffiliateDiscounts[]\n  affiliate_gifts            AffiliateGifts[]\n  affiliate_program_history  AffiliateProgramHistory[]\n  affiliate_programs         AffiliatePrograms[]\n  affiliates                 Affiliates[]\n  AppSubscription            AppSubscription?\n  bonus                      Bonus[]\n  commissions                Commissions[]\n  customer_discounts         CustomerDiscounts[]\n  customers                  Customers[]\n  gifts                      Gifts[]\n  Integrations               Integrations[]\n  jobs                       Jobs[]\n  messageHistory             MessageHistory[]\n  notifications              Notifications[]\n  orderItems                 OrderItems[]\n  orders                     Orders[]\n  PaymentGateway             PaymentGateway[]\n  payouts                    Payouts[]\n  program_bonus              ProgramBonus[]\n  programs                   Programs[]\n  settings                   Settings?\n  tiers                      Tiers[]\n  transactions               Transactions[]\n\n  @@map(\"stores\")\n}\n\nmodel Members {\n  id             Int          @id @default(autoincrement())\n  member_id      String       @unique @default(uuid())\n  first_name     String\n  last_name      String\n  email          String       @unique\n  phone          String?      @unique\n  member_details Json\n  created_at     BigInt\n  updated_at     BigInt\n  affiliates     Affiliates[]\n\n  @@map(\"members\")\n}\n\nmodel Programs {\n  id                 Int                 @id @default(autoincrement())\n  store_id           Int\n  title              String\n  description        String\n  currency_code      String\n  program_details    Json\n  status             ProgramStatusType\n  created_at         BigInt\n  updated_at         BigInt\n  affiliate_programs AffiliatePrograms[]\n  customer_discounts CustomerDiscounts?\n  Orders             Orders[]\n  program_bonus      ProgramBonus[]\n  stores             Stores              @relation(fields: [store_id], references: [id])\n  tiers              Tiers[]\n  activity_log       ActivityLog[]\n\n  @@unique([store_id, title])\n  @@map(\"programs\")\n}\n\nmodel Tiers {\n  id              Int         @id @default(autoincrement())\n  store_id        Int\n  program_id      Int\n  tier_type       TierType\n  min_value       Float\n  max_value       Float?\n  commission_type EarningType\n  commission_rate Float\n  created_at      BigInt\n  updated_at      BigInt\n  programs        Programs    @relation(fields: [program_id], references: [id])\n  stores          Stores      @relation(fields: [store_id], references: [id])\n\n  @@map(\"tiers\")\n}\n\nmodel CustomerDiscounts {\n  id               Int                  @id @default(autoincrement())\n  store_id         Int\n  program_id       Int                  @unique\n  discount_rate    Float\n  discount_options Json\n  created_at       BigInt\n  updated_at       BigInt\n  discount_type    CustomerDiscountType\n  programs         Programs             @relation(fields: [program_id], references: [id])\n  stores           Stores               @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, program_id])\n  @@map(\"customer_discounts\")\n}\n\nmodel Orders {\n  id                           Int                @id @default(autoincrement())\n  store_id                     Int\n  affiliate_id                 Int\n  customer_id                  Int\n  order_id                     BigInt             @unique\n  shopify_order_number         Int\n  shop_order_currency_code     String\n  shop_order_amount            Float\n  customer_order_currency_code String\n  customer_order_amount        Float\n  financial_status             String\n  order_details                Json\n  attribute_type               OrderAttributeType @default(REFERRAL_SALE)\n  status                       OrderStatusType\n  created_at                   BigInt\n  updated_at                   BigInt\n  program_id                   Int?\n  commissions                  Commissions?\n  order_items                  OrderItems[]\n  affiliates                   Affiliates         @relation(fields: [affiliate_id], references: [id])\n  customers                    Customers          @relation(fields: [customer_id], references: [id])\n  programs                     Programs?          @relation(fields: [program_id], references: [id])\n  stores                       Stores             @relation(fields: [store_id], references: [id])\n  activity_log                 ActivityLog[]\n\n  @@map(\"orders\")\n}\n\nmodel OrderItems {\n  id                          Int        @id @default(autoincrement())\n  store_id                    Int\n  affiliate_id                Int\n  customer_id                 Int\n  order_id                    Int\n  item_id                     BigInt     @unique\n  product_id                  BigInt\n  variant_id                  BigInt\n  product_title               String\n  variant_title               String\n  quantity                    Int\n  shop_item_currency_code     String\n  shop_item_amount            Float\n  customer_item_currency_code String\n  customer_item_amount        Float\n  item_details                Json\n  created_at                  BigInt\n  updated_at                  BigInt\n  affiliates                  Affiliates @relation(fields: [affiliate_id], references: [id])\n  customers                   Customers  @relation(fields: [customer_id], references: [id])\n  orders                      Orders     @relation(fields: [order_id], references: [id])\n  stores                      Stores     @relation(fields: [store_id], references: [id])\n\n  @@map(\"order_items\")\n}\n\nmodel Commissions {\n  id            Int               @id @default(autoincrement())\n  store_id      Int\n  affiliate_id  Int\n  order_id      Int               @unique\n  currency_code String\n  amount        Float\n  status        StatusType\n  approval_mode ApprovalModeType?\n  review_on     BigInt?\n  created_at    BigInt\n  updated_at    BigInt\n  affiliates    Affiliates        @relation(fields: [affiliate_id], references: [id])\n  orders        Orders            @relation(fields: [order_id], references: [id])\n  stores        Stores            @relation(fields: [store_id], references: [id])\n\n  @@map(\"commissions\")\n}\n\nmodel Payouts {\n  id              Int           @id @default(autoincrement())\n  store_id        Int\n  affiliate_id    Int\n  transaction_id  String        @unique @default(uuid())\n  currency_code   String\n  amount          Float\n  notes           String\n  payment_method  PaymentType\n  payment_details Json\n  status          StatusType\n  created_at      BigInt\n  updated_at      BigInt\n  user_id         BigInt?\n  job_id          Int           @unique\n  affiliates      Affiliates    @relation(fields: [affiliate_id], references: [id])\n  jobs            Jobs          @relation(fields: [job_id], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  stores          Stores        @relation(fields: [store_id], references: [id])\n  activity_log    ActivityLog[]\n\n  @@map(\"payouts\")\n}\n\nmodel Bonus {\n  id              Int              @id @default(autoincrement())\n  store_id        Int\n  title           String\n  description     String\n  bonus_associate BonusType\n  target_type     TierType\n  target_goal     Float\n  bonus_type      EarningType\n  bonus_rate      Float\n  status          StatusType\n  begin_datetime  BigInt\n  expire_datetime BigInt\n  created_at      BigInt\n  updated_at      BigInt\n  affiliate_bonus AffiliateBonus[]\n  stores          Stores           @relation(fields: [store_id], references: [id])\n  program_bonus   ProgramBonus[]\n\n  @@map(\"bonus\")\n}\n\nmodel Gifts {\n  id              Int              @id @default(autoincrement())\n  store_id        Int\n  title           String\n  description     String\n  products        Json\n  gift_type       GiftType\n  status          StatusType\n  shipping_method ShippingType\n  created_at      BigInt\n  updated_at      BigInt\n  affiliate_gifts AffiliateGifts[]\n  stores          Stores           @relation(fields: [store_id], references: [id])\n\n  @@map(\"gifts\")\n}\n\nmodel Transactions {\n  id             Int                      @id @default(autoincrement())\n  store_id       Int\n  affiliate_id   Int\n  reference_type TransactionReferenceType\n  reference_id   String\n  currency_code  String\n  type           TransactionType\n  is_reverted    Boolean                  @default(false)\n  amount         Float\n  created_at     BigInt\n  updated_at     BigInt\n  affiliates     Affiliates               @relation(fields: [affiliate_id], references: [id])\n  stores         Stores                   @relation(fields: [store_id], references: [id])\n\n  @@map(\"transactions\")\n}\n\nmodel Settings {\n  id                       Int                       @id @default(autoincrement())\n  store_id                 Int                       @unique\n  commission_delay         Int                       @default(0)\n  commission_approval_mode ApprovalModeType\n  commission_calculation   CommissionCalculationType\n  details                  Json?\n  min_threshold            Int?                      @default(100)\n  primary_color            String                    @default(\"#000000\")\n  secondary_color          String                    @default(\"#ffffff\")\n  created_at               BigInt\n  updated_at               BigInt\n  current_email_lang       String                    @default(\"EN\")\n  email_limit              Int                       @default(20)\n  notify_once              Boolean                   @default(false)\n  stores                   Stores                    @relation(fields: [store_id], references: [id])\n\n  @@map(\"settings\")\n}\n\nmodel Jobs {\n  id           Int            @id @default(autoincrement())\n  store_id     Int\n  job_metadata Json\n  status       JobsStatusType\n  type         JobType\n  job_details  Json\n  created_at   BigInt\n  updated_at   BigInt\n  stores       Stores         @relation(fields: [store_id], references: [id])\n  payouts      Payouts?\n\n  @@map(\"jobs\")\n}\n\nmodel Customers {\n  id                  Int          @id @default(autoincrement())\n  store_id            Int\n  affiliate_id        Int\n  shopify_customer_id BigInt\n  first_name          String\n  last_name           String\n  contact_type        ContactType\n  email               String?\n  phone               String?\n  customer_details    Json\n  created_at          BigInt\n  updated_at          BigInt\n  affiliates          Affiliates   @relation(fields: [affiliate_id], references: [id])\n  stores              Stores       @relation(fields: [store_id], references: [id])\n  order_items         OrderItems[]\n  orders              Orders[]\n\n  @@unique([store_id, affiliate_id, email])\n  @@unique([store_id, affiliate_id, phone])\n  @@map(\"customers\")\n}\n\nmodel Affiliates {\n  id                        Int                       @id @default(autoincrement())\n  store_id                  Int\n  member_id                 Int\n  first_name                String?\n  last_name                 String?\n  phone                     String?\n  referral_code             String\n  status                    AffiliateStatusType\n  affiliate_details         Json?\n  payout_requested          Boolean?                  @default(false)\n  created_at                BigInt\n  updated_at                BigInt\n  source                    AffiliateSourceType?\n  affiliate_bonus           AffiliateBonus[]\n  affiliate_discounts       AffiliateDiscounts[]\n  affiliate_gifts           AffiliateGifts[]\n  affiliate_program_history AffiliateProgramHistory[]\n  affiliate_programs        AffiliatePrograms[]\n  members                   Members                   @relation(fields: [member_id], references: [id])\n  stores                    Stores                    @relation(fields: [store_id], references: [id])\n  commissions               Commissions[]\n  customers                 Customers[]\n  order_items               OrderItems[]\n  orders                    Orders[]\n  payouts                   Payouts[]\n  transactions              Transactions[]\n  activity_log              ActivityLog[]\n\n  @@unique([store_id, phone])\n  @@unique([store_id, member_id])\n  @@unique([store_id, referral_code])\n  @@map(\"affiliates\")\n}\n\nmodel AffiliatePrograms {\n  id           Int        @id @default(autoincrement())\n  store_id     Int\n  affiliate_id Int\n  program_id   Int\n  created_at   BigInt\n  updated_at   BigInt\n  affiliates   Affiliates @relation(fields: [affiliate_id], references: [id])\n  programs     Programs   @relation(fields: [program_id], references: [id])\n  stores       Stores     @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, affiliate_id])\n  @@unique([store_id, affiliate_id, program_id])\n  @@map(\"affiliate_programs\")\n}\n\nmodel AffiliateProgramHistory {\n  id           Int                      @id @default(autoincrement())\n  store_id     Int\n  affiliate_id Int\n  program_id   Int\n  program_name String\n  status       ProgramHistoryStatusType\n  created_at   BigInt\n  updated_at   BigInt\n  affiliates   Affiliates               @relation(fields: [affiliate_id], references: [id])\n  stores       Stores                   @relation(fields: [store_id], references: [id])\n\n  @@map(\"affiliate_program_history\")\n}\n\nmodel AffiliateDiscounts {\n  id            Int                @id @default(autoincrement())\n  store_id      Int\n  affiliate_id  Int\n  discount_id   BigInt             @unique\n  discount_code String\n  is_deleted    Boolean?           @default(false)\n  status        DiscountStatusType\n  created_at    BigInt\n  updated_at    BigInt\n  affiliates    Affiliates         @relation(fields: [affiliate_id], references: [id])\n  stores        Stores             @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, affiliate_id, discount_id])\n  @@map(\"affiliate_discounts\")\n}\n\nmodel AffiliateGifts {\n  id           Int        @id @default(autoincrement())\n  store_id     Int\n  affiliate_id Int\n  gift_id      Int\n  created_at   BigInt\n  updated_at   BigInt\n  affiliates   Affiliates @relation(fields: [affiliate_id], references: [id])\n  gifts        Gifts      @relation(fields: [gift_id], references: [id])\n  stores       Stores     @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, affiliate_id, gift_id])\n  @@map(\"affiliate_gifts\")\n}\n\nmodel AffiliateBonus {\n  id           Int        @id @default(autoincrement())\n  store_id     Int\n  affiliate_id Int\n  bonus_id     Int\n  created_at   BigInt\n  updated_at   BigInt\n  affiliates   Affiliates @relation(fields: [affiliate_id], references: [id])\n  bonus        Bonus      @relation(fields: [bonus_id], references: [id])\n  stores       Stores     @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, affiliate_id, bonus_id])\n  @@map(\"affiliate_bonus\")\n}\n\nmodel ProgramBonus {\n  id         Int      @id @default(autoincrement())\n  store_id   Int\n  program_id Int\n  bonus_id   Int\n  created_at BigInt\n  updated_at BigInt\n  bonus      Bonus    @relation(fields: [bonus_id], references: [id])\n  programs   Programs @relation(fields: [program_id], references: [id])\n  stores     Stores   @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, program_id, bonus_id])\n  @@map(\"program_bonus\")\n}\n\nmodel Otp {\n  id         Int    @id @default(autoincrement())\n  code       Int    @unique\n  email      String @unique\n  expire_at  BigInt\n  created_at BigInt\n  updated_at BigInt\n\n  @@map(\"otp\")\n}\n\nmodel Notifications {\n  id              Int                      @id @default(autoincrement())\n  notification_id String                   @unique @default(uuid())\n  store_id        Int\n  type            NotificationType\n  receiver_type   NotificationReceiverType\n  subject         String\n  status          NotificationStatusType\n  created_at      BigInt\n  updated_at      BigInt\n  languages       String                   @default(\"EN\")\n  stores          Stores                   @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, type, receiver_type, languages])\n  @@map(\"notifications\")\n}\n\nmodel ActivityLog {\n  id           Int                @id @default(autoincrement())\n  store_id     Int\n  affiliate_id Int?\n  program_id   Int?\n  order_id     Int?\n  payout_id    Int?\n  entity_type  ActivityEntityType\n  message      String\n  created_at   BigInt\n  stores       Stores             @relation(fields: [store_id], references: [id])\n  affiliates   Affiliates?        @relation(fields: [affiliate_id], references: [id])\n  programs     Programs?          @relation(fields: [program_id], references: [id])\n  orders       Orders?            @relation(fields: [order_id], references: [id])\n  payouts      Payouts?           @relation(fields: [payout_id], references: [id])\n\n  @@map(\"activity_log\")\n}\n\nmodel MessageHistory {\n  id          Int                      @id @default(autoincrement())\n  status      MessageHistoryStatusType\n  referenceId String\n  metaData    Json\n  created_at  BigInt\n  store_id    Int\n  stores      Stores                   @relation(fields: [store_id], references: [id])\n\n  @@map(\"message_history\")\n}\n\nmodel PaymentGateway {\n  id           Int                    @id @default(autoincrement())\n  store_id     Int\n  payment_uuid String                 @default(uuid())\n  provider     PaymentType\n  credentials  Json\n  webhook_id   String?\n  status       NotificationStatusType\n  created_at   BigInt\n  updated_at   BigInt\n  stores       Stores                 @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, provider])\n  @@map(\"payment_gateway\")\n}\n\nmodel AppSubscription {\n  id            Int                 @id @default(autoincrement())\n  store_id      Int                 @unique\n  plan_id       String?             @unique\n  name          String\n  price         Int\n  status        AppSubscriptionType\n  currency_code String\n  created_at    BigInt\n  updated_at    BigInt\n  stores        Stores              @relation(fields: [store_id], references: [id])\n\n  @@map(\"app_subscription\")\n}\n\nmodel Integrations {\n  id                  Int                    @id @default(autoincrement())\n  store_id            Int\n  integration_type    IntegrationType\n  status              NotificationStatusType\n  api_key             String\n  api_secret          String?\n  created_at          BigInt\n  updated_at          BigInt\n  integration_details Json?\n  stores              Stores                 @relation(fields: [store_id], references: [id])\n\n  @@unique([store_id, integration_type])\n  @@map(\"integrations\")\n}\n\nenum MessageHistoryStatusType {\n  SUCCEEDED\n  FAILED\n}\n\nenum AppSubscriptionType {\n  PENDING\n  ACTIVE\n  INACTIVE\n}\n\nenum IntegrationType {\n  KLAVIYO\n  ZAPIER\n}\n\nenum StoreStatusType {\n  INSTALLED\n  UNINSTALLED\n  STORE_REOPENED\n  STORE_CLOSED\n}\n\nenum MemberType {\n  AFFILIATE\n  CUSTOMER\n}\n\nenum ContactType {\n  BOTH\n  PHONE\n  EMAIL\n}\n\nenum DiscountStatusType {\n  ACTIVATED\n  DEACTIVATED\n}\n\nenum CommissionCalculationType {\n  BOTH\n  NORMAL\n  WITHOUT_TAXES\n  WITHOUT_SHIPPING\n}\n\nenum ProgramStatusType {\n  ACTIVE\n  DRAFT\n  ARCHIVED\n}\n\nenum NotificationStatusType {\n  ENABLED\n  DISABLED\n}\n\nenum NotificationType {\n  AFFILIATE_APPLICATION_RECEIVED\n  AFFILIATE_APPLICATION_APPROVED\n  AFFILIATE_APPLICATION_REJECTED\n  AFFILIATE_SALE_MADE\n  AFFILIATE_COMMISSION_APPROVED\n  AFFILIATE_PAYOUT_REQUEST_RECEIVED\n  AFFILIATE_PAYOUT_PROCESSED\n}\n\nenum NotificationReceiverType {\n  AFFILIATE\n  STORE_OWNER\n}\n\nenum ActivityEntityType {\n  AFFILIATES\n  STORES\n  PROGRAMS\n  COMMISSIONS\n  DISCOUNTS\n  PAYOUTS\n  ORDERS\n}\n\nenum EarningType {\n  FLAT\n  PERCENTAGE\n}\n\nenum CustomerDiscountType {\n  FLAT\n  PERCENTAGE\n  FREE_SHIPPING\n  NO_DISCOUNT\n}\n\nenum TierType {\n  TOTAL_AMOUNT\n  TOTAL_SALES\n  TOTAL_REFERRALS\n  DEFAULT\n}\n\nenum GiftType {\n  DISCOUNTED\n  FREE\n}\n\nenum ShippingType {\n  NOT_INCLUDED\n  INCLUDED\n}\n\nenum BonusType {\n  MEMBERS\n  PROGRAMS\n}\n\nenum StatusType {\n  APPROVED\n  PENDING\n  REJECTED\n}\n\nenum AffiliateStatusType {\n  APPROVED\n  PENDING\n  REJECTED\n  ARCHIVED\n}\n\nenum OrderStatusType {\n  SUCCESSFUL\n  UNSUCCESSFUL\n  FRAUDULENT\n}\n\nenum PaymentType {\n  OFFLINE\n  PAYPAL\n  GIFT_CARD\n  COUPON\n  TREMENDOUS\n}\n\nenum TransactionReferenceType {\n  ORDER\n  PAYOUT\n}\n\nenum TransactionType {\n  CREDIT\n  DEBIT\n}\n\nenum ApprovalModeType {\n  MANUAL\n  IMMEDIATE\n  AUTOMATIC\n}\n\nenum OtpType {\n  PHONE\n  EMAIL\n}\n\nenum ProgramHistoryStatusType {\n  ADDED\n  REMOVED\n}\n\nenum JobsStatusType {\n  CREATED\n  PROCESSING\n  COMPLETED\n  FAILED\n}\n\nenum JobType {\n  IMPORT_CSV\n  PAYOUT_PROCESS\n}\n\nenum AffiliateSourceType {\n  MANUAL_UPLOAD\n  MANUAL_CREATE\n  SIGN_UP_FORM\n}\n\nenum OrderAttributeType {\n  REFERRAL_SALE\n  RECURRING_SALE\n}\n",
  "inlineSchemaHash": "88a943984ecabb5ade3efbf3f0c8def7d47e64fb6c0c3eaa2cbad06b80490bcf",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated",
    "",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Stores\":{\"dbName\":\"stores\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"myshopify_domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blacklisted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StoreStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remote_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storefront_access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopify_store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"landing_page_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"portal_page_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webhook_registration_check\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activity_log\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActivityLog\",\"relationName\":\"ActivityLogToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_bonus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateBonus\",\"relationName\":\"AffiliateBonusToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_discounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateDiscounts\",\"relationName\":\"AffiliateDiscountsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_gifts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateGifts\",\"relationName\":\"AffiliateGiftsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_program_history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateProgramHistory\",\"relationName\":\"AffiliateProgramHistoryToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_programs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliatePrograms\",\"relationName\":\"AffiliateProgramsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliatesToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AppSubscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppSubscription\",\"relationName\":\"AppSubscriptionToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bonus\",\"relationName\":\"BonusToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Commissions\",\"relationName\":\"CommissionsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_discounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerDiscounts\",\"relationName\":\"CustomerDiscountsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customers\",\"relationName\":\"CustomersToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gifts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gifts\",\"relationName\":\"GiftsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Integrations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Integrations\",\"relationName\":\"IntegrationsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Jobs\",\"relationName\":\"JobsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageHistory\",\"relationName\":\"MessageHistoryToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notifications\",\"relationName\":\"NotificationsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItems\",\"relationName\":\"OrderItemsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentGateway\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentGateway\",\"relationName\":\"PaymentGatewayToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payouts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payouts\",\"relationName\":\"PayoutsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_bonus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProgramBonus\",\"relationName\":\"ProgramBonusToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"programs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Programs\",\"relationName\":\"ProgramsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settings\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Settings\",\"relationName\":\"SettingsToStores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tiers\",\"relationName\":\"StoresToTiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactions\",\"relationName\":\"StoresToTransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Members\":{\"dbName\":\"members\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliatesToMembers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Programs\":{\"dbName\":\"programs\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProgramStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_programs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliatePrograms\",\"relationName\":\"AffiliateProgramsToPrograms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_discounts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerDiscounts\",\"relationName\":\"CustomerDiscountsToPrograms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToPrograms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_bonus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProgramBonus\",\"relationName\":\"ProgramBonusToPrograms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"ProgramsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tiers\",\"relationName\":\"ProgramsToTiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activity_log\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActivityLog\",\"relationName\":\"ActivityLogToPrograms\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"title\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"title\"]}],\"isGenerated\":false},\"Tiers\":{\"dbName\":\"tiers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tier_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TierType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commission_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EarningType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commission_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"programs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Programs\",\"relationName\":\"ProgramsToTiers\",\"relationFromFields\":[\"program_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"StoresToTiers\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CustomerDiscounts\":{\"dbName\":\"customer_discounts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_options\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerDiscountType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"programs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Programs\",\"relationName\":\"CustomerDiscountsToPrograms\",\"relationFromFields\":[\"program_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"CustomerDiscountsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"program_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"program_id\"]}],\"isGenerated\":false},\"Orders\":{\"dbName\":\"orders\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopify_order_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_order_currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_order_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_order_currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_order_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"financial_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"OrderAttributeType\",\"default\":\"REFERRAL_SALE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commissions\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Commissions\",\"relationName\":\"CommissionsToOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItems\",\"relationName\":\"OrderItemsToOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliatesToOrders\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customers\",\"relationName\":\"CustomersToOrders\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"programs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Programs\",\"relationName\":\"OrdersToPrograms\",\"relationFromFields\":[\"program_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"OrdersToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activity_log\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActivityLog\",\"relationName\":\"ActivityLogToOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrderItems\":{\"dbName\":\"order_items\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variant_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_item_currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_item_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_item_currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_item_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliatesToOrderItems\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customers\",\"relationName\":\"CustomersToOrderItems\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrderItemsToOrders\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"OrderItemsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Commissions\":{\"dbName\":\"commissions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approval_mode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApprovalModeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"review_on\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliatesToCommissions\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"CommissionsToOrders\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"CommissionsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Payouts\":{\"dbName\":\"payouts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_method\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliatesToPayouts\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Jobs\",\"relationName\":\"JobsToPayouts\",\"relationFromFields\":[\"job_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"PayoutsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activity_log\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActivityLog\",\"relationName\":\"ActivityLogToPayouts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bonus\":{\"dbName\":\"bonus\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonus_associate\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BonusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TierType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target_goal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonus_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EarningType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonus_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"begin_datetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_datetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_bonus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateBonus\",\"relationName\":\"AffiliateBonusToBonus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"BonusToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_bonus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProgramBonus\",\"relationName\":\"BonusToProgramBonus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Gifts\":{\"dbName\":\"gifts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GiftType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_method\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShippingType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_gifts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateGifts\",\"relationName\":\"AffiliateGiftsToGifts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"GiftsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transactions\":{\"dbName\":\"transactions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionReferenceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_reverted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliatesToTransactions\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"StoresToTransactions\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Settings\":{\"dbName\":\"settings\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commission_delay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commission_approval_mode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApprovalModeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commission_calculation\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommissionCalculationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min_threshold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primary_color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#000000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secondary_color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#ffffff\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_email_lang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"EN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_limit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":20,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notify_once\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"SettingsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Jobs\":{\"dbName\":\"jobs\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobsStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"JobsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payouts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payouts\",\"relationName\":\"JobsToPayouts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Customers\":{\"dbName\":\"customers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopify_customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContactType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliatesToCustomers\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"CustomersToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItems\",\"relationName\":\"CustomersToOrderItems\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"CustomersToOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"affiliate_id\",\"email\"],[\"store_id\",\"affiliate_id\",\"phone\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"affiliate_id\",\"email\"]},{\"name\":null,\"fields\":[\"store_id\",\"affiliate_id\",\"phone\"]}],\"isGenerated\":false},\"Affiliates\":{\"dbName\":\"affiliates\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payout_requested\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateSourceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_bonus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateBonus\",\"relationName\":\"AffiliateBonusToAffiliates\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_discounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateDiscounts\",\"relationName\":\"AffiliateDiscountsToAffiliates\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_gifts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateGifts\",\"relationName\":\"AffiliateGiftsToAffiliates\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_program_history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateProgramHistory\",\"relationName\":\"AffiliateProgramHistoryToAffiliates\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_programs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliatePrograms\",\"relationName\":\"AffiliateProgramsToAffiliates\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"members\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Members\",\"relationName\":\"AffiliatesToMembers\",\"relationFromFields\":[\"member_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"AffiliatesToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Commissions\",\"relationName\":\"AffiliatesToCommissions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customers\",\"relationName\":\"AffiliatesToCustomers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItems\",\"relationName\":\"AffiliatesToOrderItems\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"AffiliatesToOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payouts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payouts\",\"relationName\":\"AffiliatesToPayouts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactions\",\"relationName\":\"AffiliatesToTransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activity_log\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActivityLog\",\"relationName\":\"ActivityLogToAffiliates\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"phone\"],[\"store_id\",\"member_id\"],[\"store_id\",\"referral_code\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"phone\"]},{\"name\":null,\"fields\":[\"store_id\",\"member_id\"]},{\"name\":null,\"fields\":[\"store_id\",\"referral_code\"]}],\"isGenerated\":false},\"AffiliatePrograms\":{\"dbName\":\"affiliate_programs\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliateProgramsToAffiliates\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"programs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Programs\",\"relationName\":\"AffiliateProgramsToPrograms\",\"relationFromFields\":[\"program_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"AffiliateProgramsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"affiliate_id\"],[\"store_id\",\"affiliate_id\",\"program_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"affiliate_id\"]},{\"name\":null,\"fields\":[\"store_id\",\"affiliate_id\",\"program_id\"]}],\"isGenerated\":false},\"AffiliateProgramHistory\":{\"dbName\":\"affiliate_program_history\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProgramHistoryStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliateProgramHistoryToAffiliates\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"AffiliateProgramHistoryToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AffiliateDiscounts\":{\"dbName\":\"affiliate_discounts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DiscountStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliateDiscountsToAffiliates\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"AffiliateDiscountsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"affiliate_id\",\"discount_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"affiliate_id\",\"discount_id\"]}],\"isGenerated\":false},\"AffiliateGifts\":{\"dbName\":\"affiliate_gifts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliateGiftsToAffiliates\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gifts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gifts\",\"relationName\":\"AffiliateGiftsToGifts\",\"relationFromFields\":[\"gift_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"AffiliateGiftsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"affiliate_id\",\"gift_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"affiliate_id\",\"gift_id\"]}],\"isGenerated\":false},\"AffiliateBonus\":{\"dbName\":\"affiliate_bonus\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"AffiliateBonusToAffiliates\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bonus\",\"relationName\":\"AffiliateBonusToBonus\",\"relationFromFields\":[\"bonus_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"AffiliateBonusToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"affiliate_id\",\"bonus_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"affiliate_id\",\"bonus_id\"]}],\"isGenerated\":false},\"ProgramBonus\":{\"dbName\":\"program_bonus\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bonus\",\"relationName\":\"BonusToProgramBonus\",\"relationFromFields\":[\"bonus_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"programs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Programs\",\"relationName\":\"ProgramBonusToPrograms\",\"relationFromFields\":[\"program_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"ProgramBonusToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"program_id\",\"bonus_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"program_id\",\"bonus_id\"]}],\"isGenerated\":false},\"Otp\":{\"dbName\":\"otp\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notifications\":{\"dbName\":\"notifications\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationReceiverType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"languages\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"EN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"NotificationsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"type\",\"receiver_type\",\"languages\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"type\",\"receiver_type\",\"languages\"]}],\"isGenerated\":false},\"ActivityLog\":{\"dbName\":\"activity_log\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"program_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payout_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entity_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActivityEntityType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"ActivityLogToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Affiliates\",\"relationName\":\"ActivityLogToAffiliates\",\"relationFromFields\":[\"affiliate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"programs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Programs\",\"relationName\":\"ActivityLogToPrograms\",\"relationFromFields\":[\"program_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"ActivityLogToOrders\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payouts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payouts\",\"relationName\":\"ActivityLogToPayouts\",\"relationFromFields\":[\"payout_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MessageHistory\":{\"dbName\":\"message_history\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageHistoryStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referenceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"MessageHistoryToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentGateway\":{\"dbName\":\"payment_gateway\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credentials\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webhook_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"PaymentGatewayToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"provider\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"provider\"]}],\"isGenerated\":false},\"AppSubscription\":{\"dbName\":\"app_subscription\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppSubscriptionType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"AppSubscriptionToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Integrations\":{\"dbName\":\"integrations\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integration_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IntegrationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationStatusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"api_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"api_secret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integration_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stores\",\"relationName\":\"IntegrationsToStores\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"store_id\",\"integration_type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"store_id\",\"integration_type\"]}],\"isGenerated\":false}},\"enums\":{\"MessageHistoryStatusType\":{\"values\":[{\"name\":\"SUCCEEDED\",\"dbName\":null},{\"name\":\"FAILED\",\"dbName\":null}],\"dbName\":null},\"AppSubscriptionType\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"INACTIVE\",\"dbName\":null}],\"dbName\":null},\"IntegrationType\":{\"values\":[{\"name\":\"KLAVIYO\",\"dbName\":null},{\"name\":\"ZAPIER\",\"dbName\":null}],\"dbName\":null},\"StoreStatusType\":{\"values\":[{\"name\":\"INSTALLED\",\"dbName\":null},{\"name\":\"UNINSTALLED\",\"dbName\":null},{\"name\":\"STORE_REOPENED\",\"dbName\":null},{\"name\":\"STORE_CLOSED\",\"dbName\":null}],\"dbName\":null},\"MemberType\":{\"values\":[{\"name\":\"AFFILIATE\",\"dbName\":null},{\"name\":\"CUSTOMER\",\"dbName\":null}],\"dbName\":null},\"ContactType\":{\"values\":[{\"name\":\"BOTH\",\"dbName\":null},{\"name\":\"PHONE\",\"dbName\":null},{\"name\":\"EMAIL\",\"dbName\":null}],\"dbName\":null},\"DiscountStatusType\":{\"values\":[{\"name\":\"ACTIVATED\",\"dbName\":null},{\"name\":\"DEACTIVATED\",\"dbName\":null}],\"dbName\":null},\"CommissionCalculationType\":{\"values\":[{\"name\":\"BOTH\",\"dbName\":null},{\"name\":\"NORMAL\",\"dbName\":null},{\"name\":\"WITHOUT_TAXES\",\"dbName\":null},{\"name\":\"WITHOUT_SHIPPING\",\"dbName\":null}],\"dbName\":null},\"ProgramStatusType\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"DRAFT\",\"dbName\":null},{\"name\":\"ARCHIVED\",\"dbName\":null}],\"dbName\":null},\"NotificationStatusType\":{\"values\":[{\"name\":\"ENABLED\",\"dbName\":null},{\"name\":\"DISABLED\",\"dbName\":null}],\"dbName\":null},\"NotificationType\":{\"values\":[{\"name\":\"AFFILIATE_APPLICATION_RECEIVED\",\"dbName\":null},{\"name\":\"AFFILIATE_APPLICATION_APPROVED\",\"dbName\":null},{\"name\":\"AFFILIATE_APPLICATION_REJECTED\",\"dbName\":null},{\"name\":\"AFFILIATE_SALE_MADE\",\"dbName\":null},{\"name\":\"AFFILIATE_COMMISSION_APPROVED\",\"dbName\":null},{\"name\":\"AFFILIATE_PAYOUT_REQUEST_RECEIVED\",\"dbName\":null},{\"name\":\"AFFILIATE_PAYOUT_PROCESSED\",\"dbName\":null}],\"dbName\":null},\"NotificationReceiverType\":{\"values\":[{\"name\":\"AFFILIATE\",\"dbName\":null},{\"name\":\"STORE_OWNER\",\"dbName\":null}],\"dbName\":null},\"ActivityEntityType\":{\"values\":[{\"name\":\"AFFILIATES\",\"dbName\":null},{\"name\":\"STORES\",\"dbName\":null},{\"name\":\"PROGRAMS\",\"dbName\":null},{\"name\":\"COMMISSIONS\",\"dbName\":null},{\"name\":\"DISCOUNTS\",\"dbName\":null},{\"name\":\"PAYOUTS\",\"dbName\":null},{\"name\":\"ORDERS\",\"dbName\":null}],\"dbName\":null},\"EarningType\":{\"values\":[{\"name\":\"FLAT\",\"dbName\":null},{\"name\":\"PERCENTAGE\",\"dbName\":null}],\"dbName\":null},\"CustomerDiscountType\":{\"values\":[{\"name\":\"FLAT\",\"dbName\":null},{\"name\":\"PERCENTAGE\",\"dbName\":null},{\"name\":\"FREE_SHIPPING\",\"dbName\":null},{\"name\":\"NO_DISCOUNT\",\"dbName\":null}],\"dbName\":null},\"TierType\":{\"values\":[{\"name\":\"TOTAL_AMOUNT\",\"dbName\":null},{\"name\":\"TOTAL_SALES\",\"dbName\":null},{\"name\":\"TOTAL_REFERRALS\",\"dbName\":null},{\"name\":\"DEFAULT\",\"dbName\":null}],\"dbName\":null},\"GiftType\":{\"values\":[{\"name\":\"DISCOUNTED\",\"dbName\":null},{\"name\":\"FREE\",\"dbName\":null}],\"dbName\":null},\"ShippingType\":{\"values\":[{\"name\":\"NOT_INCLUDED\",\"dbName\":null},{\"name\":\"INCLUDED\",\"dbName\":null}],\"dbName\":null},\"BonusType\":{\"values\":[{\"name\":\"MEMBERS\",\"dbName\":null},{\"name\":\"PROGRAMS\",\"dbName\":null}],\"dbName\":null},\"StatusType\":{\"values\":[{\"name\":\"APPROVED\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"REJECTED\",\"dbName\":null}],\"dbName\":null},\"AffiliateStatusType\":{\"values\":[{\"name\":\"APPROVED\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"REJECTED\",\"dbName\":null},{\"name\":\"ARCHIVED\",\"dbName\":null}],\"dbName\":null},\"OrderStatusType\":{\"values\":[{\"name\":\"SUCCESSFUL\",\"dbName\":null},{\"name\":\"UNSUCCESSFUL\",\"dbName\":null},{\"name\":\"FRAUDULENT\",\"dbName\":null}],\"dbName\":null},\"PaymentType\":{\"values\":[{\"name\":\"OFFLINE\",\"dbName\":null},{\"name\":\"PAYPAL\",\"dbName\":null},{\"name\":\"GIFT_CARD\",\"dbName\":null},{\"name\":\"COUPON\",\"dbName\":null},{\"name\":\"TREMENDOUS\",\"dbName\":null}],\"dbName\":null},\"TransactionReferenceType\":{\"values\":[{\"name\":\"ORDER\",\"dbName\":null},{\"name\":\"PAYOUT\",\"dbName\":null}],\"dbName\":null},\"TransactionType\":{\"values\":[{\"name\":\"CREDIT\",\"dbName\":null},{\"name\":\"DEBIT\",\"dbName\":null}],\"dbName\":null},\"ApprovalModeType\":{\"values\":[{\"name\":\"MANUAL\",\"dbName\":null},{\"name\":\"IMMEDIATE\",\"dbName\":null},{\"name\":\"AUTOMATIC\",\"dbName\":null}],\"dbName\":null},\"OtpType\":{\"values\":[{\"name\":\"PHONE\",\"dbName\":null},{\"name\":\"EMAIL\",\"dbName\":null}],\"dbName\":null},\"ProgramHistoryStatusType\":{\"values\":[{\"name\":\"ADDED\",\"dbName\":null},{\"name\":\"REMOVED\",\"dbName\":null}],\"dbName\":null},\"JobsStatusType\":{\"values\":[{\"name\":\"CREATED\",\"dbName\":null},{\"name\":\"PROCESSING\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"FAILED\",\"dbName\":null}],\"dbName\":null},\"JobType\":{\"values\":[{\"name\":\"IMPORT_CSV\",\"dbName\":null},{\"name\":\"PAYOUT_PROCESS\",\"dbName\":null}],\"dbName\":null},\"AffiliateSourceType\":{\"values\":[{\"name\":\"MANUAL_UPLOAD\",\"dbName\":null},{\"name\":\"MANUAL_CREATE\",\"dbName\":null},{\"name\":\"SIGN_UP_FORM\",\"dbName\":null}],\"dbName\":null},\"OrderAttributeType\":{\"values\":[{\"name\":\"REFERRAL_SALE\",\"dbName\":null},{\"name\":\"RECURRING_SALE\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "generated/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/schema.prisma")
