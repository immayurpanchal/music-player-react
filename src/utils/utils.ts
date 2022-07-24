export const getValueInK = (val: number) => {
	if (val < 1000) {
		return val.toString()
	}
	const ans = val / 1000
	return ans.toFixed(2) + 'K'
}
export const getMins = (val: number) => {
	const min = Math.floor(val / 60)
	const sec = val % 60
	return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
}
