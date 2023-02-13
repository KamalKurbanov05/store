import { useAppSelector } from "../store/hooks"
import { KCard } from "./Card";

export const CardList = () => {
    const { items } = useAppSelector((state) => state.itemSlice);

    if(!items?.length) {
        return(
            <span>Loading...</span>
        )
    }

    return(
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {
                items.map((item) => <KCard key={item.id} {...item}/>)
            }
        </ul>
    )
}