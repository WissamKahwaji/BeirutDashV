import API_ROUTES from "@/constants/apiRoutes";
import publicInstance from "../publicInstance";
import { GetProductParams, Product, ProductByType, ProductType } from "./type";
import { createFormData } from "@/utils";
import privetInstance from "../privetInstance";
const getProducts = async () => {
  const res = await publicInstance.get<Product[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS
  );
  return res.data;
};
const addProduct = async (payload: Product) => {
  const { type, ...rest } = payload;
  const data = createFormData({ type: type?._id, ...rest });

  const res = await privetInstance.post<Product>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS,
    data
  );
  return res.data;
};
const editProduct = async (payload: Product) => {
  const { type, ...rest } = payload;
  const data = createFormData({ type: type?._id, ...rest });
  const res = await privetInstance.put<Product>(
    `${API_ROUTES.PRODUCTS.GET_PRODUCTS}/${payload._id}`,
    data
  );
  return res.data;
};
const deleteProduct = async (id: string) => {
  const res = await privetInstance.delete<Product>(
    `${API_ROUTES.PRODUCTS.GET_PRODUCTS}/${id}`
  );
  return res.data;
};
const getProductsByType = async (params: GetProductParams) => {
  const res = await publicInstance.get<ProductByType[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCTS_BY_TYPE,
    { params }
  );
  return res.data;
};
const getProductTypes = async () => {
  const res = await publicInstance.get<ProductType[]>(
    API_ROUTES.PRODUCTS.GET_PRODUCT_TYPES
  );
  return res.data;
};
const getProductDetails = async (id: string | undefined) => {
  const res = await publicInstance.get<Product>(
    API_ROUTES.PRODUCTS.GET_PRODUCT_DETAILS(id)
  );
  return res.data;
};
const getProductTypeDetails = async (id: string | undefined) => {
  const res = await publicInstance.get<ProductType>(
    API_ROUTES.PRODUCTS.GET_PRODUCT_TYPE_DETAILS(id)
  );
  return res.data;
};
const addProductType = async (payload: ProductType) => {
  const data = createFormData(payload!);
  const res = await privetInstance.post(
    API_ROUTES.PRODUCTS.GET_PRODUCT_TYPES,
    data
  );
  return res;
};
const editProductType = async (payload: ProductType) => {
  const data = createFormData(payload!);
  const res = await privetInstance.put(
    API_ROUTES.PRODUCTS.EDIT_PRODUCT_TYPE(payload?._id),
    data
  );
  return res;
};
const deleteProductType = async (id: string) => {
  const res = await privetInstance.delete<ProductType>(
    API_ROUTES.PRODUCTS.DELETE_PRODUCT_TYPE(id)
  );
  return res.data;
};
export {
  getProductTypes,
  getProducts,
  getProductsByType,
  getProductDetails,
  getProductTypeDetails,
  addProduct,
  editProduct,
  deleteProduct,
  addProductType,
  editProductType,
  deleteProductType,
};
