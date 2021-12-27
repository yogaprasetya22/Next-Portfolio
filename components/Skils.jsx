import React from "react";
import { technologies } from "../components/general/Tecnologi";
import DevIcon from "../components/general/DevIcons";

const Skils = ({ inView }) => {
    return (
        <div className="technologies-wrapper">
                {technologies.map((name) => {
                    return <DevIcon name={name} key={name} />;
                })}
        </div>
    );
};

export default Skils;
