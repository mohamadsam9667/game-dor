// alert("sam");

const btnRegister=document.querySelector(".register");
const containerStart=document.querySelector(".container")
const inputNumber=document.querySelector('input')
const selectorLevel=document.querySelector('#levelSelector')
const partAddUser=document.querySelector('.container1')




btnRegister.addEventListener('click',function(){
    // console.log("sam")
    const playerCount=inputNumber.value.trim();

    if (playerCount === "") {
        alert("لطفا تعداد بازیکنان را وارد کنید");
        return;
    }


    const number = parseInt(playerCount, 10);
    if (isNaN(number) || number <= 0 ) {
        alert("لطفا یک عدد معتبر وارد کنید (بزرگتر از 0)");
        return;
    }
    if (number % 2 !== 0) {
        alert("لطفا یک عدد زوج وارد کنید");
        return;
    }
    
    else{

        containerStart.style.display="none"
        partAddUser.style.display='flex'
        console.log(selectorLevel.value )

        
        
    }
    
    
    
})
