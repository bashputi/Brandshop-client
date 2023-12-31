import { useContext, useState } from "react";
import { AuthContext } from "../layOut/Pages/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { signUp, handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        if (password.length < 6) {
            setRegisterError('password is less then 6 charecters')
            return;
        }else if(!/[A-Z]/.test(password)) {
            setRegisterError('Use atleast 1 capital letter')
            return;
        }else if(!/[@$!%*#?&]/.test(password)) {
            setRegisterError('use atleast 1 special charecter')
            return;
        }
        setRegisterError('');
        setSuccess('');

        signUp(email, password)
        .then(result => {
            console.log(result.user)
            handleUpdateProfile(name, img)
            .then(() => {
                setSuccess('Sign up successfully!');
                e.target.reset();
                navigate('/login')
            })
        })
        .catch(error => {
            setRegisterError(error.message);
        })
  
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter a valid Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="img" placeholder="Provide a image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn text-white bg-gradient-to-r from-green-400 hover:to-blue-500 hover:from-pink-500 to-yellow-500 ...">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <p className="ml-6">Already have account?<Link to="/login">Please 
                    <button className="btn btn-link">Login</button> </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;