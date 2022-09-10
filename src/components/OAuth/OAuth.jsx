import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase-config";
import { toast } from "react-toastify";
import googleIcon from "./googleIcon.svg";
import UserContext from "../../Context/User/UserContext";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUserEmail, setUserName } = useContext(UserContext);

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If, user doesn't exist : creating user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      
      setUserEmail(user.email, "SET_USER_EMAIL");
      setUserName(user.displayName, "SET_USER_NAME");

      toast.success(
        `Signed ${
          location.pathname === "/sign-up" ? "up " : "in "
        } Successfully!`
      );

      navigate("/home");
    } catch (error) {
      toast.error(
        `Couldn't sign${location.pathname === "/sign-up" ? "up " : "in "}!`
      );
    }
  };

  return (
    <div className="socialLogin">
      {/* <p> */}
        {/* Sign {location.pathname === "/sign-up" ? "up " : "in "} */}
        {/* with{" "} */}
      {/* </p> */}
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" width={'40px'} height={'35px'}/>
      </button>
    </div>
  );
};

export default OAuth;
