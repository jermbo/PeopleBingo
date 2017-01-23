const tasks = ['Mullet', 'Pat', 'Big Stuffed animal little kid', 'Herd of scooters', 'Kid on a leash', 'Clothing disproportion', 'Bearded woman', 'Kid screaming', 'The ugly one of the group', 'Missing limb', 'Toothless smile', 'Facial Tattoos', 'Stroller full, kid walking', 'Inappropriate foot wear', 'Trump Supporter', 'Black Trump Supporter', 'Weed Shirt', 'The Selfies', 'Pizza Face', 'Neck Talkers', 'Extensive Body Jewelry', 'Someone walking barefoot', 'Super bright clothes', 'The Nascar family', 'The Redneck family', 'Someone covered in powered sugar', 'Someone crying', 'Lost child', 'Hairy Back', 'Cut-off denim short', 'His boobs are bigger than hers', 'Cross Dresser'];

tasks.sort(function() {
  return .5 - Math.random();
});

var displays = document.querySelectorAll('td');


var row = -1;
displays.forEach((d, i) => {
  if (d.classList != 'freeSpace') {
    d.innerText = tasks[i];
  }
  if ((i % 5) == 0 || row == -1) row++;
  d.dataset.row = `${row}-${i % 5}`;
  d.addEventListener('click', stamp)
});

var matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

function stamp(e) {
  let data = e.target.dataset.row.split('-')
  console.log(data);
  // console.log(this.classList.contains('stamped'))
  if (!this.classList.contains('stamped')) this.className += ' stamped';
  matrix[data[0]][data[1]] = 1;
  console.table(matrix);
  arenaSweep();
}

//  http://stackoverflow.com/questions/21011011/multi-dimensional-array-check-for-diagonal-consecutive-values
function arenaSweep() {
  var win = 5;
  var length = 5;
  var r = 0;
  var c = 0;
  var dr = 0;
  var dl = 0;

  for (var i = 0; i < length; i++) {

    for (var j = 0; j < length; j++) {
      (matrix[j][i] === 1) ? c++ : c = 0;
      (matrix[i][j] === 1) ? r++ : r = 0;

      if (matrix[i][j] === 1 && i < length) {
        dr = 0;
        dl = 0;

        for (var z = 0; z < length; z++) {
          (matrix[i + z][j + z] === 1) ? dr++ : dr = 0;
          (matrix[i + z][j - z] === 1) ? dl++ : dl = 0;
        }
      }
      if (c === win || r === win || dr === win || dl === win) {
        alert("YOU WIN!");
        return true;
      }
      r = 0;
    }
  }
}