import { defineStore } from "pinia";

export const useFavStore = defineStore("favProducts", {
  state: () => ({
    myProducts: JSON.parse(localStorage.getItem("fav")) || [],
  }),


  
  actions: {
    saveCart() {
      localStorage.setItem(
        "fav",
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
      
          this.myProducts = this.myProducts.filter((p) => p.id != id);
        
      this.saveCart();
    },
  },
});
