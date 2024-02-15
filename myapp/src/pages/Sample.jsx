// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const Sample = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);

//     const handleRegister = () => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then(userCredential => {
//                 // Registration successful
//                 console.log('Registration successful:', userCredential.user);
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//     };

//     const handleLogin = () => {
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(userCredential => {
//                 // Login successful
//                 console.log('Login successful:', userCredential.user);
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//     };

//     const handleLogout = () => {
//         firebase.auth().signOut()
//             .then(() => {
//                 // Logout successful
//                 console.log('Logout successful');
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//     };

//     return (
//         <div>
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleRegister}>Register</button>
//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleLogout}>Logout</button>
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default Sample;
