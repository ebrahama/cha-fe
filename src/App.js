import './App.css';
import {Route} from "react-router-dom";
import Homepa from './Pages/Homepa';
import Chatpa from './Pages/Chatpa';

function App() {
  return (
 <div className="App">

  <Route path="/"component={Homepa} exact/>
  <Route path="/chats" component={Chatpa} />

 </div>
  );
}

export default App;
