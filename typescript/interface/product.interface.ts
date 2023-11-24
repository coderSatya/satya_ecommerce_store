export interface Products {
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  quantity: number;
  rating: number;
  title: string;
  _id: number;
}

export interface ItemProps{
    item:Products
}
export interface ProductDetailItem{
  productDetail:Products
}
export interface StateProps{
  shoppingSlice:{
    productData:[]
    userInfo:{}
    orderData:{
      order:Products[]
    }
  }
}
