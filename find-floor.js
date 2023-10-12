function findFloor(arr, num) {
    let min = 0
    let max = arr.length - 1
    let floor = -1
    while(min<=max) {
        let avg = Math.floor((min+max)/2)
        if(arr[avg] !== num){
            if(arr[avg] > num) {
                    max = avg - 1
                    avg = Math.floor((min+max)/2)
                }
            if(arr[avg] < num) {
                    if(arr[avg] > floor){
                        floor = arr[avg]
                    }
                    min = avg + 1
                    avg = Math.floor((min+max)/2)
                }   
        }
        else {
            floor = num
            return floor
        }
    }
    return floor
}



module.exports = findFloor