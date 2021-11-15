import react from 'react';
import './App.css';
import Fullname from './component/fullname'
import Adress from './component/adress';
import ProfilePhoto from './component/profilephoto';


function App() {
  return (
<div className="app">
<Fullname />
<ProfilePhoto/>
<Adress/>
</div>
 
  );
}

export default App;
