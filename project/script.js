const main = document.querySelector(".main");
const data = [
  ["stevejobs.jpeg", "Steven Paul Jobs"],
  ["billgates.jpeg", "William Henry Bill Gates"],
  ["elonmusk.jpeg", "Elon Musk"],
  ["larrypage.jpeg", "Larry Page"],
  ["sergeybrin.jpeg", "Sergey Brin"],
  ["markzuckerberg.jpeg", "Mark Zuckerberg"],
  ["sabeerbhatia.jpeg", "Sabeer Bhatia"],
  ["jeffbezoz.jpeg", "Jeff Bezoz"],
];
const y = (name) => {
  let e = document.createElement("div");
  let i = document.createElement("img");
  let n = document.createElement("h4");
  n.textContent = name[1];
  e.className = "element";
  i.src = "./resources/" + name[0];
  e.appendChild(i);
  e.appendChild(n);
  main.appendChild(e);
};
data.forEach((image) => {
  y(image);
});
