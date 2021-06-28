var timeLeft=15;
var removeInterval;
var count=0;
var myVar;
var gridNumber=10;
const resetClickHandler=()=>{
    clearInterval(removeInterval)
    clearInterval(myVar)
    count=0
    gridNumber=10
    document.getElementById("time-left").innerText=15;
    document.getElementById("score").innerText=0;
    timeLeft=15
    document.getElementById("time-left").innerText=timeLeft
}
const startClickHandler=()=>{
  
        removeInterval=setInterval(decrease,1000)
        myvar= setInterval(moleChange,1000)
       
}

function decrease(){
    if(timeLeft==0){
        clearInterval(removeInterval)
        clearInterval(myVar)
        return
    }
    timeLeft--
    document.getElementById("time-left").innerText=timeLeft;
}

function cellClickHandler(index){
   
    if(index==gridNumber && timeLeft>0 && timeLeft<15){
        count++
        document.getElementById("score").innerText=count
    }
}
function moleChange(){
   
    let moles=document.getElementsByClassName("mole")
    if(moles.length>0){
     moles[0].className="square"
    }
    
    let squares=document.getElementsByClassName("square")
    gridNumber=Math.floor(Math.random()*9)
    squares[gridNumber].className = 'mole';
   
}