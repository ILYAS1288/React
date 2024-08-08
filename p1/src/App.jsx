import Button from "./Button"
import Header from "./Header"
import Footer from "./Footer"




import './styles/Button.css'
import './styles/Img.css'
import './styles/Header.css'
import './styles/Footer.css'


function App() {

  const appStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1482649671545-bc53dcf1ad7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
    color: 'white', // For contrast with the background image
  };

  return (
    
       
    
    <div style={appStyle}>  
 
  <Header/> 
<h1>Hello in react first class today  </h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quasi.</p>

<span>08/06/2024 </span>
<br /> <br />

 <br/>
 <p>Maintenance and Repair: Proper maintenance is crucial for safe and reliable gun operation. <br /> This includes regular cleaning to remove residue and ensure that all moving parts are functioning smoothly. <br /> Common tools used for gun maintenance include cleaning rods, brushes, and lubricants. If you're looking to repair a gun, <br /> it’s important to have a good understanding of its mechanics and to follow safety procedures.</p>
  <img className="img" src="https://images.unsplash.com/photo-1482649671545-bc53dcf1ad7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""   />
    <h5>Gun </h5>
    <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" >WWW.//bfhvbhfvbf</a>
  <br /><br />

 <Button/>
 <br /> <br/>
 <Footer/>
 </div>
      // React.createElement({type:"h1" ,  props:{ children:Hello in react first class} })
  )
}

export default App