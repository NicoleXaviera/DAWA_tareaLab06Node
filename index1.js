var _ = require("underscore");
var lista = [1,2,3,4,5,6]; _.each(lista, function(item){ 
    console.log(item);
});


var employeesCollection = [
    {
        "id": 1,
        "name": "John",
        "designation": "SEE",
        "salary": 25000
    },
    {
        "id": 2,
        "name": "Jacob",
        "designation": "SEE",
        "salary": 35000
    },
    {
        "id": 3,
        "name": "Nicole",
        "designation": "Manager",
        "salary": 3000
    },
    {
        "id": 4,
        "name": "Mohan",
        "designation": "Accountant",
        "salary": 30000
    },
    {
        "id": 5,
        "name": "Gita",
        "designation": "SSE",
        "salary": 35000
    }
];

var cargos = _.map(employeesCollection, function(employee){
    return {nombre: employee.name, cargo: employee.designation};
});
console.log(cargos);

console.log(_.pluck(employeesCollection, "name"));


var empleados_see = _.chain(employeesCollection).filter(function(employee){
    return employee.designation === "SEE";
})
.map(function(employee){
    return {nombre: employee.name, id: employee.id};
})
.value();
console.log(empleados_see);

