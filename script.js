// // alert("sam");

// const btnRegister=document.querySelector(".register");
// const containerStart=document.querySelector(".container")
// const inputNumber=document.querySelector('input')
// const selectorLevel=document.querySelector('#levelSelector')
// const partAddUser=document.querySelector('.container1')
// const users=document.querySelector('.users')
// const addButton=document.querySelector('.addButton')
// const nameUser=document.querySelector('#nameUser')

// let gamers=[]

// btnRegister.addEventListener('click',function(){
//     // console.log("sam")
//     const playerCount=inputNumber.value.trim();

//     if (playerCount === "") {
//         alert("لطفا تعداد بازیکنان را وارد کنید");
//         return;
//     }


//     const number = parseInt(playerCount, 10);
//     if (isNaN(number) || number <= 0 ) {
//         alert("لطفا یک عدد معتبر وارد کنید (بزرگتر از 0)");
//         return;
//     }
//     if (number % 2 !== 0) {
//         alert("لطفا یک عدد زوج وارد کنید");
//         return;
//     }
//     if(number>10){
//         alert("تعداد نفراتن باید از ده نفر کمتر باشد ");
//         return;    
//     }
    
//     else{

//         containerStart.style.display="none"
//         partAddUser.style.display='flex'
//         console.log(selectorLevel.value )

//         addButton.addEventListener('click',function(){
//             let nameUserText=nameUser.value 
//         if(nameUserText!==''){
//             gamers.push(nameUserText)
//             generator(nameUserText,number)        

//         }
        
//     })
        
//     }
    
    
    
// })


// // addButton.addEventListener('click',function(){
// //     let nameUserText=nameUser.value 
// //     generator(nameUserText)
// // })


// function generator(nameUserText,counter){
//     // gamers.push(nameUserText)
//     nameUser.value=''
    
//     if(counter===4){
    
//         const teamColor = gamers.length % 2 === 1 ? 'blue' : 'red';        
//         if(gamers.length<=4){
//                     users.insertAdjacentHTML("beforebegin",`<div class="user" style="background-color:${teamColor};" ><h3 class="delet">❌<h3><h1 class="name">${nameUserText}</h1></div>`)
//                     return ;
//                 }
       
//      }
//     if(counter===6){
//         const teamColor6 = gamers.length % 3 === 1 ? 'blue' :(gamers.length%3===2 ? "red":"green")
//         if(gamers.length<=6){
//         users.insertAdjacentHTML("beforebegin",`<div class="user" style="background-color:${teamColor6};" ><h3 class="delet">❌<h3><h1 class="name">${nameUserText}</h1></div>`)
//             return;
//     }
            
//     }
    
//     if(counter===8){
     
//         const teamColor8 = gamers.length % 4 === 1 ? 'blue' :(gamers.length%4===2 ? "red":(gamers.length%4===3 ? "green" :"pink"))

//         if(gamers.length<=8){
//         users.insertAdjacentHTML("beforebegin",`<div class="user" style="background-color:${teamColor8};" ><h3 class="delet">❌<h3><h1 class="name">${nameUserText}</h1></div>`)
//             return;
//     }   

//     }

//     if(counter===10){

            
//         const teamColor10 = gamers.length % 5 === 1 ? 'blue' :(gamers.length%5===2 ? "red":(gamers.length%5===3 ? "green" : (gamers.length%5===4? "pink":"black")))

//         if(gamers.length<=10){
//         users.insertAdjacentHTML("beforebegin",`<div class="user" style="background-color:${teamColor10};" ><h3 class="delet">❌<h3><h1 class="name">${nameUserText}</h1></div>`)
//             return;
//     }   



//     }
    


// }




/// code ai complated 
const btnRegister = document.querySelector(".register");
const containerStart = document.querySelector(".container");
const inputNumber = document.querySelector('input');
const selectorLevel = document.querySelector('#levelSelector');
const partAddUser = document.querySelector('.container1');
const users = document.querySelector('.users');
const addButton = document.querySelector('.addButton');
const nameUser = document.querySelector('#nameUser');
const teamsDiv = document.querySelector('.teams');
const startBtn = document.querySelector('.startBtn');


const playerList=document.querySelector('.players')
// const nextBtnWord=document.querySelector('.next')
// const wordShow=document.querySelector('.word')
// const nameUserShow=document.querySelector('.nameUser')
// const acceptTick=document.querySelector('.accept')
// const navbarTimer=document.querySelector('.navbarTime')
    
// console.log(nextBtnWord)

let wordsLevelOne=[
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    {word:"میز",score:10},
    {word:"کباب پز ",score:10},
    {word:"کتاب",score:10},
    {word:"موز ",score:10},
    {word:"دفتر",score:10},
    
]


let gamers = [];
let totalPlayers = 0;


btnRegister.addEventListener('click', function () {

    console.log(selectorLevel.value)
    const playerCount = inputNumber.value.trim();

    if (playerCount === "") {
        alert("لطفا تعداد بازیکنان را وارد کنید");
        return;
    }

    const number = parseInt(playerCount, 10);
    if (isNaN(number) || number <= 0) {
        alert("لطفا یک عدد معتبر وارد کنید (بزرگتر از 0)");
        return;
    }

    if (number % 2 !== 0) {
        alert("لطفا یک عدد زوج وارد کنید");
        return;
    }

    if (number > 10) {
        alert("تعداد نفرات باید از ده نفر کمتر باشد");
        return;
    }

    totalPlayers = number;

    containerStart.style.display = "none";
    partAddUser.style.display = 'flex';
    // startBtn.style.display='flex'

});

