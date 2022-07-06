import Navigation from "../navigation/navigation.component";

function SignUp() {
    return ( 
        <div>
            <Navigation />
            <div className="mx-auto">
                <form action="#" className="max-w-md"> 
                <h1 className="text-lg font-bold">Sign Up</h1>
                    <label>Username: </label>
                    <input type="text" placeholder="username" required/>
                    <label>Email: </label>
                    <input type="email" placeholder="email" required/>
                    <label>Password: </label>
                    <input type="password" placeholder="password" required/>
                    <label>Confirm Password: </label>
                    <input type="password" placeholder="confirm password" required/>

                    <button type="submit" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sumbit</button>

                </form>
            </div>
        </div>
     );
}
export default SignUp;