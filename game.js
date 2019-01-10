let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
let ctx = canvas.getContext('2d');

let weaponArray = [];
let enemyWeaponArray = [];
let starsArray = [];
let shipArray = [];
let enemyArray = [];
let debrisArray = [];
let specialArray = [];
let bossArray = [];

let playerHealth = 100;
let bossHealth = 10000;
let score = 0;
let maxRadius = 40;
let minRadius = 10;

let mouse = {
    x: undefined,
    y: undefined
};

let isRunning = true;
let musicPlaying = true;

let colorArray = [
    '#242424',
    '#363537',
    '#3D3D3D',
    '#595959',
];

let colorArray2 = [
    '#A21212',
    '#DA3330',
    '#FF4E41',
    '#FFE046',
    '#F9C73F'
];


function animate() {
      if (isRunning) {
    requestAnimationFrame(animate);
  }

    ctx.clearRect(0, 0, innerWidth, innerHeight);
        
    for (let i=0; i < enemyArray.length; i++) {
        enemyArray[i].update()
    }   
    for (let i=0; i < weaponArray.length; i++) {
        weaponArray[i].update()
    }
        for (let i=0; i < starsArray.length; i++) {
        starsArray[i].update()
    }
        for (let i=0; i < shipArray.length; i++) {
        shipArray[i].update()
    }
        for (let i=0; i < enemyWeaponArray.length; i++) {
        enemyWeaponArray[i].update()
    }
        for (let i=0; i < debrisArray.length; i++) {
        debrisArray[i].update()
    }
        for (let i=0; i < specialArray.length; i++) {
        specialArray[i].update()
    }
        for (let i=0; i < bossArray.length; i++) {
        bossArray[i].update()
    }

    scoreDisplay()
    healthDisplay()
    // menu()
    
    if(playerHealth <= 0) {
       loseDisplay()
       playerHealth = 0
    }
    
    if(bossHealth <= 0 && playerHealth > 0) {
       winDisplay()
       playerHealth = 100
    }
}

function scoreDisplay() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Score: ' + score, innerWidth - 160, 30);    
}

function healthDisplay() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Health: ' + playerHealth, innerWidth - 160, 60);    
}

function loseDisplay() {
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Game Over!', innerWidth / 2 - 100, innerHeight / 2); 
}

function winDisplay() {
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('You win!!!', innerWidth / 2 - 100, innerHeight / 2); 
}

function menu() {
    ctx.fillStyle = 'rgba(40, 40, 40, 0.60)';
    ctx.fillRect(innerWidth/2 / 2, innerHeight/2 / 2, 400, 400);
}

window.addEventListener("keypress",
    function(event) {
        
        if (event.keyCode == '109') {
            console.log(event)
            toggleMusic();
            
        }
});


function togglePause() {
  isRunning = !isRunning;

  if (isRunning) {
    animate();
  }
}

window.addEventListener("keypress",
    function(event) {
        if (event.keyCode == '112') {
            togglePause();
        }
});

animate()
// music()

// function music() {
//     music = document.createElement("audio");
//     music.src = './sfx/theme1.mp3'
//     // sound = document.getElementById("audio");
//     music.setAttribute("preload", "auto");
//     music.setAttribute("controls", "none");
//     music.style.display = "none";
//     music.loop = true
//     music.volume = 0.2
//     document.body.appendChild(music);
    
//     if (musicPlaying){
//         music.play()
//     } 
    
//     music.pause()
// }

// function toggleMusic() {
//   musicPlaying = !musicPlaying;

// }