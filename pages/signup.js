import Head from "next/head";
import Link from "next/link";

const Signup = () => {
    return (
        <>
            <Head>
                <title>Imposter Syndrome | Signup</title>
                <meta name="keywords" content="signup" />
            </Head>
            <div className="grid grid-cols-2 gap-2 divide-x divide-zinc-500">
                <div className="grid grid-cols-1 gap-2 place-items-center">
                    <div className="">
                        <Link href="">
                        <button className="bg-zinc-300 rounded-lg p-3">Sign Up with Google</button></Link>
                    </div>
                    <div className="">
                        <Link href="">
                        <button className="bg-zinc-300 rounded-lg p-3">Sign Up with GitHub</button></Link>
                    </div>
                </div>
                <div className="grid place-items-center">
                    <div className="p-8">
                        <p>Name</p>
                        <textarea></textarea>
                    </div>
                    <div className="p-8">
                        <p>Email id</p>
                        <textarea></textarea>
                    </div>
                    <div className="p-8">
                        <p>Username </p>
                        <textarea></textarea>
                    </div>
                    <div className="p-8">
                        <p>Password</p>
                        <textarea></textarea>
                    </div>
                    <div className="p-2">
                        <Link href="">
                            <button className="bg-zinc-300 rounded-lg p-3">Sign me Up!</button>
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link href="/login">
                            <button className="bg-zinc-300 rounded-lg p-3">Log In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;