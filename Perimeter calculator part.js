var prompt=("Welcome to perimeter calculator. It measures perimeters of diffrent shapes.The simple meaning of perimeter is all round distance of a shape \n1.Perimeter of a rectangle\n2.Perimeter of a square\n3.perimeter of a triangle")

if (choice == "1") {
    var a = prompt("Enter the length")
    var n = prompt("Enter the breadth/height")
    var result = Number(n) * 2 + Number(b) * 2
    alert("The area is " + result)

}
if (choice == "2") {
    var h = prompt("Enter the height")
    var result = Number(h) * 4
    alert("The area is " + result)
}

if (choice == "3") {
    var r = prompt("Enter one side of the triangle")
    var j = prompt ("Enter the second side of the triangle")
    var i = prompt ("enter the third part of the triangle")
    var result = Number(r) + Number(j) + Number(i)
    alert("The area is " + result)
}