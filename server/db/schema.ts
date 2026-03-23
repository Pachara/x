import { mysqlTable, int, varchar, text, decimal, timestamp, mysqlEnum } from 'drizzle-orm/mysql-core'

export const customers = mysqlTable('customers', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  address: text('address'),
  location: varchar('location', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  lineUserId: varchar('line_user_id', { length: 255 }).unique(),
  name: varchar('name', { length: 255 }).notNull(),
  role: mysqlEnum('role', ['admin', 'user']).default('user').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const salesOrders = mysqlTable('sales_orders', {
  id: int('id').primaryKey().autoincrement(),
  customerId: int('customer_id').notNull().references(() => customers.id),
  status: mysqlEnum('status', ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled']).default('pending').notNull(),
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const salesOrderItems = mysqlTable('sales_order_items', {
  id: int('id').primaryKey().autoincrement(),
  orderId: int('order_id').notNull().references(() => salesOrders.id),
  productName: varchar('product_name', { length: 255 }).notNull(),
  qty: int('qty').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
})

export const salesOrderStatuses = mysqlTable('sales_order_statuses', {
  id: int('id').primaryKey().autoincrement(),
  orderId: int('order_id').notNull().references(() => salesOrders.id),
  status: mysqlEnum('status', ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled']).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const leads = mysqlTable('leads', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  source: varchar('source', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
