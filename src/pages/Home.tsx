import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import { remplas } from "../interface/remplas";

import parseDateFromJson from "../functions/parseDateFromJson";


const Home = () => {
    
    const  [remp, setRemp] = useState<remplas[]>(); 

    const getAllRempla = async () => {
        try{
            const response = await fetch(`${import.meta.env.VITE_API_REMPLA_URL}/api/all/`)
            if (response.ok) setRemp(parseDateFromJson(await response.json()))
            else {
                console.log(response.json())
            }
        } catch(error){
            console.log(error)
        }
        
    
        }
    

    useEffect(() => {
        getAllRempla()

    },[])




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