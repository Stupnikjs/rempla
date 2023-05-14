import "./FormRempla.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { jsonRempla } from "../interface/jsonRempla";


const FormRempla = () => {

    const [start , setStart ] = useState("")
    const [end , setEnd ] = useState("")
    const  [location, setLocation] = useState("")
    const  [retrocession, setRetrocession] = useState("")
    const [logiciel, setLogiciel] = useState("")
    const [travelTime, setTravelTime] = useState("")
    

    useEffect(() => {
        console.log(start, end, location, travelTime)
    }, [start,end])


    const formatDateString = (dateString: string) => {
            let splited = dateString.split("-")
            let rev_splited = splited.reverse()
            return rev_splited.join("-")
    }


    const postForm = (e:React.FormEvent) => {

        e.preventDefault()
        let rempla:jsonRempla = {
            debut: formatDateString(start), 
            fin: formatDateString(end), 
            location: location, 
            minutes_from_home: parseInt(travelTime),
            logiciel: logiciel, 
            retrocession: retrocession,
        }
        axios.post(`${import.meta.env.VITE_API_REMPLA_URL}/api/create`, rempla)
    }

    return (
           <form action="" className="form" onSubmit={e => {postForm(e)}}>
                <fieldset style={{
                    display: "flex", 
                    flexDirection: "column",
                    justifyContent:"space-around",
                    height:'80vh',
                    width:'70%',
                    margin:"auto",
                }}>
                        <legend> Dates de la Rempla </legend>
                        <label>Debut</label>
                        <input type="date" onChange={e => setStart(e.target.value)}></input>
                        <label>Fin</label>
                        <input type='date' onChange={e => setEnd(e.target.value)}></input>

                        <label>Localisation</label>
                        <input type="text" onChange={e => setLocation(e.target.value)} ></input>

                        <label> Temps de Trajet depuis domicile </label>
                        <input type="text" onChange={e => setTravelTime(e.target.value)} ></input>

                        
                        <label>Logiciel</label>
                        <input type="text" onChange={e => setLogiciel(e.target.value)} ></input>
                        
                        <label>Retrocession </label>
                        <input type="text" onChange={e => setRetrocession(e.target.value)} ></input>
                        

                        <input type="submit" style={{fontFamily:'Pacifica'}}></input>
                </fieldset>


            </form>
        
    );
};

export default FormRempla;