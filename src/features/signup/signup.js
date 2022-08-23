import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "./signupSlice"

const SignUpForm = () => {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUsePassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');

    const onSubmitClick = () => {
        try {
            dispatch(signUpUser({ username : userName, email: userEmail, password: userPassword, password_confirmation: userConfirmPassword })).unwrap()
            setUserName('');
            setUserEmail('');
            setUsePassword('');
            setUserConfirmPassword('');
        } catch (err){
            console.error('Sign up failed', err)
        } finally {
            setUserName('');
            setUserEmail('');
            setUsePassword('');
            setUserConfirmPassword('');
        }
        
    }

    return (
        <section>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmitClick}>
                <div className="form-div">
                    <label htmlFor="username">Username :</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userName}
                        onChange={(e)=> setUserName(e.target.value)}
                        required
                    />
                </div>                
                <div className="form-div">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userEmail}
                        onChange={(e)=> setUserEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-div">
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userPassword}
                        onChange={(e)=> setUsePassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-div">
                    <label htmlFor="confirm-password">Confirm Password :</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        value={userConfirmPassword}
                        onChange={(e)=> setUserConfirmPassword(e.target.value)}    
                        required               
                    />
                </div>
                <input type="submit" value="Sign Up"/>
                <a href="/signin">Already have an account? Sign In</a>
            </form>
        </section>        
    )
}

export default SignUpForm