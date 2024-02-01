const freelancers = [
  { name: "Alice", price: 25, occupation: "Writer" },
  { name: "Bob", price: 25, occupation: "Teacher" },
  { name: "Carol", price: 25, occupation: "Programmer" },
];

const someNames = [
  "Joe",
  "Ian",
  "Will",
  "Jeremy",
  "Frank",
  "Billy",
  "Isabel",
  "Caroline",
  "Catherine",
];
const someOccupations = [
  "Dentist",
  "Doctor",
  "Janitor",
  "Programmer",
  "Tennis Player",
  "Biologist",
];

function render() {
  const freelancernames = document.querySelector("#freelancernames");
  const $freelancernames = freelancers.map((freelancer) => {
    const freelancernameelement = document.createElement("li");
    //freelancernameelement.classList.add() edit if going to add elements
    freelancernameelement.textContent = freelancer.name;
    return freelancernameelement;
  });
  freelancernames.replaceChildren(...$freelancernames);

  const freelanceroccupations = document.querySelector(
    "#freelanceroccupations"
  );
  const $freelanceroccupations = freelancers.map((freelancer) => {
    const freelanceroccupationselement = document.createElement("li");
    //freelancernameelement.classList.add() edit if going to add elements
    freelanceroccupationselement.textContent = freelancer.occupation;
    return freelanceroccupationselement;
  });
  freelanceroccupations.replaceChildren(...$freelanceroccupations);

  const freelancerprices = document.querySelector("#freelancerprices");
  const $freelancerprices = freelancers.map((freelancer) => {
    const freelancerpriceselement = document.createElement("li");
    //freelancernameelement.classList.add() edit if going to add elements
    freelancerpriceselement.textContent = freelancer.price;
    return freelancerpriceselement;
  });
  freelancerprices.replaceChildren(...$freelancerprices);
}

function createName() {
  const randomname = someNames[Math.floor(Math.random() * someNames.length)];
  const randomoccupation =
    someNames[Math.floor(Math.random() * someNames.length)];
  const randomnumber = Math.floor(Math.random() * 100);
  freelancers.push({
    name: randomname,
    price: randomnumber,
    occupation: randomoccupation,
  });
  render();
}
render();

function calcaverageprice() {
  let totalprice = freelancers.reduce(
    (pricetotal, freelancer) => pricetotal + freelancer.price,
    0
  );
  let averageprice = totalprice / freelancers.length;
  return averageprice;
}

function renderaverage() {
  const averagepricing = document.querySelector("#averageprice");
  averagepricing.textContent = `The average price is $${calcaverageprice()}`;
}
const doThePrice = setInterval(renderaverage, 1000);
const addnameID = setInterval(createName, 1000);
