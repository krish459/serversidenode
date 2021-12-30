var Rect = {
    perimeter : (x,y) =>(2*(x+y)),
    area : (x,y) =>(x*y)
};

function solveRect(l,b){
    console.log("solving for Rectangle with l = "+l+"and b = "+b);

    if (l<=0 || b<=0) {
        console.log("please provide correct values");
    }
    else{
        console.log("Area of  Rectangle is = "+Rect.area(l,b)+"and perimeter = "+Rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,2);
solveRect(-3,5);