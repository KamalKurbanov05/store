import { useEffect } from 'react';
interface IProps {
    title: string
}

const HelloWorld = (props: IProps): JSX.Element => {
    useEffect(() => {
        console.log("the mount");
    }, [])
    return <h1 style={{ color: "yellow" }}>Hellow world with {`${props.title}`} </h1>
}


export default HelloWorld