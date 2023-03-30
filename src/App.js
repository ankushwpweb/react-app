import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidenav from './components/Layout/Sidenav';
import Controlside from './components/Layout/Controlside';
import TaskList from './pages/Task/TaskList';
import TaskCreate from './pages/Task/TaskCreate';
import TextUtils from './pages/TextUtils';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const toggleMode = () => {
    let body = document.body;
    if(mode === 'light'){
      setMode('dark');      
      body.classList.add("dark-mode");
      showAlert('success', 'Dark Mode Enabled');
    }else{
      setMode('light')
      body.classList.remove("dark-mode");
      showAlert('success', 'Light Mode Enabled');
    }
  }

  const showAlert = (type,msg) => {
    setTimeout(() => {setAlert({msg:msg,type:type})}, 200);
    setTimeout(() => {setAlert(null)}, 2000);
  }

  return (
    <>
      <Router>
        <Header mode={mode}/>        
        <Sidenav mode={mode}/>
          <div className="content-wrapper">
            <Routes>
              <Route exact path='/' element={<Home alert={alert} />} />              
              <Route exact path='/textutil' element={<TextUtils alert={alert} showAlert={showAlert}/>} />
              <Route exact path='/task' element={<TaskList alert={alert}/>} />
              <Route exact path='/task/create' element={<TaskCreate alert={alert}/>} />              
              <Route exact path='*' element={<Home alert={alert}/>} />
            </Routes>
          </div>
        <Controlside mode={mode} toggleMode={toggleMode}/>
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
