function sortedFrequency(arr, num) {
    let max = arr.length - 1 
    let min = 0
    let avg = Math.floor((min+max)/2)
    let first = -1
    for(let i=0; i<= Math.log2(arr.length-1); i++) {
        if(arr[avg] !== num) {
            if(arr[avg] > num) {
                max = avg - 1
                avg = Math.floor((min+max)/2)
            }
            if(arr[avg] < num) {
                min = avg + 1
                avg = Math.floor((min+max)/2)
            }
        }
        if(arr[avg] === num) {
            first = avg
        }
    }
    
   let numMax = findMax(arr, first, num)
   let numMin = findMin(arr, first, num) 
   return numMax - numMin + 1
}

function findMax(arr, first, num) {
    let min = first
    let max = arr.length - 1
    let avg = Math.floor((min+max)/2)
    for(let i=0; i<= Math.log2(arr.length-1); i++) {
        if(arr[avg] === num) {
            min = avg + 1
            avg = Math.floor((min+max)/2)
        }
        if(arr[avg] !== num) {
            max = avg - 1
            avg = Math.floor((min+max)/2)
        }
    }
    return max
}

function findMin(arr, first, num) {
    let min = 0
    let max = first
    let avg = Math.floor((min+max)/2)
    for(let i=0; i<= Math.log2(arr.length-1); i++) {
        if(arr[avg] === num) {
            max = avg - 1
            avg = Math.floor((min+max)/2)
        }
        if(arr[avg] !== num) {
            min = avg + 1
            avg = Math.floor((min+max)/2)
        }
    }
    return min
}

module.exports = sortedFrequency