var WomensData = JSON.parse(localStorage.getItem("WomensData")) || [];
var Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
var PreviewArr = [];

WomensData.map(function (data) {
  var div = document.createElement("div");
  div.setAttribute("class", "product")

  var div1 = document.createElement("div");
  div1.setAttribute("class", "product-content")

  var div3 = document.createElement("div");
  div3.setAttribute("class", "product-img")

  var image = document.createElement("img");
  image.setAttribute("src", data.image_url);

  div3.append(image);

  var div4 = document.createElement("div");
  div4.setAttribute("class", "product-btns;");

  var btn = document.createElement("button");
  btn.setAttribute("class", "btn-cart");

  var btndiv = document.createElement("img");
  btndiv.setAttribute("src", "https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png");

  btn.append(btndiv);

  div4.append(btn);
  div1.append(div3, div4);

  var div5 = document.createElement("div");
  div5.setAttribute("class", "product-info");

  var div6 = document.createElement("div");
  div6.setAttribute("class", "product-info-top");

  var h2 = document.createElement("h4");
  h2.setAttribute("class", "sm-title");
  h2.textContent = data.name;

  div6.append(h2);

  var div7 = document.createElement("div");
  div7.setAttribute("class", "product-price");

  var span1 = document.createElement("span");
  span1.setAttribute("class", "product-price-info");

  var p1 = document.createElement("h4");
  p1.textContent = data.price;

  span1.append(p1);
  var span2 = document.createElement("span");
  span2.setAttribute("class", "product-price-info");

  var p2 = document.createElement("p");
  p2.textContent = data.strikedoffprice;

  span2.append(p2);
  div7.append(span1, span2)
  div5.append(div6, div7);

  var div8 = document.createElement("div");
  div8.setAttribute("class", "off-info");

  var h3 = document.createElement("h5");
  h3.setAttribute("class", "sm-title");
  h3.textContent = "25% off for TriBe Members";

  div8.append(h3);
  div.append(div1, div5, div8);

  btn.addEventListener("click", function () {
    addToWishlist(data);
  });

  div3.addEventListener("click", function () {
    previewpage(data);
  });

  document.querySelector(".product-items").append(div);
});

function addToWishlist(data) {
  Wishlist.push(data);
  localStorage.setItem("CartItems", JSON.stringify(Wishlist));
  alert("added successfully");
}

function previewpage(data) {
  PreviewArr.push(data);
  localStorage.setItem("PreviewArr", JSON.stringify(PreviewArr));
  window.location.href = "preview.html";

}


var info1 = [
  {
    image_url:
      "https://images.bewakoof.com/t320/not-them-boyfriend-t-shirt-463718-1641538268-1.jpg",
    name: "Not them Boyfriend T-shirts",
    price: 1999,
    strikedoffprice: 3199,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/so-normal-is-boring-garfield-boyfriend-t-shirt-459643-1640954419-1.jpg",
    name: "so normal is boring t-shirt",
    price: 769,
    strikedoffprice: 1099,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/orchid-petal-women-s-hoodie-sweatshirt-454660-1640787479-1.jpg",
    name: "feel good lilac hoodie",
    price: 1299,
    strikedoffprice: 1440,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/orchid-petal-aop-half-sleeves-t-shirt-455845-1640787455-1.jpg",
    name: "feel good lilac half T-shirts",
    price: 699,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/know-your-power-boyfriend-t-shirt-464873-1642404499-1.jpg",
    name: "Know your power boyfriend T-shirts",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/lemon-squeeze-boyfriend-t-shirt-464699-1642075280-1.jpg",
    name: "lemon Squeeze boyfriend T-shirts",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/orchid-petal-wax-yellow-chest-panel-t-shirt-454734-1640787333-1.jpg",
    name: "Feel good lilac panel T_shirts",
    price: 599,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/orchid-petal-nimbus-cloud-color-block-full-sleeve-sweatshirt-454791-1640787092-1.jpg",
    name: "feel good color block T_Shirt",
    price: 1575,
    strikedoffprice: 3499,
  },

  {
    image_url:
      "https://images.bewakoof.com/t320/hanging-mickey-half-sleeve-t-shirt-463714-1641537084-1.jpg",
    name: "hanging Micky Half sleeve T-shirt",
    price: 1999,
    strikedoffprice: 3199,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/weekend-mood-tom-tjl-women-s-half-sleeve-printed-t-shirt-354953-1621409959.jpg",
    name: "Weekend mood Tom half sleeve T_shirt",
    price: 769,
    strikedoffprice: 1099,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/lemon-squeeze-half-sleeve-t-shirt-464702-1642075241-1.jpg",
    name: "Lemon Sqeeze half Sleeve T-shirt",
    price: 1299,
    strikedoffprice: 1440,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/women-s-printed-boyfriend-fit-christmas-t-shirt-443521-1640008934-1.jpg",
    name: "Women typography printed T-shirt",
    price: 699,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/women-s-printed-boyfriend-fit-christmas-t-shirt-443522-1640008891-1.jpg",
    name: "marron boyfriend Fit printed T-shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/never-lose-hope-boyfriend-t-shirt-463273-1641456986-1.jpg",
    name: "Never loose hope Boyfriend T-shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/not-them-half-sleeve-t-shirt-463727-1641538285-1.jpg",
    name: "Not them half sleeve T-shirt",
    price: 599,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/black-plus-size-solid-hoodie-aw-21-362774-1640101816-1.jpg",
    name: "Black plus size solid hoodie",
    price: 1575,
    strikedoffprice: 3499,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/killer-brown-full-sleeve-t-shirt-394634-1634895235-1.jpg",
    name: "Killer brown full sleeve T-shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/white-all-over-printed-boyfriend-t-shirt-381168-1640701612-1.JPG",
    name: "white all over printed boyfriend t-shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/women-s-drop-shoulder-pink-solid-hoodie-368271-1637134535-1.jpg",
    name: "women drop shoulder pink solid hoodie",
    price: 599,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/sage-susan-fashion-sweatshirt-hoodie-dress-aw-21-368342-1638532121-1.jpg",
    name: "women solid sage green hoodie Dress",
    price: 1575,
    strikedoffprice: 3499,
  },

];

localStorage.setItem("WomensData", JSON.stringify(info1));

