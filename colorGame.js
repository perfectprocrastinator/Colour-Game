let numSquares=6;
let easybtn=document.getElementById("easy");
let hardbtn=document.getElementById("hard");
let resetbtn=document.querySelector("#reset");
let head=document.querySelector("h1");
var col=generateColors(numSquares);
var sq=document.querySelectorAll(".square");
var pickedColor=pickColor();
var rgb=document.getElementById("rgb");
rgb.textContent=pickedColor;
let msgDisplay=document.querySelector("#msgDisplay");
hardbtn.addEventListener("click",function () {
    msgDisplay.textContent="";
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    head.style.backgroundColor="black";
    numSquares=6;
    col=generateColors(numSquares);
    pickedColor=pickColor();
    rgb.textContent=pickedColor;
    for(let i=0;i<sq.length;i++){
        sq[i].style.display="block";
        sq[i].style.backgroundColor=col[i];

    }

})
easybtn.addEventListener("click",function () {
    msgDisplay.textContent="";
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    head.style.backgroundColor="black";
    numSquares=3;
    col=generateColors(numSquares);
    pickedColor=pickColor();
    rgb.textContent=pickedColor;
    for(let i=0;i<sq.length;i++){
        if(col[i]){
            sq[i].style.backgroundColor=col[i];
            sq[i+3].style.display="none";
        }
    }

})
for(var i=0;i<sq.length;i++){
    sq[i].style.backgroundColor=col[i];
    sq[i].addEventListener("click",function () {
        var clickedColor=this.style.backgroundColor;
        console.log("Clicked color is:"+clickedColor);
        console.log("Picked color is:"+pickedColor);
        if(clickedColor === pickedColor){
            for(let i=0;i<sq.length;i++){
                sq[i].style.backgroundColor=clickedColor;
            }
            head.style.backgroundColor=clickedColor;
            msgDisplay.textContent="Correct!!";
            resetbtn.innerHTML="Play again";
        }
        else{

            this.style.backgroundColor="#232323";
            msgDisplay.textContent="Try Again!!";
        }
    })
}
resetbtn.addEventListener("click",function () {

    resetbtn.textContent="New Colors"
    console.log("Reset button");
    head.style.backgroundColor="steelblue";
    msgDisplay.textContent="";
     col=generateColors(numSquares);
     pickedColor=pickColor();
    rgb.textContent=pickedColor;
    for(let i=0;i<sq.length;i++){
     //   sq[i].style.display="block";
        sq[i].style.backgroundColor=col[i];

    }
})

function generateColors(nums) {
    let arr=[];
    for(let i=0;i<nums;i++){
        let r=Math.floor(Math.random()*256);
        let g=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        "rgb(255, 255, 0)";
        arr[i]="rgb("+r+", "+g+", "+b+")";

    }
    return arr;

}
function pickColor() {
   let index= Math.floor(Math.random()*col.length);
    return col[index];
}







