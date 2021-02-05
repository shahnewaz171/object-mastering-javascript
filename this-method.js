const normalPerson = {
    firstName: 'Muhammad',
    lastName: 'Shahnewaz',
    salary: 15000,
    getFullName: function(){   //Its a method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary -amount;
        return this.salary;
    }
};
// console.log(normalPerson.firstName);
normalPerson.chargeBill(200);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);
