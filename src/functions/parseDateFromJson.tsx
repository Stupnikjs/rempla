import { remplas } from "../interface/remplas";
import { jsonRempla } from "../interface/jsonRempla";

const dateFromStringFormat = (dateString:string) => {
    let splited = dateString.split("-")
    let returned = []

    for (let i = 0; i< splited.length; i++){
        returned.push(parseInt(splited[i]))
    }
    return new Date( returned.at(-1)! , returned.at(-2)! - 1 ,returned.at(-3))
}



export default function (jsonRempla:jsonRempla[]):remplas[]{
    return jsonRempla.map( (el) => {
        const {debut, fin, ...remaining} = el; 
        console.log(dateFromStringFormat(el.debut))
        return {
            debut: dateFromStringFormat(el.debut), 
            fin: dateFromStringFormat(el.fin), 
            ...remaining,
        }
    
    }
        )

}