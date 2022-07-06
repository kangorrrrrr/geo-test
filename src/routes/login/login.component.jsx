import Navigation from "../navigation/navigation.component";

function Login() {
    return ( 
        <div>
            <Navigation />
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-xl font-bold">Login with Your Account</h1>
                <form action="#" className="py-5"> 
                <table>
                    <tr>
                        <td><label className="text-lg">Username: </label></td>
                        <td><input type="text" placeholder="username" required/></td>
                    </tr>
                    <tr>
                        <td><label className="text-lg">Password: </label></td>
                        <td><input type="password" placeholder="password" required/></td>
                    </tr>
                    <tr>
                        <td><button type="submit" className="inline-flex items-center px-4 py-2 mt-10 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button></td>
                    </tr>
                </table>
                    
                    <p className="pt-6 text-sm">Forgot your Password ? <a href="#">Click here</a></p>
                </form>
            </div>
        </div>
     );
}

export default Login;