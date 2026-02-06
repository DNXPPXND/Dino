/* =====================================================
   DATA : คำถาม
===================================================== */
const quizData = [
  {
    question: "เวลามีปัญหา คุณมักจะ…",
    answers: [
      { text: "ลุยก่อน", dino: "trex" },
      { text: "ตั้งรับอย่างรอบคอบ", dino: "triceratops" },
      { text: "หาทางแก้แบบฉลาด", dino: "raptor" },
      { text: "ใจเย็นรอดูสถานการณ์", dino: "brachio" },
      { text: "เอาตัวรอดตามสถานการณ์", dino: "spino" }
    ]
  },
  {
    question: "คนอื่นมองคุณว่าเป็นคนแบบไหน",
    answers: [
      { text: "ผู้นำ", dino: "trex" },
      { text: "พึ่งพาได้", dino: "triceratops" },
      { text: "หัวไว", dino: "raptor" },
      { text: "อบอุ่น", dino: "brachio" },
      { text: "เข้ากับคนง่าย", dino: "parasaur" }
    ]
  },
  {
    question: "คุณถนัดการทำงานแบบใด",
    answers: [
      { text: "ตัดสินใจเร็ว", dino: "trex" },
      { text: "เป็นระบบ", dino: "pterosaurus" },
      { text: "วางกลยุทธ์", dino: "raptor" },
      { text: "ไม่เร่งรีบ", dino: "stego" },
      { text: "อิสระ ไม่ชอบกรอบ", dino: "allo" }
    ]
  },
  {
    question: "เมื่อถูกกดดัน คุณจะ…",
    answers: [
      { text: "สู้กลับ", dino: "trex" },
      { text: "ตั้งรับ", dino: "triceratops" },
      { text: "หาทางหนีทีไล่", dino: "raptor" },
      { text: "ป้องกันตัวไว้ก่อน", dino: "ankylo" },
      { text: "ปล่อยวาง", dino: "brachio" }
    ]
  },
  {
    question: "คุณให้ค่ากับสิ่งใดมากที่สุด",
    answers: [
      { text: "ชัยชนะ", dino: "trex" },
      { text: "ความมั่นคง", dino: "triceratops" },
      { text: "สติปัญญา", dino: "pterosaurus" },
      { text: "ความสงบ", dino: "brachio" },
      { text: "อิสรภาพ", dino: "allo" }
    ]
  },
  {
    question: "นิสัยเด่นของคุณคือ",
    answers: [
      { text: "กล้าได้กล้าเสีย", dino: "trex" },
      { text: "อดทน", dino: "stego" },
      { text: "ว่องไว", dino: "raptor" },
      { text: "ป้องกันตัวเก่ง", dino: "ankylo" },
      { text: "เป็นมิตร", dino: "parasaur" }
    ]
  },
  {
    question: "เวลาทำงานเป็นทีม คุณมักจะ…",
    answers: [
      { text: "นำทีม", dino: "trex" },
      { text: "คอยซัพพอร์ต", dino: "triceratops" },
      { text: "วางแผน", dino: "pterosaurus" },
      { text: "สร้างบรรยากาศ", dino: "parasaur" },
      { text: "ทำของตัวเอง", dino: "allo" }
    ]
  },
  {
    question: "เมื่อเจอสถานการณ์ใหม่ ๆ",
    answers: [
      { text: "ลุยทันที", dino: "trex" },
      { text: "ปรับตัวตามสถานการณ์", dino: "spino" },
      { text: "สังเกตก่อน", dino: "pterosaurus" },
      { text: "รอดูความปลอดภัย", dino: "stego" },
      { text: "คุยกับคนรอบข้าง", dino: "parasaur" }
    ]
  },
  {
    question: "คุณจัดการอารมณ์อย่างไร",
    answers: [
      { text: "ระเบิดออกมา", dino: "trex" },
      { text: "เก็บไว้ข้างใน", dino: "ankylo" },
      { text: "คิดหาทางออก", dino: "raptor" },
      { text: "ปล่อยผ่าน", dino: "brachio" },
      { text: "คุยกับคนอื่น", dino: "parasaur" }
    ]
  },
  {
    question: "คำที่อธิบายตัวคุณได้ดีที่สุด",
    answers: [
      { text: "แข็งแกร่ง", dino: "trex" },
      { text: "มั่นคง", dino: "triceratops" },
      { text: "ฉลาด", dino: "pterosaurus" },
      { text: "ใจดี", dino: "brachio" },
      { text: "อิสระ", dino: "allo" }
    ]
  }
];

