import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    myProducts: JSON.parse(localStorage.getItem("cart")) || [],
  }),

  getters:{
    totalPrice(state){
      return state,this.myProducts.reduce((total,p)=>{
        return total+ (p.price*p.quantity);
      },0)
      console.log(totalPrice)
    },


  },
  actions: {
    saveCart() {
      localStorage.setItem(
        "cart",
        JSON.stringify(this.myProducts)
      )

    },
    addProduct(product) {
      const existing = this.myProducts?.find((p) => p.id == product?.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.myProducts.push({
          ...product,
          quantity: 1,
        });
      }
      this.saveCart();
    },

    removeProduct(id) {
      const existing = this.myProducts.find((p) => p.id == id);
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          this.myProducts = this.myProducts.filter((p) => p.id != id);
        }
      }
      this.saveCart();
    },
  },
});
