// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbaFccxpo7SaUU7sU3cr5viX4ixQde5bY",
    authDomain: "project-b1cd0.firebaseapp.com",
    projectId: "project-b1cd0",
    storageBucket: "project-b1cd0.appspot.com",
    messagingSenderId: "165459635171",
    appId: "1:165459635171:web:a9de9c343f850587bd8ed6",
    measurementId: "G-J0FZ6N5GJ4"
  };

  firebase.initializeApp(firebaseConfig);

  var fbdb=firebase.database().ref().child("students");

  function insertData(){
      var rollno=document.getElementById("rollno").value;
      var name=document.getElementById("name").value;
      //console.log("data inserting");
      fbdb.child(rollno).set({
          Name:name,
          Rollno:rollno
      })
    //   fbdb.push({
    //     Name:name,
    //       Rollno:rollno
    //   })
  }

  function deleteData(){
      var rollno=window.prompt("Enter the rollno to be deleted");
        fbdb.child(rollno).remove();
        console.log("Data deleted");
  }

  function updateData(){
    var rollno=document.getElementById("rollno").value;
    var name=document.getElementById("name").value;
    fbdb.child(rollno).update({Name:name});
  }

  function readData(){
      fbdb.on("value",(snap)=>{
          snap.forEach((data)=>{
              console.log(data.val().Name);
              console.log(data.val().Rollno);
          })
      })
  }