

function serving (chaiOrder :string | number ){
    if(typeof chaiOrder === "number"){
        // chaiOrder.toUpperCase() give error as we narrowed the type to number and number doesnt have to uppercse 
        return chaiOrder; 
    }
    chaiOrder.toLowerCase(); // since it cannot be number string property can be appiled 

}

let chai : string | number;
chai = 123; // or this can be order number or chai name 
chai = "masala chai"
serving(chai);