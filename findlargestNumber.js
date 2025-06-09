function findlargestNumber(nums) {
  const result = nums
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}

// 🔍 Example usage:
console.log(findlargestNumber([8, 89, 898, 8989]));  // "8989898988"
console.log(findlargestNumber([0, 0, 0]));           // "0"
