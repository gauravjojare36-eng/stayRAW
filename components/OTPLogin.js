import { auth } from "../lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";

export default function OTPLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirm, setConfirm] = useState(null);

  const sendOTP = async () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {});
    const confirmation = await signInWithPhoneNumber(
      auth,
      "+91" + phone,
      window.recaptchaVerifier
    );
    setConfirm(confirmation);
    alert("OTP Sent");
  };

  const verifyOTP = async () => {
    await confirm.confirm(otp);
    alert("Login Success");
  };

  return (
    <div>
      <div id="recaptcha"></div>
      <input placeholder="Phone" onChange={e=>setPhone(e.target.value)} />
      <button onClick={sendOTP}>Send OTP</button>
      <input placeholder="OTP" onChange={e=>setOtp(e.target.value)} />
      <button onClick={verifyOTP}>Verify</button>
    </div>
  );
}
