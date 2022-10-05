//Close button
var closebtn = document.getElementById("close");
closebtn.addEventListener("click", function() {
  closebtn.parentElement.style.display = 'none';
});

// Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Trending multiple items slider 
let fragPre = document.createDocumentFragment(),
    fragPost = document.createDocumentFragment(),
    clonedPre, clonedPost,
    selectSlide = document.getElementById("numberOfSlides"),
    numberOfSlides = 3;

let items   = document.querySelectorAll("#gallery .trending-scroller-inner .trending-item"),
    len     = items.length,
    current = 1,  
    wrapper = document.getElementById("wrapper"),
    transformVal = 0;

for(let i=numberOfSlides ; i > 0 ; i--) {
    clonedPre = items[items.length-i].cloneNode(true);
    fragPre.append(clonedPre);
}
wrapper.insertBefore(fragPre , items[0]);
for(var j = 0 ; j <= numberOfSlides-1 ; j++) {
    clonedPost = items[j].cloneNode(true);
    fragPost.append(clonedPost);
}
wrapper.appendChild(fragPost); 
let slideWidth=items[0].offsetWidth;
let counter = 0;
let timer = null;
let timeout = null;
wrapper.style.transform = "translate3d(" + (-slideWidth) * (numberOfSlides) + "px,0,0)";

function arrowClick(dir) {
    if (timeout || timer) {
      return;
    }
    timeout = setTimeout(function() {
        counter = 0;
        direction = dir;
        let str = wrapper.style.transform;
        let left = str.substring(12, str.length - 11);
        animateSlide(current, left);
        timeout = null;
    }, 300);
}
function changeCurrent(curr) {
    current = curr;
    wrapper.style.transform =  "translate3d(" + -(slideWidth) * (current + (numberOfSlides-1)) + "px,0,0)";
}
function animateSlide(curr, left) {
    if (timer) {
      return;
    }
    timer = setInterval(function() {
        if(counter < slideWidth) {
            counter += 2; 
            transformVal = parseInt(left, 10) + (-(counter) * direction);
            wrapper.style.transform = "translate3d(" + transformVal + "px,0,0)";
        } else {
            current += direction;
            cycle = !!(current === 0 || current > len);
            if (cycle) {
              current = (current === 0)? len : 1;
              wrapper.style.transform ="translate3d(" + (-(slideWidth) * (current + (numberOfSlides-1))) + "px,0,0)";
            }
            counter = 0;
            clearInterval(timer);
            timer = null; 
        }
    }, 0);  
}
// Deals multiple items slider 
let fragPre1 = document.createDocumentFragment(),
    fragPost1 = document.createDocumentFragment(),
    clonedPre1, clonedPost1,
    selectSlide1 = document.getElementById("numberOfSlides1"),
    numberOfSlides1 = 3;

let items1   = document.querySelectorAll("#gallery1 .deals-scroller-inner .deals-item"),
    len1     = items1.length,
    current1 = 1,  
    wrapper1 = document.getElementById("wrapper1"),
    transformVal1 = 0;

for(let i=numberOfSlides1 ; i > 0 ; i--) {
    clonedPre1 = items1[items1.length-i].cloneNode(true);
    fragPre1.append(clonedPre1);
}
wrapper1.insertBefore(fragPre1 , items1[0]);
for(var j = 0 ; j <= numberOfSlides1-1 ; j++) {
    clonedPost1 = items1[j].cloneNode(true);
    fragPost1.append(clonedPost1);
}
wrapper1.appendChild(fragPost1); 
let slideWidth1=items1[0].offsetWidth;
let counter1 = 0;
let timer1 = null;
let timeout1 = null;
wrapper1.style.transform = "translate3d(" + (-slideWidth1) * (numberOfSlides1) + "px,0,0)";

function arrowClick1(dir) {
    if (timeout || timer) {
      return;
    }
    timeout = setTimeout(function() {
        counter = 0;
        direction = dir;
        let str = wrapper1.style.transform;
        let left = str.substring(12, str.length - 11);
        animateSlide1(current1, left);
        timeout = null;
    }, 300);
}
function changeCurrent1(curr) {
    current1 = curr;
    wrapper1.style.transform =  "translate3d(" + -(slideWidth1) * (current1 + (numberOfSlides1-1)) + "px,0,0)";
}
function animateSlide1(curr, left) {
    if (timer) {
      return;
    }
    timer = setInterval(function() {
        if(counter < slideWidth1) {
            counter += 2; 
            transformVal = parseInt(left, 10) + (-(counter) * direction);
            wrapper1.style.transform = "translate3d(" + transformVal + "px,0,0)";
        } else {
            current += direction;
            cycle = !!(current === 0 || current > len);
            if (cycle) {
              current = (current === 0)? len : 1;
              wrapper1.style.transform ="translate3d(" + (-(slideWidth1) * (current + (numberOfSlides1-1))) + "px,0,0)";
            }
            counter = 0;
            clearInterval(timer);
            timer = null; 
        }
    }, 0);  
}