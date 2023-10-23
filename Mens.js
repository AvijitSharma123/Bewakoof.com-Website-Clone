var mensData = JSON.parse(localStorage.getItem("mensData")) || [];
var Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
var PreviewArr = [];


mensData.map(function (data) {
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
  localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
  alert("added successfully");
}

function previewpage(data) {
  PreviewArr.push(data);
  localStorage.setItem("PreviewArr", JSON.stringify(PreviewArr));
  window.location.href = "preview.html";

}

var info = [
  {
    image_url:
      "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1639137606-1.jpg",
    name: "Deadpool Screwed half sleeve Tshirt",
    price: 1999,
    strikedoffprice: 3199,
  },
  {
    image_url:
      "https://images.bewakoof.com/t540/jet-black-henley-hoodie-full-sleeve-t-shirt-308345-1638511839-1.jpg",
    name: "Deadpool Screwed full sleeve Tshirt",
    price: 769,
    strikedoffprice: 1099,
  },
  {
    image_url:
      "https://images.bewakoof.com/t540/gotham-city-half-sleeve-t-shirt-463685-1641536947-1.jpg",
    name: "Deadpool Screwed half sleeve Tshirt",
    price: 1299,
    strikedoffprice: 1440,
  },
  {
    image_url:
      "https://images.bewakoof.com/t540/ryuk-half-sleeve-t-shirt-463666-1641538186-1.jpg",
    name: "Legend seat half sleeve T-shirt",
    price: 699,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t540/gotham-city-half-sleeve-t-shirt-463719-1641536986-1.jpg",
    name: "Deadpool Screwed half sleeve Tshirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t540/adventure-on-full-sleeve-t-shirt-461451-1640945633-1.jpg",
    name: "Adventure on full sleeve t-shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      " https://images.bewakoof.com/t540/slate-rose-full-sleeve-t-shirt-346161-1641471288-1.jpg",
    name: "Jet Black half sleeve T-shirt",
    price: 599,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t540/black-purple-oppulance-colorblock-sweatshirt-hoodie-aw-21-369813-1641471571-1.jpg",
    name: "Gotham city Half sleeve T-shirt",
    price: 1575,
    strikedoffprice: 3499,
  },

  {
    image_url:
      "https://images.bewakoof.com/t320/ryuk-half-sleeve-t-shirt-463666-1641538186-1.jpg",
    name: "Ryuk Half Sleeve T'Shirts",
    price: 1999,
    strikedoffprice: 3199,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/not-so-wine-half-sleeve-t-shirt-449139-1639137598-1.jpg",
    name: "Not so wine half sleeve T-shirt",
    price: 769,
    strikedoffprice: 1099,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/orchid-petal-half-sleeve-t-shirt-454599-1640779465-1.jpg",
    name: "Feel Good Lilac half sleeve T-shirt",
    price: 1299,
    strikedoffprice: 1440,
  },
  {
    image_url:
      "https://images.bewakoof.com/t540/ryuk-half-sleeve-t-shirt-463666-1641538186-1.jpg",
    name: "Legend seat half sleeve T-shirt",
    price: 699,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/off-road-jeep-full-sleeve-t-shirt-navy-blue-343092-1638021678-1.jpg",
    name: "off-road full sleeve T-Shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/verdant-green-full-sleeve-t-shirt-346159-1641471121-1.jpg",
    name: "verdant green full sleeve t-shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/motor-spirit-half-sleeve-t-shirt-461445-1640945234-1.jpg",
    name: "motor spirit half sleeve t-shirt",
    price: 599,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/sap-green-twill-jacket-aw-21-367105-1637319099-1.jpg",
    name: "Sap green twill jacket",
    price: 1575,
    strikedoffprice: 3499,
  },

  {
    image_url:
      "https://images.bewakoof.com/t320/atlantic-deep-long-sleeve-henley-t-shirt-405280-1638435606-1.jpg",
    name: "Atlantic full sleeve T-shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/white-henley-hoodie-full-sleeve-t-shirt-308346-1638438070-1.jpg",
    name: "white henley hoodie T-shirt",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/world-peace-round-neck-varsity-h-s-t-shirt-364817-1637854896-1.jpg",
    name: "World peace round Neck T-shirt",
    price: 599,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://images.bewakoof.com/t320/navy-blue-hoodie-sweatshirt-aw21-363705-1638435532-1.jpg",
    name: "Navy blue hoodie sweatshirt ",
    price: 1575,
    strikedoffprice: 3499,
  },

];

localStorage.setItem("mensData", JSON.stringify(info));
