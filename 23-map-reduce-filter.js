/* 
map- adicionar 10% do valor de mercado a todas companhias 
filter- filtar somente companhias fundadas a baixo de 1990
reduce- somar o valor de mercado total das companhias filtradas  */


const companies = [
    { name: 'sansung', markevalue: 200, ceo: "kim alves ", foundedon: 1938 },
    { name: 'apple',  markevalue: 300, ceo: "tim cook ", foundedon: 1976 },
    { name: 'microsoft', markevalue: 400, ceo: "satya nadella ", foundedon: 1975 },
    { name: 'google', markevalue: 500, ceo: "sundar pichai ", foundedon: 1998 },
    { name: 'amazon', markevalue: 600, ceo: "jeff bezos ", foundedon: 1994 },
    { name: 'facebook', markevalue: 700, ceo: "mark zuckerberg ", foundedon: 2004 },
    { name: 'tesla', markevalue: 800, ceo: "elon musk ", foundedon: 2003 },
    { name: 'netflix', markevalue: 900, ceo: "reed hastings ", foundedon: 1997 },
    { name: 'twitter', markevalue: 1000, ceo: "jack dorsey ", foundedon: 2006 },
]

const newcompanies = companies.map((company) => {
    company.markevalue = company.markevalue - company.markevalue / 10
    return company;
}).filter((company) => company.foundedon > 1980).reduce((acc, company) => acc + company.markevalue, 0)

console.log(newcompanies.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) //formato moeda






//usando arron function - função para cada elemento 

//.map 
 const add10 = (company) => {
    company.markevalue = company.markevalue + company.markevalue / 10
    return company;
}
//.filter
const anocompanies = (company)=> company.foundedon < 1990

//.reduce
const totalcompany = (acc, company) => acc + company.markevalue

//variavel para receber o resultado do map, filter e reduce
const newcompanhias = companies
.map(add10)
.filter(anocompanies)
.reduce(totalcompany, 0)  // acumulardor nao fica junto com a função 
console.log(companies)//

//----------------------------------------------------------

//economizando codigo 

const newCompanies = companies.map((company) => {
    company.markevalue = company.markevalue 
    return company;
}).filter((company) => company.foundedon < 1990).reduce((acc, company) => acc + company.markevalue, 0)//acumulardor "0" fica junto , so separa quando fazer arrom function

console.log(newCompanies)


//modo normal de fazer 

const newCom = companies.map(company => {
    company.markevalue = company.markevalue 
    return company;

}).filter (company => {
    return company.foundedon < 1990
    
}).reduce ((acc,company) =>{
     return acc + company.markevalue
}, 0)

console.log(newCom)
 


