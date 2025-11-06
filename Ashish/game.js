let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector('#reset-button')

let turnO = true;

const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked ✅")
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
const checkWinner = () => {
    for (pattern of winningPatterns) {
        let pos1Val =boxes[pattern[0]].innerHTML
        let pos2Val =boxes[pattern[1]].innerHTML
        let pos3Val = boxes[pattern[2]].innerHTML
        
    if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val)
        }
    }
             
            
            
    }
}