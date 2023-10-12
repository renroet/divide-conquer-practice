function countZeroes(arr) {
    let max = arr.length - 1 
    let min = 0
    let avg = Math.floor((min+max)/2)

   for(let i=0; i<= Math.log2(arr.length-1); i++) {
        if(arr[avg] === 0) {
            max = avg - 1
            avg = Math.floor((min+max)/2)
            }
        if(arr[avg] === 1) {
            min = avg + 1
            avg = Math.floor((min+max)/2)
            }
        }
       
    return (arr.length -1) - avg
    
    
   
}

module.exports = countZeroes