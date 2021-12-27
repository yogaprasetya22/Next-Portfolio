import React from "react";
import Typewriter from "typewriter-effect";

const Terminal = ({ inView }) => {
    return (
        <div className={inView ? "terminal terminal--active" : "terminal"}>
            <div className="terminal__content">
                <div className="terminal__header">
                    <div className="terminal__button terminal__button--red"></div>
                    <div className="terminal__button terminal__button--yellow"></div>
                    <div className="terminal__button terminal__button--green"></div>
                </div>
                <div className="terminal__code">
                    <Typewriter
                        options={{ loop: true }}
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(25)
                                .typeString(">> Hello World!\n")
                                .typeString(
                                    ">> Nama Saya Mochammad Yoga Prasetya.\n\n"
                                )
                                .typeString(
                                    ">> Saya Seorang Mahasiswa Program Studi Sistem Informasi.\n"
                                )
                                .typeString(
                                    ">> Saya berkuliah di Universitas Pembangunan Jaya.\n\n"
                                )
                                .typeString(
                                    ">> Inilah beberapa hal yang harus Anda ketahui tentang saya.\n"
                                )
                                .typeString(
                                    "-- >> Saya memiliki hasrat untuk memecahkan masalah.\n"
                                )
                                .typeString(
                                    "-- >> Saya dapat mengatasi masalah dalam membuat program.\n"
                                )
                                .typeString(
                                    "-- >> Saya menekankan pada perbaikan diri.\n"
                                )
                                .pauseFor(10000)
                                .deleteAll(1)
                                .start();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