/* =====================================================
   RESULT : 10 สายพันธุ์
===================================================== */
const dinoResult = {
  trex: {
    text: "Tyrannosaurus Rex — ผู้นำโดยสัญชาตญาณ",
    img: "images/tyrannosaurus-rex.png",
    desc: `
<p class="result-note">
คุณเป็นคนที่ขับเคลื่อนด้วยพลังภายในที่ชัดเจน
เมื่อมีเป้าหมาย คุณจะโฟกัสและเดินหน้าโดยไม่ลังเล
คุณไม่กลัวความรับผิดชอบ และมักก้าวขึ้นมาเป็นผู้นำโดยธรรมชาติ
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>มีภาวะผู้นำและความมั่นใจในตัวเองสูง</li>
  <li>กล้าตัดสินใจแม้ในสถานการณ์กดดัน</li>
  <li>รับแรงกดดันและความคาดหวังได้ดี</li>
  <li>มุ่งมั่นกับเป้าหมายและผลลัพธ์ที่ชัดเจน</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจควบคุมทุกอย่างไว้กับตัวเองมากเกินไป
จนคนรอบข้างรู้สึกตามไม่ทัน
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
การเปิดพื้นที่ให้คนอื่นมีส่วนร่วม
จะช่วยให้คุณเป็นผู้นำที่แข็งแรงและยั่งยืนขึ้น
</p>
`
  },

  triceratops: {
    text: "Triceratops — ผู้ปกป้อง มั่นคง",
    img: "images/triceratops.png",
    desc: `
<p class="result-note">
คุณเป็นคนที่ยืนหยัดในคุณค่าของความมั่นคง
ให้ความสำคัญกับความปลอดภัย ความไว้ใจ
และการดูแลคนรอบตัวอย่างจริงใจ
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>มีความรับผิดชอบและความน่าเชื่อถือสูง</li>
  <li>เป็นที่พึ่งพาได้ในยามที่คนอื่นไม่มั่นคง</li>
  <li>อดทนและไม่หวั่นไหวง่าย</li>
  <li>ปกป้องสิ่งสำคัญด้วยเหตุผลและสติ</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจแข็งกร้าวหรือปิดกั้นความรู้สึกของตัวเอง
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
การยอมรับความอ่อนแอของตัวเอง
ไม่ทำให้คุณอ่อนลง แต่ทำให้คุณลึกขึ้น
</p>
`
  },

  raptor: {
    text: "Velociraptor — ฉลาด ว่องไว",
    img: "images/raptor.png",
    desc: `
<p class="result-note">
คุณเป็นคนคิดไว มองสถานการณ์ได้เฉียบคม
คุณไม่ชอบการเสี่ยงโดยไร้แผน
แต่จะหาทางออกที่ฉลาดและได้เปรียบที่สุด
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>วิเคราะห์สถานการณ์และข้อมูลได้อย่างรวดเร็ว</li>
  <li>แก้ปัญหาเฉพาะหน้าได้อย่างมีไหวพริบ</li>
  <li>ปรับตัวเก่งเมื่อเผชิญความเปลี่ยนแปลง</li>
  <li>มองเกมขาดและวางแผนได้ลึก</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจคิดมากและไม่ยอมพักสมอง
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
การหยุดพักจะช่วยให้คุณตัดสินใจได้แม่นยำยิ่งขึ้น
</p>
`
  },

  brachio: {
    text: "Brachiosaurus — ใจใหญ่ มองไกล",
    img: "images/brachiosaurus.png",
    desc: `
<p class="result-note">
คุณเป็นคนมองภาพรวมเก่ง ไม่เร่งรีบ
เชื่อในกระบวนการเติบโตระยะยาว
และให้คุณค่ากับความสงบทางใจ
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>มีความอดทนและใจเย็นอย่างสม่ำเสมอ</li>
  <li>มองการณ์ไกลและไม่ตัดสินใจตามอารมณ์</li>
  <li>สร้างบรรยากาศที่ผ่อนคลายให้คนรอบตัว</li>
  <li>ยึดมั่นในความสัมพันธ์และคุณค่าระยะยาว</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจนิ่งเกินไปจนพลาดโอกาสสำคัญ
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
การก้าวเล็ก ๆ ให้เร็วขึ้น
อาจพาคุณไปถึงเป้าหมายได้ไวกว่าที่คิด
</p>
`
  },

  spino: {
    text: "Spinosaurus — นักเอาตัวรอด",
    img: "images/spinosaurus.png",
    desc: `
<p class="result-note">
คุณคือคนที่อยู่รอดได้ในทุกสภาพแวดล้อม
ไม่ยึดติดกับรูปแบบเดิม
และเรียนรู้จากประสบการณ์ได้อย่างรวดเร็ว
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>ยืดหยุ่นและปรับตัวได้ดีในความไม่แน่นอน</li>
  <li>ไม่กลัวการเปลี่ยนแปลงหรือเริ่มใหม่</li>
  <li>เอาตัวรอดเก่งแม้ทรัพยากรจำกัด</li>
  <li>เรียนรู้จากความผิดพลาดได้เร็ว</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจหลงทางเพราะเปลี่ยนทิศบ่อยเกินไป
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
การมีเป้าหมายหลักจะช่วยให้คุณมั่นคงขึ้น
</p>
`
  },

  stego: {
    text: "Stegosaurus — ช้าแต่มั่นคง",
    img: "images/stegosaurus.png",
    desc: `
<p class="result-note">
คุณใช้ชีวิตในจังหวะของตัวเอง
ไม่รีบ ไม่เร่ง และไม่เปรียบเทียบกับใคร
คุณเชื่อในความสม่ำเสมอมากกว่าความเร็ว
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>มีความมั่นคงทางอารมณ์และการตัดสินใจ</li>
  <li>อดทนและยืนระยะได้ดีในระยะยาว</li>
  <li>ไม่หวั่นไหวต่อแรงกดดันภายนอก</li>
  <li>รักษาความสงบของตัวเองได้ดี</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจหลีกเลี่ยงปัญหาที่ควรเผชิญ
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
บางครั้งการเผชิญหน้า
คือหนทางรักษาความสงบที่แท้จริง
</p>
`
  },

  ankylo: {
    text: "Ankylosaurus — เกราะเหล็ก",
    img: "images/ankylosaurus.png",
    desc: `
<p class="result-note">
คุณมีขอบเขตทางใจที่ชัดเจน
ไม่ปล่อยให้ใครเข้ามาทำร้ายง่าย ๆ
ภายนอกดูนิ่ง แต่ภายในแข็งแรงมาก
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>มีความมั่นคงทางอารมณ์สูง</li>
  <li>ปกป้องตัวเองจากพลังลบได้ดี</li>
  <li>ไม่หวั่นไหวต่อคำวิจารณ์ง่าย ๆ</li>
  <li>ยืนหยัดในขอบเขตของตัวเอง</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจปิดใจจนคนอื่นเข้าถึงยาก
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
การเปิดใจในพื้นที่ปลอดภัย
จะช่วยให้คุณไม่ต้องแบกทุกอย่างคนเดียว
</p>
`
  },

  parasaur: {
    text: "Parasaurolophus — นักสื่อสาร",
    img: "images/parasaur.png",
    desc: `
<p class="result-note">
คุณเป็นคนอ่อนโยนและเข้าถึงง่าย
เข้าใจความรู้สึกของคนอื่นได้ดี
และสร้างบรรยากาศเชิงบวกได้เสมอ
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>สื่อสารความรู้สึกได้อย่างเป็นธรรมชาติ</li>
  <li>เข้ากับผู้คนหลากหลายรูปแบบได้ดี</li>
  <li>สร้างพลังบวกให้ทีมและสังคม</li>
  <li>ทำงานร่วมกับผู้อื่นได้อย่างกลมกลืน</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจดูแลคนอื่นจนลืมดูแลตัวเอง
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
อย่าลืมว่าความรู้สึกของคุณก็สำคัญไม่แพ้ใคร
</p>
`
  },

 pterosaurus: {
  text: "Pterosaurus — นักมองไกล",
  img: "images/pterosaurus.png",
  desc: `
<p class="result-note">
คุณเป็นคนที่มองโลกจากมุมสูง
เห็นภาพรวมและทิศทางได้ชัด
คุณไม่ยึดติดกับรายละเอียดเล็ก ๆ
แต่ให้ความสำคัญกับเป้าหมายและอิสระในการตัดสินใจ
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>มองภาพรวมและทิศทางระยะยาวได้ดี</li>
  <li>ปรับตัวเก่งกับสถานการณ์ที่เปลี่ยนแปลง</li>
  <li>รักอิสระและไม่ชอบถูกจำกัดกรอบ</li>
  <li>ตัดสินใจได้ดีเมื่อเห็นภาพชัดเจน</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจหลีกหนีปัญหา
หรือถอยออกมามองไกลจนไม่กล้าเผชิญหน้าตรง ๆ
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
การลงมาโฟกัสรายละเอียดบางจุด
จะช่วยให้แผนที่คุณมองเห็น
เกิดขึ้นได้จริงมากขึ้น
</p>
`
},


  allo: {
    text: "Allosaurus — นักล่าอิสระ",
    img: "images/allosaurus.png",
    desc: `
<p class="result-note">
คุณรักอิสระและเชื่อมั่นในเส้นทางของตัวเอง
ไม่ชอบถูกจำกัดด้วยกรอบหรือความคาดหวัง
คุณเลือกเดินในแบบที่รู้สึกว่าเป็นตัวเอง
</p>

<p class="result-tip"><strong>จุดเด่นของคุณ</strong></p>
<ul class="result-bullets">
  <li>มีความมั่นใจในตัวเองสูง</li>
  <li>ตัดสินใจเด็ดขาดและชัดเจน</li>
  <li>ไม่ยึดติดกับความคิดเห็นของคนอื่น</li>
  <li>กล้าเดินในเส้นทางที่แตกต่าง</li>
</ul>

<p class="result-note">
<strong>เมื่ออยู่ภายใต้ความกดดัน</strong><br>
คุณอาจดื้อและไม่เปิดรับมุมมองใหม่
</p>

<p class="result-tip">
<strong>คำแนะนำ</strong><br>
การรับฟังไม่ทำให้คุณเสียอิสระ
แต่ช่วยให้คุณเติบโตได้ไกลขึ้น
</p>
`
  }
};


