var twoSum = function(nums, target) {
    let m = {}
    for(let i=0;i<nums.length;i++){
        let com = target - nums[i]
        if(com in m){
            return [m[com],i]
        }else{
            m[nums[i]] = i 
        }
    }
};
