const header = document.querySelector(".header");
const about = document.querySelector("#about");
const data_class = document.querySelector(".data");
const name = "Jeff Bezoz";
const full_name = "Jeffrey Preston Jorgensen";
const address = "Albuquerque, New Mexico, U.S.A.";
const birth_date = "January 12, 1964";
const data = [
  'He is an American industrialist, media proprietor, and investor. He is best known as the founder, CEO, and president of the online retail company Amazon. The first centi-billionaire on the Forbes wealth index, Bezos has been the world\'s richest person since 2017 and was named the "richest man in modern history" after his net worth increased to $150 billion in July 2018. In September 2018, Forbes described him as "far richer than anyone else on the planet" as he added $1.8 billion to his net worth when Amazon became the second company in history to reach a market cap of $1 trillion.',
  "Born in Albuquerque and raised in Houston and later Miami, Bezos graduated from Princeton University in 1986 with a degree in electrical engineering and computer science. He worked on Wall Street in a variety of related fields from 1986 to early 1994. He founded Amazon in late 1994 on a cross-country road trip from New York City to Seattle. The company began as an online bookstore and has since expanded to a wide variety of other e-commerce products and services, including video and audio streaming, cloud computing, and AI. It is currently the world's largest online sales company, the largest Internet company by revenue, and the world's largest provider of virtual assistants and cloud infrastructure services through its Amazon Web Services branch.",
  "In January 2018, Bezos made a $33 million donation to TheDream.US, a college scholarship fund for undocumented immigrants brought to the United States as minors. 247 In June 2018, Bezos donated to Breakthrough Energy Ventures, a private philanthropic fund founded by Bill Gates aimed at promoting emissions-free energy. In September 2018, Bezos donated $10 million to With Honor, a nonpartisan organization that works to increase the number of veterans in political office.",
];
const addHeader = () => {
  let a = document.createElement("div");
  let a1 = document.createElement("h1");
  let a2 = document.createElement("a");
  let a21 = document.createElement("button");
  a.className = "text-vertical-center";
  a1.className = "title";
  a1.textContent = name;
  a2.href = "#about";
  a21.textContent = "V";
  a2.appendChild(a21);
  a.appendChild(a1);
  a.appendChild(a2);
  header.appendChild(a);
};
const addBody = () => {
  const fullName = document.querySelector(".full-name");
  const b_day = document.querySelector(".birth-date");
  const location = document.querySelector(".location");
  fullName.textContent = full_name;
  b_day.textContent = birth_date;
  location.textContent = address;
};
const addData = () => {
  data.forEach((d) => {
    let tmp = document.createElement("p");
    tmp.textContent = d;
    data_class.appendChild(tmp);
  });
};
addHeader();
addBody();
addData();
