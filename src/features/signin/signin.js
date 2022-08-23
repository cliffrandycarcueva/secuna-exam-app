import { useState } from "react";

const SignInForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUsePassword] = useState('');
    return (
        <section>
            <h1>Sign In</h1>
            <form>
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
                <input type="submit" value="Sign in"/>
            </form>
        </section>
    )
}

export default SignInForm