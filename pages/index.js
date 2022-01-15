import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Head>
        <title>Imposter Syndrome | Home</title>
        <meta name="keywords" content="imposter" />
      </Head>
      <div className="flex justify-center p-20">
        <Image src="/../public/diagram.jpeg" height={500} width={500}></Image>
      </div>
      <div className="grid grid-cols-1 content-center">
        <div>
          <h1 className="pb-2"> Imposter Syndrome (Project Name)</h1>
          <p> Lorem Ipsum (Tagline)</p>
          <p className="pt-8 pb-8"> Lorem Ipsum (Project Description)</p>
          <div>
            <Link href="/signup">
            <button className="rounded-full bg-zinc-300 p-3">Get Started!</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}