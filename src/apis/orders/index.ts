import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { Order } from "./type";

const getOrders = async () => {
  const res = await publicInstance.get<Order[]>(API_ROUTES.ORDERS.GET_ALL);
  return res.data;
};
const getOrder = async (id: string) => {
  const res = await publicInstance.get<Order>(API_ROUTES.ORDERS.GET(id));
  return res.data;
};
export { getOrders, getOrder };
