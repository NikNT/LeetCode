const prices = [7, 6, 4, 3, 1];

var maxProfit = function (prices) {
  if (!prices || prices.length === 0) {
    return 0;
  }

  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }

  return maxProfit;
};

console.log(maxProfit(prices)); // Output: 0
