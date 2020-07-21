// node.js

// database connection
const admin = require('firebase-admin');

const serviceAccount = require('./service_key_n.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

// functions to read data
// get data from tasks collection
async function getTasks(){
  //const text = document.getElementById('text')
  const snapshot = await db.collection('tasks').get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return; 
  }  
  snapshot.forEach((doc) => {
    console.log('Tasks: ', doc.id, '=>', doc.data());
  });
  }
  getTasks()

  // get data from seniors collection
  async function getSeniors(){
    const snapshot = await db.collection('seniors').get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  
    snapshot.forEach((doc) => {
      console.log('Senior: ', doc.id, '=>', doc.data());
    });
    }
    getSeniors()

    // get data from volunteers collection
    async function getVols(){
      const snapshot = await db.collection('volunteers').get();
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
      snapshot.forEach((doc) => {
        console.log('Volunteer: ', doc.id, '=>', doc.data());
      });
      }
      getVols()
 

    

