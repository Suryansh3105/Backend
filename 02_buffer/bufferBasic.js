const {Buffer} = require('node:buffer');

//alloacting 4(size) bytes of space in buffer tempory memory , here size is given in multiples of bytes 1bytes= 8 bits so 4 bytes = 32 bits if 11 bytes then 88 bits 
const buf=Buffer.alloc(4);
console.log(buf);

// allocUnsafe() and allocUnsafeSlow is faster then alloc() because alloc() cleans the memory and then initalize the memory by 0 2 steps whereas in unsafe no cleaning and initailization is done therefore there can be garbage value in the memory
// variableName.fill() is using to fill the allocated memory here the input given is initailed in the memory ex : if given fill(0) then all memory allocated filled with 0 if given 'a' as input then 'a' binary is initailed in the memoory 
const buf1=Buffer.allocUnsafe(10);
buf1.fill('a');
console.log(buf1);
console.log(buf1.toString());

// buffer is stored in form of array so it can be acccesed through indexes 
console.log(buf1[1]);

console.log(buf1[1].toString()); // this returns a number 97 instead of a beacuse when indiviual element is called bur1[1] return a number and number.toString() gives a number 

// important 'a' is stored in memory as raw bytes 0101 form but when console log its show in hex form 61 beacuse its node that choose to desiplay data in the memory as hex for better readabilty

// writing a buffer 
buf.write("hello");
console.log(buf);
console.log(buf.toString());

// Buffer.from - used to convert given data in raw bytes : given data can be in form of strings, array of number , another buffer , typed array , dataveiw note you cannot pass boolean, object or simply a number the given input should belong to any of the 5 kinds told 

const buf2=Buffer.from("Hello"); // automatically creates a buffer of size that fits the data i.e only that much memory is allocated which is needed by the data
console.log(buf2.toString());
// changing the encoding format to be shown at the output
console.log(buf2.toString('base64',0,3)); // econding can be ascii, utf-8 etc // 0 and 3 represent range we want to see the string note starting is inclusive and ending is non inclusive 

// modifying the values in the buffer

buf2[0]=97; // replace h with a
buf2[1]=0x4A; // replace e with J
// buf2[2]="z"; this wont work as a buffer cell stores a bytes that represents a number between 0 to 255 in binary form since z is not a number it goes in memeory as NaN hence the buf[2] is omitted from the output  
console.log(buf2.toString());

//concat buffer 
const merged =Buffer.concat([buf1,buf2]);
console.log(merged.toString());