


const BackgroundImage = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1482649671545-bc53dcf1ad7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '400px',
    width: '100%', 
    color: 'white', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };
  return (
    <div style={backgroundImageStyle}>
      <h1>Your Content Here</h1>
    </div>
  );
}
export default BackgroundImage;
