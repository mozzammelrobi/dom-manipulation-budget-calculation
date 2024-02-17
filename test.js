function clickMe(){
    console.log('button click')
}

const allBtn = document.getElementsByClassName("add-btn");
for(const btns of allBtn){
    btns.addEventListener('click', clickMe)
} 