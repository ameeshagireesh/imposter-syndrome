import Link from "next/link";
import Head from "next/head";

const  Login =() => {
    return(
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
                    <div class="block">
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                            <input type="checkbox" class="w-6 h-6 rounded"  />
                            <span class="ml-2">Remember me.</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href="">
                        <button>Log In</button>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <button>Forgot Password?</button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Link href="">
                        <button className="bg-zinc-300 rounded-lg p-3">GitHub</button>
                    </Link>
                    <Link href="">
                        <button className="bg-zinc-300 rounded-lg">Google</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Login;