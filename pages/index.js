import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Head>
        <title>Imposter Syndrome | Home</title>
        <meta name="keywords" content="imposter" />
      </Head>
      <div className="flex justify-center p-20">
        <Image src="/diagram.jpeg" height={500} width={500} alt="image"></Image>
      </div>
      <div className="grid grid-cols-1 content-center">
        <div>
          <h1 className="pb-2"> Imposter Syndrome (Project Name)</h1>
          <p> Lorem Ipsum (Tagline)</p>
          <p className="pt-8 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Multa sunt
            dicta ab antiquis de contemnendis ac despiciendis rebus humanis;
            Multoque hoc melius nos veriusque quam Stoici. Plane idem, inquit,
            et maxima quidem, qua fieri nulla maior potest. Nunc haec primum
            fortasse audientis servire debemus. Cupit enim dícere nihil posse ad
            beatam vitam deesse sapienti. Duo Reges: constructio interrete.
            Ratio quidem vestra sic cogit. Tanta vis admonitionis inest in
            locis.
          </p>
          <div>
            <Link href="/signup">
              <a className="rounded-full bg-zinc-300 p-3">Get Started!</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
