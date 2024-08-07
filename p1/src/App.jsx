import Button from "./Button"
import Header from "./Header"
import Footer from "./Footer"
function App() {
  return (

  <>  
  <Header/> 
<h1>Hello in react first class today  </h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quasi.</p>
<span>08/06/2024 </span>

 <br />
 
  <img src="https://images.unsplash.com/photo-1482649671545-bc53dcf1ad7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  <br /><br />

 <Button/>
 <br /> <br />
 <Footer/>
  </>

      //
      // React.createElement({type:"h1" ,  props:{ children:Hello in react first class} })
  )
}

export default App