import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

const about = () => {
    return (
        <>
        <Head>
            <title>Portfolio</title>
        </Head>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title h-title">Portfolio</h1>
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aliquam recusandae modi officiis dolore
                            doloribus quisquam debitis aperiam repellat.
                        </p>
                        <div className="portfolio-wrapper">
                            <div className="portfolio-item">
                                <img
                                    src="/h_Pendidikan.png"
                                    alt=""
                                    className="portfolio-image"
                                />
                                <h4 className="portfolio-name">
                                   portfolio mobile Aplication
                                </h4>
                                <div className="portfolio-category">
                                    Pendidikan
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <img
                                    src="/h_Keahlian.png"
                                    alt=""
                                    className="portfolio-image"
                                />
                                <h4 className="portfolio-name">Mobile Aplication</h4>
                                <div className="portfolio-category">
                                    Kehalian
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default about;
