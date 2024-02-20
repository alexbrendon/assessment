import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import GraphView from './components/graphView/GraphView';
import TableView from './components/tableView/TableView';

import data from './data.json';

data = data[0];
const { title, subtitle, image, tags, sales } = data;


function App() {
  return (
    <div className="App">
        <Header />
        <div className="layout">
            <SideBar title={title} subtitle={subtitle} image={image} tags={tags} />
            <main>
                <GraphView sales={sales} />
                <TableView sales={sales} />
            </main>
        </div>
    </div>
  );
}

export default App;
