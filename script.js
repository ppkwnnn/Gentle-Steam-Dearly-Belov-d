// ฟังก์ชัน เริ่มเกม - ซ่อนหน้าเมนู และแสดงหน้าเรื่องราว
function startGame() {
    const menuScreen = document.getElementById('menuScreen');
    const storyScreen = document.getElementById('storyScreen');
    
    menuScreen.classList.add('hidden');
    storyScreen.classList.remove('hidden');
    
    // แสดง narration เป็นตัวแรก
    showNarration('ยินดีต้อนรับสู่เกม...');
}

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

// ฟังก์ชัน แสดง Narration
function showNarration(text) {
    const narrationSection = document.getElementById('narrationSection');
    const dialogueSection = document.getElementById('dialogueSection');
    const choicesSection = document.getElementById('choicesSection');
    
    document.getElementById('narrationText').textContent = text;
    
    narrationSection.classList.remove('hidden');
    dialogueSection.classList.add('hidden');
    choicesSection.classList.add('hidden');
}

// ฟังก์ชัน แสดง Dialogue
function showDialogue(characterName, dialogueText) {
    const narrationSection = document.getElementById('narrationSection');
    const dialogueSection = document.getElementById('dialogueSection');
    const choicesSection = document.getElementById('choicesSection');
    
    document.getElementById('characterName').textContent = characterName;
    document.getElementById('dialogueText').textContent = dialogueText;
    
    narrationSection.classList.add('hidden');
    dialogueSection.classList.remove('hidden');
    choicesSection.classList.add('hidden');
}

// ฟังก์ชัน แสดง Dialogue พร้อมตัวเลือก
function showDialogueWithChoices(characterName, dialogueText, choices) {
    showDialogue(characterName, dialogueText);
    showChoices(choices);
}

// ฟังก์ชัน แสดง Choices
function showChoices(choices) {
    const choicesSection = document.getElementById('choicesSection');
    const choiceButtons = choicesSection.querySelectorAll('.choice-btn');
    
    choiceButtons.forEach((btn, index) => {
        if (choices[index]) {
            btn.textContent = choices[index];
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
    
    choicesSection.classList.remove('hidden');
}

// ฟังก์ชัน จัดการการเลือก
function makeChoice(choiceNumber) {
    console.log('ผู้เล่นเลือก: ' + choiceNumber);
    // เพิ่มลอจิก story branching ที่นี่
    alert('คุณเลือก Choice ' + choiceNumber);
}
