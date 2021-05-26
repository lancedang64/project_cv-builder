import './App.css';
import EditContainer from './components/EditContainer';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <SideNav />
      <div className="EditPanel">
        <EditContainer />
      </div>
    </div>
  );
}

export default App;
