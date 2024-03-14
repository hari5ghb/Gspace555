const decrease_btn  = document.getElementById("decreasebtn");
const increase_btn  = document.getElementById("increasebtn");

const count_label  = document.getElementById("countlabel");
let count = 0;

increase_btn.onclick = function(){

    count++;
    count_label.textContent = count;
}

decrease_btn.onclick = function(){

    count--;
    if(count<=0){
        count=0;
    }
    count_label.textContent = count;
}

