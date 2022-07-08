let reg = document.getElementById('reg');
reg.addEventListener('click',Bvrtgel);
function Bvrtgel(){
    let passWord = document.getElementById('pass')
    let rePassWor = document.getElementById('rePass')
    if(passWord.value == rePassWor.value){
        passWord.style.borderBlockColor="red";
        alert("amjiltai nevterlee")
        
    }else if(passWord.value !==rePassWor.value){
        alert("nuuts vgee dahin oruulahdaa zov oruulna uu")
    }
    
}