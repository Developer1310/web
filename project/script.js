const main = document.querySelector(".main");
const select = document.querySelectorAll(".element");
const data = [
  ["stevejobs.jpeg", "Steven Paul Jobs", "./pages/stevejobs/index.html"],
  [
    "billgates.jpeg",
    "William Henry Bill Gates",
    "./pages/billgates/index.html",
  ],
  ["elonmusk.jpeg", "Elon Musk", "./pages/elonmusk/index.html"],
  ["larrypage.jpeg", "Larry Page", "./pages/larrypage/index.html"],
  ["sergeybrin.jpeg", "Sergey Brin", "./pages/sergeybrin/index.html"],
  [
    "markzuckerberg.jpeg",
    "Mark Zuckerberg",
    "./pages/markzuckerberg/index.html",
  ],
  ["sabeerbhatia.jpeg", "Sabeer Bhatia", "./pages/sabeerbhatia/index.html"],
  ["jeffbezoz.jpeg", "Jeff Bezoz", "./pages/jeffbezoz/index.html"],
];
const y = (name) => {
  let e = document.createElement("div");
  let i = document.createElement("img");
  let n = document.createElement("h4");
  let link = document.createElement("a");
  link.href = name[2];
  n.textContent = name[1];
  e.className = "element";
  i.src = "./resources/" + name[0];
  link.appendChild(i);
  e.appendChild(link);
  e.appendChild(n);
  main.appendChild(e);
};
data.forEach((image) => {
  y(image);
});
