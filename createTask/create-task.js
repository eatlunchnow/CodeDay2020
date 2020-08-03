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

//REFERENCES
const docRef = firestore.collection('tasks'); //ending no longer needed when querying all 

//TEXT AREA
const taskDetails = document.getElementById("taskDetails"); //text area

//INPUT FIELDS
const inputCreator = document.querySelector("#seniorName");
const inputDesc = document.querySelector("#desc");
const inputCat = document.querySelector("#category");
const inputTitle = document.querySelector("#title");
const inputDay = document.querySelector("#day");
const inputTime = document.querySelector("#time");
const inputNotes = document.querySelector("#notes");
//status is default set to incomplete

//BUTTONS
const createTask = document.querySelector("#createTask"); //create a task button 

//CREATE A TASK BUTTON
createTask.addEventListener("click", function() {
    console.log("Entered createTask button");
    const creator = inputCreator.value;
    const desc = inputDesc.value;
    const cat = inputCat.value;
    const tTitle = inputTitle.value;
    const tDay = inputDay.value;
    const tTime = inputTime.value;    
    const tNotes = inputNotes.value;
    const ref = firestore.collection('tasks').doc(tTitle + creator);
    ref.set({
        title : tTitle,
        created_by : creator,
        description : desc,
        category : cat,
        date : tDay,
        notes : tNotes,
        time : tTime,
        status:  "Incomplete"
    });
    ref.get().then(function (doc) {
        if (doc.exists) {
            task = doc.data();
            console.log("New task created successfully!");
        } else {
            console.log("No such document exists!");
        }
    }).catch(function (error) {
        console.log("Got an error: ", error);
    })
})
