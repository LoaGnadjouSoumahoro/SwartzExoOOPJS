/* EXERCISE 3

TODO: Copy the code of exercise 2 to here and delete everything related to cola.
TODO: Make all properties private.
TODO: Make all the other prints work without error.
TODO: After fixing the errors. Change the color of Duvel to light instead of blond and also print this new color on the screen after all the other things that were already printed (to be sure that the color has changed).
TODO: Create a new private method in the Beer class called beerInfo which returns "Hi i'm Duvel and have an alcochol percentage of 8.5 and I have a light color."

Make sure that you use the variables and not just this text line.

TODO: Print this method on the screen on a new line.

USE TYPEHINTING EVERYWHERE!
*/

class Beverage{
    // Utiliser _ pour déclarer des propriétés privées
    
    _color;
    _price;
    _temperature;
    
    constructor(color = "", price = 0.0, temperature = "cold"){
     this._color = color;
     this._price = price;
     this._temperature = temperature;
    }

 
 getInfo() {
 
     return `This beverage is ${this._temperature} and ${this._color}.`;
     
    }
 }
 
class Beer extends Beverage{
    // Utiliser _ pour déclarer des propriétés privées
    _name;
    _alcoholPercentage;
    _color;
    constructor(name ="", alcoholPercentage = 0.0, color, price, temperature,){
    super(color, price, temperature);
    this._name = name;
    this._alcoholPercentage = alcoholPercentage;
    
    }

    getAlcoholPercentage(){
        return `The percentage of de alcool is: ${this._alcoholPercentage}.`;
    }

    // a new private method in the Beer
    _beerInfo(){
    return `Hi i'm Duvel and have an alcochol percentage of ${this._alcoholPercentage} and I have a ${this._color} color.`
    }

    // Utiliser une méthode publique pour accéder à la méthode privée
    getBeerInfo() {
        return this._beerInfo();
    }

    setColor(color){
        this._color = color;
    }
}

 const duvel = new Beer ("Duvel", 8.5, "blond", 3.5, "cold");

 // Imprimer la méthode getAlcoholPercentage directement
console.log(duvel.getAlcoholPercentage());

// Imprimer en accédant à la propriété alcoholPercentage manuellement
console.log(`The percentage of alcool is: ${duvel._alcoholPercentage}.`);

// Utiliser _ pour accéder à une propriété privée
console.log(duvel._color);
console.log(duvel.getInfo());

// Change the color of Duvel to light
duvel.setColor("light");
console.log(duvel._color);

console.log(duvel.getBeerInfo());


