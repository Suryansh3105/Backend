

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

// typeguading with classes 
class KulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}
class cutting{
    serve(){
        return `serving cutting chai`
    }
}

function serve(chai: KulhadChai | cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
    if(chai instanceof cutting){
        return chai.serve();
    }
}

//type guarding with custom type

type chaiOrder = {
    type:string,
    sugar:number 
}

// a function to check the given data matches the customized type 

function isChaiOrder(obj:any):obj is chaiOrder{ // chai is chaiorder as type of function mean withput it the fucntion return true or false but with it it tell ts if true the obj is chaiOrder this is knwon as type predicate 
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )

}

// checking for chaiorder type is correct or not 

function serveOrder(item:chaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar}`;

    }
    return `serving custom chai : ${item}`
}

// production example 

type MasalaChai = {type:"masala"; spicelevel:number};
type GingerChai = {type:"ginger"; amount:number};
type ElaichiChai = {type:"elaichi"; aroma:number};

type chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: chai){
    switch(order.type){
        case "masala":
            //code
            break;
        case "elaichi":
            //code
            break;
    }
}
