let start=false;
let level=0;
let h2=document.querySelector('h2');
let box=["btn1","btn2","btn3","btn4"];
let gameseq=[];
let userseq=[];

document.addEventListener("keypress",function(){
    if(start==false)
    {
    console.log("game started");
    }
    start=true;
  levelup();
})
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*4);
   let classes= box[idx]

   let btn=document.querySelector(`.${classes}`);   
   gameseq.push(classes);
    console.log(gameseq);
    flash(btn);
}
function flash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },250);
}
function btnpress(){
    music1();
    let btn=this;
    flash(btn);
   let class1= btn.getAttribute("id");
   userseq.push(class1);
   console.log(userseq);
   check(userseq.length-1);
}
let btnall=document.querySelectorAll(".btn");
for(btn of btnall){
    btn.addEventListener("click",btnpress) ;
     
}

 function check(idx){
    if(userseq[idx]==gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
           setTimeout(function(){
            levelup();
        },1000);
        }
        }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}<b><br>Press any key to Restart</br>`
        restartToee();
    }
}
function restartToee()
{
    start=false;
    level=0;
    gameseq=[];
    userseq=[];
}
 function music1(){
    let audio=new Audio("C:\\Users\\anura\\OneDrive\\Desktop\\audio.mp3");
    audio.play();
}

