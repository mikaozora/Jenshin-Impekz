window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        // console.log(windowHeight);
        var revealTop = reveals[i].getBoundingClientRect().top;
        // console.log(i + " " + revealTop);
        var point = 0;
        if(revealTop < windowHeight - point){
            reveals[i].classList.add("show");
        }else{
            reveals[i].classList.remove("show");
        }
    }
}