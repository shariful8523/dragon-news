
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext);

    const handelAddRegisterAccount = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const PhotoUrl = event.target.PhotoUrl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name,PhotoUrl, email, password);


        createNewUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
              console.log(errorCode, errorMessage);
          });
        

    };

    return (
        <div className="bg-gray-100 min-h-screen  flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Create an Account
                </h2>

                <form onSubmit={handelAddRegisterAccount} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Photo URL"
                        name="PhotoUrl"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <span className="text-xs text-gray-500 uppercase">Or</span>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>

                <button
                    type="button"
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-md hover:shadow-md transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    <span className="text-sm text-gray-700">Sign up with Google</span>
                </button>

                <p className="text-sm text-center mt-4 text-gray-600">
                    Already have an account?{' '}
                    <NavLink to='/auth/login' className="text-blue-500 hover:underline">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;
