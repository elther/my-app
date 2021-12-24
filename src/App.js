import logo from './logo.svg';
import './App.css';
import List from './components/2-9.List/List';
import ControlledComponent from './components/2-10.Form/ControlledComponent';
import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';
import State from './components/3-3.Hooks/State';
import Reducer from './components/3-3.Hooks/Reducer';
import WelcomDialog from './components/3-5.Composition/WelcomDialog';
//import Condition from './components/2-8.ConditionalRendering/Condition';

function App() {
  return (
    <div className="App">
      {/* <Condition /> */}
      {/* <List /> */}
      {/* <UncontrolledComponent />
      <ControlledComponent /> */}
      {/* <State />
      <br />
      <Reducer /> */}
      <WelcomDialog />
    </div>
  );
}

export default App;
