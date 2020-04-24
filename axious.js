
// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAb8eseTl2fTPNaGdkX9dtnqX9csjVRypw",
    authDomain: "form-c8d1c.firebaseapp.com",
    databaseURL: "https://form-c8d1c.firebaseio.com",
    projectId: "form-c8d1c",
    storageBucket: "form-c8d1c.appspot.com",
    messagingSenderId: "916699410001",
    appId: "1:916699410001:web:96afae95091ded5a5d5270"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
//function for new register
function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password")
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Registered Successfully!!Now you may login");

}
//function for login
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password")
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("signed in")
    
    //takes user to different page
    window.location.href = "dashboard.html";

}
//function for signOut
function signOut() {
    auth.signOut();
    alert("signed out")
    window.location.href = "index.html";

}
auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;
        alert("Active User " + email)
    }
    else {
        alert("no active user")
    }

});
//function for fetching all devices information & display in dashboard
fetch = (num) => {
    for (num = 1; num <= 4; num++) {
        axios.get(`https://test.bettad.xyz/device/${num}`)
            .then((response) => {
                console.log(response.data.response);

                var body = document.getElementById('dashbody')
                var table = document.getElementById("tbl")
                var row = document.createElement('tr')
                var td1 = document.createElement('td')
                var td2 = document.createElement('td')
                var td3 = document.createElement('td')
                var td4 = document.createElement('td')
                td1.textContent = response.data.response.device_id
                td2.textContent = response.data.response.device_name
                td3.textContent = response.data.response.device_type
                td4.textContent = response.data.response.device_power
                row.appendChild(td1)
                row.appendChild(td2)
                row.appendChild(td3)
                row.appendChild(td4)
                table.appendChild(row)
                body.appendChild(table)

            }).catch((error) => {
                console.log(error);
            })
    }
}






