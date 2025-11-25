import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { CiEdit } from "react-icons/ci";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFrom = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const url = e.target.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {
        setUser({ ...user, photoURL: url, displayName: name });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="avatar flex flex-col items-center mt-5 mb-3 space-y-2">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
        <p className="text-lg font-bold">{user?.displayName}</p>
        <p>{user?.email}</p>
        <button onClick={handleOpenFrom} className="btn btn-outline">
          <CiEdit />
          Update Profile
        </button>
        {isOpen && (
          <form onSubmit={handleUpdate} className="fieldset w-fit">
            <label className="label">Name</label>
            <input
              defaultValue={user?.displayName}
              name="name"
              type="text"
              className="input"
              placeholder="Your name"
            />

            <label className="label">Photo URL</label>
            <input
              defaultValue={user?.photoURL}
              name="photoURL"
              type="text"
              className="input"
              placeholder="Your URL"
            />

            <button className="btn btn-neutral mt-4">Update</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
