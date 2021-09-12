// function bodyLoading() {
//     console.log("running");
    
//     allDiv = document.querySelectorAll(".first-div"); //This will return array that's why we can use forEach loop
//     allD = document.getElementsByClassName("first-div");//This will return collection of elements so we prefer for loop
    
    // allDiv.forEach((ele)=>{
    //     console.log(ele);
    // })

    // for (let i = 0; i < allD.length; i++) {
    //     console.log("i'm from AllD")
    //     console.log(allD[i])
    // }

    // allD.forEach((d) => {
    //     console.log("this from allD");
    // })
// }

// function thisLoadFun() {
    
// }
// addEventListener('', thisLoadFun())

// document.addEventListener('load', () => {

// })

// myDiv = document.getElementsByClassName('first-div');


// function hideDiv(){

//     console.log(event.target)
//     event.target.style.display = "none";
//     // console.log(ele);
//     // myDiv = document.getElementsByClassName('first-div');
//     // myDiv = document.querySelectorAll(".first-div");
//     // myDiv.forEach(ele => {
//     //     ele.style.display = "none";
//     // });
//     // myDiv.style.display = "none";

// }


// myDiv.addEventListener('click', ()=>{
//     myDiv.style.display = "none";
    
// })




// function paymentMethod(){
//     num = Math.floor(Math.random()*10)
//     console.log(num);
//     if(num >= 5){
//         document.getElementById('payment-msg').innerHTML = `<div class="payment-success">payment is successfully added.</div>`
//         // document.getElementsByClassName('payment-failure')[0].innerHTML =""

//     }else{
//         document.getElementById('payment-msg').innerHTML = `<div class="payment-failure">payment is not added.</div>`;
//         // document.getElementsByClassName('payment-success')[0].innerHTML =""
//     }
// }

// paymentMethod();

// document.getElementById("payment-btn").addEventListener('click', paymentMethod);


document.getElementById("for-nav").addEventListener('click', () => {
    // console.log("im form the forword tab")
    totalSlidesTag = document.querySelectorAll(".slide-selector");
    totalLen = totalSlidesTag.length;
    currentIndex = 0; //just to initialize the variable

    for (let i = 0; i < totalLen; i++) {
        if(totalSlidesTag[i].classList.value.split(" ").includes('active')){
            currentIndex = i;
        };
    }

    totalSlidesTag[currentIndex].classList.remove("active");
    totalSlidesTag[currentIndex].style.display="none";
    nextIndex = currentIndex != (totalLen-1) ? currentIndex+1 : 0 ;
    totalSlidesTag[nextIndex].style.display = "";
    totalSlidesTag[nextIndex].classList.add("active");
    // console.log(totalSlidesTag[nextIndex]);

    // activeEle = document.querySelectorAll(".slide-selector.active");
    // console.log(totalSlidesTag, totalLen, activeEle);

})

document.getElementById("pre-nav").addEventListener('click', () => {
    // console.log("im form the previous tab")
    totalSlidesTag = document.querySelectorAll(".slide-selector");
    totalLen = totalSlidesTag.length;
    currentIndex = 0; //just to initialize the variable

    for (let i = 0; i < totalLen; i++) {
        if(totalSlidesTag[i].classList.value.split(" ").includes('active')){
            currentIndex = i;
        };
    }

    totalSlidesTag[currentIndex].classList.remove("active");
    totalSlidesTag[currentIndex].style.display="none";
    nextIndex = currentIndex != 0 ? currentIndex-1 : (totalLen-1) ;
    totalSlidesTag[nextIndex].style.display = "";
    totalSlidesTag[nextIndex].classList.add("active");
    // console.log(totalSlidesTag[nextIndex]);

    // activeEle = document.querySelectorAll(".slide-selector.active");
    // console.log(totalSlidesTag, totalLen, activeEle);
})

setInterval(() => {

    totalSlidesTag = document.querySelectorAll(".slide-selector");
    totalLen = totalSlidesTag.length;
    currentIndex = 0; //just to initialize the variable

    for (let i = 0; i < totalLen; i++) {
        if(totalSlidesTag[i].classList.value.split(" ").includes('active')){
            currentIndex = i;
        };
    }

    totalSlidesTag[currentIndex].classList.remove("active");
    totalSlidesTag[currentIndex].style.display="none";
    nextIndex = currentIndex != (totalLen-1) ? currentIndex+1 : 0 ;
    totalSlidesTag[nextIndex].style.display = "";
    totalSlidesTag[nextIndex].classList.add("active");
    
}, 2000);









