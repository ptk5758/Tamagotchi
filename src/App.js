import { useState } from 'react';
import './App.css';

function App() {
  let [dama, setDama] = useState({
    stamina : 0
  });
  return (
    <div className='content'>
      <main>
        <div id='dama'></div>
      </main>
      <div className='footer'>
        <div className='action-group'>
          <span className='action-item'>밥주기</span>
          <span className='action-item' onClick={()=>{
            let temp = dama
            temp.stamina += 10;
            setDama(temp);
          }}>놀아주기</span>
          <span className='action-item'>씻겨주기</span>
        </div>
      </div>
    </div>
  );
}

export default App;