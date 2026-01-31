let subs : string | number = '1k' // or i can give it 1000

// type literals with the union

let apiRequest : 'pending' | 'success' | 'error';

apiRequest = 'pending';
apiRequest = 'hitesh'; // gives type error

// any type used to tell typescript i knwow the envirnment better than you and dont type checking on the this particualr variable or function 
// more of i dont care about the type of variable 

let name : any;
name = 1; // perfect fine 