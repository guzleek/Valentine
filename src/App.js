import './App.css';
import FloatingHearts from './pages/FloatH';
import General from './pages/General';
import Page2 from './pages/Page2';
import N from './pages/N';
import Y from './pages/Y';
import F from './pages/F';
import './reset.css'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <FloatingHearts/>
   <Routes>
     <Route path='/' Component={General}/>
     <Route path='/general' Component={General}/>
     <Route path='/next' Component={Page2}/>
     <Route path='/yes' Component={Y}/>
     <Route path='/no' Component={N}/>
     <Route path='/yeeeah' Component={F}/>

   </Routes>
   {/* <General/> */}
   {/* <Page2/> */}
   {/* <N/> */}
   {/* <Y/> */}
   {/* <F/> */}
    </div>
  );
}

export default App;
