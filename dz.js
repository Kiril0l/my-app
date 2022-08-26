let obj = { 
    jo: 100,
    ka: 160,
    pe: "kate",
}

let multi = (object)=> {
    for (let k in object){
        if (typeof object[k] == 'number') {
            object[k] *= 2
        }
    }   
}



multi(obj)
console.log(obj)
