import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Addtofav = ({ title, description, src, url, img }) => {
  const addToDb = async () => {
    const docRef = await addDoc(collection(db, "favorites"), {
      title: title,
      description: description,
      src: src,
      url: url,
      img: img,
    });
    console.log("Document written with ID: ", docRef.id);
  };
  return (
    <div>
      <FaRegHeart onClick={addToDb} />
    </div>
  );
};

export default Addtofav;
