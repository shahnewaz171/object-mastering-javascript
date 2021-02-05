// using apply method
const normalPerson = {
    firstName: 'Muhammad',
    lastName: 'Shahnewaz',
    salary: 15000,
    getFullName: function(){   //Its a method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        // console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
};

const newazPerson = {
    firstName: 'Muhammad',
    lastName: 'Shahnewaz',
    salary: 25000,
};
// normalPerson.chargeBill.apply(newazPerson, 900); //using apply method
normalPerson.chargeBill.apply(newazPerson, 900, 100, 10);  //we can apply multiple parameters using apply method
normalPerson.chargeBill.apply(newazPerson, 3000, 300, 30); //we can apply multiple parameters using apply method
console.log(newazPerson.salary);