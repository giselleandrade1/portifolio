import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  
  return (    
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}> 
          
           
          <h1>Giselle Andrade</h1>
           <p>Seja muito bem vindo ao meu cantinho</p>
        </main>
        <footer className={styles.footer}>
          <p>
            <a href="https://github.com/giselleandrade1/" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/giselleandrades2/" target="_blank">linkedin</a>
            <a href="https://wa.me/5511941942854" target="_blank">Whatsapp</a>
          </p>
        </footer>
      </div>
    </>
  );
}
