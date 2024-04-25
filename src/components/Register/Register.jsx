import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import app from "../Firebase/firebase.config";
import { useState } from "react";


const Register = () => {
  const auth = getAuth(app);
  const [success,setSuccess]=useState('');

  const [error,setError]=useState("");



  const handleRegister = e =>{
    e.preventDefault();
   
    const name =e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name,email,password);
    setSuccess('');
    setError('');
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);
        setSuccess('Register-Succefully');
       
      })
      .catch((error) => {
        console.log(error.message); 
        setError(error.message);

      });
  }
    return (
      <div>
        {success && (
          <div className="container mx-auto w-1/3">
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{success}</span>
            </div>
          </div>
        )}

        {error && (
          <div className="container mx-auto w-1/3">
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg md:flex">
            {/* Login Form */}
            <div className="md:w-1/2 ">
              <h2 className="text-2xl font-bold mb-4">Register</h2>
              <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                  >
                    Register
                  </button>
                </div>
              </form>
              <SocialLogin />
            </div>

            {/* Image */}
            <div className="hidden md:block md:w-1/2">
              <img
                src="../../../public/regis-img.png"
                alt="Login"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;