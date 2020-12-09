// Stijn Dusseldorp
// Software Developer 2020

var orders = {
    soda : 0,
    beer : 0,
    wine : 0,
    bowl8 : 0,
    bowl16 : 0
}

var price = {
    soda : 1.50,
    beer : 2.00,
    wine : 3.00,
    bowl8 : 4.50,
    bowl16 : 9.00
}

var total = {
    soda : 0,
    beer : 0,
    wine : 0,
    bowl8 : 0,
    bowl16 : 0
}

var check = {
    soda : false,
    beer : false,
    wine : false,
    bowl8 : false,
    bowl16 : false
}

orderStatus = true ;

order();

function order(){
    orderStatus = true ;
    while(orderStatus === true){
        var quest = prompt('Menu\n \n Soda\n Beer\n Wine\n Snacks \n \n To get the bill type \n Stop').toLowerCase();
        switch(quest){
            case 'stop' :
                orderStatus = false;
                let totalAmount = total.soda + total.beer + total.wine + total.bowl8 + total.bowl16;
                document.getElementById('total').innerHTML = "You're total is " + totalAmount;
                if(check.soda === true){
                    document.getElementById('output').innerHTML += orders.soda + ' x '  + price.soda + ' = ' + total.soda + '<br>';
                }
                if(check.beer === true){
                    document.getElementById('output').innerHTML += orders.beer + ' x '  + price.beer + ' = ' + total.beer + '<br>';
                }
                if(check.wine === true){
                    document.getElementById('output').innerHTML += orders.wine + ' x '  + price.wine + ' = ' + total.wine + '<br>';
                }
                if(check.bowl8 === true){
                    document.getElementById('output').innerHTML += orders.bowl8 + ' x '  + price.bowl8 + ' = ' + total.bowl8 + '<br>';
                }
                if(check.bowl16 === true){
                    document.getElementById('output').innerHTML += orders.bowl16 + ' x '  + price.bowl16 + ' = ' + total.bowl16 + '<br>';
                }
                break;
            case 'soda' :
                let sodaQuest = prompt('How many sodas do you want');
                parseInt(sodaQuest);
                if(isNaN(sodaQuest) || sodaQuest == 0){
                    alert('You didnt order any sodas')
                } else {
                    check.soda = true;
                    orders.soda = sodaQuest;
                    total.soda = orders.soda * price.soda;
                    alert('You ordered ' + sodaQuest + " soda's")
                }
                break;
            case 'beer' :
                let beerQuest = prompt('How many beers do you want?');
                parseInt(beerQuest);
                if(isNaN(beerQuest) || beerQuest == 0){
                    alert('You didnt order any beer')
                } else {
                    check.beer = true;
                    orders.beer = beerQuest;
                    total.beer = orders.beer * price.beer;
                    alert('You ordered ' + beerQuest + ' beers')
                }
                break;
            case 'wine' :
                let wineQuest = prompt('How many wines do you want?');
                parseInt(wineQuest);
                if(isNaN(wineQuest) || wineQuest == 0){
                    alert('You didnt order any wines')
                } else {
                    check.wine = true;
                    orders.wine = wineQuest;
                    total.wine = orders.wine * price.wine;
                    alert('You ordered ' + wineQuest + ' wine');
                }
                break;   
            case 'snack':
                let snackQuest = prompt('Do you want a bowl of 8 or 16 snacks?');
                parseInt(snackQuest);
                if(snackQuest == 8 || snackQuest == 16){
                    alert('uwu');
                    if(snackQuest == 8){
                        let amount8 = prompt('How many bowls of 8 snacks do you want?');
                        check.bowl8 = true;
                        orders.bowl8 = amount8;
                        total.bowl8 = orders.bowl8 * price.bowl8;
                        alert('You ordered ' + amount8 + ' bowls of 8 snacks');
                    }
                    if(snackQuest == 16){
                        check.bowl16 = true;
                        let amount16 = prompt('How many bowls of 16 snacks do you want') ;
                        orders.bowl16 = amount16;
                        total.bowl16 = orders.bowl16 * price.bowl16;
                        alert('You ordered ' + amount16 + ' bowls of 16 snacks');
                    }
                } else {
                    alert('Not a valid input')
                }
                break;
            default:
                alert('Not a valid input')
                break;
        }
    }
}