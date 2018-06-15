function theBeatlesPlay(arrMusicians,arrInstruments){
var newArrayMusiciansAndInstruments = [];

for (let i=0;i<arrMusicians.length;i++){
newArrayMusiciansAndInstruments[i]=`${arrMusicians[i]} plays ${arrInstruments[i]}`
}
return newArrayMusiciansAndInstruments;
}

function