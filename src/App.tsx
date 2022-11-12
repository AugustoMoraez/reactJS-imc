
import { useState } from "react";
import styles from "./app.module.css";
import {levels, calcImc} from "./helpers/imc";
import {GridItem} from "./components/Gitem/gi";
import setaImg from "./assets/leftarrow.png"

function App() {
  const[Hieght,setHieght] = useState<number>(0);
  const[weight,setWeight] = useState<number>(0);
  const[show,toShow]= useState<levels | null>(null)


  const handleCalcule = () => {
    if(Hieght && weight){
      toShow(calcImc(Hieght,weight))
    }else{
      alert("preencha os campos...")
    }
  }
  const setNull =() =>{
    toShow(null);
    setHieght(0);
    setWeight(0);
  }
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Calculadora IMC</h1>
      </div> 
      <div className={styles.container}>
        <div className={styles.left_side}>
          <h2>Preencha os campos</h2>
          <p> &nbsp;&nbsp; IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal. Ele aponta se o peso está adequado ou se está abaixo ou acima do peso.</p>
          <input type="number"
            placeholder="digite seu peso ex: 55,5 (em quilos)"
            value={weight > 0 ? weight : ''}
            onChange={e=> setWeight(parseFloat(e.target.value))}  
            disabled ={show ? true : false}        
          />

          <input type="number"
           disabled ={show ? true : false}
            placeholder="digite seu altura ex: 1,5 (em metros)"
            value={Hieght > 0 ? Hieght : ''}
            onChange={e=> setHieght(parseFloat(e.target.value))}          
          />
        
          <button disabled ={show ? true : false}  className={styles.btn} onClick={handleCalcule}>Calcular</button>

        </div>
        <div className={styles.right_side}>
          {!show &&
            <div className={styles.grid}>
              {levels.map((i,id)=>(
                  <GridItem key={id} data={i}/>
              ))}
            </div>
          }
          {show &&
            
           <div className= {styles.right_big}>
            <div  className={styles.btn_big}>
              <img onClick={setNull} className={styles.i} src={setaImg} alt="seta" width={25} />
            </div>
            <GridItem data={show}/>
           </div>


          }
        </div>
      </div>
    </div>
  );
}

export default App;
