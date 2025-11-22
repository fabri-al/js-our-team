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


function cardAziendaComp() {

  const HTML_Element = document.getElementById("flex-container");
  let elem = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const team = teamMembers[i];



    const card = `<div class="card" style="width: 18rem;">
    <img src="${team.img}" class="card-img-top" alt="${team.name}">
      <div class="card-body">
        <h5 class="card-title">${team.name}</h5>
        <p class="card-text">${team.role}</p>
        <p class="mail">${team.email}</p>
        <p></p>
      </div>
  </div>`;



    elem += card;

  }


  HTML_Element.innerHTML = elem;



}


cardAziendaComp();