addButton.addEventListener('click', function () {
    const nameUserText = nameUser.value.trim();

    if (nameUserText === '') {
        alert("نام بازیکن را وارد کنید");
        return;
    }

    if (gamers.length >= totalPlayers) {
        alert("تعداد بازیکنان کامل شده است");
        addButton.disabled = true; // غیرفعال‌کردن دکمه
        nameUser.disabled = true;  // غیرفعال کردن اینپوت
        return;
    }
    // if(gamers.length===totalPlayers){
    //     startBtn.style.display='flex';
    // }

    gamers.push(nameUserText);
    generateUser(nameUserText, totalPlayers);
    nameUser.value = '';
});

function generateUser(name, count) {
    const teamColor = getTeamColor(gamers.length, count);

    const div = document.createElement('div');
    div.className = 'user';
    div.style.backgroundColor = teamColor;

    const remove = document.createElement('h3');
    remove.className = 'delet';
    remove.innerText = '❌';
    remove.style.cursor = 'pointer';

    const nameTag = document.createElement('h1');
    nameTag.className = 'name';
    nameTag.innerText = name;

    div.appendChild(remove);
    div.appendChild(nameTag);
    users.insertBefore(div, users.firstChild);

    remove.addEventListener('click', function () {
        div.remove();
        gamers = gamers.filter(player => player !== name);
    });
}

function getTeamColor(index, total) {
    if (total === 4) {
        return index % 2 === 0 ? 'blue' : 'red';
    } else if (total === 6) {
        return ['blue', 'red', 'green'][index % 3];
    } else if (total === 8) {
        return ['blue', 'red', 'green', 'pink'][index % 4];
    } else if (total === 10) {
        return ['blue', 'red', 'green', 'pink', 'black'][index % 5];
    }
    return 'gray';
}
// start game 


// هر بار بازیکن اضافه شد، چک کن تعدادش رسید یا نه
function generateUser(name, count) {


    const teamColor = getTeamColor(gamers.length, count);

    const div = document.createElement('div');
    div.className = 'user';
    div.style.backgroundColor = teamColor;

    const remove = document.createElement('h3');
    remove.className = 'delet';
    remove.innerText = '❌';
    remove.style.cursor = 'pointer';

    const nameTag = document.createElement('h1');
    nameTag.className = 'name';
    nameTag.innerText = name;

    div.appendChild(remove);
    div.appendChild(nameTag);
    users.insertBefore(div, users.firstChild);

    remove.addEventListener('click', function () {
        div.remove();
        
        gamers = gamers.filter(player => player !== name);
        
        addButton.disabled = false;
        nameUser.disabled = false;
        startGameButton.style.display = 'none';
        // gamers.forEach()
    });

    if (gamers.length == totalPlayers) {
        startBtn.style.display = 'flex';
    }
}



let count=0
startBtn.addEventListener('click',function(){

    containerStart.style.display = "none";
    partAddUser.style.display = 'none';
    addButton.style.display='none';
    users.style.display='none'
    startBtn.style.display = 'none';


    gamers.forEach(function(player){

       
            let newDivPlayer=document.createElement('div')
            let newDivTopPart=document.createElement('div')
            let newImgNext=document.createElement('img')
            let newH3Word=document.createElement('h3')
            let newH2NameUser=document.createElement('h2')
            let newImgAccept=document.createElement('img')
            let newNavbarTime=document.createElement('div')
            let newTime=document.createElement('h4')
            
            //class name HTML tag
            newDivPlayer.className='player';
            newDivTopPart.className='topPart'
            newImgNext.className='next'
            newH3Word.className='word'
            newH2NameUser.className='nameUser'
            newImgAccept.className='accept'
            newNavbarTime.className='navbarTime'
            



            //content in tag 
            newH3Word.innerHTML=wordsLevelOne[count].word
            newH2NameUser.innerHTML=player

            //add src image
            newImgNext.src = "./images/icons8-next-50.png";
            newImgAccept.src = "./images/icons8-tick-50.png";


            
            newDivTopPart.append(newImgNext,newH3Word,newH2NameUser,newImgAccept)
            newNavbarTime.append(newTime)
            newDivPlayer.append(newDivTopPart, newNavbarTime);
            playerList.appendChild(newDivPlayer);


            
            
            
            
            newImgNext.addEventListener('click',function(){
                nextWord(newH3Word)
            })
            
            count++;
        });
    
    


})

function nextWord(h3){
    let NumberRandom=Math.floor(Math.random()*100)
    console.log(NumberRandom)
    h3.innerHTML=wordsLevelOne[NumberRandom].word

}


// رویداد شروع بازی

// function startTimer(seconds) {
//     timerDiv.style.display = 'block';
//     let timeLeft = seconds;
//     timerDiv.innerText = `زمان باقی‌مانده: ${timeLeft} ثانیه`;

//     const countdown = setInterval(() => {
//         timeLeft--;
//         timerDiv.innerText = `زمان باقی‌مانده: ${timeLeft} ثانیه`;

//         if (timeLeft <= 0) {
//             clearInterval(countdown);
//             timerDiv.innerText = 'زمان تموم شد!';
//             // اینجا می‌تونی مرحله بعدی بازی رو صدا بزنی
//             setTimeout(() => {
//                 alert("برو مرحله بعد 😎");
//                 // اینجا تو می‌تونی هر کاری بخوای انجام بدی
//             }, 1000);
//         }
//     }, 1000);
// }
// startGameButton.addEventListener('click', function () {
//     startTimer(10); // اینجا مدت تایمر به ثانیه مشخص شده (مثلاً 10 ثانیه)
// });
