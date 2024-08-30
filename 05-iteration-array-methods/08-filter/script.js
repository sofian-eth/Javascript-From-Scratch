// const words = ["spray", "limit", "elite", "gabagool", "destruction", "i send it back"];

// const result = words.filter(word => word.length > 6);

// console.log(result);

const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = numbers.filter(num =>
    num % 2 === 1
);

const resultForeach = [];

numbers.forEach(num => {
    if(num % 2 === 1) {
        resultForeach.push(num);
    };
})

console.log(result);
console.log(resultForeach);

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

const res = companies.filter((item) => 
    item.category === "Retail"
)

console.log(res);

const timeRes = companies.filter((company) => company.start >= 1980 && company.end <= 2005);

console.log(timeRes);

const lastingCompanies = companies.filter((company) => company.end - company.start >= 10);

console.log(lastingCompanies);