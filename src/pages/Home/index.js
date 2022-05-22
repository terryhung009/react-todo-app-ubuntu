import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const app={
    color: 'black'
}


const Home = () => {
    return <div style={app} className="app">
        <Edit />
        <List />
        </div>
};

export default Home;