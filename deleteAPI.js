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

//Delete a senior
async function deleteSenior() {
  const docName = seniorRef.id;
  await seniorRef.delete();
  console.log(docName + " deleted.")
}
deleteSenior();

//Delete a task
async function deleteTask() {
  const docName = taskRef.id;
  await taskRef.delete();
  console.log(docName + " deleted.");
}
deleteTask();

//Delete a volunteer
async function deleteVolunteer() {
  const docName = volunteerRef.id;
  await volunteerRef.delete();
  console.log(docName + " deleted.");
}
deleteVolunteer();
