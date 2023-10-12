function findRotationCount(arr) {
    let min = 0
    let max = arr.length - 1
    for(let i=0; i<=Math.log2(arr.length-1); i++){
        let avg = Math.floor((min + max)/2)
        if(arr[avg] > arr[avg + 1]) return avg + 1
        else if(arr[min]<= arr[avg]){
            min = avg  
        }
        else{
        max = avg
    }
    }
    return 0
}

module.exports = findRotationCount