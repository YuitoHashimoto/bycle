let profileData = {
        name: "",
        email: "",
        password: "",
        proofFront: "",
        proofBack: "",
        bank: "三井住友",
        bankName: "",
        bankRuby: "",
        bankBirth: "",
        bankBranch: "",
        bankNumber: 0,
    },
    nextBtn = document.getElementById('nextBtn');

// ローカルストレージに入力項目がある場合セットする
if ( localStorage.getItem('profileData')) {
    profileData = JSON.parse(localStorage.getItem('profileData'));

    // 入力欄に項目セット
    document.getElementById('name').value = profileData.name
    document.getElementById('email').value = profileData.email
}


nextBtn.addEventListener('click', () => {
    profileData.name = document.getElementById('name').value;
    profileData.email = document.getElementById('email').value;
    profileData.password = document.getElementById('password').value;
    profileData.checkPass = document.getElementById('checkPass').value;

    nextBtnFunc();
})

const nextBtnFunc = () => {
    if (profileData.name === "" | profileData.email === "" | profileData.password === "" | profileData.checkPass === "") {
        console.log("必須項目が未入力です。")
        location.href = "proofRegi.html"
        localStorage.setItem('profileData', JSON.stringify(profileData))
    } else {
        localStorage.setItem('profileData', JSON.stringify(profileData))
        console.log("入力完了")
    }
} 
