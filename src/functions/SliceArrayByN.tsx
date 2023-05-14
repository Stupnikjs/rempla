

export default function SliceArrayByN<T>(array:T[], n:number, neutral:T):T[][]{
    let newArr:T[][] = []
    let narray = array.concat(new Array(n - (array.length % n)).fill(neutral))
    for ( let i = 0 ; i < narray.length ; i+= n){
        const subArr = narray.slice(i, i + n)
        newArr.push(subArr)

    }
    return newArr
}