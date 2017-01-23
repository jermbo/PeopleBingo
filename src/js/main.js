var tasks = [
  'Mullet',
  'Pat',
  'Big Stuffed animal little kid',
  'Herd of scooter',
  'Kid on a leash',
  'Clothing disproportion',
  'Bearded woman',
  'Kid screaming',
  'The ugly one of the group',
  'Missing limb',
  'Toothless smile',
  'Facial Tattoos',
  'Stroller full, kid walking',
  'Inappropriate foot wear',
  'Trump Supporter',
  'Black Trump Supporter',
  'Weed Shirt',
  'The Selfies',
  'Pizza Face',
  'Neck Talkers',
  'Extensive Body Jewelry',
  'Someone walking barefoot',
  'Super bright clothes',
  'The Nascar family',
  'The Redneck family',
  'Someone covered in powered sugar',
  'Someone crying',
  'Lost child',
  'Hairy Back',
  'Cut-off denim short',
  'His boobs are bigger than hers',
  'Cross Dresser'
]


tasks.sort(function() {
  return .5 - Math.random();
});

var displays = document.querySelectorAll('td');

displays.forEach((d, i) => {
  if (d.classList != 'freeSpace') {
    d.innerText = tasks[i];
  }
});