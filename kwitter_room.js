
const firebaseConfig = {
      apiKey: "AIzaSyDUJT1aDpVBH6TNDNGKTYb_6zvXYgee4jQ",
      authDomain: "kwitter-35ef7.firebaseapp.com",
      databaseURL: "https://kwitter-35ef7-default-rtdb.firebaseio.com",
      projectId: "kwitter-35ef7",
      storageBucket: "kwitter-35ef7.appspot.com",
      messagingSenderId: "926480693445",
      appId: "1:926480693445:web:82e9ff75e7e11be7a398ac"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
