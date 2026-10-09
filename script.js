function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Menukar elemen
  }
  return array;
}

const kumpulanCard = {
  card1: `
    <div class="viewport-card">
            <div class="card hitam">
                <div class="front"><img src="./img/front.jpg" alt="front card" srcset=""></div>
                <div class="back"><img src="./img/back.jpg" alt="back card"></div>
            </div>
        </div>
    `,
  card2: `
    <div class="viewport-card">
            <div class="card kuning">
                <div class="front"><img src="./img/front.jpg" alt="front card" srcset=""></div>
                <div class="back"><img src="./img/back 1.jpg" alt="back card"></div>
            </div>
        </div>
    `,
  card3: `
    <div class="viewport-card">
            <div class="card merah">
                <div class="front"><img src="./img/front.jpg" alt="front card" srcset=""></div>
                <div class="back"><img src="./img/back 2.jpg" alt="back card"></div>
            </div>
        </div>
    `,
  card4: `
    <div class="viewport-card">
            <div class="card biru">
                <div class="front"><img src="./img/front.jpg" alt="front card" srcset=""></div>
                <div class="back"><img src="./img/back 3.jpg" alt="back card"></div>
            </div>
        </div>
    `,
};

// memecah object card menjadi beberapa variabel kecil
let { card1, card2, card3, card4 } = kumpulanCard;

// menempatkan setiap card ke dalam array
const urutanDefault = [card1, card2, card3, card4];
const objectives = ["hitam", "kuning", "merah", "biru"];

// mengacak urutan dan tujuan
let urutanSetelahDiAcak = shuffleArray(urutanDefault);
let tujuanAcak = objectives[Math.floor(Math.random() * objectives.length)];

// mengambil element element yang diperlukan
const elementKumpulanCard = document.querySelector(".kumpulan-card");
const elementObjective = document.querySelector("#tujuan");

// mengisi kotak kumpulan card dan mencetak tujuan
urutanSetelahDiAcak.forEach((card) => {
  elementKumpulanCard.innerHTML += `${card}`;
});
elementObjective.textContent += `cari kartu berwarna ${tujuanAcak}`;

// mengambil elemen elemen card
let cards = document.querySelectorAll(".card");

//meletakkan event listener ke setiap card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("click");

    // mengecek kartu apakah sesuai dengan tujuan
    if (card.classList.contains(tujuanAcak)) {
      elementObjective.innerHTML = `Objective: <span style="color: green;">Menang!!</span>`;
    } else {
      elementObjective.innerHTML = `Objective: <span style="color: red;">Kalah!!</span>`;
    }
  });
});

// mengambil btn acak
const btnAcak = document.querySelector("#button-acak");

// menambahkan event listener
btnAcak.addEventListener("click", () => {
  let cardsNow = document.querySelectorAll(".card");

  cardsNow.forEach((card) => {
    if (card.classList.contains("click")) {
      card.classList.remove("click");
    }
  });

  // mulai mengacak dan memasukkannya ke dalam kumpulan card
  urutanSetelahDiAcak = shuffleArray(urutanSetelahDiAcak);
  tujuanAcak = objectives[Math.floor(Math.random() * objectives.length)];
  elementKumpulanCard.innerHTML = "";
  urutanSetelahDiAcak.forEach((card) => {
    elementKumpulanCard.innerHTML += `${card}`;
  });
  elementObjective.textContent = `Objective: cari kartu berwarna ${tujuanAcak}`;

  cardsNow = document.querySelectorAll(".card");

  cardsNow.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("click");

      // mengecek kartu apakah sesuai dengan tujuan
      if (card.classList.contains(tujuanAcak)) {
        elementObjective.innerHTML = `Objective: <span style="color: green;">Menang!!</span>`;
      } else {
        elementObjective.innerHTML = `Objective: <span style="color: red;">Kalah!!</span>`;
      }
    });
  });
});
