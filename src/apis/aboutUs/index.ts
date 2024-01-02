import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { AboutUsInfo } from "./type";
import { createFormData } from "@/utils";
import privetInstance from "../privetInstance";

const getAboutUsInfo = async () => {
  const res = await publicInstance.get<AboutUsInfo>(API_ROUTES.ABOUT_US.GET);
  return res.data;
};
const updateAboutUsInfo = async (payload: AboutUsInfo) => {
  const data = createFormData(payload);
  const res = await privetInstance.put<AboutUsInfo>(
    `${API_ROUTES.ABOUT_US.GET}/${payload._id}`,
    data
  );
  return res.data;
};
export { getAboutUsInfo, updateAboutUsInfo };
