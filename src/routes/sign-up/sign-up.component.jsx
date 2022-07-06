import Navigation from "../navigation/navigation.component";

function SignUp() {
    return ( 
        <div>
            <Navigation />
            <div>
                <form action="#" className="w-full mx-auto max-w-7"> 
                <h1 className="text-lg font-bold">Login with Your Account</h1>
                    <label>Username: </label>
                    <input type="text" placeholder="username" required/>
                    <label>Password: </label>
                    <input type="password" placeholder="password" required/>

                    <button type="submit">Submit</button>
                    <p className="text-sm">Forgot your Password ? <a href="#">Click here</a></p>
                </form>
            </div>
        </div>
     );
}
export default SignUp;