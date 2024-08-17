
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Sazi from "./pages/Sazi";
import Word from "./pages/Word";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";
import Header from "./components/Header"
import Quiz from "./components/Quiz";
import WordLearning from './components/WordLearning';

function App() {
  return (
    <div className ="root-wrap">
         <BrowserRouter>
   <Header/>
   
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/sazi" element ={<Sazi/>}/>
      <Route path ="/word" element ={<Word/>}/>
      <Route path ="/test" element ={<Test/>}/>
      
      <Route path ="/*" element ={<NotFound/>}/>
    </Routes>
   </BrowserRouter>
    </div>
   
  );
}

export default App;
