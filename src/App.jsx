import './App.css'
import NavBar from './component/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './component/Footer.jsx';
import Details from './pages/Details.jsx';
import { useSelector } from 'react-redux';
import NewsLetter from './pages/NewsLetter.jsx';

function App() {

  const navItems = [ 
    // "Blog", 
    // "Projects" , 
    // "About" , 
    // "Newsletter"
    
    {
      id:'/Task-6-ADV/' ,
      name : "Blog"
    },
    {
      id:'/Task-6-ADV/' ,
      name : "Projects"
    },
    {
      id:'/Task-6-ADV/' ,
      name : "About"
    },
    {
      id:'/NewsLetter' ,
      name : "Newsletter"
    },
  ]
  
  return (
    <>
      <NavBar name={'Your Name'} logoDesc='logo' items={navItems} btn='login' />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/Task-6-ADV/" />} /> */}
        <Route path='/Task-6-ADV/' element={<Home />}></Route>
        <Route path='/Details/:id' element={<Details />}></Route>
        <Route path='/Newsletter' element={<NewsLetter />}></Route>
</Routes>
      <Footer date={'© 2023'} linkk1={'Twitter'} linkk2={'LinkedIn'} linkk3={'Email'} linkk4={'RSS feed'} linkk5={'Add to Feedly'} />
      
    </> 
  )
}

export default App
