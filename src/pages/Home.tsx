import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import { remplas } from "../interface/remplas";

import axios from "axios";
import parseDateFromJson from "../functions/parseDateFromJson";


const Home = () => {
    
    const  [remp, setRemp] = useState<remplas[]>(); 

    const getAllRempla = async () => {
        axios.get(`${import.meta.env.VITE_API_REMPLA_URL}/api/all`).then( res => {
            console.log(parseDateFromJson(res.data))
            setRemp(parseDateFromJson(res.data))
        })
    }

    useEffect(() => {
        getAllRempla()

    },[])

    /*
    const remplaTest:remplas[] = [
        {
        debut: new Date("05/11/2023"), 
        fin: new Date("05/16/2023"), 
        dureeJour: 6,
        nom: "la rochelle centre"  
    }, 
        {
        debut: new Date("06/01/2023"), 
        fin: new Date("06/16/2023"), 
        dureeJour: 6, 
        nom: "rochefort centre" 
    }, 
    {
        debut: new Date("06/05/2023"), 
        fin: new Date("06/10/2023"), 
        dureeJour: 6, 
        nom: "rochefort bord de mer" 
    }, 
    
    ]
*/

    return (

        

        <div>
            <div style={{
                display: "flex",
                justifyContent:"center", 
                gap: "10%",
            }}>
                <a href="/create">Ajouter Rempla</a>
                <a href="/manager">Gerer Mes Remlpa</a>
            </div>
            
            <Calendar remplasArray={remp}></Calendar>
        </div>
    );
};

export default Home;