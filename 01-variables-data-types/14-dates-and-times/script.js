let d;

d = new Date();

// d = d.toString();

d = new Date(2000,3,18);

d = new Date('2022-09-26');

d = new Date('09/26/2022');

d = Date.now()

// d = new Date('04-18-2000');
// d = d.getTime();
// d = d.valueOf()

d = new Date(1716524526986);

d = Math.floor(Date.now() / 1000);

console.log(d, typeof d);