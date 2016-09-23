var podstawa1 = 2,
	wysokość1 = 3,
	podstawa2 = 4,
	wysokość2 = 5,
	podstawa3 = 6,
	wysokość3 = 7;


function getTriangleArea (a,h) {

	if (a <= 0) {

	console.log('Nieprawidłowe dane');

}	else if (h <= 0 ) {

	console.log('Nieprawidłowe dane');

}

	var triangleArea = a*h/2;

	return triangleArea;

}

var Triangle1Area = getTriangleArea (podstawa1,wysokość1)

console.log( getTriangleArea(podstawa1,wysokość1) )

var Triangle2Area = getTriangleArea (podstawa2, wysokość2) 

console.log( getTriangleArea(podstawa2,wysokość2) )

var Triangle3Area = getTriangleArea (podstawa3, wysokość3) 

console.log( getTriangleArea(podstawa3,wysokość3) )
