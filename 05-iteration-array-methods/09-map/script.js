const numbers = [1,2,3,4,5];

const doubledNumbers = numbers.map((x) => x*2);

console.log(doubledNumbers);

//same with foreach

// const numArray = []

// numbers.forEach(num => {
//     numArray.push(num * 2);
// })

// console.log(numArray);

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

//Create an array of company names

const companyNames = companies.map(company => company.name);

console.log(companyNames);

//create an array with just company and category

const companyCategory = companies.map(company => {
    return {name: company.name, catrogy: company.category};
});

console.log(companyCategory);

// create an array of objects with the name and the length of each company in years

const companyTime = companies.map(company => { 
    return {
        name: company.name,
        years: company.end - company.start} 
});

console.log(companyTime);