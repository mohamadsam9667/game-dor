let arr=document.querySelectorAll('.ProductCard_mobile_productPriceText__v3uFW')

arr.forEach(function(item){
    // console.log(item.textContent)
    if(item.textContent.trim()<1600000){
        console.log(item)
    }
})
