// JS only
// initalize database
var db = firebase.firestore();

// querySelector variable
const list_div = document.querySelector("#list_div");

// get API query to return all data in the tasks document and displays tasks
db.collection("tasks")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      list_div.innerHTML +=
        "<div class='list_item' data-category='" +
        doc.data().category +
        "'><p>Name: " +
        doc.data().created_by +
        "<p>Date: " +
        doc.data().date +
        "<p>Title: " +
        doc.data().title +
        " <p>Description: " +
        doc.data().description +
        " <p>Note: " +
        doc.data().note +
        " <p>Category: " +
        doc.data().category +
        " </p></div>";
    });
  });


// filter function
function getCheckbox(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
	
  const checkGro = document.getElementById("grocery");
  const checkHou = document.getElementById("house cleaning");
  const checkGar = document.getElementById("yard work");
  const checkRep = document.getElementById("repairs");
  const checkTra = document.getElementById("transportation");
  const checkPet = document.getElementById("pet help");
  const checkOth = document.getElementById("other");
	
  const list = document.getElementById("list_div");

  for (let i in list.children) {
    let child = list.children[i];
    if (child.style !== undefined) {
      child.style.display = "block";
    }
    if (
      checkGro.checked === false &&
      child.dataset !== undefined &&
      child.dataset.category === "grocery shopping"
    ) {
      child.style.display = "none";
    }
   
	if (
      checkHou.checked === false &&
      child.dataset !== undefined &&
      child.dataset.category === "house cleaning"
    ) {
      child.style.display = "none";
    } 
	  
	if (
      checkGar.checked === false &&
      child.dataset !== undefined &&
      child.dataset.category === "yard work"
    ) {
      child.style.display = "none";
    }
	  
	if (
      checkRep.checked === false &&
      child.dataset !== undefined &&
      child.dataset.category === "repairs"
    ) {
      child.style.display = "none";
    }
	  
	if (
      checkTra.checked === false &&
      child.dataset !== undefined &&
      child.dataset.category === "transportation"
    ) {
      child.style.display = "none";
    }
	 
	 if (
      checkPet.checked === false &&
      child.dataset !== undefined &&
      child.dataset.category === "pet help"
    ) {
      child.style.display = "none";
    }
	   
	  
	if (
      checkOth.checked === false &&
      child.dataset !== undefined &&
      child.dataset.category === "other"
    ) {
      child.style.display = "none";
    }
	  
  }

  let values = [];

	// query to return tasks that are in the grocery shopping category
  const groTask = db
    .collection("tasks")
    .where("category", "==", "grocery shopping");
  groTask.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    });
  });

	// query to return tasks in the house cleaning category
	const houTask = db.collection("tasks").where("category", "==", "house cleaning");
  houTask.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    });
  });
	
// query to return tasks in the gardneing/yard work category
	const yarTask = db.collection("tasks").where("category", "==", "yard work");
  yarTask.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    });
  });
	
 // query to return tasks in the repairs category
	const repTask = db.collection("tasks").where("category", "==", "repairs");
  repTask.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    });
  });	

	// query to return tasks in the transportation category
	const traTask = db.collection("tasks").where("category", "==", "transportation");
  traTask.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    });
  });
	
// query to return tasks in the pet help category
	const petTask = db.collection("tasks").where("category", "==", "pet help");
  petTask.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    });
  });	
	
// querty to return tasks that are in the other category
  const othTask = db.collection("tasks").where("category", "==", "other");
  othTask.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    });
  });	

  checkboxes.forEach(checkbox => {
    values.push(checkbox.id);
  });
	
 	

  return values;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", event => {
  console.log(getCheckbox("id"));
});
