import { Link } from "react-router-dom";


const Login = () => {

  const handllogIn =( e )=>{
    e.preventDefault();

   const email = e.target.email.value;
   const password = e.target.password.value;

   console.log(email,password)
    
    
  }

  
    return (
      <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg md:flex">
            {/* Login Form */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form className="space-y-4" onSubmit={handllogIn}>
                {/* <div>
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
                </div> */}

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
                    className="w-full bg-sky-500  p-2 rounded-md hover:bg-sky-600 "
                  >
                    Login
                  </button>
                </div>
                <p className="text-center text-sky-400">
                  are you new? <Link to="/register">register here..</Link>
                </p>
              </form>
            </div>

            {/* Image */}
            <div className="hidden md:block md:w-1/2">
              <img
                src="../../../public/log-img.png"
                alt="Login"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;