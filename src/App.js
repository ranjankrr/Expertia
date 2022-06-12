import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Footer from './Components/Footer';
import SingnUp from './Components/SingnUp';



const App = ()=>{
  return(
    <>
    <div className='bg'> 
   
      <Navbar/>
      <Switch>
             <Route exact path='/' component={First}/>
             <Route exact path='/contact/' component={Third}/>
             <div className='singnUp-center'>
                 <Route exact path='/signup/' component={SingnUp}/>
             </div>
       </Switch>
      <First/>
     </div>
     <Second/>
     <div className='bg'>
         <Third/>
         <hr/> 
         <Footer/>   
     </div>
    

    </>
  )
}
export default App;