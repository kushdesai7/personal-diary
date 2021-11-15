 const firebaseApp = firebase.initializeApp({  
   apiKey: "AIzaSyDPW880byQT8UWKI5AZolIgF0n0I5qNZv8",
    authDomain: "personal-dairy-7dc90.firebaseapp.com",
    projectId: "personal-dairy-7dc90",
    storageBucket: "personal-dairy-7dc90.appspot.com",
    messagingSenderId: "610463353323",
    appId: "1:610463353323:web:c2839aebd3801a183f31ae",
    measurementId: "G-BZB44933WV" });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth(); 
  const GoogleAuth = new firebase.auth.GoogleAuthProvider();
 
   
 function SignUpNew(){
   var email = document.getElementById("email");
	var password = document.getElementById("password");
	var name = document.getElementById("name");
   
	const promise = auth.createUserWithEmailAndPassword(email.value,password.value );
	promise.catch(e => alert(e.message));


	window.open("Dashboard.html");
   }
   
    function SignInApp(){
		var email = document.getElementById("txtemail");
		var password = document.getElementById("txtpassword");
		
		const promise = auth.signInWithEmailAndPassword(txtemail.value, txtpassword.value);
        promise.catch(e => alert(e.message));


	
   }
   function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	 function signInWithGoogle(){
		
		
  firebase.auth().signInWithPopup(GoogleAuth);

   
		
	}

auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			window.open('Dashboard.html','_self');
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			
			//no user is signed in
		}
		
		
		
	});

   
  

	
		
		
		
	
