import Link from "next/link";
import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import { useInView } from "react-intersection-observer";
import Head from "next/head";

export default function Home() {
    const [terminalRef, terminalInView] = useInView({
        threshold: 0,
    });
    return (
        <>
        <Head>
            <title>Home</title>
        </Head>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper">
                        <h1 className="title">Hallo nama saya Jagres</h1>
                        <p className="description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Libero saepe magnam et repellat illo a veniam
                            numquam, quas voluptate dicta?
                        </p>
                        <Link href={"contact"}>
                            <a className="cta">kontak saya</a>
                        </Link>
                    </div>
                    <div className="image-wrapper" ref={terminalRef}>
                        <Terminal inView={terminalInView} />
                    </div>
                </div>
            </section>
        </>
    );
}
