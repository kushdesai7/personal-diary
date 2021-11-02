 const firebaseApp = firebase.initializeApp({  
   apiKey: "AIzaSyBcnQfoOk87xMv9iYGHATb2qtXbIdMDkjA",
    authDomain: "personal-diary-352cf.firebaseapp.com",
    projectId: "personal-diary-352cf",
    storageBucket: "personal-diary-352cf.appspot.com",
    messagingSenderId: "193410935291",
    appId: "1:193410935291:web:32cfab4b665c98c2dc035e",
    measurementId: "G-Z12762KZR5" });
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

   
  

	
		
		
		
	
