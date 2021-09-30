export function toFullTokenAmount(uint256) {
  const string = uint256.toString()
  return string.substring(0, string.length - 18)
}

export function toUint256Amount(amount) {
  return amount.toString() + '0'.repeat(18)
}

export default {}
