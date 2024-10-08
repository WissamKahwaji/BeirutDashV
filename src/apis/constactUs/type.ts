export type ContactUsInfo = {
  _id: string;
  title: string;
  content: Content;
};

export type Content = {
  _id: string;
  phoneNumber: string;
  mobileOne: string;
  mobileTwo?: string;
  location: string;
  email: string;
  whatsApp: string;
  faceBook: string;
  instagram: string;
  threads: string;
  snapChat: string;
  longitude: number;
  latitude: number;
};
