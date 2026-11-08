document.addEventListener('DOMContentLoaded', () => {

   
const questions = [
  {
    question: "Що з цього є mercedes",
    answers: [
      { name: "ford", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJP1W82uQNjZCr1SEKARWQMvsH5AP2BYRIhfTt36ctKTfkX5XwTfEbpNGr4SdENiigQmpm7leyv4K_pigWYig339AFS1ttLCaQldj9wm7_&s=10" },
      { name: "bmw", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9u6LoIXqfxUDtfNc_VQcoFiY50e_ceXyzx_fWHIpXE8B3lxNNXwSQFpnxwjSnVrWdfeLwRqH8i8aMxsqlGOi6n2eYG7rABHtsutL_TYWRw&s=10" },
      { name: "audi", image: "data:image/webp;base64,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" },
      { name: "mercedes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrj9x2efEG29ep3SgkL5Vde-JD8Mp2pJAQcwnCNUFGfFDk-YundVeItz0kJd9NmQDbmBt9pKPqiHy2sgWeW3Rsx2tiiToNKnyPZdVIoNQM&s=10" }
    ],
    correct: "mercedes",
    info: "."
  },
  {
    question: "Де тут Євразія?",
    answers: [
      { name: "північна америка", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThVNomVbz6AM_D9Vs569IRFdpmEAt-JhraoVbMq6LbBg&s=10" },
      { name: "Південна америка", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu-McaiA6rH8Fli9aKPCrJqYsb7-hs51j0tzRzezt5g&s=10" },
      { name: "Австралія", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrd3asuCA_cNVGviTz2W5OKz57MFWcNPy8RK-rpPuq0Q&s=10" },
      { name: "Євразія", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_uqzX8z_4NAxPyn4FT41_67u3_4Ok8rneOaR__qpolQ&s=10" }
    ],
    correct: "Євразія",
    info: "а тепер складніше👿."
  },
  {
    question: "як виглядають ниркі?",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUu1vczWDoXlYaYXBqwPJMYs3c3ZOIK7Df5d7YlsYZdA&s=10" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBS3t_aPOUbih0Wr0Hy68njfdJcAGnhU3Erp4zjZPKRg&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrj72Z_WE0wx1DU2g0s2lyLm55K5WSFRXZfwfRe00Fg&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaPaQZ0apODCIVm3Y4xT9JC-d7v2IfoE6JaGZfRhDlQ&s=10" }
    ],
    correct: "1",
    info: "прям біолог"
  },
  {
    question: "що з цього венера?",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiyWaYKmHOE4UGVcLVPlVsE8u4nAw_aWnvJ7Eo11aS6O87G7blfwWj0PXa-k2QT8oGeLPO9edeQG8Emqcee1PZVSD69Ymgs1hT-KBAhQk&s=10" },
      { name: "2", image: "data:image/jpeg;base64,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" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_Vh7KE_tb-5mCi_qwQkUxcgvKHIYxNCj2hGBZMfAex7lBHXsbfVv91YocFDGpPb-ooebe-PsLgpGpZw-5KJxKeJykNAjws0gAyd7s1qP&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaWfWUpTydZF7VoKzvK2BvTk3rhgrbP_kTv0ftVHaktkRRJN5O42TyqiFmWWS1J6CoGCx3Exg-MIntfBqegEY8MqY70AqM60n6YDERCnL8Q&s=10" }
    ],
    correct: "1",
    info: ""
  },
  {
    question: "Що  з цього поршень?",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIwywaQAeBkKCMUEQFGjN_SXOJE9G4fb4sOkpheoA0g&s=10" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8440kh4f9iSZutOOOMka7u3H8ANe6hfThzu9wCu-yA&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxfc8AEdN0tyCbx2lUPwCGCKIMLfW3dEvXxa6VFIx6g&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhZ0dYcynLbrDNqDjagh3kIGJycoZLDQKG5bhd30lGQ&s=10" }
    ],
    correct: "1",
    info: ""
  },
  {
    question: "яка програма телеграм?",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Tj2QdTXkiRH8MCBUIKGiGY7G5aQMNLiuPVA1KkzyKA&s=10" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNKbqOF5euwC7vI1Cx3HCzSKg3t4cTwUcbAkB1p9orw&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ1kJFlKQi1hnacK_lTwj3dRC6UNplERgMHO43LUhzA&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U34TbdOqO5XEJP6SOnrSsHpa1zuMrKQ3wqj9fuERTA&s=10" }
    ],
    correct: "2",
    info: ""
  },
  {
    question: "В якій грі можна робити що хоч?  будувати тощо",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdF6uUgPaLykbZvz_RFdwZJ1-7Moc3pyJIYdXfsYGm7w&s" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWgCBtiq9d5WJ1EQ1mH8pT0K_JRdSypThrQpiGrOJbw&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeFIBglI6Oac4m85ieEuYG-3DWSNNDBNgr_SrIMKDQg&s" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yM6SPc0xKB9A_Nck-wOKoG8NxCSZw1wL36aVXQFIMw&s" }
    ],
    correct: "1",
    info: ""
  },
   {
    question: "що сталось 26  квітня 1986 року",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEUVLZdVx5eikfaD4Kh2H89gIsksc10AdcrbwWD-4sg&s=10" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dC74ZAbyAPDKQZi2VMGDsKIpxGp5nFXf00Y8RadeLA&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSYvkcF_IuGt5iUxwBv9QGGI76Wh6WbrLEpvF-EOMHg&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3ypvLIj_SB_XQiuTublCN0bkBQ5BR-pAjPu8PuQyRw&s=10" }
    ],
    correct: "1",
    info: ""
},
    {
    question: "яка найвища гора в світі",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxHJFqebSkCUSh93KU9w9-LJk4tdNV1Gb6MKHxY626Q&s=10" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGBw9CFC9PxJZqNvFACK7fPldJC34RWteai8hwUCQXQ&s=10" },
      { name: "3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszmZI2ZDOwOjKsmWn7FSL3Ui4KaLXOdYU0ydxl9GZ6Q&s=10" },
      { name: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrdlMaBmtEyFoSWvHh8Qei2UhhBFS4I_xSisQAc16TQ&s=10" }
    ],
    correct: "3",
    info: ""
  },
   {
    question: "яка річка найдовша",
    answers: [
      { name: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6JeOpPsQ35tCkR6ym147vHzEpDrRL32Qhj_fQUv7lA&s=10" },
      { name: "2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGV4ZnDXf9Q-LaSvD_w4luz1Kzd4yABH9Ll6NVsCXoQ&s=10" },
      { name: "3", image: "https://lh3.googleusercontent.com/grass-cs/AABkmLeSrGCe1BrIHfpbTakZB-ASWSfT5q-N1riW5Aj01hKMynbj_JHLU2PSAvbUZTXk2bvaTiDFnsHHheGNf_ncn4g5urj-imSmgpqYTZoYXK8clFQQ4QnjNe97Rn_GX64LA-kVMx3bGXg-XmRy=w289-h312-n-k-no" },
      { name: "4", image: "data:image/jpeg;base64,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" }
    ],
    correct: "2",
    info: ""
  }
];

