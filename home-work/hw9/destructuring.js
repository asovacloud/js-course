// 1. Create a function with Destructuring assignment

const getObject = ( [first, ...object] ) => {
    return {
        first,
        object
    }

};


const womenName = ['Kim','Elena', 'Abigail', 'Barbara', 'Camille'];
const countries = ['Afghanistan','Belize', 'Brazil', 'Chile', 'Egypt', 'Iceland'];

console.log( getObject( womenName ) );
console.log( getObject( countries ) );


// 2. Create a function with the object of name company
const getInfo = ({name='Unknown', info: {partners: [company1='Unknown company1',company2='Unknown company2']} })=>{
        return `Name: ${name} \nPartners: ${company1} ${company2}`;

    }
;

const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

const organisation1 = {
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

const organisation2 = {
    info: {
        partners: []
    }
};

console.log(getInfo(organisation));
console.log(getInfo(organisation1));
console.log(getInfo(organisation2));