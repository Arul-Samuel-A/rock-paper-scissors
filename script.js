let userHand = document.getElementById("user-hand");
let compHand = document.getElementById("comp-hand")
let rockButton = document.getElementById("option-rock");
let randomNumber = Math.floor(Math.random() * 3)
let resultUser = 0
let resultComp = 0
let textElemnt = document.getElementById("text-element")
let statsU = document.getElementById("statu")
let statsC = document.getElementById("statc")
let userWins = document.getElementById("user-wins")
let compWins = document.getElementById("comp-wins")
let userPoints = 0
let compPoints = 0


//function to everything after choosing (user side)

function choseRock(){
    revertUser()
    revertComp()
    changeImageToRockU()
    userHand.classList.add("shake")
    setTimeout(removeShake1,1000)
    setTimeout(changeImageToRockU, 1000)
    setTimeout(winOrLose, 1050)
}

function chosePaper(){
    revertUser()
    revertComp()
    changeImageToRockU()
    userHand.classList.add("shake")
    setTimeout(removeShake1,1000)
    setTimeout(changeImageToPaperU, 1000)
    setTimeout(winOrLose, 1050)
}

function choseScissor(){
    revertUser()
    revertComp()
    changeImageToRockU()
    userHand.classList.add("shake")
    setTimeout(removeShake1,1000)
    setTimeout(changeImageToScissorU, 1000)
    setTimeout(winOrLose, 1050)
}



//function to remove shake

function removeShake1(){
    userHand.classList.remove("shake")
}

function removeShake2(){
    compHand.classList.remove("shake")
}


//function to change image (user and Computer side)

function changeImageToRockU(){
    userHand.src = "./images/rockxpositive.png"
    resultUser = 1

}
function changeImageToRockC(){
    compHand.src = "./images/rockxnegative.png"
    resultComp = 1
}

function changeImageToPaperU(){
    userHand.src = "./images/paperxpositive.png"
    resultUser = 2
}
function changeImageToPaperC(){
    compHand.src = "./images/paperxnegative.png"
    resultComp = 2
}

function changeImageToScissorU(){
    userHand.src = "./images/scissorxpositive.png"
    resultUser = 3
}
function changeImageToScissorC(){
    compHand.src = "./images/scissorxnegative.png"
    resultComp = 3
}

//reset

function revertUser(){
    statsU.style.border = ""
}
function revertComp(){
    statsC.style.border = "";
}

//win or lose result

function winOrLose(){
    if(resultUser ===1 && resultComp === 1 ){
        textElemnt.textContent = "A Draw!!!"
    }
    else if(resultUser === 1 && resultComp === 2){
        //computer wins
        textElemnt.textContent = "Computer Won"
        statsC.style.border = "5px solid green"
        compPoints = compPoints + 1
        compWins.textContent = "Won "  + (compPoints/2)
    }
    else if(resultUser === 1 && resultComp === 3){
        //user wins
        textElemnt.textContent ="Hooray!You have Won"
        statsU.style.border = "5px solid green"
        userPoints = userPoints + 1
        userWins.textContent = "Won " + (userPoints/2)
    }
    else if(resultUser === 2 && resultComp === 1){
        //user wins
        textElemnt.textContent = "Hooray!You have Won"
        statsU.style.border = "5px solid green"
        userPoints = userPoints +1
        userWins.textContent = "Won " + (userPoints/2)

    }
    else if(resultUser === 2 && resultComp === 2){
        //tie
        textElemnt.textContent = "A Draw!!!"
    }
    else if(resultUser === 2 && resultComp === 3){
        //computer wins
        textElemnt.textContent = "Computer Won"
        statsC.style.border = "5px solid green"
        compPoints = compPoints +1
        compWins.textContent = "Won " + (compPoints/2)
    }
    else if(resultUser === 3 && resultComp === 1){
        //computer wins
        textElemnt.textContent = "Computer Won"
        statsC.style.border = "5px solid green"
        compPoints = compPoints +1
        compWins.textContent = "Won " + (compPoints/2)
    }
    else if(resultUser === 3 && resultComp === 2){
        //user wins
        textElemnt.textContent = "Hooray!You have Won"
        statsU.style.border = "5px solid green"
        userPoints = userPoints + 1
        userWins.textContent = "Won " + (userPoints/2)
    }
    else if(resultUser === 3 && resultComp === 3){
        //tie
        textElemnt.textContent = "A Draw!!!"
    }
}








//all function to computer side

function computer(){
    if(randomNumber === 0){
        cRock()
    }
    else if(randomNumber === 1){
        cPaper()
    }
    else{
        cScissor()
    }
    
}



function cRock(){
    changeImageToRockC()
    compHand.classList.add("shake")
    setTimeout(removeShake2,1000)
    setTimeout(changeImageToRockC, 1000)
    changeRandomNumber()
    setTimeout(winOrLose, 1050)
}

function cPaper(){
    changeImageToRockC()
    compHand.classList.add("shake")
    setTimeout(removeShake2,1000)
    setTimeout(changeImageToPaperC, 1000)
    changeRandomNumber()
    setTimeout(winOrLose, 1050)
}

function cScissor(){
    changeImageToRockC()
    compHand.classList.add("shake")
    setTimeout(removeShake2,1000)
    setTimeout(changeImageToScissorC, 1000)
    changeRandomNumber()
    setTimeout(winOrLose, 1050)
}

//Write after each computer programs

function changeRandomNumber(){
    randomNumber = Math.floor(Math.random() * 3)
}