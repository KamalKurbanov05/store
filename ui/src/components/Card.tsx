import { useEffect, useState } from "react";
import { IItem } from "../store/reducers/itemSlice";


export const Card = ({ title, completed}: IItem) => {
    const [checked, setChecked ] = useState<boolean>(false);

    useEffect(() => {
        setChecked(completed);
    }, [completed])

    const handleChecked = () => {
        setChecked((prev) => !prev);
    }

    return (
    <div style={{ marginBottom: "10px", marginRight: "10px", padding: "10px", border: "1px solid red", width: "200px", overflow: "hidden"}}>
        <h3>{title}</h3>
        <input style={{ cursor: "pointer" }} onChange={handleChecked} type="checkbox"  checked={checked}/>
    </div>
    )
}

