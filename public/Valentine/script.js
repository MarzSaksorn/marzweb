const messages = [
    "แน่ใจน้าาา?",
    "จริงหรออ??",
    "จริงป่ะเนี่ย?",
    "ขอเถอะน้าาา",
    "คิดดีแล้วหรือยังง!",
    "ถ้าตอบไม่ เราจะร้องให้แล้วนะ...",
    "เศร้าหว่ะ...",
    "เศร้าจริงนะเนี่ยยยย...",
    "เคร จะหยุดถามละ",
    "เอาดี?!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page";
}