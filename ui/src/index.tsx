import * as React from 'react';
import * as ReactDOM from 'react-dom';

// необходимо описывать интерфейсы для props и state компонентов
interface IAppProps {
    title: string;
}

const App = (props: IAppProps) => {
    return (<div> Hello worl with {`${props.title}`}</div>)
}

ReactDOM.render(
     <App title='TS' />,
     document.getElementById("root")
)