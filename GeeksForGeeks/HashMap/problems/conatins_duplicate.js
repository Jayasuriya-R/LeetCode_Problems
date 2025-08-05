var containsDuplicate = function(nums) {
    let num1 = new Set(nums)
    return num1.size != nums.length
    
};
