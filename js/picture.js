let profileData = {};
const frontBtn = document.getElementById('front');

frontBtn.onclick = () => {
    location.href = "camera.html";
}

if ( localStorage.getItem('profileData')) {
    const uData = JSON.parse(localStorage.getItem('profileData'));
    console.log(uData.proofFront); 
    document.getElementById('frontImg').style.background = `url('${uData.proofFront}') center`
}  