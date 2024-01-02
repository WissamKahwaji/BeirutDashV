import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "@/apis/publicInstance";
import { Logo } from "./type";

const getLogo = async () => {
  const res = await publicInstance.get<Logo>(API_ROUTES.COMMON.GET_LOGO);
  return res.data;
};
export { getLogo };
