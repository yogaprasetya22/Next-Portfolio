import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
const Navbar = (props) => {
    const navs = [
        { text: "Home", href: "/" },
        { text: "About", href: "/About" },
        { text: "Portfolio", href: "/Portfolio" },
        { text: "Contact", href: "/Contact" },
    ];

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <Link href={"#"}>
                        <a className="logo">Jagres</a>
                    </Link>
                    <ul className="nav-link active">
                        {navs.map((nav) => (
                            <li key={nav}>
                                <Link href={nav.href}>
                                    <a className={`nav-item ${props.router.asPath == nav.href ? "active" : ""}`}> {nav.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default withRouter(Navbar);
