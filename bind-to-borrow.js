const normalPerson = {
    firstName: 'Muhammad',
    lastName: 'Shahnewaz',
    salary: 15000,
    getFullName: function(){   //Its a method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary -amount;
        return this.salary;
    }
};


const newazPerson = {
    firstName: 'Muhammad',
    lastName: 'Shahnewaz',
    salary: 25000,
};

const friendlyPerson = {
    firstName: 'Muhammad',
    lastName: 'Newaz',
    salary: 25000,
};
// normalPerson.chargeBill();
const newazChargeBill = normalPerson.chargeBill.bind(newazPerson);
newazChargeBill(2000);
newazChargeBill(3000);
console.log(newazPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(2000);
console.log(friendlyPerson.salary);
