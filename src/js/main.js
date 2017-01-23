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
  [0, 0, 0, 0, 0],
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
  let rowCount = 1;
  outer: for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      // if (matrix[y][x] == 0) {
      //   continue outer;
      // }
      console.log(matrix[y][x]);
    }
  }
}

var winners = [
  [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0]
  ],
  [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]
  ],
  [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  [
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0]
  ],
  [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1]
  ],
  [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
  ],
  [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0]
  ],
  [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ],
  [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
  ],

]