import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {userData.fullName}</h1>
      {userData.profilePictureUrl && (
        <img src={userData.profilePictureUrl} alt="Profile" width={100} height={100} />
      )}
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Address: {userData.address}</p>
      <p>Date of Birth: {userData.dateOfBirth}</p>
    </div>
  );
};

export default Profile;
