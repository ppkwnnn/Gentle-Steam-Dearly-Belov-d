// ฟังก์ชัน เปิด-ปิด หน้า Credit
function toggleCredit() {
    const overlay = document.getElementById('creditOverlay');
    overlay.classList.toggle('active');
}

// ปิด Credit เมื่อคลิกพื้นที่ว่างรอบๆ การ์ด
function closeOverlay(event) {
    if (event.target.id === 'creditOverlay') {
        toggleCredit();
    }
}

// ข้อมูลเนื้อเรื่อง
const storyData = [
    { type: 'desc', text: 'แสงแดดยามบ่ายส่องผ่านกระจกหน้าร้านกาแฟที่คุ้นเคย...' },
    { type: 'talk', name: 'พนักงานร้าน', text: 'ยินดีต้อนรับครับ วันนี้รับเมนูเดิมเหมือนทุกวันไหมครับ?' },
    { type: 'choice', text: 'คุณจะตอบว่าอย่างไร?', 
      options: [
        { text: 'เอาเหมือนเดิมค่ะ', next: 4 },
        { text: 'วันนี้อยากลองเมนูใหม่ดู', next: 5 }
      ]
    },
    { type: 'desc', text: 'คุณยิ้มตอบพนักงานก่อนจะไปหาที่นั่งริมหน้าต่างที่ประจำ...' }, // next: 4
    { type: 'desc', text: 'คุณกวาดสายตามองเมนูใหม่บนบอร์ดไม้หน้าเคาน์เตอร์...' }  // next: 5
];

let currentStep = 0;

function startGame() {
    document.querySelector('.game-container').classList.add('hidden'); // ซ่อนเมนู
    document.getElementById('gameplay-scene').classList.remove('hidden'); // โชว์ฉากเกม
    renderDialogue();
}

function nextDialogue() {
    if (storyData[currentStep].type === 'choice') return; // ถ้าเป็นตัวเลือก ห้ามคลิกข้าม
    
    currentStep++;
    if (currentStep < storyData.length) {
        renderDialogue();
    }
}

function renderDialogue() {
    const data = storyData[currentStep];
    const textEl = document.getElementById('dialogue-text');
    const nameTag = document.getElementById('name-tag');
    const choiceBox = document.getElementById('choice-container');

    // ล้างค่าเก่า
    choiceBox.classList.add('hidden');
    choiceBox.innerHTML = '';

    if (data.type === 'desc') {
        nameTag.classList.add('hidden');
        textEl.textContent = data.text;
    } 
    else if (data.type === 'talk') {
        nameTag.classList.remove('hidden');
        nameTag.textContent = data.name;
        textEl.textContent = data.text;
    }
    else if (data.type === 'choice') {
        textEl.textContent = data.text;
        choiceBox.classList.remove('hidden');
        data.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = "w-64 py-3 bg-white/70 text-[#7a5c48] font-bold rounded-full border-2 border-white shadow-lg backdrop-blur-sm hover:scale-105 transition-transform drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]";
            btn.textContent = opt.text;
            btn.onclick = () => {
                currentStep = opt.next;
                renderDialogue();
            };
            choiceBox.appendChild(btn);
        });
    }
}