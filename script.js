const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const listElem = document.getElementById("card-container");
let cards = "";


console.log(listElem);

for (let i = 0; i < teamMembers.length; i++)
{
  const tempMember = teamMembers[i];
  let card =
  `
  <div class="card mb-3 bg-black text-white rounded-0 min-height-100px">
  <div class="d-flex">
  <div class="w-small">
  <img src="${tempMember.img}" class="w-100pc">
  </div>
  <div class="w-large d-flex flex-column justify-content-evenly py-1">
  <p class="mx-2 gen">${tempMember.name.toUpperCase()}</p>
  <p class="mx-2 gen">${tempMember.role}</p>
  <p class="mx-2 gen">${tempMember.email}</p>
  </div>
  </div>
  </div>
  `

  /*
  `
  <div class="card mb-3 bg-black text-white rounded-0 min-height-100px">
  <img src="${tempMember.img}" class="w-30pc">
  <p>${tempMember.name.toUpperCase()}</p>
  <p>${tempMember.role}</p>
  <p>${tempMember.email}</p>
  </div>
  `
  */

  cards = cards + card;
}

console.log(cards);

listElem.innerHTML = cards;