var choice = prompt ("  Welcome to area calculator. \nPlease enter the number corresponding to your choice: \n1. Area of a rectangle\n2. Area of a triangle \n3. Area of a circle \n4. Area of a parallelogram");

if(choice == "1") {
    var j = prompt("Enter the length")
    var b = prompt("Enter the breadth/height")
    var result = Number(j) * Number(b)
    alert("The area is "+ result )

}

if(choice=="2") {
    var h = prompt ("Enter the height")
    var b = prompt ("Enter the base")
    var result = Number(h) * Number (b) / 2
    alert ("The area is "+ result)
}


if(choice=="3") {
    var r = prompt("Enter the radius")
    var result = 3.14 * Number(r) *Number(r)
    alert ("The area is "+ result)
}

if(choice=="4")
    var n = prompt("Enter the height")
    var q= prompt ("Enter the corresponding base")
    var result = Number(n) * Number (q)
    alert("The area is "+ result)