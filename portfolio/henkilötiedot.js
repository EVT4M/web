
var henkilot = [
  {
    name: "Merja Meikäläinen",
    age: 20,
    job: "Opiskelija",
    driversLicense: true
  },
  {
    name: "Teppo Teikäläinen",
    age: 25,
    job: "Sähköteknikko",
    driversLicense: true
  },
  {
    name: "Helena Heikäläinen",
    age: 30,
    job: "Ohjelmistosuunnittelija",
    driversLicense: false
  },
  {
    name: "Semir Sikäläinen",
    age: 18,
    job: "Opiskelija",
    driversLicense: true
  },
  {
    name: "Tomas Täkäläinen",
    age: 22,
    job: "Linja-autonkuljettaja",
    driversLicense: true
  }
];

var rivit = document.getElementById('rivit');

function luoRivit() {
  rivit.innerHTML = "";

  for (var henkilo of henkilot) {
    var rivi = document.createElement('tr');

    var nimiSolu = document.createElement('td');
    nimiSolu.innerHTML = henkilo.name;

    var ikaSolu = document.createElement('td');
    ikaSolu.innerHTML = henkilo.age;

    var tyoSolu = document.createElement('td');
    tyoSolu.innerHTML = henkilo.job;

    var ajokorttiSolu = document.createElement('td');
    ajokorttiSolu.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";

    rivi.append(nimiSolu);
    rivi.append(ikaSolu);
    rivi.append(tyoSolu);
    rivi.append(ajokorttiSolu);

    rivit.append(rivi);
  }
}

luoRivit();