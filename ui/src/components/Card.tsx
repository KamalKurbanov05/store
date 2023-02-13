import { useEffect, useState } from "react";
import { IItem } from "../store/reducers/itemSlice";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';





export const KCard = ({ title, completed}: IItem) => {
    const [checked, setChecked ] = useState<boolean>(false);

    useEffect(() => {
        setChecked(completed);
    }, [completed])

    const handleChecked = () => {
        setChecked((prev) => !prev);
    }

    return (
    <Card style={{ marginBottom: "10px", marginRight: "10px", padding: "10px", width: "200px", overflow: "hidden"}}>
        <Typography variant="h5" sx={{ fontSize: "16px" }}>{title}</Typography>
        <Switch style={{ cursor: "pointer" }} onChange={handleChecked} checked={checked}/>
    </Card>
    )
}

