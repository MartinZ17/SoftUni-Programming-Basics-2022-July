function basketballEquipment(input){
    let pricePerYear = Number(input[0]);

    let percentOfBasketShoes = pricePerYear * 0.4;
    let basketShoes = pricePerYear - percentOfBasketShoes;

    let percentOfBasketEquipment = basketShoes * 0.2;
    let basketEquipment = basketShoes - percentOfBasketEquipment;

    let basketball = basketEquipment * (1/4);
    let accessories = basketball * (1/5);

    let total = basketShoes + basketEquipment + accessories + basketball + pricePerYear
    console.log(total);


        
}

basketballEquipment(["550"])