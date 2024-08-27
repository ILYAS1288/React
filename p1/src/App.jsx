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
    color: 'white',
  };

  return (
    <div style={appStyle}>

      <Header />
      <h1 style={{ textAlign: 'center' }} > My Gun and Ibex pages view </h1>
      <p style={{ fontSize: '16px', color: 'lightblue', textAlign: 'center' }}> Proper maintenance is crucial for safe and reliable gun operation.</p>

      <span style={{ display: 'block', textAlign: 'center' }} >08/06/2024 </span>
      <br />



      <p style={{ fontSize: '19px', color: 'white', textAlign: 'center' }} >Maintenance and Repair: Proper maintenance is crucial for safe and reliable gun operation. <br /> This includes regular cleaning to remove residue and ensure that all moving parts are functioning smoothly. <br /> Common tools used for gun maintenance include cleaning rods, brushes, and lubricants. If you're looking to repair a gun, <br /> it’s important to have a good understanding of its mechanics and to follow safety procedures.</p>

      <img className="img" src="https://images.unsplash.com/photo-1482649671545-bc53dcf1ad7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


      <img className="img" src="https://media.istockphoto.com/id/2157806251/photo/firearms-pistol-and-revolver-with-cartridges-on-the-table-in-a-shooting-range.jpg?s=2048x2048&w=is&k=20&c=pO_-0r7quA_eUZABh_g90PAJ3TH8OkMGFdH6_8pmAaE=" alt="" />


      <img className="img" src="https://media.istockphoto.com/id/1211957079/photo/alpine-ibex-under-strong-snowfall.jpg?s=2048x2048&w=is&k=20&c=lGVheay8JsiHZrCHf1O8A57Et_s_QjmIHrrcsRmoTXQ=" alt="" />

      <img className="img" src="https://media.istockphoto.com/id/1419667414/photo/alpine-ibex-in-the-mountains-of-gran-paradiso-national-park-in-piedmont-italy.jpg?s=2048x2048&w=is&k=20&c=AwC6Q31J9o0xzh8SwEfoP0X2WjdryMp8xOOfPvZ2sxg=" alt="" />



      <h5 style={{ fontSize: '16px', color: 'blue', textAlign: 'center' }} >Gun </h5>
      <p style={{ fontSize: '16px', color: 'blue', textAlign: 'center' }} > Common tools used for gun maintenance include cleaning rods, brushes, and lubricants. If you're looking to repair a gun.</p>
      <a href="#" style={{ display: 'block', textAlign: 'center', color: 'blue' }}  >WWW.http://mygun.com</a>
      <br /><br />

      <Button />
      <br /> <br />
      <Footer />
    </div>
    // React.createElement({type:"h1" ,  props:{ children:Hello in react first class} })
  )
}

export default App