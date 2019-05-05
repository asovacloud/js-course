// 1. Create inherit from the Parent to Child
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name + '. ';
    }
}

function PlanetWithSatellite() {
    Planet.apply(this, arguments);
    this.satelliteName = arguments[1] || 'Unknown satellite';
    this.text = this.getName();

    this.getName = function () {
        this.text += `The satellite is ${this.satelliteName}.`;
        return this.text;
    }
};

const earth = new PlanetWithSatellite('earth', 'moon');

earth.getName();

// 2. Create building
function Construction(name) {
    this.name = name || 'Unknown name';
    this.sumFloor = 0;

    this.getSumFloor = function () {
        return this.sumFloor;
    }

    this.setSumFloor = function (amount) {
        this.sumFloor = amount;
    }
}

function Structure() {
    Construction.apply(this, arguments);
    this.sumApartmentPerFloor = arguments[1] || 0;

    this.getFloor = function () {
        const info = {};
        info.typeConstruction = this.name;
        info.floors = this.sumFloor;
        info.totalApartments = this.sumFloor * this.sumApartmentPerFloor;
        return info;
    }

}

const house = new Structure('Building', 5);
console.log( house.getSumFloor() );
house.setSumFloor(20);
console.log( house.getSumFloor() );
console.log( house.getFloor() );

const shop = new Structure('Market', 3);
console.log( shop.getSumFloor() );
shop.setSumFloor(15);
console.log( shop.getSumFloor() );
console.log( shop.getFloor() );

// 3. Create Furniture
function Furniture(name, price) {
    this.name = name || 'Unknown name';
    this.price = price || 0;
}

Furniture.prototype.getInfo = function( property ) {
    const info = {};
    info.name = this.name;
    info.price = this.price;
    info.property = property;
    return info;

}

const officeFurniture = new Furniture( 'Office furniture', 5399 );
console.log( officeFurniture.getInfo({ computerTable: true, shredder: true }) );

const houseFurniture = new Furniture( 'House furniture', 7999 );
console.log( houseFurniture.getInfo({ sofa: true, cupboard: true }) );

// 4. Create child Admin and Guest
function User(name, dateRagistration) {
    this.name = name || 'Unknown name';
    this.dateRagistration = dateRagistration || 0;
    this.info = {}
}

User.prototype.getInfo = function() {
    this.info.name = this.name;
    this.info.dateRagistration = this.dateRagistration;

    return this.info;
}

// Child Admin
function Admin() {
    User.apply(this, arguments);

    const superAdmin = arguments[2] || false;

    this.info.superAdmin = superAdmin;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

const admin = new Admin('Andrew','05/05/19',true);

console.log(admin.getInfo());

// Child Guest
function Guest() {
    User.apply(this, arguments);

    const validDate = arguments[2] || false;

    this.info.validDate = validDate;
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

const guest = new Guest('Andrew','05/05/19','12/05/19');

console.log(guest.getInfo());

