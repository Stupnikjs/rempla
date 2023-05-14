import React, { useEffect, useState } from 'react';

import { remplas } from '../interface/remplas';
import "./Calendar.css"
import toDateArray from '../functions/toDateArray';
import SliceArrayByN from '../functions/SliceArrayByN';
import WeekComponent from './WeekComponent';

interface props {
    remplasArray:remplas[] | undefined
}

const month = () => {
    let months = [];
    for ( let i = 1 ; i < 13; i++){
        months.push(i)
    }
    return months
}

const days = [31, 28, 31, 30, 31,30, 31, 31, 30, 31, 30, 31 ]

const Calendar = ({remplasArray}:props) => {

   


    const [selected, setSelected] = useState(null); 
    const [year, setYear] = useState(2023); 
    const firstOfMonth = new Date(year, selected! - 1, 1).getDay() === 0 ? 7 : new Date(year, selected! - 1, 1).getDay()
   

    const displayDay = (n: number) => {
            let daysToDisplay = []; 
            for (let i = 1; i < n + 1; i++){
                daysToDisplay.push(i)
            }
            return daysToDisplay
    }

    

    const  Months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre","Octobre", "Novembre", "Decembre"]
    const  daysOfWeek = ["L", "M", "M","J", "V", "S", "D"]


    const [calendarState, setCalendarState] = useState((new Array(firstOfMonth - 1).fill(0)))

    useEffect(() => {
       setCalendarState((new Array(firstOfMonth - 1).fill(0)).concat(displayDay(days[selected! - 1])))
    
    }, [selected]) 
   
    return (
        <div>     
            <section className='year-section'>
                <button onClick={(e:React.MouseEvent) => {e.preventDefault(); setYear( year + 1)}}>+</button>
                    <span>{year}</span>
                <button onClick={(e:React.MouseEvent) => {e.preventDefault(); setYear( year - 1)}}> - </button>
            </section>  
            
            <section style={{ width: "85%", margin:"auto"}}>
            { month().map( (el:any) => {
                return <button onClick={ e=> {e.preventDefault(); setSelected(el)}}> {el}</button>
            }) }
            </section>
            
            <div style={{textAlign: "center", padding:"1rem"}}>
                {selected ?  Months[selected-1]: <div>Pas de mois séléctioné</div>}
            </div>
        <div style={{width: "100%", display: "flex"}}> 
            {daysOfWeek.map((el:string) => {
                return <span 
                style={{
                flex: "1", 
                background: "black", 
                borderRadius: "5px",
                textAlign: "center", 
                color: "white"}}>{el}</span>}) }

        </div>
        <div style={{ 
                display: "grid",
                height: "120vh" , 
               
            }}>
               
            {   
             SliceArrayByN(toDateArray(calendarState, year, selected! - 1), 7, new Date(0, 0, 0)).map( (el:any) => {
                console.log(el)
                return <WeekComponent week={el} remplas={remplasArray}></WeekComponent>
             })
            }
            
            
        
        </div>
        </div>
        
    );
};

export default Calendar;