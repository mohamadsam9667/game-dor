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

let wordsLevelOne = [
    {word: "میز", score: 10},
    {word: "کباب پز", score: 10},
    {word: "کتاب", score: 10},
    {word: "موز", score: 10},
    {word: "دفتر", score: 10},
    {word: "صندلی", score: 10},
    {word: "لامپ", score: 10},
    {word: "گل", score: 10},
    {word: "درخت", score: 10},
    {word: "ماشین", score: 10},
    {word: "توپ", score: 10},
    {word: "خانه", score: 10},
    {word: "آب", score: 10},
    {word: "نان", score: 10},
    {word: "سیب", score: 10},
    {word: "مداد", score: 10},
    {word: "خورشید", score: 10},
    {word: "ماه", score: 10},
    {word: "ستاره", score: 10},
    {word: "دریا", score: 10},
    {word: "کوه", score: 10},
    {word: "رودخانه", score: 10},
    {word: "ابر", score: 10},
    {word: "باران", score: 10},
    {word: "برف", score: 10},
    {word: "باد", score: 10},
    {word: "پنجره", score: 10},
    {word: "در", score: 10},
    {word: "دیوار", score: 10},
    {word: "سقف", score: 10},
    {word: "کفش", score: 10},
    {word: "کلاه", score: 10},
    {word: "شلوار", score: 10},
    {word: "پیراهن", score: 10},
    {word: "چشم", score: 10},
    {word: "دهان", score: 10},
    {word: "دست", score: 10},
    {word: "پا", score: 10},
    {word: "سر", score: 10},
    {word: "مو", score: 10},
    {word: "صورت", score: 10},
    {word: "بین", score: 10},
    {word: "گوش", score: 10},
    {word: "لب", score: 10},
    {word: "دندان", score: 10},
    {word: "زبان", score: 10},
    {word: "قلب", score: 10},
    {word: "مادر", score: 10},
    {word: "پدر", score: 10},
    {word: "برادر", score: 10},
    {word: "خواهر", score: 10},
    {word: "بچه", score: 10},
    {word: "مدرسه", score: 10},
    {word: "معلم", score: 10},
    {word: "دانش‌آموز", score: 10},
    {word: "گچ", score: 10},
    {word: "تخته", score: 10},
    {word: "ماژیک", score: 10},
    {word: "کیف", score: 10},
    {word: "خودکار", score: 10},
    {word: "خط‌کش", score: 10},
    {word: "جامدادی", score: 10},
    {word: "پاک‌کن", score: 10},
    {word: "تراش", score: 10},
    {word: "نقاشی", score: 10},
    {word: "رنگ", score: 10},
    {word: "قلمو", score: 10},
    {word: "کاغذ", score: 10},
    {word: "قیچی", score: 10},
    {word: "چسب", score: 10},
    {word: "خاک", score: 10},
    {word: "شن", score: 10},
    {word: "سنگ", score: 10},
    {word: "آتش", score: 10},
    {word: "دود", score: 10},
    {word: "یخ", score: 10},
    {word: "بخار", score: 10},
    {word: "شمع", score: 10},
    {word: "نور", score: 10},
    {word: "سایه", score: 10},
    {word: "انگشت", score: 10},
    {word: "ناخن", score: 10},
    {word: "پتو", score: 10},
    {word: "بالش", score: 10},
    {word: "تشک", score: 10},
    {word: "رختخواب", score: 10},
    {word: "کمد", score: 10},
    {word: "آینه", score: 10},
    {word: "مسواک", score: 10},
    {word: "خمیر دندان", score: 10},
    {word: "صابون", score: 10},
    {word: "شامپو", score: 10},
    {word: "حوله", score: 10},
    {word: "لیوان", score: 10},
    {word: "قاشق", score: 10},
    {word: "چنگال", score: 10},
    {word: "چاقو", score: 10},
    {word: "بشقاب", score: 10},
    {word: "کاسه", score: 10},
    {word: "قابلمه", score: 10},
    {word: "کتری", score: 10},
    {word: "فنجان", score: 10},
    {word: "نقره", score: 10},
    {word: "طلا", score: 10},
    {word: "آهن", score: 10},
    {word: "مس", score: 10},
    {word: "شیشه", score: 10},
    {word: "پلاستیک", score: 10},
    {word: "چوب", score: 10},
    {word: "پارچه", score: 10},
    {word: "نخ", score: 10},
    {word: "سوزن", score: 10},
    {word: "دکمه", score: 10},
    {word: "زیپ", score: 10},
    {word: "کمربند", score: 10},
    {word: "جوراب", score: 10},
    {word: "دستکش", score: 10},
    {word: "روسری", score: 10},
    {word: "عینک", score: 10},
    {word: "ساعت", score: 10},
    {word: "تلویزیون", score: 10},
    {word: "رادیو", score: 10},
    {word: "تلفن", score: 10},
    {word: "موبایل", score: 10},
    {word: "رایانه", score: 10},
    {word: "ماوس", score: 10},
    {word: "صفحه کلید", score: 10},
    {word: "مانیتور", score: 10},
    {word: "پرینتر", score: 10},
    {word: "اسکنر", score: 10},
    {word: "هندزفری", score: 10},
    {word: "باتری", score: 10},
    {word: "شارژر", score: 10},
    {word: "فلش", score: 10},
    {word: "کابل", score: 10},
    {word: "پریز", score: 10},
    {word: "کلید", score: 10},
    {word: "پنکه", score: 10},
    {word: "یخچال", score: 10},
    {word: "اجاق", score: 10},
    {word: "مایکروویو", score: 10},
    {word: "مخلوط کن", score: 10},
    {word: "آبمیوه‌گیری", score: 10},
    {word: "جارو", score: 10},
    {word: "تی", score: 10},
    {word: "خاک‌انداز", score: 10},
    {word: "سطل", score: 10},
    {word: "بیل", score: 10},
    {word: "چنگک", score: 10},
    {word: "فرچه", score: 10},
    {word: "اسفنج", score: 10},
    {word: "مایع ظرفشویی", score: 10},
    {word: "پودر لباسشویی", score: 10},
    {word: "نرم‌کننده", score: 10},
    {word: "آویز", score: 10},
    {word: "قلاب", score: 10},
    {word: "میخ", score: 10},
    {word: "چکش", score: 10},
    {word: "اره", score: 10},
    {word: "پیچ", score: 10},
    {word: "پیچ‌گوشتی", score: 10},
    {word: "آچار", score: 10},
    {word: "انبردست", score: 10},
    {word: "سیم‌چین", score: 10},
    {word: "میخک", score: 10},
    {word: "گل میخ", score: 10},
    {word: "قفل", score: 10},
    {word: "کلید", score: 10},
    {word: "زنجیر", score: 10},
    {word: "طناب", score: 10},
    {word: "نردبان", score: 10},
    {word: "چرخ", score: 10},
    {word: "فرمان", score: 10},
    {word: "بادکنک", score: 10},
    {word: "بادبادک", score: 10},
    {word: "پروانه", score: 10},
    {word: "مورچه", score: 10},
    {word: "مگس", score: 10},
    {word: "پشه", score: 10},
    {word: "سنجاقک", score: 10},
    {word: "کرم", score: 10},
    {word: "حلزون", score: 10},
    {word: "لاک‌پشت", score: 10},
    {word: "قورباغه", score: 10},
    {word: "مار", score: 10},
    {word: "مارمولک", score: 10},
    {word: "خرگوش", score: 10},
    {word: "سنجاب", score: 10},
    {word: "راکون", score: 10},
    {word: "جوجه‌تیغی", score: 10},
    {word: "خفاش", score: 10},
    {word: "جغد", score: 10},
    {word: "کلاغ", score: 10},
    {word: "گنجشک", score: 10},
    {word: "بلبل", score: 10},
    {word: "طوطی", score: 10},
    {word: "مرغ", score: 10},
    {word: "خروس", score: 10},
    {word: "اردک", score: 10},
    {word: "غاز", score: 10},
    {word: "بوقلمون", score: 10},
    {word: "کبک", score: 10},
    {word: "کبوتر", score: 10},
    {word: "عقاب", score: 10},
    {word: "شاهین", score: 10},
    {word: "لک‌لک", score: 10},
    {word: "فلامینگو", score: 10},
    {word: "پنگوئن", score: 10},
    {word: "مرغ دریایی", score: 10},
    {word: "نهنگ", score: 10},
    {word: "دلفین", score: 10},
    {word: "کوسه", score: 10},
    {word: "ماهی", score: 10},
    {word: "ستاره دریایی", score: 10},
    {word: "عروس دریایی", score: 10},
    {word: "خرچنگ", score: 10},
    {word: "میگو", score: 10},
    {word: "صدف", score: 10},
    {word: "اسفنج", score: 10},
    {word: "مرجان", score: 10},
    {word: "جلبک", score: 10},
    {word: "قارچ", score: 10},
    {word: "کپک", score: 10},
    {word: "گلابی", score: 10},
    {word: "هلو", score: 10},
    {word: "زردآلو", score: 10},
    {word: "آلبالو", score: 10},
    {word: "گیلاس", score: 10},
    {word: "انگور", score: 10},
    {word: "انار", score: 10},
    {word: "خربزه", score: 10},
    {word: "طالبی", score: 10},
    {word: "هندوانه", score: 10},
    {word: "خیار", score: 10},
    {word: "گوجه", score: 10},
    {word: "بادمجان", score: 10},
    {word: "فلفل", score: 10},
    {word: "هویج", score: 10},
    {word: "سیب‌زمینی", score: 10},
    {word: "پیاز", score: 10},
    {word: "سیر", score: 10},
    {word: "جعفری", score: 10},
    {word: "نعناع", score: 10},
    {word: "شوید", score: 10},
    {word: "تره", score: 10},
    {word: "ریحان", score: 10},
    {word: "مریم‌گلی", score: 10},
    {word: "آویشن", score: 10},
    {word: "پونه", score: 10},
    {word: "بابونه", score: 10},
    {word: "گل‌گاوزبان", score: 10},
    {word: "سنبل‌الطیب", score: 10},
    {word: "زعفران", score: 10},
    {word: "زرشک", score: 10},
    {word: "عناب", score: 10},
    {word: "سنجد", score: 10},
    {word: "پسته", score: 10},
    {word: "بادام", score: 10},
    {word: "فندق", score: 10},
    {word: "گردو", score: 10},
    {word: "تخمه", score: 10},
    {word: "کنجد", score: 10},
    {word: "نخود", score: 10},
    {word: "عدس", score: 10},
    {word: "لوبیا", score: 10},
    {word: "ماش", score: 10},
    {word: "جو", score: 10},
    {word: "گندم", score: 10},
    {word: "برنج", score: 10},
    {word: "ذرت", score: 10},
    {word: "نخودفرنگی", score: 10},
    {word: "بادام‌زمینی", score: 10},
    {word: "کشمش", score: 10},
    {word: "خرما", score: 10},
    {word: "انجیر", score: 10},
    {word: "توت", score: 10},
    {word: "شاتوت", score: 10},
    {word: "تمشک", score: 10},
    {word: "زغال‌اخته", score: 10},
    {word: "کیوی", score: 10},
    {word: "آناناس", score: 10},
    {word: "نارگیل", score: 10},
    {word: "موز", score: 10},
    {word: "پاپایا", score: 10},
    {word: "انبه", score: 10},
    {word: "لیمو", score: 10},
    {word: "نارنج", score: 10},
    {word: "پرتقال", score: 10},
    {word: "نارنگی", score: 10},
    {word: "گریپ‌فروت", score: 10},
    {word: "خرمالو", score: 10},
    {word: "ازگیل", score: 10},
    {word: "به", score: 10},
    {word: "زیتون", score: 10},
    {word: "آووکادو", score: 10},
    {word: "انجیر", score: 10},
    {word: "خارک", score: 10},
    {word: "کاکتوس", score: 10},
    {word: "بامبو", score: 10},
    {word: "پاپیروس", score: 10},
    {word: "گل‌نی", score: 10},
    {word: "لاله", score: 10},
    {word: "نرگس", score: 10},
    {word: "سنبل", score: 10},
    {word: "میخک", score: 10},
    {word: "شقایق", score: 10},
    {word: "پامچال", score: 10},
    {word: "شقایق", score: 10},
    {word: "آفتابگردان", score: 10},
    {word: "گل‌رز", score: 10},
    {word: "یاس", score: 10},
    {word: "یاسمن", score: 10},
];


