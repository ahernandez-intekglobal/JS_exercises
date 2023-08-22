// Not using strict mode since 'with' statement is not allowed
// Given the object structure bellow, do the following:
//     [a]simplify the function calls by using the with statement; and
//     [b]simplify the function calls without using the with statement.

//// Object structure
var myLib = {
	math: {
		real: {
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
		},
		complex: {
			Num: function (real, img){/*code goes here*/},
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
        },
        matrix: {
            add: function (a, b){ /*matrix addition*/},
            sub: function (a, b){ /*matrix subtraction*/},
            mul: function (a, b){ /*matrix multiplication*/},
            eye: function (size){ /*identity matrix*/},
            dot: function (m, a){ /*dot product*/},
            times:function(a, b){ /*element-wise multiplication*/}
        }
	}
};

//// Function calls
var answer = myLib.math.real.sub(
    myLib.math.real.add (20, 22), 
    myLib.math.real.mul(2,5));

var ans = myLib.math.matrix.times(
myLib.math.matrix.eye (4), 
myLib.math.complex.sub (
        new myLib.math.complex.Num (
               myLib.math.real.add(5,2),
               -3), 
        new myLib.math.complex.Num (3,4)
)
);

//// with 'with' statement
with (myLib.math.real){
    var answer = sub(add(20,22),mul(2,5));
}
with (myLib.math){
    var ans = matrix.times(
        matrix.eye(4),
        complex.sub(
            new complex.Num (
                real.add(5,2),
                -3),
            new complex.Num (3,4)
        )
    )
}

//// Creating local scope without 'with' statement
{
    // Unpacking properties
    let { add, sub, mul } = myLib.math.real;
    var answer = sub(add(20,22),mul(2,5));
}
{
    // Unpacking properties
    let { add } = myLib.math.real;
    let { eye, times } = myLib.math.matrix;
    let { Num, sub } = myLib.math.complex;
    var ans = times(
        eye(4),
        sub(
            new Num (
                add(5,2),
                -3),
            new Num (3,4)
        )
    )
}