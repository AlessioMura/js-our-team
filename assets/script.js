//Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

// Objects
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

//dom element
const team = document.getElementById('team');

//Process
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  const style = member_card(member);

  team.innerHTML += style

}


//Member Card
function member_card(member) {

  const { name, role, email, img } = member

  return `
    <div class="card mb-3 col-4 bg-black p-0">
      <div class="row g-0">
        <img src="${img}" class="img-fluid col-4" alt="...">
          <div class="card-body col-8 text-light">
            <h3 class="card-title">${name}</h3>
            <div class="card-text">${role}</div>
            <div class="card-text">${email}</div>
          </div>
        </div>
      </div>
      `
}