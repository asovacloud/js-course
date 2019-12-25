1) let a = 0 || 'string'; // result: string; Returns the last 'true' operand. Converts 0 to the false.

2) let a = 1 && 'string'; // result: string; Returns the last 'true' operand. Converts 1 to the true.

3) let a = null || 25; // result: 25; Returns the last 'true' operand. null converts to the false.

4) let a = null && 25; // result: null; Operator stops on the false. null converts to the false

5) let a = null || 0 || 35; // result: 35; Operator stops on the true. null and 0 converts to the false; 35 converts to the true

6) let a = null && 0 && 35; // result: null; Operator stops on the false. null converts to the false;


// What will be on console ?

1) 12 + 14 + '12'; // result: 2612; 26 - Arithmetic operator of Number and '12' is a string and we change the type to the string

2) 3 + 2 - '1'; // result: 4; '1' will transfer to the Number type

3) '3' + 2 - 1; // result: 31; '32' string transfer to the Number type

4) true + 2; // result: 3; true will transfer to the type Number 1

5) +'10' + 1; // result: 11; Will transfer to the Number

6) undefined + 2; // result: NaN; All operations with 'undefined' will return NaN

7) null + 5; // result: 5; null will transfer to the '0'

8) true + undefined; // result: NaN; All operations with 'undefined' will return NaN