const addNoteBtn = document.getElementById('add-note-btn'),
	  noteColors = document.querySelectorAll('.add-note-colors div'),
	  noteContainer = document.querySelector('.notes-container');
	  signOutBtn = document.getElementById('btnSignOut');

const firebaseApp = firebase.initializeApp({  
 apiKey: "AIzaSyDPW880byQT8UWKI5AZolIgF0n0I5qNZv8",
    authDomain: "personal-dairy-7dc90.firebaseapp.com",
    projectId: "personal-dairy-7dc90",
    storageBucket: "personal-dairy-7dc90.appspot.com",
    messagingSenderId: "610463353323",
    appId: "1:610463353323:web:c2839aebd3801a183f31ae",
    measurementId: "G-BZB44933WV" });
const auth = firebaseApp.auth(); 

  
signOutBtn.addEventListener('click', () => {
	debugger;
	// Firebase sign out
	try {
		auth.signOut().then(function() {
			// Sign-out successful.
			alert("OK");
			location.href = "/personal-diary";
		  })
		  .catch(function(error) {
			// An error happened
			alert("NOT OK");
		  });
	  } catch (e){
	   // an error
	  } 
});

let notes = JSON.parse(localStorage.getItem('notes')) || [];
console.log(notes);

if (notes.length > 0) {
	notes.forEach(note => {
		const noteColor = note.color;
		// CONTAINER DIV
		const noteElement = document.createElement('div');
		noteElement.classList.add('note');
		noteElement.style.backgroundColor = 'var(--' + noteColor + ')';
		// TEXTARRA
		const textArea = document.createElement('textarea');
		textArea.classList.add('note-text');
		textArea.setAttribute('placeholder', 'Your note here');
		textArea.value = note.text;
		// ICON
		const icon = document.createElement('i');
		icon.classList.add('fas');
		icon.classList.add('fa-trash');

		noteElement.appendChild(textArea);
		noteElement.appendChild(icon);
		noteContainer.appendChild(noteElement);
	});
}


// Functions
// CHECK for notes in local storage
function checkNotes(notes) {
	if (localStorage.getItem('notes') === null) {
		notes = [];
	} else {
		notes = JSON.parse(localStorage.getItem('notes'));
	}
	return notes;
}


// ADD animation class to color circles
function showColors() {
	noteColors.forEach(color => {
		if (color.classList.contains('hidden')) {
			color.classList.add('appear');
			color.classList.remove('hidden');
		} else {
			color.classList.add('hidden');
			color.classList.remove('appear');
		}
	});
}

// ADD note in notes container of selected color
function createAndAddNote(e) {
	const noteColor = e.target.dataset.color;
	// CONTAINER DIV
	const noteElement = document.createElement('div');
	noteElement.classList.add('note');
	noteElement.style.backgroundColor = 'var(--' + noteColor + ')';
	// TEXTARRA
	const textArea = document.createElement('textarea');
	textArea.classList.add('note-text');
	textArea.setAttribute('placeholder', 'Your note here');
	// ICON
	const icon = document.createElement('i');
	icon.classList.add('fas');
	icon.classList.add('fa-trash');
	// ICON Save
	const icon_save = document.createElement('i');
	icon_save.classList.add('fas');
	icon_save.classList.add('fa-save');


	// Add listener
	textArea.addEventListener('focusout', (e) => {
		const noteObj = {
			text: e.target.value,
			color: noteColor,
		}
		notes = checkNotes(notes);
		notes.push(noteObj);
		localStorage.setItem('notes', JSON.stringify(notes));
	});

	noteElement.appendChild(textArea);
	noteElement.appendChild(icon_save);
	noteElement.appendChild(icon);
	noteContainer.appendChild(noteElement);
}


// DELETE Note
function deleteNote(e) {
	if(e.target.classList.contains('fa-trash')) {
		e.target.parentElement.remove();
		notes = checkNotes(notes);
		notes.forEach(note => {
			if (note.text === e.target.parentElement.childNodes[0].value){
				console.log('DELETE');
				let i = notes.indexOf(note.text);
				notes.splice(i,1);
			}
		});
		localStorage.setItem('notes', JSON.stringify(notes));
	}
}

// // SAVE to local storage
// function saveToLocalStg(note) {
//	 let notes = JSON.parse(localStorage.getItem('notes')) || [];
//	 notes.push(note);
//	 localStorage.setItem('notes', JSON.stringify(notes));
// }

// let textAreas = document.getElementsByClassName('note-text') || [];

// console.log(textAreas[0]);

// setInterval(() => {
//	 console.log(textAreas);
// }, 1000);

// textAreas.forEach(textArea => {
//	 textArea.addEventListener('focusout', () => {
//		 console.log(textArea.value);
//	 });
// });

// for (const key in textAreas) {
//	 console.log(textAreas[key]);
// }


noteColors.forEach(color => {
	color.addEventListener('click', createAndAddNote);
});

document.querySelector('.notes-container').addEventListener('click', deleteNote);

addNoteBtn.addEventListener('click', showColors);


// tempNoteArr.forEach(n => {
//	 let nt;
//	 n.childNodes[0].addEventListener('focusout', (e) => {
//		 console.log('hello');
//		 const noteObj = {
//			 text: e.target.value,
//			 // color: e.target,
//		 }
//		 nt = JSON.parse(localStorage.getItem('notes'));
//		 nt.push(noteObj);
//	 });  
//	 localStorage.setItem('notes', JSON.stringify(nt));
// });
