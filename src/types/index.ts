export interface ProductType {
  id: number;
  name: string;
  brand: string;
  size?: number;
  sizeType: string;
  price: number;
  img_url: string;
  quantity: number;
  shopName: string;
  discountPercentage: number;
  rating: number;
  shopRating: number;
  // discountedPrice: number;
}

export interface CategoryType {
  id: number;
  name: string;
  img_uri: any;
}
