const header = document.querySelector(".header");
const about = document.querySelector("#about");
const data_class = document.querySelector(".data");
const footer = document.querySelector(".footer");
const main = document.querySelector(".main");
document.querySelector(".main-title").textContent = all.name;
const addHeader = () => {
  let a = document.createElement("div");
  let a1 = document.createElement("h1");
  let a2 = document.createElement("a");
  let a21 = document.createElement("button");
  header.style.backgroundImage = `url(${all.imgLink})`;
  a1.style.color = all.nameColor;
  a.className = "text-vertical-center";
  a.style.verticalAlign = all.namePosition;
  a1.className = "title";
  a1.textContent = all.name;
  a2.href = "#about";
  a21.textContent = "";
  a2.appendChild(a21);
  a.appendChild(a1);
  a.appendChild(a2);
  header.appendChild(a);
};
const addBody = () => {
  const fullName = document.querySelector(".full-name");
  const b_day = document.querySelector(".birth-date");
  const location = document.querySelector(".location");
  fullName.textContent = all.full_name;
  b_day.textContent = all.birth_date;
  location.textContent = all.address;
};
const addData = () => {
  all.data.forEach((d) => {
    let div = document.createElement("div");
    let tmp = document.createElement("p");
    let head = document.createElement("h3");
    head.className = "heading";
    tmp.textContent = d[1];
    head.textContent = d[0];
    div.appendChild(head);
    div.appendChild(tmp);
    data_class.appendChild(div);
  });
  main.style.backgroundImage = `url(${all.backImg})`;
};
const addFooter = () => {
  let p1 = document.createElement("p");
  let a1 = document.createElement("a");
  a1.href = all.wikiLink;
  a1.textContent = "click here!";
  p1.textContent = "If you want to know more about " + all.name + " --> ";
  p1.appendChild(a1);
  footer.appendChild(p1);
};
addHeader();
addBody();
addData();
addFooter();
