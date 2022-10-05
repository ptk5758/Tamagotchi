import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  let [dama, setDama] = useState({
    hunger: 100,
    stamina: 100,
    clean: 100,
  })
  const savedCallback = useRef()

  function damaStaminaDown() {
    let temp = Object.assign({}, dama)
    temp.stamina -= 1
    temp.clean -= 1
    temp.hunger -= 1
    setDama(temp)
  }

  useEffect(() => {
    savedCallback.current = damaStaminaDown
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    let id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  function staminaDie() {
    let temp = Object.assign({}, dama)
    if (temp.stamina == 0) {
      alert('좀 놀아줘라')
    }
  }

  function cleanDie() {
    let temp = Object.assign({}, dama)
    if (temp.clean == 0) {
      alert('좀 씻겨줘라 더러워죽겄네 아주')
    }
  }

  function hungerDie() {
    let temp = Object.assign({}, dama)
    if (temp.hunger == 0) {
      alert('밥 좀 주지 그랬냐')
    }
  }

  return (
    <div className="content">
      <main>
        <div id="dama">
          {'hunger : ' + dama.hunger}
          <br />
          {'stamina : ' + dama.stamina}
          <br />
          {'clean : ' + dama.clean}
        </div>
        {staminaDie()}
        {cleanDie()}
        {hungerDie()}
      </main>
      <div className="footer">
        <div className="action-group">
          <span
            className="action-item"
            onClick={() => {
              let temp = Object.assign({}, dama)
              temp.hunger += 10
              setDama(temp)
              console.log(dama)
            }}
          >
            밥주기
          </span>
          <span
            className="action-item"
            onClick={() => {
              let temp = Object.assign({}, dama)
              temp.stamina += 10
              setDama(temp)
              console.log(dama)
            }}
          >
            놀아주기
          </span>
          <span
            className="action-item"
            onClick={() => {
              let temp = Object.assign({}, dama)
              temp.clean += 10
              setDama(temp)
              console.log(dama)
            }}
          >
            씻겨주기
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
