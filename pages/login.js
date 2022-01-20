import Link from "next/link";
import Head from "next/head";
import GoogleLogin from "react-google-login";

const Login = () => {

    const responseGoogle = (response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    return (
        <>
            <Head>
                <title>Imposter Syndrome | Login</title>
                <keywords></keywords>
            </Head>
            <div className="grid place-items-center pt-40">
                <div>
                    <p>Username</p>
                    <textarea></textarea>
                </div>
                <div>
                    <p>Password</p>
                    <textarea></textarea>
                </div>
                <div>
                    <div className="block">
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="w-6 h-6 rounded" />
                                <span className="ml-2">Remember me.</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href="">
                        <a>Log In</a>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <a>Forgot Password?</a>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Link href="">
                        <a className="bg-zinc-300 rounded-lg p-3">GitHub</a>
                    </Link>
                    <GoogleLogin
                        clientId="144657240625-hvroovfm0eaopdnijokuib7d6ouhffle.apps.googleusercontent.com"
                        buttonText="Login With Google" 
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle} 
                        cookiePolicy={'single_host_origin'}/>
                </div>
            </div>
        </>
    );
}

export default Login;