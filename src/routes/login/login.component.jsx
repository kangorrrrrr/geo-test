import Navigation from "../navigation/navigation.component";

function Login() {
    return ( 
        <div className="w-full">
            <Navigation />
            <div className="mx-auto max-w-7xl">
            
                <form action="#"> 
                <h1 className="text-lg font-bold">Login with Your Account</h1>
                    <label className="text-base">Username: </label>
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

export default Login;