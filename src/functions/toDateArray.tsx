


export default function toDateArray(array:number[], year:number, month:number){

    return array.map((el:number) => {
        if (el === 0 ) return new Date(0, 0, 0)
        return new Date(year, month, el)
    })
}