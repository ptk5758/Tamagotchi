import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  let [dama, setDama] = useState({
    stamina : 100
  });
  const savedCallback = useRef();

  function damaStaminaDown() {
    let temp = Object.assign({}, dama);
    temp.stamina -= 1;
    setDama(temp);
  }

  useEffect(() => {
    savedCallback.current = damaStaminaDown;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='content'>
      <main>
        <div id='dama'>{dama.stamina}</div>
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