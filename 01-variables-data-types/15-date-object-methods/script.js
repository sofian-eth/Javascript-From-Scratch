let x;

let d = new Date();

x = d.toString();

x = d.valueOf();
x = d.getTime();

x = d.getFullYear();
x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate(); //gives day of the month
x = d.getDay(); //gives day of the week

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);

x = d.toLocaleString('default', {month: 'short'})

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York'
});

console.log(x, typeof x);
