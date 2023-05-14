import { remplas } from "../interface/remplas";

export function isInPeriod(remp:remplas, date:Date):boolean{
    return date.getTime() >= remp.debut.getTime() && date.getTime() <= remp.fin.getTime() 
}