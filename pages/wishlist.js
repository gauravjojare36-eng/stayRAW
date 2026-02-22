import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Wishlist(){
  const [items,setItems]=useState([]);

  useEffect(()=>{
    async function load(){
      const snap=await getDocs(collection(db,"wishlist"));
      setItems(snap.docs.map(d=>d.data()));
    }
    load();
  },[]);

  return(
    <div>
      <h2>Wishlist</h2>
      {items.map((i,idx)=><p key={idx}>{i.name}</p>)}
    </div>
  )
}