/* =====================================================
   LOGIC
===================================================== */
const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const resultContent = document.getElementById("result-content");
const progressBar = document.getElementById("progress-bar");

let currentQuestion = 0;
let selectedAnswer = null;

const scores = {
  trex: 0,
  triceratops: 0,
  raptor: 0,
  brachio: 0,
  spino: 0,
  stego: 0,
  ankylo: 0,
  parasaur: 0,
  pterosaurus: 0,
  allo: 0
};

function shuffleArray(array) {
  return array
    .map(v => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(o => o.v);
}

startBtn.addEventListener("click", () => {
  intro.style.display = "none";
  quizSection.style.display = "flex";
  loadQuestion();
});

function loadQuestion() {
  quiz.innerHTML = "";
  nextBtn.disabled = true;
  selectedAnswer = null;

  const q = quizData[currentQuestion];
  const title = document.createElement("h3");
  title.textContent = `${currentQuestion + 1}. ${q.question}`;
  quiz.appendChild(title);

  shuffleArray([...q.answers]).forEach(ans => {
    const div = document.createElement("div");
    div.className = "answer";
    div.textContent = ans.text;

    div.onclick = () => {
      document.querySelectorAll(".answer").forEach(a => a.classList.remove("selected"));
      div.classList.add("selected");
      selectedAnswer = ans.dino;
      nextBtn.disabled = false;
    };

    quiz.appendChild(div);
  });

  progressBar.style.width = (currentQuestion / quizData.length) * 100 + "%";
}

nextBtn.onclick = () => {
  scores[selectedAnswer]++;
  currentQuestion++;

  currentQuestion < quizData.length ? loadQuestion() : showResult();
};

function showResult() {
  quizSection.style.display = "none";
  resultSection.style.display = "block";
  progressBar.style.width = "100%";

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  resultContent.innerHTML = `
    <h2>${dinoResult[winner].text}</h2>
    <img src="${dinoResult[winner].img}">
    ${dinoResult[winner].desc}
  `;
}
