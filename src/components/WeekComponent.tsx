import "./WeekComponent.css"; 
import DayComponent from "./DayComponent";
import { remplas } from "../interface/remplas";



interface props {
    week: Date[]
    remplas: remplas[] | undefined
    mapped: boolean[]
}
const colors = ["red", "yellow", "green", "purple", "grey", "lightblue"]


const WeekComponent = ({week, remplas, mapped}:props) => {

    // const [colors, setColors] = useState(["red", "yellow", "green", "purple", "grey", "lightblue"])

    const mappedToFakeDayStart = (mapped:boolean[]):number => {
        let noFalse = true
        let count = 0
        for (let i = 0 ; i < mapped.length; i++){
            if (mapped[i] && noFalse)  count += 1
            if (!mapped[i] && noFalse) noFalse = false

        }
        return count
    }    

 
    const getArrayWeek = (remp: remplas) => {

        // return a boolean[] for each day in week if the date is between the date of rempla 
        let newarr =  week.map((el:Date) => {
            if(el.getTime() >= remp.debut.getTime() && el.getTime() <= remp.fin.getTime() ) return true
            else return false 
        })
        
        let firstTrue = 0
        let secondArg = 0
        for(let i = 0 ; i < newarr.length; i++){
                if (newarr[i] && firstTrue === 0) firstTrue = i + 1 , secondArg = i + 1
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
                    key={index}
                    style={{
                        backgroundColor: colors[index],
                        gridColumn:  `${getArrayWeek(el)[0] + mappedToFakeDayStart(mapped) === 1 ? 1 : getArrayWeek(el)[0]  } / ${getArrayWeek(el)[1] + mappedToFakeDayStart(mapped) } `,
                       
                        }}>
                        
                        <span>{el.location}</span>
                        <span className="logiciel">{el.logiciel}</span>
                        <span className="retrocession">{el.retrocession}</span>
                    </div>: <div></div>
                    }) :<div></div>

            }  
        </div>    
    </div>
        
    );
};

export default WeekComponent;