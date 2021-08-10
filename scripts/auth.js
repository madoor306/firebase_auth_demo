// signup

const signupform = document.querySelector("#signup-form");
signupform.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;
    
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupform.reset();
    })

})