
import Msgbox from './msgbox'

import Exp from './exp'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  <div style={{ height:'100vh',width:'100vw', backgroundImage: 'url("background.jpg")',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', float:'left'}}>
  <div className='container'style={{marginTop:'50px',height:'80vh',width:"50%", padding:'20px',background: 'rgba( 255, 255, 255, 0.25 )',boxShadow:" 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",backdropFilter: "blur( 3.5px )",webkitBackdropFilter: "blur( 3.5px )", borderRadius: '10px'}}>   

    
    <Msgbox />
    
   
    </div>
    </div>
  );
}

export default App;
