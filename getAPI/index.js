const admin = require('firebase-admin');

const serviceAccount = require('./service_key_r.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 


async function getData(){
  const taskRef = db.collection('tasks').doc('4eyyOeYNhF1pmfgr4Hp9');
  const doc = await taskRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }

}
getData()  