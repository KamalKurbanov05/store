import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { fetchItems } from './store/reducers/itemSlice';
import { useDispatch } from 'react-redux';

const App = (): JSX.Element => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchItems())
    }, [])
    return <h1 style={{ color: "red" }}>Hellow world with</h1>
}


export default App;