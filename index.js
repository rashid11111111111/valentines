const yesButton =  document.querySelector('.yes');
const noButton =  document.querySelector('.no');
const flowerCat = document.querySelector('.first-cat');
const chibi = document.querySelector('.chibi');
const sadCat1 = document.querySelector('.sad-1');
const sadCat2 = document.querySelector('.sad-2');
const sadCat3 = document.querySelector('.sad-3');
const ligaw = document.querySelector('#ligaw');

yesButton.onclick = () => {
    flowerCat.style.display = "none";
    sadCat1.style.display = "none";
    sadCat2.style.display = "none";
    noButton.style.display = "none";
    yesButton.style.display = "none";
    sadCat3.style.display = "none";
    chibi.style.display = "block";
    ligaw.innerText = "Labyu na po agad 💘"
}

noButton.onclick = nofunction;

const sadArray = [sadCat1, sadCat2, sadCat3];
const sadquotes = ["Pleaseeeee", "Whyyyyy", "😭😭😭"];
let index = 0;

function nofunction(){
    let yesHeight = yesButton.clientHeight;
    let yesWidth = yesButton.clientWidth;
     flowerCat.style.display = "none";

     if (index < sadArray.length) {
        sadArray[index].style.display = "none";
        ligaw.innerHTML = sadquotes[index];
        console.log(sadquotes[index]);
    };

    yesButton.style.width = yesHeight + 40 + "px";
    yesButton.style.height = yesWidth + 40 + "px";
    
    index++;

    if (index >= sadArray.length) {
       index=0;
       noButton.style.display = "none";

    };

    
     sadArray[index].style.display = "block";
        

}

