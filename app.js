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

// document.getElementById("dots-btn").addEventListener('load', () =>{
//     totalLen = document.querySelectorAll(".slide-selector").length;
//     console.log(totalLen)
//     html = ""; // only for the initialize
    
//     for (let j = 0; j < totalLen; j++) {
//         html += `<button class="dots-element-btn"></button>`
//     }
//     document.getElementById('dots-btn').innerHTML = html;
// });

var startLoop = true;
const sliderInteval = setInterval(() => {

    // we will remove this code to put into the settime
    // if(!dotsAdded){
    //     addDots()
    // }
    // dotsAdded = true

    if(startLoop){
        totalSlidesTag = document.querySelectorAll(".slide-selector");
        dotsElement = document.querySelectorAll('.dots-element-btn');
        vertiSlides = document.querySelectorAll(".verti-sli-sel");
        // console.log(dotsElement)
        totalLen = totalSlidesTag.length;
        currentIndex = 0; //just to initialize the variable

        for (let i = 0; i < totalLen; i++) {
            if(totalSlidesTag[i].classList.value.split(" ").includes('active')){
                currentIndex = i;
            };
        }

        totalSlidesTag[currentIndex].classList.remove("active");
        vertiSlides[currentIndex].classList.remove("active");
        totalSlidesTag[currentIndex].style.display="none";
        dotsElement[currentIndex].classList.remove('current')

        nextIndex = currentIndex != (totalLen-1) ? currentIndex+1 : 0 ;

        totalSlidesTag[nextIndex].style.display = "";
        totalSlidesTag[nextIndex].classList.add("active");
        vertiSlides[nextIndex].classList.add("active");
        dotsElement[nextIndex].classList.add('current')
    }else{
        startLoop = true;
    }
    
}, 2000);

function addDots(){
    // console.log("this is done")
    totalLen = document.querySelectorAll(".slide-selector").length;
    html = `<button class="dots-element-btn current"></button>`; // only for the initialize
    
    for (let j = 0; j < totalLen-1; j++) {
        html += `<button class="dots-element-btn"></button>`
    }

    document.getElementById('dots-btn').innerHTML = html;

    setTimeout(() => {
        var dotBtns = document.querySelectorAll(".dots-element-btn")
        dotBtns.forEach(ele => {
            ele.addEventListener('click', () => {
                startLoop = false;
                totalSlidesTag = document.querySelectorAll(".slide-selector");
                activeSlide = document.querySelector(".slide-selector.active");
                vertiSlides = document.querySelectorAll(".verti-sli-sel");
                vertiSlideActive = document.querySelector(".verti-sli-sel.active");
                currentDotBtn = document.querySelector(".dots-element-btn.current")
                
                previousIndex = Array.from(dotBtns).indexOf(currentDotBtn);
                currentDotBtn.classList.remove('current')

                // myarr = [1,2,3]
                // myarr = new Array;
                // myarr  = [1,2,3]

                clickedIndex = Array.from(dotBtns).indexOf(event.target);
                event.target.classList.add('current');
                // console.log(previousIndex, clickedIndex)

                if(previousIndex!=clickedIndex){
                    totalSlidesTag[clickedIndex].style.display = "";
                    totalSlidesTag[clickedIndex].classList.add("active");
                    vertiSlides[clickedIndex].classList.add('active');                
                    
                    activeSlide.classList.remove('active');
                    activeSlide.style.display = 'none';
                    vertiSlideActive.classList.remove('active');
                }
                
            })
        })
    }, 2)
}

document.getElementById("for-nav").addEventListener('click', () => {
    // console.log("im form the forword tab")
    startLoop = false;
    totalSlidesTag = document.querySelectorAll(".slide-selector");
    dotsElement = document.querySelectorAll('.dots-element-btn');
    vertiSlides = document.querySelectorAll(".verti-sli-sel");
    totalLen = totalSlidesTag.length;
    currentIndex = 0; //just to initialize the variable

    for (let i = 0; i < totalLen; i++) {
        if(totalSlidesTag[i].classList.value.split(" ").includes('active')){
            currentIndex = i;
        };
    }

    totalSlidesTag[currentIndex].classList.remove("active");
    dotsElement[currentIndex].classList.remove('current')
    vertiSlides[currentIndex].classList.remove('active');
    totalSlidesTag[currentIndex].style.display="none";

    nextIndex = currentIndex != (totalLen-1) ? currentIndex+1 : 0 ;

    totalSlidesTag[nextIndex].style.display = "";
    totalSlidesTag[nextIndex].classList.add("active");
    vertiSlides[nextIndex].classList.add('active');
    dotsElement[nextIndex].classList.add('current')
    // console.log(totalSlidesTag[nextIndex]);

    // activeEle = document.querySelectorAll(".slide-selector.active");
    // console.log(totalSlidesTag, totalLen, activeEle);

})

document.getElementById("pre-nav").addEventListener('click', () => {
    startLoop = false;
    totalSlidesTag = document.querySelectorAll(".slide-selector");
    dotsElement = document.querySelectorAll('.dots-element-btn');
    vertiSlides = document.querySelectorAll(".verti-sli-sel");
    totalLen = totalSlidesTag.length;
    currentIndex = 0; //just to initialize the variable

    for (let i = 0; i < totalLen; i++) {
        if(totalSlidesTag[i].classList.value.split(" ").includes('active')){
            currentIndex = i;
        };
    }

    // console.log(vertiSlides[currentIndex]);
    totalSlidesTag[currentIndex].classList.remove("active");
    dotsElement[currentIndex].classList.remove('current');
    vertiSlides[currentIndex].classList.remove('active');
    totalSlidesTag[currentIndex].style.display="none";

    nextIndex = currentIndex != 0 ? currentIndex-1 : (totalLen-1) ;

    totalSlidesTag[nextIndex].style.display = "";
    totalSlidesTag[nextIndex].classList.add("active");
    vertiSlides[nextIndex].classList.add('active');
    dotsElement[nextIndex].classList.add('current');
    // console.log(totalSlidesTag[nextIndex]);

    // activeEle = document.querySelectorAll(".slide-selector.active");
    // console.log(totalSlidesTag, totalLen, activeEle);
})

setTimeout(()=>{
    addDots()
}, 500)

// verti slide click
vertiSlides = document.querySelectorAll(".verti-sli-sel");
vertiSlides.forEach(ele => {
    ele.addEventListener('click', () => {
        startLoop = false;
        clickedIndex = Array.from(vertiSlides).indexOf(event.target);
        // verticle slide tab Active
        vertiSlidesActive = document.querySelector(".verti-sli-sel.active");

        // Horizontal slide tabs
        totalSlidesTag = document.querySelectorAll(".slide-selector");
        ActiveSlide = document.querySelector(".slide-selector.active");
        
        // dots 
        totalDots = document.querySelectorAll(".dots-element-btn")
        currentDot = document.querySelector(".dots-element-btn.current")
        
        // addClasses to new slide
        vertiSlides[clickedIndex].classList.add('active');
        totalSlidesTag[clickedIndex].classList.add('active');
        totalDots[clickedIndex].classList.add('current');

        totalSlidesTag[clickedIndex].style.display = "";

        // remove current active or current slides
        vertiSlidesActive.classList.remove('active');
        ActiveSlide.classList.remove('active');
        ActiveSlide.style.display = 'none';
        
        currentDot.classList.remove('current');

    })
})











