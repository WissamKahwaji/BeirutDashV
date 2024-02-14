import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { Order } from "./type";
import privetInstance from "../privetInstance";

const getOrders = async () => {
  const res = await publicInstance.get<Order[]>(API_ROUTES.ORDERS.GET_ALL);
  return res.data;
};
const getOrder = async (id: string) => {
  const res = await publicInstance.get<Order>(API_ROUTES.ORDERS.GET(id));
  return res.data;
};

const deleteOrder = async (id: string) => {
  const res = await privetInstance.delete<Order>(
    `${API_ROUTES.ORDERS.DELETE(id)}`
  );
  return res.data;
};

export { getOrders, getOrder, deleteOrder };
