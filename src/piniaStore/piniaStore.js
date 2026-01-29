import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProductStore = defineStore("products", ()=>{
  
    const myProducts = ref(JSON.parse(localStorage.getItem("cart")) || []);
 
    const  totalPrice = computed(() =>{
      return myProducts.value.reduce((total,product)=>{
          return total+(product.price*product.quantity)
      },0)
     
    });

    const saveCart =() =>{
      localStorage.setItem(
        "cart",
        JSON.stringify(myProducts.value)
      )

    };
    const addProduct=(product) => {
      const existing = myProducts.value.find((p) => p.id == product?.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        myProducts.value.push({
          ...product,
          quantity: 1,
          
        });
      }
      saveCart();
    };
   

    const removeProduct =(id)=> {
      const existing = myProducts.value.find((p) => p.id == id);
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          myProducts.value = myProducts.value;
        }
      }
      saveCart();
    };

    const deleteProduct = (id) =>{
      myProducts.value = myProducts.value.filter((product)=>product.id!=id);
    }

    const totalProducts =computed(()=>myProducts.value.length);

    return {addProduct,removeProduct,myProducts,totalProducts,totalPrice,deleteProduct}
  
});
