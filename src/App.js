import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Mixeverything from './components/MixEverything';
import MoreThings from './components/morethings/MoreThings';
import ChooseThing from './components/choosething/ChooseThing';
import Error from './components/Error';
function App() {
  return (
    <HashRouter>
     <Routes>
       <Route path='/' element={<Mixeverything />} />
       <Route  path="/seemore" element={<MoreThings />} />
       <Route path="/choose" element={<ChooseThing />} />
       <Route path="*" element={<Error />} />
     </Routes>
    </HashRouter>
  // <Mixeverything />
  );
}

export default App;
