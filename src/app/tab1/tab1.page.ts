import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  amount:any[] = [];

  product = [
    {
      id:1,
      title: " Product 1",
      imageUrl : "",
      inStock: true,
      price: 100,
      discountedPrice: 80,
      units: "kg",
      quantity: 1,
    },

    {
      id:2,
      title: " Product 2",
      imageUrl : "",
      inStock: true,
      price: 120,
      discountedPrice: 180,
      units: "kg",
      quantity: 1,
    }
  ]

  cart = {
    items:[
      
   ],
  };


  constructor() {}

  // addProductToCart(item){
  //   console.log(item);
  //   if(this.cart.includes(item)){
  //     let itemIndex =  this.cart.indexOf(item);
  //     this.cart[itemIndex].quantity += 1;
  //     // this.cart[itemIndex].totalPrice = this.cart[itemIndex].quantity * this.cart[itemIndex].discountedPrice;
  //     // let totalPrice = this.cart[itemIndex].quantity * this.cart[itemIndex].discountedPrice;
  //     console.log("Quiantity increased");
  //     // this.amount.push(totalPrice);
      
  //    }
  //   if(!this.cart.includes(item)){
  //     console.log("Item not in cart");
      
  //     this.cart.push(item);

  //   }
    
  //   // console.log(this.cart);
  //   console.log(this.amount);
    
    
    
  //   // this.cart.forEach((item) =>
  //   // {
  //   //   //total price for each item
  //   //   let totalPrice = item.totalPrice;

  //   //   console.log(totalPrice);
  //   //   let amount:any[] = [];
  //   //   amount.push(totalPrice);

  //   //   console.log(amount);
      

     
      
  //   // })
    

  // }


  addtocart(product){
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];
    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
      updatedCartItems[cartProductIndex].orderPrice = newQuantity * product.discountedPrice;
      updatedCartItems[cartProductIndex].subTotal = newQuantity * product.discountedPrice;
    } else {
      updatedCartItems.push({
        productId: product._id,
        title: product.title,
        price: product.discountedPrice,
        url: product.imageUrl,
        quantity: newQuantity,
        units: product.units,
        orderPrice:newQuantity* product.discountedPrice,
        subTotal:newQuantity* product.discountedPrice ,
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    this.cart = updatedCart;
    console.log(this.cart);
    
  }
}
