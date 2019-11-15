const menu__background = document.querySelector(".menu__background");
const menu__body = document.querySelector(".menu__body");

function openMenu() {
  menu__background.style.opacity = "1";
  menu__background.style.pointerEvents = "all";

  menu__body.style.right = "0";
}

function closeMenu(event) {
  if (event.target.className === "menu__background") {
    menu__background.style.opacity = "0";
    menu__background.style.pointerEvents = "none";

    menu__body.style.right = "-250px";
  }
}

new Vue({
  el: ".vue__wrapper",
  data: {
    basketVisible: false,
    basket: [],
    products: [
      {
        id: 1,
        name: "Bread",
        price: 85,
        desc: "Very tasty bread."
      },
      {
        id: 2,
        name: "Milk",
        price: 250,
        desc: "White milk."
      },
      {
        id: 3,
        name: "Doshirak",
        price: 240,
        desc: "Will kill your stomach."
      }
    ]
  },
  methods: {
    putInBasket: function(product) {
      this.basket.push(product);
    },
    openBasket: function() {
      this.basketVisible = true;
    },
    closeBasket: function(event) {
      if (event.target.className === "modal__background") {
        this.basketVisible = false;
      }
    }
  }
});
