import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function AddProduct(){
  const [name,setName]=useState("");

  const add=async()=>{
    await addDoc(collection(db,"products"),{name});
    alert("Added");
  }

  return(
    <div>
      <input placeholder="Product Name" onChange={e=>setName(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
  )
}