const wordsLevelTwo = [
    { word: "روغن موتور", score: 20 },
    { word: "شکلات ژله‌ای", score: 20 },
    { word: "تصویر کوچک‌شده", score: 20 },
    { word: "ماهی خزه‌ای", score: 20 },
    { word: "مانیتور پررنگ", score: 20 },
    { word: "هدفون بی‌سیم", score: 20 },
    { word: "ماوس پد", score: 20 },
    { word: "کیبورد مکانیکی", score: 20 },
    { word: "شارژر القایی", score: 20 },
    { word: "پاوربانک", score: 20 },
    { word: "هارد اکسترنال", score: 20 },
    { word: "فلش مموری", score: 20 },
    { word: "سیم کارت", score: 20 },
    { word: "باتری کتابی", score: 20 },
    { word: "ریموت کنترل", score: 20 },
    { word: "ساعت هوشمند", score: 20 },
    { word: "بند ساعت", score: 20 },
    { word: "عینک آفتابی", score: 20 },
    { word: "کرم ضدآفتاب", score: 20 },
    { word: "ژل اصلاح", score: 20 },
    { word: "مایع دستشویی", score: 20 },
    { word: "خوشبوکننده هوا", score: 20 },
    { word: "حوله حمام", score: 20 },
    { word: "لیف حمام", score: 20 },
    { word: "شانه سر", score: 20 },
    { word: "سشوار", score: 20 },
    { word: "اتو مو", score: 20 },
    { word: "ماشین ریش‌تراش", score: 20 },
    { word: "مسواک برقی", score: 20 },
    { word: "نخ دندان", score: 20 },
    { word: "دهانشویه", score: 20 },
    { word: "کرم مرطوب‌کننده", score: 20 },
    { word: "عطر اسپری", score: 20 },
    { word: "دئودورانت", score: 20 },
    { word: "برس آرایش", score: 20 },
    { word: "سایه چشم", score: 20 },
    { word: "رژ لب", score: 20 },
    { word: "خط چشم", score: 20 },
    { word: "ماسک صورت", score: 20 },
    { word: "لاک ناخن", score: 20 },
    { word: "پد پاک‌کننده", score: 20 },
    { word: "تونر پوست", score: 20 },
    { word: "سرم صورت", score: 20 },
    { word: "کرم پودر", score: 20 },
    { word: "کانسیلر", score: 20 },
    { word: "رژگونه", score: 20 },
    { word: "هایلایتر", score: 20 },
    { word: "ریمل", score: 20 },
    { word: "مداد ابرو", score: 20 },
    { word: "فرمژه", score: 20 },
    { word: "اسپری مو", score: 20 },
    { word: "ژل مو", score: 20 },
    { word: "موس مو", score: 20 },
    { word: "ناخن مصنوعی", score: 20 },
    { word: "اکستنشن مژه", score: 20 },
    { word: "تاتو موقت", score: 20 },
    { word: "حنا", score: 20 },
    { word: "ماساژور صورت", score: 20 },
    { word: "پیلینگ صورت", score: 20 },
    { word: "میکرونیدلینگ", score: 20 },
    { word: "لیزر موهای زائد", score: 20 },
    { word: "اپیلاتور", score: 20 },
    { word: "موم موبر", score: 20 },
    { word: "کرم ویتامین C", score: 20 },
    { word: "کرم دور چشم", score: 20 },
    { word: "پچ چشم", score: 20 },
    { word: "ماسک چشم", score: 20 },
    { word: "اسکراب لب", score: 20 },
    { word: "بالش طبی", score: 20 },
    { word: "پتو برقی", score: 20 },
    { word: "بخارشور", score: 20 },
    { word: "جاروبرقی", score: 20 },
    { word: "ماشین ظرفشویی", score: 20 },
    { word: "ماشین لباسشویی", score: 20 },
    { word: "یخچال ساید", score: 20 },
    { word: "اجاق گاز", score: 20 },
    { word: "هود آشپزخانه", score: 20 },
    { word: "مایکروویو", score: 20 },
    { word: "توستر", score: 20 },
    { word: "چرخ گوشت", score: 20 },
    { word: "آبمیوه‌گیری", score: 20 },
    { word: "مخلوط کن", score: 20 },
    { word: "قهوه ساز", score: 20 },
    { word: "کتری برقی", score: 20 },
    { word: "سماور برقی", score: 20 },
    { word: "پلوپز", score: 20 },
    { word: "زودپز", score: 20 },
    { word: "سرخ کن", score: 20 },
    { word: "بخارپز", score: 20 },
    { word: "دیگ زودپز", score: 20 },
    { word: "چای‌ساز", score: 20 },
    { word: "اسپرسوساز", score: 20 },
    { word: "میلک‌فومر", score: 20 },
    { word: "بخاری برقی", score: 20 },
    { word: "پنکه سقفی", score: 20 },
    { word: "کولر گازی", score: 20 },
    { word: "تصفیه هوا", score: 20 },
    { word: "مرطوب‌کننده هوا", score: 20 },
    { word: "رطوبت‌گیر", score: 20 },
    { word: "پکیج", score: 20 },
    { word: "شومینه", score: 20 },
    { word: "شمع معطر", score: 20 },
    { word: "دستگاه ماساژ", score: 20 },
    { word: "ترازوی دیجیتال", score: 20 },
    { word: "دماسنج", score: 20 },
    { word: "فشارسنج", score: 20 },
    { word: "گلوکومتر", score: 20 },
    { word: "ساعت هوشمند", score: 20 },
    { word: "گام‌شمار", score: 20 },
    { word: "دستگاه فشار خون", score: 20 },
    { word: "ماسک اکسیژن", score: 20 },
    { word: "نبولایزر", score: 20 },
    { word: "دستگاه سنجش اکسیژن", score: 20 },
    { word: "چراغ خواب", score: 20 },
    { word: "پروژکتور", score: 20 },
    { word: "لامپ رشد گیاه", score: 20 },
    { word: "چراغ مطالعه", score: 20 },
    { word: "آیفون تصویری", score: 20 },
    { word: "دزدگیر اماکن", score: 20 },
    { word: "دوربین مداربسته", score: 20 },
    { word: "قفل دیجیتال", score: 20 },
    { word: "آژیر خطر", score: 20 },
    { word: "کپسول آتش‌نشانی", score: 20 },
    { word: "شناساگر دود", score: 20 },
    { word: "جعبه کمک‌های اولیه", score: 20 },
    { word: "کیسه یخ", score: 20 },
    { word: "کیسه آب گرم", score: 20 },
    { word: "تشک برقی", score: 20 },
    { word: "پد گرمایشی", score: 20 },
    { word: "یخچال مسافرتی", score: 20 },
    { word: "چراغ قوه", score: 20 },
    { word: "پاوربانک", score: 20 },
    { word: "مبدل برق", score: 20 },
    { word: "سوئیچ HDMI", score: 20 },
    { word: "مبدل USB-C", score: 20 },
    { word: "هارد SSD", score: 20 },
    { word: "کارت گرافیک", score: 20 },
    { word: "رم لپ‌تاپ", score: 20 },
    { word: "کیس کامپیوتر", score: 20 },
    { word: "مانیتور گیمینگ", score: 20 },
    { word: "صفحه کلید مکانیکی", score: 20 },
    { word: "ماوس گیمینگ", score: 20 },
    { word: "هدست گیمینگ", score: 20 },
    { word: "میکروفون استودیویی", score: 20 },
    { word: "پاپ فیلتر", score: 20 },
    { word: "استند میکروفون", score: 20 },
    { word: "پری امپلیفایر", score: 20 },
    { word: "میکسر صدا", score: 20 },
    { word: "اسپیکر مانیتور", score: 20 },
    { word: "ساب ووفر", score: 20 },
    { word: "سانترال", score: 20 },
    { word: "تلفن سانترال", score: 20 },
    { word: "فکس", score: 20 },
    { word: "پرینتر سه‌بعدی", score: 20 },
    { word: "اسکنر سه‌بعدی", score: 20 },
    { word: "قلم نوری", score: 20 },
    { word: "تبلت گرافیکی", score: 20 },
    { word: "دستگاه CNC", score: 20 },
    { word: "لیزر کات", score: 20 },
    { word: "چاپگر حرارتی", score: 20 },
    { word: "لیبل پرینتر", score: 20 },
    { word: "بارکد اسکنر", score: 20 },
    { word: "دستگاه POS", score: 20 },
    { word: "کارتخوان", score: 20 },
    { word: "کیوآر کد", score: 20 },
    { word: "رمزنگار", score: 20 },
    { word: "توکن امنیتی", score: 20 },
    { word: "یوبیکی", score: 20 },
    { word: "سیم کارت دائمی", score: 20 },
    { word: "مودم 5G", score: 20 },
    { word: "روتر", score: 20 },
    { word: "اکسس پوینت", score: 20 },
    { word: "مبدل فیبر نوری", score: 20 },
    { word: "پچ کورد", score: 20 },
    { word: "سوئیچ شبکه", score: 20 },
    { word: "سرور", score: 20 },
    { word: "رک شبکه", score: 20 },
    { word: "یوپی‌اس", score: 20 },
    { word: "استابلایزر", score: 20 },
    { word: "ژنراتور", score: 20 },
    { word: "پنل خورشیدی", score: 20 },
    { word: "اینورتر", score: 20 },
    { word: "باتری خورشیدی", score: 20 },
    { word: "کنترلر شارژ", score: 20 },
    { word: "لامپ خورشیدی", score: 20 },
    { word: "پمپ آب خورشیدی", score: 20 },
    { word: "دستگاه تصفیه آب", score: 20 },
    { word: "آبسردکن", score: 20 },
    { word: "فیلتر آب", score: 20 },
    { word: "سختی‌گیر آب", score: 20 },
    { word: "اسمز معکوس", score: 20 },
    { word: "یونیزه‌کننده آب", score: 20 },
    { word: "دستگاه آب قلیایی", score: 20 },
    { word: "آبگرمکن دیواری", score: 20 },
    { word: "پمپ شناور", score: 20 },
    { word: "پمپ سیرکولاتور", score: 20 },
    { word: "فیلتر هوای خودرو", score: 20 },
    { word: "روغن ترمز", score: 20 },
    { word: "ضد یخ", score: 20 },
    { word: "لنت ترمز", score: 20 },
    { word: "کمربند ایمنی", score: 20 },
    { word: "کیسه هوا", score: 20 },
    { word: "دزدگیر خودرو", score: 20 },
    { word: "رادارگیر", score: 20 },
    { word: "دوربین دنده عقب", score: 20 },
    { word: "سانروف", score: 20 },
    { word: "کروز کنترل", score: 20 },
    { word: "سیستم پارک خودکار", score: 20 },
    { word: "هدآپ دیسپلی", score: 20 },
    { word: "مانیتور خودرو", score: 20 },
    { word: "آینه هوشمند", score: 20 },
    { word: "جک خودرو", score: 20 },
    { word: "زنجیر چرخ", score: 20 },
    { word: "باکس خودرو", score: 20 },
    { word: "پوشش صندلی", score: 20 },
    { word: "روفرشی", score: 20 },
    { word: "جاکفشی", score: 20 },
    { word: "جا لیوانی", score: 20 },
    { word: "شارژر فندکی", score: 20 },
    { word: "مبدل USB خودرو", score: 20 },
    { word: "هولدر موبایل", score: 20 },
    { word: "نگهدارنده تبلت", score: 20 },
    { word: "دستگاه دیاگ", score: 20 },
    { word: "کابل jumper", score: 20 },
    { word: "باطری به باطری", score: 20 },
    { word: "کمپرسور باد", score: 20 },
    { word: "تایر زاپاس", score: 20 },
    { word: "جعبه ابزار", score: 20 },
    { word: "آچار چرخ", score: 20 },
    { word: "پیچ گوشتی ستاره‌ای", score: 20 },
    { word: "آچار آلن", score: 20 },
    { word: "آچار فرانسه", score: 20 },
    { word: "انبردست", score: 20 },
    { word: "سیم چین", score: 20 },
    { word: "چکش لاستیکی", score: 20 },
    { word: "اره آهن‌بر", score: 20 },
    { word: "دریل شارژی", score: 20 },
    { word: "پیچ گوشتی برقی", score: 20 },
    { word: "مینی فرز", score: 20 },
    { word: "هیلتی", score: 20 },
    { word: "میخکوب", score: 20 },
    { word: "منگنه کوب", score: 20 },
    { word: "چسب حرارتی", score: 20 },
    { word: "تفنگ چسب", score: 20 },
    { word: "کمپرسور باد", score: 20 },
    { word: "پیستوله رنگ", score: 20 },
    { word: "سنباده لرزان", score: 20 },
    { word: "اره نواری", score: 20 },
    { word: "اره عمودبر", score: 20 },
    { word: "اره رومیزی", score: 20 },
    { word: "گونیا", score: 20 },
    { word: "تراز", score: 20 },
    { word: "متر لیزری", score: 20 },
    { word: "خط‌کش تاشو", score: 20 },
    { word: "نقاله", score: 20 },
    { word: "پرگار", score: 20 },
    { word: "پنس", score: 20 },
    { word: "اسکالپل", score: 20 },
    { word: "قیچی جراحی", score: 20 },
    { word: "پانسمان", score: 20 },
    { word: "باند کشی", score: 20 },
    { word: "آتل", score: 20 },
    { word: "عینک محافظ", score: 20 },
    { word: "ماسک تنفسی", score: 20 },
    { word: "دستکش نیتریل", score: 20 },
    { word: "گان استریل", score: 20 },
    { word: "دماسنج دیجیتال", score: 20 },
    { word: "چراغ قوه جراحی", score: 20 },
    { word: "اتوسکوپ", score: 20 },
    { word: "افتالموسکوپ", score: 20 },
    { word: "فورسپس", score: 20 },
    { word: "سرنگ", score: 20 },
    { word: "سوزن", score: 20 },
    { word: "آمپول", score: 20 },
    { word: "ویال", score: 20 },
    { word: "کاتتر", score: 20 },
    { word: "سوند", score: 20 },
    { word: "دستگاه ساکشن", score: 20 },
    { word: "دستگاه نوار قلب", score: 20 },
    { word: "دستگاه سونوگرافی", score: 20 },
    { word: "رادیولوژی", score: 20 },
    { word: "سی تی اسکن", score: 20 },
    { word: "ام آر آی", score: 20 },
    { word: "پت اسکن", score: 20 },
    { word: "دستگاه انکوباتور", score: 20 },
    { word: "ونتیلاتور", score: 20 },
    { word: "دستگاه دیالیز", score: 20 },
    { word: "تخت بیمارستانی", score: 20 },
    { word: "برانکارد", score: 20 },
    { word: "ویلچر", score: 20 },
    { word: "واکر", score: 20 },
    { word: "عصا", score: 20 },
    { word: "کفی طبی", score: 20 },
    { word: "ارتز", score: 20 },
    { word: "پروتز", score: 20 },
    { word: "سمعک", score: 20 },
    { word: "عینک بینایی", score: 20 },
    { word: "عدسی تماسی", score: 20 },
    { word: "محلول لنز", score: 20 },
    { word: "جعبه لنز", score: 20 },
    { word: "پمپ انسولین", score: 20 },
    { word: "گلوکومتر", score: 20 },
    { word: "نوار تست قند", score: 20 },
    { word: "سرنگ انسولین", score: 20 },
    { word: "پمپ باسکول", score: 20 },
    { word: "تزریق زیرجلدی", score: 20 },
    { word: "پانسمان زخم", score: 20 },
    { word: "چسب زخم", score: 20 },
    { word: "پماد سوختگی", score: 20 },
    { word: "کرم ضدحساسیت", score: 20 },
    { word: "لوسیون بدن", score: 20 },
    { word: "ژل شستشو", score: 20 },
    { word: "مایع حمام", score: 20 },
    { word: "صابون آنتی‌باکتریال", score: 20 },
    { word: "شامپو ضدشوره", score: 20 },
    { word: "نرم‌کننده مو", score: 20 },
    { word: "ماسک مو", score: 20 },
    { word: "روغن آرگان", score: 20 },
    { word: "سرم مو", score: 20 },
    { word: "اسپری حجم‌دهنده", score: 20 },
    { word: "محلول دکلره", score: 20 },
    { word: "رنگ مو", score: 20 },
    { word: "اکسیدان", score: 20 },
    { word: "تافت", score: 20 },
    { word: "واکس مو", score: 20 },
    { word: "ژل حالت‌دهنده", score: 20 },
    { word: "موس حجم‌دهنده", score: 20 },
    { word: "کرم پودر", score: 20 },
    { word: "پن کیک", score: 20 },
    { word: "کانسیلر", score: 20 },
    { word: "کرم پنبه", score: 20 },
    { word: "پنبه آرایشی", score: 20 },
    { word: "پد پاک‌کننده", score: 20 },
    { word: "تونر", score: 20 },
    { word: "سرم ویتامین C", score: 20 },
    { word: "کرم دور چشم", score: 20 },
    { word: "پچ چشم", score: 20 },
    { word: "ماسک صورت", score: 20 },
    { word: "اسکراب صورت", score: 20 },
    { word: "لایه‌بردار", score: 20 },
    { word: "میکرودرم", score: 20 },
    { word: "رولر صورت", score: 20 },
    { word: "گوجی‌بری", score: 20 },
    { word: "چای سبز", score: 20 },
    { word: "قهوه ترک", score: 20 },
    { word: "نسکافه", score: 20 },
    { word: "کاپوچینو", score: 20 },
    { word: "لاته", score: 20 },
    { word: "اسپرسو", score: 20 },
    { word: "ماشین قهوه", score: 20 },
    { word: "فرنچ پرس", score: 20 },
    { word: "موکاپات", score: 20 },
    { word: "سینمای خانگی", score: 20 },
    { word: "پروژکتور", score: 20 },
    { word: "پرده نمایش", score: 20 },
    { word: "سیستم صوتی", score: 20 },
    { word: "ساب ووفر", score: 20 },
    { word: "اکولایزر", score: 20 },
    { word: "میکسر", score: 20 },
    { word: "دی جی کنترلر", score: 20 },
    { word: "پد دی جی", score: 20 },
    { word: "هدفون استودیویی", score: 20 },
    { word: "میکروفون کاندنسر", score: 20 },
    { word: "پاپ فیلتر", score: 20 },
    { word: "استند میکروفون", score: 20 },
    { word: "پری امپ", score: 20 },
    { word: "اینترفیس صدا", score: 20 },
    { word: "مونیتور استودیو", score: 20 },
    { word: "پد آکوستیک", score: 20 },
    { word: "باس تریپ", score: 20 },
    { word: "پد درام", score: 20 },
    { word: "استیک درام", score: 20 },
    { word: "مترونوم", score: 20 },
    { word: "پیانو دیجیتال", score: 20 },
    { word: "کیبورد موسیقی", score: 20 },
    { word: "سینتی سایزر", score: 20 },
    { word: "میکروکنترلر", score: 20 },
    { word: "برد آردوینو", score: 20 },
    { word: "برد رزبری پای", score: 20 },
    { word: "ماژول بلوتوث", score: 20 },
    { word: "سنسور حرکتی", score: 20 },
    { word: "رله", score: 20 },
    { word: "منبع تغذیه", score: 20 },
    { word: "اسیلوسکوپ", score: 20 },
    { word: "مولتی‌متر", score: 20 },
    { word: "هویه", score: 20 },
    { word: "قلع‌مکش", score: 20 },
    { word: "سیم چین", score: 20 },
    { word: "انبردست", score: 20 },
    { word: "پیچ گوشتی", score: 20 },
    { word: "آچار آلن", score: 20 },
    { word: "کولیس", score: 20 },
    { word: "میکرومتر", score: 20 },
    { word: "ترمومتر", score: 20 },
    { word: "بارومتر", score: 20 },
    { word: "هیگرومتر", score: 20 },
    { word: "اسپکترومتر", score: 20 },
    { word: "سانتریفیوژ", score: 20 },
    { word: "میکروسکوپ", score: 20 },
    { word: "تلسکوپ", score: 20 },
    { word: "دوربین دوچشمی", score: 20 },
    { word: "مونوکولار", score: 20 },
    { word: "اسکوپ", score: 20 },
    { word: "اندوسکوپ", score: 20 },
    { word: "لاپاراسکوپ", score: 20 },
    { word: "ارتوسکوپ", score: 20 },
    { word: "کولونوسکوپ", score: 20 },
    { word: "برونکوسکوپ", score: 20 },
    { word: "سیستوسکوپ", score: 20 },
    { word: "اوتوسکوپ", score: 20 },
    { word: "افتالموسکوپ", score: 20 },
    { word: "رکتوسکوپ", score: 20 },
    { word: "لارنگوسکوپ", score: 20 },
    { word: "گاستروسکوپ", score: 20 },
    { word: "کولپوسکوپ", score: 20 },
    { word: "هیستروسکوپ", score: 20 },
    { word: "فارینگوسکوپ", score: 20 },
    { word: "راینوسکوپ", score: 20 },
    { word: "سیگموئیدوسکوپ", score: 20 },
    { word: "توراکوسکوپ", score: 20 },
    { word: "مدیاستینوسکوپ", score: 20 },
    { word: "توراسکوپ", score: 20 },
    { word: "آرتروسکوپ", score: 20 },
    { word: "نفروسکوپ", score: 20 },
    { word: "سیستوسکوپ", score: 20 },
    { word: "میومتری", score: 20 },
    { word: "هیستروسالپنگوگرافی", score: 20 },
    { word: "سونوهیستروگرافی", score: 20 },
    { word: "کولپوسکوپی", score: 20 },
    { word: "پاپ اسمیر", score: 20 },
    { word: "بیوپسی", score: 20 },
    { word: "سیتولوژی", score: 20 },
    { word: "پاتولوژی", score: 20 },
    { word: "هماتولوژی", score: 20 },
    { word: "میکروبیولوژی", score: 20 },
    { word: "بیوشیمی", score: 20 },
    { word: "ایمونولوژی", score: 20 },
    { word: "ژنتیک", score: 20 },
    { word: "مولکولی", score: 20 },
    { word: "سلولی", score: 20 },
    { word: "بافت‌شناسی", score: 20 },
    { word: "سیتولوژی", score: 20 },
    { word: "هیستوشیمی", score: 20 },
    { word: "ایمونوهیستوشیمی", score: 20 },
    { word: "فلوسیتومتری", score: 20 },
    { word: "الکتروفورز", score: 20 },
    { word: "کروماتوگرافی", score: 20 },
    { word: "اسپکتروفتومتری", score: 20 },
    { word: "سانتریفیوژ", score: 20 },
    { word: "التراسونیک", score: 20 },
    { word: "رادیوگرافی", score: 20 },
    { word: "سی تی اسکن", score: 20 },
    { word: "ام آر آی", score: 20 },
    { word: "پت اسکن", score: 20 },
    { word: "سونوگرافی", score: 20 },
    { word: "ماموگرافی", score: 20 },
    { word: "فلوروسکوپی", score: 20 },
    { word: "آنژیوگرافی", score: 20 },
    { word: "میلوگرافی", score: 20 },
    { word: "مایلوگرافی", score: 20 },
    { word: "دیسکوگرافی", score: 20 },
    { word: "آرتئوگرافی", score: 20 },
    { word: "ونوگرافی", score: 20 },
    { word: "لنفانژیوگرافی", score: 20 },
    { word: "کولانژیوگرافی", score: 20 },
    { word: "اوروگرافی", score: 20 },
    { word: "پیلوگرافی", score: 20 },
    { word: "سیالوگرافی", score: 20 },
    { word: "سیستوگرافی", score: 20 },
    { word: "هیستروسالپنگوگرافی", score: 20 },
    { word: "سونوهیستروگرافی", score: 20 },
    { word: "کولپوسکوپی", score: 20 },
    { word: "لاپاراسکوپی", score: 20 },
    { word: "توراکوسکوپی", score: 20 },
    { word: "مدیاستینوسکوپی", score: 20 },
    { word: "برونکوسکوپی", score: 20 },
    { word: "گاستروسکوپی", score: 20 },
    { word: "کولونوسکوپی", score: 20 },
    { word: "سیگموئیدوسکوپی", score: 20 },
    { word: "پروکتوسکوپی", score: 20 },
    { word: "سیستوسکوپی", score: 20 },
    { word: "اورتروسکوپی", score: 20 },
    { word: "نفروسکوپی", score: 20 },
    { word: "آرتروسکوپی", score: 20 },
    { word: "لارنگوسکوپی", score: 20 },
    { word: "اوتوسکوپی", score: 20 },
    { word: "راینوسکوپی", score: 20 },
    { word: "فارینگوسکوپی", score: 20 },
    { word: "کولپوسکوپی", score: 20 },
    { word: "هیستروسکوپی", score: 20 },
    { word: "افتالموسکوپی", score: 20 },
    { word: "رکتوسکوپی", score: 20 },
    { word: "سیستوسکوپی", score: 20 },
    { word: "لارنگوسکوپی", score: 20 },
    { word: "گاستروسکوپی", score: 20 },
    { word: "کولونوسکوپی", score: 20 },
    { word: "سیگموئیدوسکوپی", score: 20 },
    { word: "پروکتوسکوپی", score: 20 },
    { word: "سیستوسکوپی", score: 20 },
    { word: "اورتروسکوپی", score: 20 },
    { word: "نفروسکوپی", score: 20 },
    { word: "آرتروسکوپی", score: 20 },
    { word: "لارنگوسکوپی", score: 20 },
    { word: "اوتوسکوپی", score: 20 },
    { word: "راینوسکوپی", score: 20 },
    { word: "فارینگوسکوپی", score: 20 },
    { word: "کولپوسکوپی", score: 20 },
    
];
    const wordsLevelThree = [
    { word: "پیشرفته۱", score: 30 },
    { word: "پیشرفته۲", score: 30 },
    // ... (کلمات سطح 3)
  ];



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

