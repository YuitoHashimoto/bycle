window.onload = () => {
    let alertBtn = document.getElementById('alertBtn');
    let missionBox = document.getElementById('missionBox');
    let flag = false;

    alertBtn.onclick = () => {
        if (!flag) {
            missionBox.style.right = "-20px"  
            flag = true;
        }
        else {
            missionBox.style.right = "-500px" 
            flag = false; 
        }
    }
}