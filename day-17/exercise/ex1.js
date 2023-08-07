    var price = 1; 
    var distance = 90;
    if (distance >=0 && distance <=1){
        price = distance * 15000;
    }
    else if ( distance > 1 && distance <=5){
        price = distance * 13500;
    }
    else if (distance > 5 && distance <=120){
        price = distance * 11000;
    }
    else {
        price = (distance * 11000)*0.9;
    }
    console.log(`Tiền cước taxi là : ${price}`);