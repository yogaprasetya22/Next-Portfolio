import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Skils from "../components/Skils";
import Head from "next/head";

const about = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title h-title">Profile</h1>
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aliquam recusandae modi officiis dolore
                            doloribus quisquam debitis aperiam repellat, rerum
                            quo, odit alias cumque magni? Magni eaque
                            dignissimos facilis provident reiciendis nemo nulla
                            laborum saepe, minima dolorum, iure dolorem fugit,
                            amet quas! Asperiores, consectetur? Voluptas magnam
                            ipsum aperiam, nostrum porro quis, itaque, quod quam
                            numquam ipsa tenetur ex consequatur libero magni ut
                            alias consectetur aspernatur veritatis reprehenderit
                            iure? Accusantium beatae enim necessitatibus
                            possimus ab dicta fugit magni doloribus odio ea
                            voluptas, molestiae itaque praesentium harum hic,
                            ipsum dolor in adipisci rem reprehenderit optio
                            laboriosam sunt provident. Perspiciatis dicta
                            voluptatibus inventore quis!
                        </p>
                        <Link href={"contact"}>
                            <a className="cta">kontak saya</a>
                        </Link>
                    </div>
                </div>
                <div className="technologies-container">
                    <Skils />
                </div>
            </section>
        </>
    );
};

export default about;
