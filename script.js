// alert("sam");

const btnRegister=document.querySelector(".register");
const containerStart=document.querySelector(".container")
const inputNumber=document.querySelector('input')

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
    }else{

        containerStart.style.display="none"
        

    }

})
