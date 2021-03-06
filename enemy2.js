function Enemy2(w, h, color, x, y, type, speed) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.w = w;
    this.h = h;
    this.speed = 0;
    this.x = x;
    this.y = y;
    
    dx = 4
    this.startPos = x 
    
    this.draw = function() {
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.w, this.h);
            // ctx.drawImage(this.image, 
            //     this.x, 
            //     this.y,
            //     this.w, this.h);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
        this.update = function() {
            this.y += speed
            this.draw();
            resetEnemies()
            // enemyMove()
        if ( this.x + dx > this.startPos ) {
                dx = -dx
            }
            if (this.x + dx < this.startPos - 100 ) {
                dx = +4
            }
            this.x += dx
            
        }
}

for (let i=0; i < 1; i++) {
    var raduis = 35
    let x = Math.random() * (innerWidth - raduis * 2) + raduis;
    let y = -100
    let speed = Math.floor(Math.random() * 5) + 1
    
    // enemyArray.push(new Enemy2(60, 60, "./images/enemy1.png", x, y, "image", speed));
    // enemyArray.push(new Enemy2(60, 60, "./images/enemy1.png", x+30, y+60, "image", speed));
    // enemyArray.push(new Enemy2(60, 60, "./images/enemy1.png", x, y+120, "image", speed));
    // enemyArray.push(new Enemy2(60, 60, "./images/enemy1.png", x+30, y+180, "image", speed));
}

// function resetEnemies() {
//     for (let i=0; i < enemyArray.length; i++) {
//         if(enemyArray[i].y > innerHeight) {
//             enemyArray[i].y = -300
//             // enemyArray[i].x = Math.random() * (innerWidth - raduis * 2) + raduis;
//             enemyArray[i].speed = Math.floor(Math.random() * 5) + 3
            
//         }
//     }
// }

// function enemyMove() {
//     for (let i=0; i < enemyArray.length; i++) {
        
//                 if ( enemyArray[i].x + enemyArray[i].dx > enemyArray[i].startPos ) {
//                     enemyArray[i].dx = -this.dx
//                     console.log(i)
//                 }
//                 // if (this.x + dx < this.startPos - 100 ) {
//                 //     dx = +4
//                 // }
                
//         }
// }

// let enemyInterval = setInterval(function(){
//     weaponArray = [];
//     enemyWeaponArray = [];
//     enemyArray = [];
//     debrisArray = [];
    
//     for (let i=0; i < 10; i++) {
//     var raduis = 35
//     let x = Math.random() * (innerWidth - raduis * 2) + raduis;
//     let y = -400
//     let speed = Math.floor(Math.random() * 5) + 3 * (i/3)
    
//     enemyArray.push(new Enemy(60, 60, "./images/enemy1.png", x, y, "image", speed));
// }
// }, 15000)




























// function Enemy(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius
//     this.minRadius = radius
//     // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


//     this.draw = function() {
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         // ctx.rect(this.x, this.y, 30, 30)
//         ctx.strokeStyle = 'blue';
//         ctx.stroke();
//         ctx.fillStyle = 'black'
//         ctx.fill()
//     }
    
//     this.update = function() {
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         }
        
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }
        
//         this.x += this.dx
//         this.y += this.dy
        
//         // if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//         //     if (this.radius < maxRadius)
//         //     this.radius += 1;
//         // } else if (this.radius > this.minRadius) {
//         //     this.radius -= 1;
//         // }
        
//         this.draw();
        
//     }
// }

// for (let i=0; i < 1; i++) {
//     var raduis = 35//Math.random() * 3 + 1;
//     let x = Math.random() * (innerWidth - raduis * 2) + raduis;
//     let y = Math.random() * (innerHeight / 5 - raduis * 2) + raduis;;
//     let dx = (Math.random() - 0.5) * 1;
//     let dy = (Math.random() - 0.5) * 1;

    
//         enemyArray.push(new Enemy(x, y, dx, dy, raduis))
// }