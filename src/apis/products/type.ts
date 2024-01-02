export type ProductType = {
  _id?: string;
  name: string;
  img?: string | null;
};
export type Product = {
  deepDetails: DeepDetails[];
  _id?: string;
  img: string | null;
  title: string;
  desc: string;
  type: ProductType | null;
  __v?: number;
};

export type DeepDetails = {
  price: string;
  weight: string;
};

export type Imgs = {
  first: string;
  second: null;
  third: null;
};
export type ProductByType = {
  _id: string;
  name: string;
  img: string;
  products: Product[];
};
export type GetProductParams = {
  type: string | null;
};
