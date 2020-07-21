//Firebase Config for SeniorTaskApp
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

//Initialize Firebase 
const admin = require('firebase'); 
admin.initializeApp(firebaseConfig);

//Get connection to Cloud Firestore database
const db = admin.firestore();

const senior = 'ilfnv0Ko1quMoQWSXXKZ';
const seniorRef = db.collection('seniors').doc(senior);

const task = '4eyyOeYNhF1pmfgr4Hp9';
const taskRef = db.collection('tasks').doc(task);

const volunteer = 'DBgGztTI5Zp6qVnJhasK';
const volunteerRef = db.collection('volunteers').doc(volunteer);

//Update a senior's name
async function updateSeniorName(fName, lName) {
  await seniorRef.update({first_name: fName});
  await seniorRef.update({last_name: lName});
  console.log("First name and last name of " + senior + "updated to " + fName + " " + lName + ".");
}
//updateSeniorName("Jeanne", "Galleja");

//Update a senior's address
async function updateSeniorAddress(pAddress) {
  await seniorRef.update({address: pAddress});
  console.log("Address of " + senior + "updated to " + pAddress + ".");
}
//updateSeniorAddress("Awesomesauce St.");

//Update a senior's city
async function updateSeniorCity(pCity) {
  await seniorRef.update({city: pCity});
  console.log("City of " + senior + "updated to " + pCity + ".");
}
//updateSeniorCity("San Francisco");

//Update a senior's state
async function updateSeniorState(pState) {
  await seniorRef.update({state: pState});
  console.log("State of " + senior + "updated to " + pState + ".");
}
//updateSeniorState("California");

//Update a senior's zip
async function updateSeniorZip(pZip) {
  await seniorRef.update({zip: pZip});
  console.log("Zip of " + senior + "updated to " + pZip + ".");
}
//updateSeniorZip(97863);

//Update a senior's email
async function updateSeniorEmail(pEmail) {
  await seniorRef.update({email: pEmail});
  console.log("Email of " + senior + "updated to " + pEmail + ".");
}
//updateSeniorEmail("somethingdifferent@yahoo.com");

//Update a senior's age
async function updateSeniorAge(pAge) {
  await seniorRef.update({age: pAge});
  console.log("Age of " + senior + "updated to " + pAge + ".");
}
//updateSeniorAge(56);

//Update a senior's phone number
async function updateSeniorPhone(pPhone) {
  await seniorRef.update({phone_number: pPhone});
  console.log("Phone number of " + senior + "updated to " + pPhone + ".");
}
//updateSeniorPhone(5368883405);

//VOLUNTEERS

//Update a volunteer's name
async function updateVolName(fName, lName) {
  await volunteerRef.update({first_name: fName});
  await volunteerRef.update({last_name: lName});
  console.log("First name and last name of " + volunteer + "updated to " + fName + " " + lName + ".");
}

//Update a volunteer's address
async function updateVolAddress(pAddress) {
  await volunteerRef.update({address: pAddress});
  console.log("Address of " + volunteer + "updated to " + pAddress + ".");
}

//Update a volunteer's city
async function updateVolCity(pCity) {
  await volunteerRef.update({city: pCity});
  console.log("City of " + volunteer + "updated to " + pCity + ".");
}

//Update a volunteer's state
async function updateVolState(pState) {
  await volunteerRef.update({state: pState});
  console.log("State of " + volunteer + "updated to " + pState + ".");
}

//Update a volunteer's zip
async function updateVolZip(pZip) {
  await volunteerRef.update({zip: pZip});
  console.log("Zip of " + volunteer + "updated to " + pZip + ".");
}

//Update a volunteer's email
async function updateVolEmail(pEmail) {
  await volunteerRef.update({email: pEmail});
  console.log("Email of " + volunteer + "updated to " + pEmail + ".");
}

//Update a volunteer's rating
async function updateVolAge(pRating) {
  await volunteerRef.update({rating: pRating});
  console.log("Rating of " + volunteer + "updated to " + pAge + ".");
}

//Update a volunteer's phone number
async function updateVolPhone(pPhone) {
  await volunteerRef.update({phone_number: pPhone});
  console.log("Phone number of " + volunteer + "updated to " + pPhone + ".");
}

//TASKS

//Update a task's completed_by
async function updateTaskCompletion(pBy) {
  await taskRef.update({completed_by: pBy});
  console.log("Completed by of " + task + "updated to " + pBy + ".");
}

//Update a task's created_by
async function updateTaskCreation(pBy) {
  await taskRef.update({created_by: pBy});
  console.log("Created by of " + task + "updated to " + pBy + ".");
}

//Update a task's description
async function updateTaskDesc(pDesc) {
  await taskRef.update({description: pDesc});
  console.log("Description of " + task + "updated to " + pDesc + ".");
}

//Update a task's note
async function updateTaskNote(pNote) {
  await taskRef.update({note: pNote});
  console.log("Note of " + task + "updated to " + pNote + ".");
}

//Update a task's status
async function updateTaskStatus(pStatus) {
  await taskRef.update({status: pStatus});
  console.log("Status of " + task + "updated to " + pStatus + ".");
}

//Update a task's title
async function updateTaskTitle(pTitle) {
  await taskRef.update({title: pTitle});
  console.log("Title of " + task + "updated to " + pTitle + ".");
}