document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {//seperates section links from external web links
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

document.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint)
        {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}




//Game code
let isMovingRight = false;
let isMovingLeft = false;
document.addEventListener('click',function()
{
    jump();
});

document.addEventListener('keydown', function(event){
    if(event.key === 'D' || event.key === 'd')
    {
        isMovingRight = true;
        movePlayer('right');
    }else if(event.key === 'A' || event.key === 'a')
    {
        isMovingLeft = true;
        movePlayer('left');
    }

});
document.addEventListener('keyup',(event) => {
    if(event.key ==='d' || event.key ==='D')
    {
        isMovingRight = false;
    }else if(event.key ==='A' || event.key ==='a')
    {
        isMovingLeft = false;
    }
    character.classList.remove("moving");
} )



var character = document.getElementById("character");
function jump(){
    if(character.classList != "animate")
    {
        character.classList.add("animate");
    }
    
    setTimeout(function()
    {
        character.classList.remove("animate");
    },500);
}


function movePlayer(direction)
{
    const curPos = parseInt(getComputedStyle(character).left);
    let newPosition;
    

    if(isMovingRight)
    {
        if(character.classList != "moving")
        {
            character.classList.add("moving");
        }
        newPosition = curPos + 1;
    }
    else if(isMovingLeft)
    {
        newPosition = curPos - 1;
    } else{
        return;
    }
    character.style.left = newPosition +'px';

    keepCharIn();
    requestAnimationFrame(() => movePlayer(direction));
}

function keepCharIn()
{
    const gameWidth = 500;
    const charWidth = 24;
    const charLeft = parseInt(getComputedStyle(character).left);

    if(charLeft < 0)
    {
        character.style.left = '0px';
    }
    const maxRight = gameWidth - charWidth;
    if(charLeft>maxRight)
    {
        character.style.left = maxRight +'px';
    }
}