function getWordsByLevel(level) {
    switch (level) {
        case "level1":
            return wordsLevelOne;
            case "level2":
                return wordsLevelTwo;
                case "level3":
                    return wordsLevelThree;
                    default:
                        return []; // یا می‌توانید سطح پیش‌فرض برگردانید
                    }
                }
        


                // let words
     startBtn.addEventListener('click',function(){
                    
                    
                    let count=0
          

                     let words=getWordsByLevel(selectorLevel.value)
                    // console.log(words  for test)


                    containerStart.style.display = "none";
                    partAddUser.style.display = 'none';
                    addButton.style.display='none';
                    users.style.display='none'
                    startBtn.style.display = 'none';
                    
                    
                    
                    let counterPlayer=gamers.length
                    
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
                        newH3Word.innerHTML=words[count].word
                        newH2NameUser.innerHTML=player
                        newTime.innerHTML=100 +"s"

                        //add src image
                        newImgNext.src = "./images/icons8-next-50.png";
                        newImgAccept.src = "./images/icons8-tick-50.png";
                        
                        
                        
                        newDivTopPart.append(newImgNext,newH3Word,newH2NameUser,newImgAccept)
                        newNavbarTime.append(newTime)
                        newDivPlayer.append(newDivTopPart, newNavbarTime);
                        playerList.appendChild(newDivPlayer);
                        
                        newH3Word.addEventListener('click',function(){
                            
                        });
                        
                        
                        
                        
                        newImgNext.addEventListener('click',function(){
                            // let words=getWordsByLevel(selectorLevel.value)
                            nextWord(newH3Word,words)
                        })
            
                        count++;
                    });
                    
                    
                    
                    
                })
                
                function nextWord(h3,words){
                    let NumberRandom=Math.floor(Math.random()*100)
                    console.log(NumberRandom)
                    h3.innerHTML=words[NumberRandom].word
                    
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
