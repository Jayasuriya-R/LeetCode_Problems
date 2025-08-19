var majorityElement = function(nums) {
    let m = {}
    let max = 0
    let majority = 0
    for(let i =0;i<nums.length;i++){
        if(m[nums[i]]){
            m[nums[i]] +=1
        }else{
            m[nums[i]] = 1
        }
       if(m[nums[i]]> max){
        max = m[nums[i]]
        majority = nums[i]
       }
    }
    
    return majority
};
