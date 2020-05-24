var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

var array = []
function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length ; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}


function johnLennonFacts(nerdAlert) {
  var facts = [
    'He was the last Beatle to learn to drive',
    'He was never a vegetarian',
    'He was a choir boy and boy scout',
    'He hated the sound of his own voice'];
  var i = 0;
  var updatedFacts = [];
    while (i < facts.length)
      updatedFacts.push(facts[i] + '!!!');
      i++;
    }
}

function iLoveTheBeatles(n) {
  var a = []
  do {
    a.push('I love the Beatles!');
    n++}
    while (n < 15);
    return a
}