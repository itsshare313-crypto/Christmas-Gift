// 1. Navigation Controller
function nextPage(pageNumber) {
    document.querySelectorAll('.scene').forEach(scene => scene.classList.remove('active'));
    document.getElementById('page' + pageNumber).classList.add('active');
    
    if (pageNumber === 2) {
        startMemorySlider();
    }
}

// 2. Memory Slider Logic
function startMemorySlider() {
    const memories = [
        "Every moment with you is a gift.",
        "You are my favorite person in the world.",
        "I'm so lucky to have you by my side.",
        "You make my world so much brighter.",
        "Ready for your Christmas surprises?"
    ];
    let i = 0;
    const textElem = document.getElementById('memory-text');
    
    setInterval(() => {
        textElem.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % memories.length;
            textElem.innerText = memories[i];
            textElem.style.opacity = 1;
        }, 500);
    }, 3000);
}

// 3. Gift Gallery Logic
const loveMessages = [
    { title: "My Strength", body: "You are the reason I smile every single morning. Thank you for being my rock and my best friend." },
    { title: "Our Future", body: "I can't wait for all the Christmases we have yet to celebrate together. I love you forever." },
    { title: "Your Smile", body: "It's my favorite sight in the world. It lights up the darkest of my days." },
    { title: "My Promise", body: "I promise to always hold your hand and protect your heart, no matter what happens." },
    { title: "My Everything", body: "You aren't just my girlfriend; you're my soulmate. Merry Christmas, beautiful." }
];

function openSpecialGift(index, color) {
    const overlay = document.getElementById('messageOverlay');
    const header = document.getElementById('msgHeader');
    const body = document.getElementById('msgBody');

    // Change background color of the body smoothly
    document.body.style.background = color;

    header.innerText = loveMessages[index].title;
    body.innerText = loveMessages[index].body;

    overlay.style.display = 'flex';
}

function closeOverlay() {
    document.getElementById('messageOverlay').style.display = 'none';
    // Smoothly return to the main dark background
    document.body.style.background = '#0a0a0a';
}

// 4. Snowfall Animation
function createSnow() {
    const container = document.getElementById('snow');
    for (let i = 0; i < 70; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        const size = Math.random() * 4 + 2 + 'px';
        flake.style.width = size;
        flake.style.height = size;
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.animationDuration = Math.random() * 3 + 4 + 's';
        flake.style.opacity = Math.random();
        container.appendChild(flake);
    }
}

createSnow();