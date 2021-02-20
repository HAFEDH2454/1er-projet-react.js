import './App.css';

function App() {
  return (
  
         <div clasName="container">
             <h1>Formulaires</h1>
             <form>
                 <div className="form-group">
                   <label for="nom">Entrez votre nom</label>
                   <input type="text" className="form-control" id="nom" placeholder="nom">
                 </div>
                 
                 <div className="form-group">
                   <label for="email">Entrez votre mail</label>
                   <input type="email" className="form-control" id="email" placeholder="email@email.com">
                 </div>
                 
                 
                 <div className="form-group">
                   <label for="bio">Biographie</label>
                   <textarea className="form-control" id="bio" rows="3"></textarea>
                 </div>
               
             </form>
         </div>
      </div>
        
  );
}

export default App;
