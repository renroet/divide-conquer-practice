function findRotatedIndex(arr, num) {
    let rotation = findRotation(arr)
    let res;
    if(arr[rotation]<= num && arr[arr.length-1] >= num){
        res = binarySort(arr, num, rotation, arr.length-1)
    }
    else {
        res = binarySort(arr, num, 0, rotation-1)
    }
    return res
}

function binarySort(arr, num, min, max) {
    while(min<=max) {
        let avg = Math.floor((min+max)/2)
        if(arr[avg] !== num) {
            if(arr[avg] > num) {
                max = avg - 1    
            }
            if(arr[avg] < num) {
                min = avg + 1
            }
        }
        if(arr[avg] === num) {
            return avg
        }
    }
    return -1
}

function findRotation(arr) {
    let min = 0
    let max = arr.length - 1
    while(min<=max){
        let avg = Math.floor((min + max)/2)
        if(arr[avg] > arr[avg + 1]) return avg + 1
        else if(arr[min]<= arr[avg]){
            min = avg  
        }
        else{
        max = avg
    }
    }
}

module.exports = findRotatedIndex