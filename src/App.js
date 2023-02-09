import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Investment from "./components/pages/Investment";
import Goal from "./components/pages/Goal";
import Transaction from "./components/pages/Transaction";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={ <Dashboard/> }/>
        <Route path="/investment" element={ <Investment/> }/>
        <Route path="/transaction" element={ <Transaction/> }/>
        <Route path="/goal" element={ <Goal/> }/>
      </Routes>
    </div>
  );
}

export default App;
