export type AboutUsInfo = {
  _id: string;
  title: string;
  description: string;
  content: Content[];
};

export type Content = {
  _id: string;
  img: string | null | File;
  text: string;
};
