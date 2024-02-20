var birdimg=document.querySelector('.bird img')
setInterval(function(){
    birdimg.src="./images/bird2.png";
},200)
setInterval(function(){
   
   birdimg.src='./images/test.png';
},300)
 
 
var pice1_hg;
setInterval(function(){
    pice1_hg=Math.floor(Math.random() * 10) + 30;
    hole1_hg=Math.floor(Math.random()*20) + 20;
    document.getElementById('pice1').style.height=pice1_hg + "%";
    document.getElementById('pice2').style.top=pice1_hg + hole1_hg + '%';
     document.getElementById('pice2').style.height=100 - (pice1_hg + hole1_hg) +"%";

},2500)
var bird=document.querySelector('.bird');
setInterval(function(){
    var x=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(x <= 510){
  bird.style.top=(x + 3) + "px";
  
    }else{
         alert(" GAME OVER !! SO DIEM: " + score);
        
         bird.style.top=100 + "px";
         window.location.reload();
        document.querySelector('#pice1 ,.obs').style.animation='move';
        document.querySelector('#pice2 , .obs').style.animation='move';
    }
},30)
function jump(){
    var fly=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(fly >= 14){
        bird.style.top=(fly - 40)+"px";
         
    }
}
  
document.addEventListener("keydown",function(e){
    if(e.code='space'){
        jump();
    }
})
var score=0;
setInterval(function romo(){
    
        score++;
    document.getElementById('src').innerHTML=score;
    
} ,500)
var elm1Rect
function checkcollision(elm1,elm2){
     elm1.getBoundingClientRect();
     elm1Rect= elm1.getBoundingClientRect();
    var elm2Rect=elm2.getBoundingClientRect();
 return(elm1Rect.right >= elm2Rect.left && elm1Rect.left <= elm2Rect.right  && elm1Rect.bottom >= elm2Rect.top
     && elm1Rect.top <= elm2Rect.bottom);
 
}

setInterval(function(){
    if(checkcollision(document.querySelector('.bird'),document.getElementById("pice1") )){
           bird.style.top=513 + "px";
           setTimeout(function(){
            alert(" GAME OVER !! SO DIEM :" + score);
            
            return;
           },10)
           window.location.reload();
    }else if(checkcollision(document.querySelector('.bird'),document.getElementById("pice2"))){
        bird.style.top=513 + "px";
        setTimeout(function(){
            alert(" GAME OVER !! SO DIEM :" + score);
        
         return;

        },10)
         window.location.reload();
    }
},100)
  
