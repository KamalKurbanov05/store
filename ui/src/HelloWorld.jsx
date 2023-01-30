import React from "react";
import { useEffect } from 'react';
// interface IProps {
//     title: string
// }

const HelloWorld = (props) => {
    useEffect(() => {
        console.log("the mount");
    }, [])
    return <h1 style={{ color: "yellow" }}>Hellow world with {`${props.title}`}</h1>
}


export default HelloWorld