let current = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");
const gameEl = document.getElementById("game");
const resultEl = document.getElementById("result");

function showQuestion() {
  answered = false;

  const q = questions[current];

  document.getElementById("number").textContent =
    `Раунд ${current + 1} із ${questions.length}`;

  document.getElementById("score").textContent =
    `⭐ ${score} балів`;

  document.getElementById("progress-bar").style.width =
    `${(current / questions.length) * 100}%`;

  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.hidden = true;

  // Перемішуємо відповіді
  const shuffled = [...q.answers];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  shuffled.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer";

    const img = document.createElement("img");
    img.src = answer.image;
    img.alt = answer.name;
    img.loading = "lazy";

    img.onerror = () => {
      img.onerror = null;
      img.src = "https://placehold.co/400x250/211d3b/ffffff?text=Image";
    };

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = answer.name;

    btn.append(img, label);

    btn.addEventListener("click", () => {
      checkAnswer(btn, answer);
    });

    answersEl.appendChild(btn);
  });
}

function checkAnswer(button, answer) {
  if (answered) return;
  answered = true;

  const q = questions[current];

  answersEl.querySelectorAll(".answer").forEach(btn => {
    btn.disabled = true;

    const label = btn.querySelector(".label").textContent;

    if (label === q.correct) {
      btn.classList.add("correct");
    }
  });

  if (answer.name === q.correct) {
    score++;
    feedbackEl.textContent = `✅ Правильно! ${q.info}`;
    feedbackEl.style.color = "#4ade80";
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent =
      `❌ Правильна відповідь: ${q.correct}. ${q.info}`;
    feedbackEl.style.color = "#f87171";
  }

  document.getElementById("score").textContent =
    `⭐ ${score} балів`;

  nextBtn.textContent =
    current === questions.length - 1
      ? "Побачити результат 🏆"
      : "Наступне запитання ➜";

  nextBtn.hidden = false;
}

function showResult() {
  gameEl.hidden = true;
  resultEl.hidden = false;

  document.getElementById("progress-bar").style.width = "100%";

  document.getElementById("final-score").textContent =
    `${score} із ${questions.length} балів`;

  const message = document.getElementById("message");

  if (score === questions.length) {
    message.textContent = "🔥 Неймовірно! Ти справжній IT-експерт!";
  } else if (score >= 4) {
    message.textContent = "🎉 Чудовий результат! Ти добре знаєш IT!";
  } else {
    message.textContent = "💻 Гарна спроба! Спробуй ще раз!";
  }
}

nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    showResult();
  }
});

document.getElementById("restart").addEventListener("click", () => {
  current = 0;
  score = 0;
  gameEl.hidden = false;
  resultEl.hidden = true;
  showQuestion();
});

showQuestion();


    
    
});


