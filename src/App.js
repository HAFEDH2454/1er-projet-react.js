
import React from "react";



import srcimage from "./src/imageinSrc.png"
    
    
function App()
{
    return (
        <div className="App">
            <header className="App-header">

            <title>conversion en jsx</title>

            <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
                 <h1 className="title red">Your name here</h1>
       
                 <br ></br>
       
                 <img src={srcimage} alt="imageInsrc" >
       
                 <br ></br>
       
                 <img src="./public/imageInpublic.png" >
        
             </div>
       
             <video width={320} height={240} controls></video>
       
                <source src="myVideo.mp4" type="video/mp4" >
       
              </video>
       </header>
       </div>
       )
 }
 
export default App;
export default App;
