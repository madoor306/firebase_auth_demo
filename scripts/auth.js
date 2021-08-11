// get data
db.collection('guides').get().then( snapshot => {
    setupGuides(snapshot.docs);
});

// listen for auth status change
auth.onAuthStateChanged(user => {
    if(user) {
        console.log('User logged in -> ', user);
    } else {
        console.log('User logged out.');
    }
});

// signup
const signupform = document.querySelector("#signup-form");
signupform.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;
    
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupform.reset();
    });

});

// logout 
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut();
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get User info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    //login the user
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});