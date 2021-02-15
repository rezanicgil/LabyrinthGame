var rightInterval;
var downInterval;
var topPos = 0;
var rightPos = 0;
var leftInterval;
var leftPos = 0;
var upInterval;
var clickCount = 0;
var fruit = document.getElementById('fruit');
var element = document.getElementById('part');
var miliseconds;

time= 0;
function completeTime() {
   time++;
   document.getElementById('youwin').innerText = "Time: " + time;
}


    
// Check eat fruit
function check() {
  
    elementX = element.offsetLeft;
    elementY = element.offsetTop; 
    fruitX = fruit.offsetLeft;
    fruitY = fruit.offsetTop;
  
    if(Math.abs(elementX - fruitX )<=20 && Math.abs(elementY-fruitY)<=20 ){
       
        /*
        fruit.style.left = Math.floor(Math.random()*470 +1) + "px";
        fruit.style.top =  Math.floor(Math.random()*470 +1) + "px";
       */
      fruit.style.visibility = 'hidden';
      element.style.visibility = 'hidden';
      document.getElementById('labirent1').style.display = 'none';
      document.getElementById('labirent2').style.display = 'none';
      document.getElementById('labirent3').style.display = 'none';
      document.getElementById('labirent4').style.display = 'none';
      document.getElementById('labirent5').style.display = 'none';
      document.getElementById('labirent6').style.display = 'none';
      document.getElementById('labirent7').style.display = 'none';
      document.getElementById('labirent8').style.display = 'none';
      document.getElementById('labirent9').style.display = 'none';
      document.getElementById('labirent10').style.display = 'none';
      document.getElementById('labirent11').style.display = 'none';
      document.getElementById('labirent12').style.display = 'none';
      document.getElementById('labirent13').style.display = 'none';
      document.getElementById('youwin').style.visibility = 'visible';
      document.getElementById('youwin').innerText = "You win! Your score is: "+ Math.ceil((1/time) * 300) + " points";



    }

    
}
if(fruit.style.visibility == 'hidden'){
    alert("You win!! :)");
}

window.addEventListener("keydown", function (e) {

    widthElement = element.offsetWidth;
    clickedKey = e.key.toUpperCase();

    miliseconds = 50;
    //When Fruit eaten

    //Key handling

    //Up movement here
    if (clickedKey === 'W') {
   
        clearInterval(downInterval);
        clearInterval(rightInterval);
        clearInterval(leftInterval);
     
      
        upInterval = setInterval(function () {
            topPos = element.offsetTop;
           
          
           
            if (topPos > 0) {
                topPos = (topPos - 10) + "px";
                element.style.top = topPos;
                element.style.left = element.offsetLeft + "px";
            }
            if(topPos == 0){

                topPos = 500;
                element.style.top = topPos + "px";

            }

            check();

        }, miliseconds);

    }

    //Down movement here
    if (clickedKey === 'S') {
        clearInterval(rightInterval);
        clearInterval(leftInterval)
        clearInterval(upInterval);
        downInterval = setInterval(function () {
            topPos = element.offsetTop;
          
            if (topPos < 500) {
                topPos = (topPos + 10) + "px";
                element.style.top = topPos;
                element.style.left = element.offsetLeft + "px";

            }
            topPos = element.offsetTop;
            if (topPos == 500) {
                topPos = 0;
                topPos = (topPos) + "px";

                element.style.top = topPos;
            }
            check();
        }, miliseconds);

    }

    //Left movement here
    if (clickedKey === 'A') {

        clearInterval(rightInterval);
        clearInterval(downInterval);
        clearInterval(upInterval);

        leftInterval = setInterval(function () {
            leftPos = element.offsetLeft;

            
            if (leftPos > 0) {
                leftPos = (leftPos - 10) + "px";
                element.style.left = leftPos;
            }
         
            if (leftPos == 0 ){
                leftPos = 500;
                leftPos = (leftPos) + "px";
                element.style.left = leftPos;
            }


            check();

        }, miliseconds);
    }


    //Right movement here
    if (clickedKey === 'D') {
        setInterval(completeTime(),1000);
        clearInterval(downInterval);
        clearInterval(leftInterval);
        clearInterval(upInterval);
        rightInterval = setInterval(function () {

           
            rightPos = element.offsetLeft;
           
            if (rightPos < (500)) {
                rightPos = (rightPos + 10) + "px";

                element.style.left = rightPos;

            }
            rightPos = element.offsetLeft;
            if (rightPos == 500) {
                rightPos = 0;
                rightPos = (rightPos) + "px";
                element.style.left = rightPos;
            }
            check();
        }, miliseconds);
    }

})



