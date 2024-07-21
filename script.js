// script.js
let score = 0;
let fishPerClick = 1;

const upgrades = {
    net: { cost: 10, increase: 1 },
    boat: { cost: 50, increase: 5 },
    trawler: { cost: 100, increase: 10 }
};

function catchFish() {
    score += fishPerClick;
    document.getElementById('score').innerText = score;
    animateFish();
}

function animateFish() {
    const fishImage = document.querySelector('.fish-image');
    fishImage.classList.add('animate');
    setTimeout(() => {
        fishImage.classList.remove('animate');
    }, 200);
}

function buyUpgrade(upgrade) {
    if (score >= upgrades[upgrade].cost) {
        score -= upgrades[upgrade].cost;
        fishPerClick += upgrades[upgrade].increase;
        upgrades[upgrade].cost = Math.ceil(upgrades[upgrade].cost * 1.5);
        document.getElementById('score').innerText = score;
        document.getElementById(`${upgrade}-cost`).innerText = upgrades[upgrade].cost;
    } else {
        alert('Not enough fish!');
    }
}
