import React from 'react';
import './App.css';
import { BrowserRouter , Route ,Switch} from 'react-router-dom'; 
import Home from './Components/pages/Home'
import Categories from './Components/pages/Categories'
import Category from './Components/pages/Category'
import Photo from './Components/pages/Photo'

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
  
      <Switch>
      <Route exact path='/home' component={Home} />
      <Route path='/categories' component={Categories} />

      <Route path="/:category_id" component={Category} />
      <Route path="/:photo_id" component={Photo} />
      </Switch>
     

    </div>
    </BrowserRouter>
    
  );
}

export default App;
