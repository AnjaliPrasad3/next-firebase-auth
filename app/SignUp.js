// SignUp.js
import React from 'react';
import firebase from '../firebase';
import styles from './SignUp.module.css'; // Import CSS module

const SignUp = () => {
    const signUpWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    const signUpWithEmail = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("User signed up with email:", user);
                router.push('/home'); // Redirect to the home page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error signing up with email:", errorMessage);
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.left-half}></div>
            <div className={styles.right-half}>
                <img src="./images/logo.png" alt="Logo" className={styles.logo} />
                <p>Journey to a trillion miles starts from here!!</p>
                <div className={styles['signup-box']}>
                    <h2>Sign Up</h2>
                    <form onSubmit={signUpWithEmail}>
                        <div className={styles['form-group']}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className={styles['or-separator']}>
                        <span>OR</span>
                    </div>
                    <div className={styles['google-signup']}>
                        <button id="google-signup-btn" onClick={signUpWithGoogle}>
                            <img className={styles.icon} src="./images/google.svg" alt="" />
                            Sign Up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
