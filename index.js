// Data types = 1.Primitive Types
const name = 'Atthapon'; //String
let height = 187; //Number
let isMale = false; //Boolean
let city = null; //Null
let no; //Undefined
let bigNumber = 10n; //Bigint
console.log(name, height, isMale, city, no, bigNumber)
console.log(name);
console.log(height);
height = 170;
console.log(height);

// Data types = 2.Reference Types
/*---- Object ----*/
const person = {
    name: 'Atthapon',
    height: 187,
    city: 'bangkok'
};
console.log(person);
console.log(person.name); // ต้องการเรียก PROPERTY บางตัว

person.height = 190; // เปลี่ยนแปลงค่า PROPERTY 
console.log(person.height)

person.weight = 55; // เพิ่ม PROPERTY ใหม่ 
console.log(person);

/*---- Array ----*/
const numbers = [5, 10, 15, 20];
console.log(numbers);
console.log(numbers[2]); // ต้องการเรียกค่าบางตัวให้ใส่ [ตัวเลข index] ของค่านั้น

numbers.push(25); // เพิ่มค่าใหม่ต่อท้ายโดยใช้ Method push 
console.log(numbers);

numbers.pop(); // ลบค่าตัวท้ายสุดออกโดยใช้ Method pop
console.log(numbers);

numbers.unshift(1); // เพิ่มค่าใหม่ไปข้างหน้าสุดโดยใช้ Method unshift
console.log(numbers);

numbers.shift(); // ลบค่าหน้าสุดโดยใช้ Method shift
console.log(numbers);

/*---- Function ----*/


/*---- Arithmetic Operators = เครื่องหมายการคำนวณทางคณิตศาสตร์ ----*/
let addition = 10 + 2;
let subtraction = 10 - 2;
let multplication = 10 * 2;
let division = 10 / 2;
let modulus = 10 % 2;
let exponentiation = 10 ** 2;
let all = 1 + 2 - 3 * 4 / 5 ** 6; // ระดับการคำนวณจะไม่เรียกจากซ้าย-ขวาตลอดเพราะมันจะคำนวณตามความสำคัญเรียงลำดับกันไปโดยจะเรียงแบบ ** * % / + - เรียงตามประมาณนี้
console.log(addition, subtraction, multplication, division, modulus, exponentiation);
console.log(all);
