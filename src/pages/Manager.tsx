import axios from "axios";
import { useEffect, useState } from "react";
import { remplas } from "../interface/remplas";
import "./Manager.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Manager = () => {



    const [remplas, setRempla] = useState([]); 
    

    const deleteHandler = (id: string, index:number) => {
            
            axios.delete(`${import.meta.env.VITE_API_REMPLA_URL}/api/delete/${id}/`).then( response => {
                if (response.status != 404) 
                {   
                    window.location.href = "/manager" }
            })
    }


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_REMPLA_URL}/api/all/`).then(res => setRempla(res.data))
       
    }, [])
    return (
        <div>
            <a href="/"> Calendrier </a>
            {
                remplas ? remplas.map((el:remplas, index:number) => {
                    return <div className="rempla-manager" key={index} > <FontAwesomeIcon icon={faXmark} onClick={e => {e.preventDefault(); deleteHandler(el.id!, index);}}></FontAwesomeIcon><span>{el.location}</span> </div>
                }): <div></div>
            }
        </div>
    );
};

export default Manager;