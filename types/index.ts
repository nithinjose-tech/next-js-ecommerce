import { z } from 'zod';
import {cartItemSchema,insertCartSchema,insertOrderItemSchema,insertOrderSchema,insertProductSchema,paymentResultSchema,shippingAddressSchema, } from '@/lib/validator';

export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    createdAt: Date;
    rating: string;
    numReviews: number; // Doubt regarding this field
  };

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;

export type OrderItem = z.infer<typeof insertOrderItemSchema>;
export type Order = z.infer<typeof insertOrderSchema> & {
  id: string;
  createdAt: Date;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  isPaid: Boolean;
  paidAt: Date | null;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  isDelivered: Boolean;
  deliveredAt: Date | null;
  orderitems: OrderItem[];
  user: { name: string; email: string };
};

export type PaymentResult = z.infer<typeof paymentResultSchema>;