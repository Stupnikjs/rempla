import { remplas } from "../interface/remplas";

export default function  getTargetDays(remplas:remplas){
        
    let targetDays = [] 
    let currentDate = new Date(remplas.debut)
    while(currentDate <= remplas.fin){
        targetDays.push(new Date(currentDate)); 
        currentDate.setDate(currentDate.getDate() +1)
    }
   return targetDays;  
}