// add solution here
function theBeatlesPlay(musicians, instruments) {
var array = [];
var action = 'plays'
for (var i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + action + instruments[i]);
  }
  return array
}

function johnLennonFacts() {


}

function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}
