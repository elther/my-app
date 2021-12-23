import logo from './logo.svg';
import './App.css';
import List from './components/2-9.List/List';
import ControlledComponent from './components/2-10.Form/ControlledComponent';
import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';
//import Condition from './components/2-8.ConditionalRendering/Condition';

function App() {
  return (
    <div className="App">
      {/* <Condition /> */}
      {/* <List /> */}
      <UncontrolledComponent />
      <ControlledComponent />
    </div>
  );
}

export default App;
