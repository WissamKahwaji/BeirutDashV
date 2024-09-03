export type Order = {
  cartItems: CartItem[];
  cartItemsTotalPrice: number;
  city: string;
  createdAt: string;
  paymentMethod: "cash" | "card";
  updatedAt: string;
  userBuilding: string;
  userFloorNo?: string;
  userUnitNo?: string;
  userId: string;
  userMobileNumber: string;
  userName: string;
  userNote: string;
  userStreet: string;
  __v: string;
  _id: string;
};
export type CartItem = {
  id?: string;
  img: string;
  price: number;
  quantity: number;
  title: string;
  weight: number;
  _id?: string;
  note?: string;
};
