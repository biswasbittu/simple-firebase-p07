import { useState } from "react";
import app from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const SocialLogin = () => {
  const [user,setUser]=useState({})
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider =new GithubAuthProvider();


  const handleGoogleSignIn =()=>{
    // console.log('Google mama is ready for work')
    signInWithPopup(auth, googleProvider)
    .then((result)=>{
      const googleUser = result.user;
      console.log(googleUser)
      setUser(googleUser);
    })
    .catch((error)=>console.log(error.message))

  }
const handleGithubSignIn = () => {
  // console.log("git mama is ready for work");
  signInWithPopup(auth, gitProvider)
  .then((result)=>{
     const gitUser=result.user;
    //  console.log(gitUser);
    setUser(gitUser);
  })
  .catch((error)=>{
      console.log(error.message);
  })
};

    return (
      <div>
        <div className="flex items-center  flex-col my-3">
          <div>
            {/* <button>Sign in with Google</button> */}
            <button onClick={handleGoogleSignIn} className=" ">
              <img
                className="h-8  "
                src="../../../public/google-btn.png"
                alt=""
              />
            </button>
          </div>
          <div>
            <button onClick={handleGithubSignIn} className="">
              <img
                className="h-8"
                src="../../../public/github-btn.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    );
};

export default SocialLogin;