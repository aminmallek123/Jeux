function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function remove(){
  var e=[];
  localStorage.setItem("liste", e);
}
function load(){
  var i=localStorage.getItem("liste");
    alert("liste de player: "+i);
}
const o=[];
function ajouter(){
  o.push(document.getElementById("aj").value);
  document.getElementById("aj").value="";
  localStorage.setItem("liste", o);
}
function jouer(){
  var p=localStorage.getItem("liste");
  var yy=p.split(",");
  var n=Math.floor(Math.random() * yy.length);
  if(yy.length<2) {
    alert("il faut ajouter 2 palyers minimum");}
  else {
    alert("Question pour le player "+yy[n]);
    document.getElementById("jr").removeAttribute("disabled","");}
}
function spin() {
  // Play the sound
  wheel.play();
  // Inisialisasi variabel
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
  // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.
  // Item berupa ipad dan samsung tab tidak akan pernah menang.
  // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
  let MagicRoaster = shuffle([1890, 2250, 2610]);
  let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let RiceCooker = shuffle([1810, 2170, 2530]);
  let LunchBox = shuffle([1770, 2130, 2490]);
  let Sanken = shuffle([1750, 2110, 2470]);
  let Electrolux = shuffle([1630, 1990, 2350]);
  let JblSpeaker = shuffle([1570, 1930, 2290]);

  // Bentuk acak
  let Hasil = shuffle([
    MagicRoaster[0],
    Sepeda[0],
    RiceCooker[0],
    LunchBox[0],
    Sanken[0],
    Electrolux[0],
    JblSpeaker[0],
  ]);
  // console.log(Hasil[0]);
var t=["Quelle est la créature marine la plus rapide de tous les temps ? rep:thon",
"Quelle est la langue de l'Autriche ? rep:Langue allemande","Quelle est la plus grande ville des villes européennes ? rep:Ville de Londres",
"Quelle est la première œuvre islamique ? rep:Le dinar d'or.","Qu'est-ce que quelque chose qui ne parle pas, s'il a faim, il ment et s'il est plein, il dit la vérité ? rep:heure",
"Quelle est la mémoire animale la plus forte ? rep:Chameau","Qui est l'inventeur du volley-ball et quand était-ce ? rep:Guillaume Morgan en 1895",
"Qui a peint la Joconde ? rep:Da Vinci","Où se trouve la plus grande statue en cuivre du monde? rep:USA qui est la Statue de la Liberté",
"Quel est le métal le plus cher au monde ? rep:Métal au radium.","Quelle langue parle le Brésil ? rep:Portugais",
"Quel est le plus long fleuve sur Terre ? rep:Nil.","Dans quel pays la plus grande famine du monde s'est-elle produite? rep:Chine",
"Qui s'appelle le cœur de lion ? rep:Richard, roi d'Angleterre.","Quel est le califat le plus long à l'époque des califes bien guidés ? rep:Othman Bin Affan"
];
var t1=[
  "Faites une danse ridicule pendant 30 secondes.","Imitez la voix d'une célébrité pendant une minute.",
  "Faites 15 pompes.","Faites un tour sur vous-même pendant 10 secondes.","Marchez sur les mains pendant 15 secondes.",
  "Chantez une chanson populaire en utilisant uniquement des bruits et des sons, sans les paroles.","Faites un câlin à un inconnu",
  "Faites le poirier contre un mur pendant 20 secondes.","Faites une imitation d'un animal de votre choix.",
  "Faites une grimace et laissez les autres joueurs prendre une photo.","Mange harisa",
]
num=Math.floor(Math.random() * t.length);
num1=Math.floor(Math.random() * t1.length);
  // Ambil value item yang terpilih
  if (MagicRoaster.includes(Hasil[0])) SelectedItem = "Magic Roaster";
  if (Sepeda.includes(Hasil[0])) SelectedItem = "Sepeda Aviator";
  if (RiceCooker.includes(Hasil[0])) SelectedItem = "Rice Cooker Philips";
  if (LunchBox.includes(Hasil[0])) SelectedItem = "Lunch Box Lock&Lock";
  if (Sanken.includes(Hasil[0])) SelectedItem = "Air Cooler Sanken";
  if (Electrolux.includes(Hasil[0])) SelectedItem = "Electrolux Blender";
  if (JblSpeaker.includes(Hasil[0])) SelectedItem = "JBL Speaker";

  // Proses
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Munculkan Alert
  setTimeout(function () {
    applause.play();
    swal(
      "Question: "+t[num],
      "En cas de reponse faux: " +t1[num1],
      "success"
    );
  }, 5500);

  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
