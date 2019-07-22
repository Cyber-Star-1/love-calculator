var randomnumber = (Math.random()*100)+1;
randomnumber = Math.floor(randomnumber);


if (randomnumber>= 70){
    document.querySelector("p").innerHTML = "You Love Each Other "+ randomnumber +"%.You Love Each other like Romeo & Juliet."
}
if (randomnumber<= 70 && randomnumber >= 30){
    document.querySelector("p").innerHTML = "You Love Each Other " + randomnumber +"%."
}
if (randomnumber<=30){
    document.querySelector("p").innerHTML = "You Love Each Other " + randomnumber +"%.You go through eachother like oil and water"
}
