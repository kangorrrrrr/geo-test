import Navigation from "../navigation/navigation.component";

function SignUp() {
    return ( 
        <div>
            <Navigation />
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-xl font-bold">Sign Up</h1>
                <form action="#" className="py-5"> 
                    <table>
                        <tr>
                            <td><label className="text-lg">Username: </label></td>
                            <td><input type="text" placeholder="username" required/></td>
                        </tr>
                        <tr>
                            <td><label className="text-lg">Email: </label></td>
                            <td><input type="email" placeholder="email" required/></td>
                        </tr>
                        <tr>
                            <td><label className="text-lg">Password: </label></td>
                            <td><input type="password" placeholder="password" required/></td>
                        </tr>
                        <tr>
                            <td><label className="text-lg">Confirm Password: </label></td>
                            <td><input type="password" placeholder="confirm password" required/></td>
                        </tr>
                        <tr>
                            <td><button type="submit" className="inline-flex items-center px-4 py-2 mt-10 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button></td>
                        </tr>
                    </table>
                    
                    <p className="pt-6 text-sm">Sign up today for free !</p>
                </form>
            </div>
        </div>
     );
}
export default SignUp;