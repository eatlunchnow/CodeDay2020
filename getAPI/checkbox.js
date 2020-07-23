// JS only 
// initalize database
var db = firebase.firestore();

// querySelector variable
const list_div = document.querySelector("#list_div");

// get API query to return all data in the tasks document
db.collection("tasks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        list_div.innerHTML += "<div class='list_item'><p>Name: " + doc.data().created_by + "<p>Date: " + doc.data().date + "<p>Title: " + doc.data().title + " <p>Description: " + doc.data().description + " <p>Note: " + doc.data().note + "</p></div>"
    });
});



function checkboxFilter(name){
	const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
	
	// variable to get elements by id
	const groFilter = document.getElementById("grocery");
	
	// query to return all tasks in the grocery shopping category
	let values = db.collection("tasks").where("category", "==", "grocery shopping")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
		  });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
	
	checkboxes.forEach((checkbox) => {
		values.push(checkbox.id);
	});
	
	return values;
	
	
const othFilter = document.getElementById("other");
	
	// query to return all tasks under the category other
	let values2 = db.collection("tasks").where("category", "==", "other")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           
            console.log(doc.id, " => ", doc.data());
		  });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
	
	checkboxs.forEach((checkbox) => {
		values.push(checkbox.id);
	});
	
	return values2;
	
}

// button event	
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
	console.log(checkboxFilter("id"));
})