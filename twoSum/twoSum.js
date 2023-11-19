var twoSum = function(nums, target) {
    let res = []
    nums.forEach((el, index)=>{
        nums.forEach((el2, index2)=>{
            console.log(index!= index2, el+el2==target)
            if((el+el2)==target && res.length<1 && index!=index2) {
                res.push(index, index2) }
        })
    })
    return res
};

console.log(twoSum([3, 3], 6))