import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavStore = defineStore("favProducts", () => {
  const myProducts = ref(JSON.parse(localStorage.getItem("fav")) || []);

  const saveCart = () => {
    localStorage.setItem("fav", JSON.stringify(myProducts.value));
  };
  const addProduct = (product) => {
    const existing = myProducts.value.find((p) => p.id == product?.id);
    if (existing) {
      existing.quantity = 1;
      if (existing.loveReact) {
        existing.loveReact = !existing.loveReact;
      }

      if (!existing.loveReact) {
        myProducts.value = myProducts.value.filter((p) => p.id !== product.id);
      }
    } else {
      myProducts.value.push({
        ...product,
        quantity: 1,
        loveReact: true,
      });
    }
    saveCart();
  };

  const removeProduct = (id) => {
    myProducts.value = myProducts.value.filter((p) => p.id != id);

    saveCart();
  };

  const totalFavProducts = computed(() => myProducts.value.length);

  const favButton = (id) => {
    const existing = myProducts.value.find((p) => p.id == id);
    return existing ? "text-red-500" : "text-gray-500";
  };

  return { myProducts, removeProduct, addProduct, totalFavProducts, favButton };
});
