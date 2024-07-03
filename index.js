for(let i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      
        let btnInnerHTML=this.innerHTML;
        makeSounds(btnInnerHTML);
        buttonAnimation(btnInnerHTML);
        
    })
}

document.addEventListener("keydown", function(event){
    makeSounds(event.key);
    buttonAnimation(event.key);
})

function makeSounds(key){
    switch (key) {
        case "w":
            let crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
       
        case "a":
            let kickBash=new Audio("sounds/kick-bass.mp3");
            kickBash.play();
            break;
        case "s":
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;    
        case "d":
            let tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;  
        case "k":
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;      
        case "l":
            let tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;    
         default:
            console.log("Din't clicked Right button");
            break;
       }
}


function buttonAnimation(currentKey) {
    var btnActive=document.querySelector("."+currentKey);
    btnActive.classList.add("pressed");
    setTimeout(function(){
        btnActive.classList.remove("pressed");
    })
}
