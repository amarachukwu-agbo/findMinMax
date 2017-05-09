function findMinMax(listOfNumbers){
	var minMaxArray = [];
	listOfNumbers.sort(function(a,b){
		return a-b;
	})
	minMaxArray.push(listOfNumbers[0]);
	minMaxArray.push(listOfNumbers[listOfNumbers.length - 1]);
	if (minMaxArray[0] === minMaxArray[1]){
		return [minMaxArray[0]];
	}
	else{
	return minMaxArray;
	}
}
