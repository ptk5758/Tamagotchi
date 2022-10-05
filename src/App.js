import { useEffect, useState , useRef} from 'react';
import './App.css';

function App() {
  let [dama, setDama] = useState({
    stamina : 0
  });
  
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(()=>{
      savedCallback.current = callback;
    }, [callback]);

    useEffect(()=>{
      function tick() {
        savedCallback.current();
      }
      if(delay != null){
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay])
  }

  useInterval(() => {
    setDama(Object.assign({},dama).stamina + 1);
  })
  

  return (
    <div className='content'>
      <main>
        메인컨탠츠입니다.
      </main>
      <div className='footer'>
        <div className='action-group'>
          <span className='action-item'>밥주기</span>
          <span className='action-item' onClick={()=>{
            let temp = Object.assign({}, dama);
            temp.stamina += 10;
            setDama(temp);
            console.log(dama);
          }}>놀아주기</span>
          <span className='action-item'>씻겨주기</span>
        </div>
      </div>
    </div>
  );
}



export default App;