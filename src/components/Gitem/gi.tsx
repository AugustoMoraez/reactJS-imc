import { levels } from "../../helpers/imc";
import styles from "./gridItem.module.css";
import upImg from "../../assets/up.png";
import downImg from "../../assets/down.png";



type props={
    data:levels
}
export const GridItem = ({data}:props) =>{
    return(
        <div className= {styles.main} style ={{backgroundColor : data.color}} >
            <div className={styles.img}>
                <img src={data.icon === "down" ? downImg : upImg} alt="" />
            </div>
            <div className={styles.title}>
                <h3>{data.title}</h3>
            </div>
            <div className={styles.info}>
                <>
                    Seu IMC esta entre {data.imc[0]} e {data.imc[1]}
                    <br />
                    {data.yourImc &&

                        <span>Seu IMC é {data.yourImc} kg/m² e vc e uma gostosa!</span>

                    }
                    
                </>
            </div>
        </div>
    )
}