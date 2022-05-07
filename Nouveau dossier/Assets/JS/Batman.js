let btninverse = document.getElementsByClassName('btninverse');

for(let i=0;i<btninverse.length;i++){
    btninverse[i].addEventListener('mouseover',()=>{
        btninverse[i].style.backgroundColor ='#b11313';
        btninverse[i].style.color='white';
        btninverse[i].style.fontWeight='bold'

    });
    btninverse[i].addEventListener('mouseout',()=>{
        btninverse[i].style.backgroundColor ='white';
        btninverse[i].style.color='#b11313'; 
        btninverse[i].style.fontWeight='';

    });
}

let footerlogos= document.getElementsByClassName('logos');

 for(let i=0;i<footerlogos.length;i++){
    footerlogos[i].addEventListener('mouseover',()=>{
       
        footerlogos[i].style.color='white';
       
    });
    footerlogos[i].addEventListener('mouseout',()=>{
       
        footerlogos[i].style.color='#b11313';
       
    });
}



$("document").ready(function(){
    $(".titre").animate({
        left: "50px",
    });
    $(".description").fadeIn(5000);
  });



$("button").click(function(){
    alert($("div").scrollTop());
  });