//FIREBASE CONFIG
var firebaseConfig = {
    apiKey: "AIzaSyAVJnV4eZDw2GFoy8HtGDCMJO4_H_1OwGQ",
    authDomain: "codelabs2020-52ae1.firebaseapp.com",
    databaseURL: "https://codelabs2020-52ae1.firebaseio.com",
    projectId: "codelabs2020-52ae1",
    storageBucket: "codelabs2020-52ae1.appspot.com",
    messagingSenderId: "139276775839",
    appId: "1:139276775839:web:3c95fb62510e17f98d8daa",
    measurementId: "G-YPM5BB0LNK"
};
firebase.initializeApp(firebaseConfig); // Initialize Firebase
var firestore = firebase.firestore();

//GETTING STATE FROM DROPDOWN
var inputSenState = document.getElementById('seniorState').value;
var inputVolState = document.getElementById('volunState').value;

//TEXT AREA
const senDetails = document.querySelector("#seniorDetails");
const volDetails = document.querySelector("#volunDetails");

//INPUT FIELDS
const inputSenFirst = document.querySelector("#seniorFirst");
const inputSenLast = document.querySelector("#seniorLast");
const inputSenEmail = document.querySelector("#seniorMail");
const inputSenAge = document.querySelector("#seniorAge");
const inputSenCity = document.querySelector("#seniorCity");
const inputSenAdd = document.querySelector("#seniorAdd");
const inputSenZip = document.querySelector("#seniorZip");
const inputSenPhone = document.querySelector("#seniorPhone");
const inputSenPass = document.querySelector("#seniorPass");

const inputVolFirst = document.querySelector("#volunFirst");
const inputVolLast = document.querySelector("#volunLast");
const inputVolMail = document.querySelector("#volunEmail");
const inputVolAge = document.querySelector("#volunAge");
const inputVolCity = document.querySelector("#volunCity");
const inputVolAdd = document.querySelector("#volunAdd");
const inputVolZip = document.querySelector("#volunZip");
const inputVolPhone = document.querySelector("#volunPhone");
const inputVolPass = document.querySelector("#volunPass");

//BUTTONS
const createSenior = document.querySelector("#createSenior"); //create a task button 
const createVolun = document.querySelector("#createVolun");

//CREATE A VOLUNTEER BUTTON
createVolun.addEventListener("click", function() {
    console.log("Entered createVolunteer button");
    const fName = inputVolFirst.value;
    const lName = inputVolLast.value;
    const sCity = inputVolCity.value;
    const sState = inputVolState;
    const sAge = inputVolAge.value;
    const sZip = inputVolZip.value;
    const sPhone = inputVolPhone.value;
    const sAdd = inputVolAdd.value;
    const sEmail = inputVolMail.value;
    const sPass = inputVolPass.value;
    const ref = firestore.collection('volunteers').doc(fName + lName);
    ref.set({
        first_name : fName,
        last_name : lName,
        city : sCity,
        state : sState, 
        age : sAge,
        zip : sZip,
        phone : sPhone, 
        address : sAdd,
        email : sEmail,
        rating : -1,
        password : sPass
    });
    ref.get().then(function (doc) {
        if (doc.exists) {
            volDetails.innerText = "Congrats " +fName + " " + lName + ", your volunteer profile has been created. Thanks for joining the Helping Hand family!"; //print the updated task
        } else {
            console.log("No such document exists!");
        }
    }).catch(function (error) {
        console.log("Got an error: ", error);
    })
})


//CREATE A SENIOR BUTTON
createSenior.addEventListener("click", function() {
    console.log("Entered createSenior button");
    const fName = inputSenFirst.value;
    const lName = inputSenLast.value;
    const sCity = inputSenCity.value;
    const sState = "California";
    const sAge = inputSenAge.value;
    const sZip = inputSenZip.value;
    const sPhone = inputSenPhone.value;
    const sAdd = inputSenAdd.value;
    const sEmail = inputSenEmail.value;
    const sPass = inputSenPass.value;
    const ref = firestore.collection('seniors').doc(fName + lName);
    ref.set({
        first_name : fName,
        last_name : lName,
        city : sCity,
        state : sState, 
        age : sAge,
        zip : sZip,
        phone : sPhone, 
        address : sAdd,
        email : sEmail,
        password :sPass
    });
    ref.get().then(function (doc) {
        if (doc.exists) {
            seniorDetails.innerText = "Congrats " +fName + " " + lName + ", your profile has been created."; //print the updated task
        } else {
            console.log("No such document exists!");
        }
    }).catch(function (error) {
        console.log("Got an error: ", error);
    })
})