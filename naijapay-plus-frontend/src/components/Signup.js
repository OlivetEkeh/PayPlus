// src/components/Signup.js
import React, { useState } from 'react';
import { auth, googleProvider, storage } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    profilePicture: null
  });

  const { fullName, email, password, phone, address, dateOfBirth, profilePicture } = formData;

  const onChange = e => {
    if (e.target.name === 'profilePicture') {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: fullName });

      if (profilePicture) {
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(storageRef, profilePicture);
        const photoURL = await getDownloadURL(storageRef);
        await updateProfile(user, { photoURL });
      }

      alert('User created successfully');
      window.location.href = '/home'; // Redirect to the home page
    } catch (error) {
      console.error(error);
      alert('An error occurred during signup');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert(`Welcome ${user.displayName}`);
      window.location.href = '/home'; // Redirect to the home page
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      alert('An error occurred during Google sign-in');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <input type="text" name="fullName" value={fullName} onChange={onChange} placeholder="Full Name" required />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <input type="tel" name="phone" value={phone} onChange={onChange} placeholder="Phone" required />
        <input type="text" name="address" value={address} onChange={onChange} placeholder="Address" required />
        <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={onChange} required />
        <input type="file" name="profilePicture" onChange={onChange} accept="image/*" />
        <button type="submit">Signup</button>
      </form>
      <button onClick={handleGoogleSignIn}>Sign up with Google</button>
    </div>
  );
};

export default Signup;
