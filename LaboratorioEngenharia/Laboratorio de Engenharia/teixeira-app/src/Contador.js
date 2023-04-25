import { useEfect, useEffect, useState } from "react"
import { Button } from "./components/Button"
import './Contador.css'
import Image1 from './assets/man.png'
import Image2 from './assets/woman.png'

export function Contador(){

    const [qtdeman, setQtdeman] = useState(0)
    const [qtdewoman, setQtdewoman] = useState(0)
    useEffect(() => {
        setTotal(qtdeman + qtdewoman)
    }, [qtdeman, qtdewoman])
    
    function Zerar(){
        setQtdeman(0)
        setQtdewoman(0)
    }
}
    return (
        <><div class="avatar-container">
            <div class="total-container">
                <h2 class="total-button-container">
                    <span>Total: {total}</span>
                    <button class='reset-button' onClick={Zerar}>Reset</button>
                </h2>
            </div>
        </div><img scr={Image1} alt={'Avatar Man'} class="Avatar" /><div class="counter">
                <Button status='add' onClick={() => setQtdeman(qtdeman + 1)} />
                <p class="count">{qtdeman}</p>
                <Button status='decrementar' onClick={() => setQtdeman(qtdeman - 1)} />
            </div></>
   )
   <div>
      <><img src={Image2} alt={'Avatar Woman'} class="avatar" /><div class="counter">
            <Button status='add' onClick={() => setQtdewoman(qtdewoman + 1)} />
            <p class="count">{qtdewoman}</p>
            <Button status='decrementar' onClick={() => setQtdewoman(qtdewoman - 1)} />
        </div></>

