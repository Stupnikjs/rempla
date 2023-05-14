import "./WeekComponent.css"; 
import DayComponent from "./DayComponent";
import { remplas } from "../interface/remplas";



interface props {
    week: Date[]
    remplas: remplas[] | undefined
}
const colors = ["red", "yellow", "green", "purple", "grey", "lightblue"]

const WeekComponent = ({week, remplas}:props) => {
    console.log(week)
    const getArrayWeek = (remp: remplas) => {

        let newarr =  week.map((el:Date) => {
            if(el.getTime() >= remp.debut.getTime() && el.getTime() <= remp.fin.getTime() ) return true
            else return false 
        })
  
     
        let firstTrue = 0
        let secondArg = 0
        for(let i = 0 ; i < newarr.length; i++){
                if (newarr[i] && firstTrue === 0) firstTrue = i, secondArg = i 
                if ( newarr[i] && firstTrue != 0 ) secondArg += 1
                if ( !newarr[i] && firstTrue!= 0 ) break
        }
        return [firstTrue, secondArg]
    }
    

    return (
    <div>
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)"
        }}>
            {
               week.map((el:Date) => {
                    

                    return <DayComponent  day={el}></DayComponent>
                })
            }
            {
                    remplas ? remplas.map( (el:remplas, index:number) => {
                    return  getArrayWeek(el)[0] !== 0  ? <div
                    className="rempla-div" 
                    style={{
                        backgroundColor: colors[index],
                        gridColumn:  `${getArrayWeek(el)[0] === 1 ? 1 : getArrayWeek(el)[0] + 1  } / ${getArrayWeek(el)[1] + 1} `,
                       
                        }}>
                        {el.location}
                    </div>: <div></div>
                    }) :<div></div>

            }  
        </div>
       

        
    </div>
        
    );
};

export default WeekComponent;