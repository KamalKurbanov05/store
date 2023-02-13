import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { fetchItems } from './store/reducers/itemSlice';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useDispatch } from 'react-redux';
import { Main } from './pages/Main';



const App = (): JSX.Element => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchItems())
    }, [])
    return <Main />
}


export default App;