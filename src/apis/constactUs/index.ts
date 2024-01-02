import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { ContactUsInfo } from "./type";
import privetInstance from "../privetInstance";

const getContactUsInfo = async () => {
  const res = await publicInstance.get<ContactUsInfo>(
    API_ROUTES.CONTACT_US.GET
  );
  return res.data;
};
const editContactUsInfo = async (payload: ContactUsInfo) => {
  const res = await privetInstance.put<ContactUsInfo>(
    API_ROUTES.CONTACT_US.Edit(payload._id),
    payload
  );
  return res.data;
};
export { getContactUsInfo, editContactUsInfo };
