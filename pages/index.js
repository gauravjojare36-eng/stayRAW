import { messaging } from "../lib/firebase";
import { getToken } from "firebase/messaging";

export default function Home(){

  async function enableNotif(){
    const token = await getToken(messaging,{vapidKey:"YOUR_VAPID_KEY"});
    console.log(token);
    alert("Notifications Enabled");
  }

  return(
    <div>
      <button onClick={enableNotif}>Enable Notifications</button>
    </div>
  )
}
