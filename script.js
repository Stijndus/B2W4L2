// Stijn Dusseldorp
// Software Developer 2020

var drinks = {
    soda : 0,
    beer : 0,
    wine : 0
}

var price = {
    soda : 1.50,
    beer : 2.00,
    wine : 3.00
}

var total = {
    soda : 0,
    beer : 0,
    wine : 0
}

orderStatus = true ;

order();

function order(){
    orderStatus = true ;
    while(orderStatus === true){
        var quest = prompt('Wat wilt u bestellen?\n\nMenu\n \n Soda\n Beer\n Wine\n').toLowerCase();
        switch(quest){
            case 'stop' :
                orderStatus = false;
                break;
            case 'soda' :
                let sodaQuest = prompt('How many sodas do you want');
                parseInt(sodaQuest);
                if(isNaN(sodaQuest) || sodaQuest == 0){
                    alert('You didnt order any sodas')
                } else {
                    drinks.soda = sodaQuest;
                    total.soda = drinks.soda * price.soda;
                    alert("You ordered" + sodaQuest + "soda's")
                }
                break;
            case 'beer' :
                let beerQuest = prompt('How many beers do you want');
                parseInt(beerQuest);
                if(isNaN(beerQuest) || beerQuest == 0){
                    alert('You didnt order any beer')
                } else {
                    drinks.beer = beerQuest;
                    total.beer = drinks.beer * price.beer;
                    alert("You ordered" +beerQuest + "beers")
                }
                break;
            case 'wine' :
                let wineQuest = prompt('How many wines do you want');
                parseInt(wineQuest);
                if(isNaN(wineQuest) || wineQuest == 0){
                    alert('You didnt order any wines')
                } else {
                    drinks.wine = wineQuest;
                    total.wine = drinks.wine * price.wine;
                    alert("You ordered" + wineQuest + "wine");
                }
                break;   
            default:
                break;
        }
    }
}