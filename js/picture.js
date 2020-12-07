let profileData = {};

if ( localStorage.getItem('profileData')) {
    profileData = JSON.parse(localStorage.getItem('profileData'));
}

console.log(profileData); 