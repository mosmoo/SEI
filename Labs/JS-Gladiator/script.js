//create Arena class that has a name property
// capitalize the first letter of the name
// I need to somehow isolate the first letter of the string and make it uppercase. I could probably use the .toUpperCase method and .slice method to isolate the letter and make it uppercase and then attach it back to the string

// each arena begins witha  gladiators property that stores an empty array
//make an addGladiator method that takes a gladiator and adds it to my gladiator array


// Add fight method

//make sure the gladiators array never has more than 2 gladiators in it(call the below fight method when third is added).
//create a fight method that I can call if there are 2 gladiators in the array
// the method should eliminate one fo the gladiators (remove from array)
//which gladiator is removed is based on comparing weapons
/*
        Trident beats Spear
        Spear beats Club
        Club beats Trident
        If the two gladiators have the same weapon, they are both eliminated.
        */

class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
}

class Arena {
  constructor(name) {
    this.name = name.slice(0, 1).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }

  addGladiator(gladiator) {
    if (this.gladiators.length === 2) {
      this.fight();
    }
    this.gladiators.push(gladiator);
  }

  fight() {
    console.log("It's fight timeeeeeee!!!!!!!");
    const gladiator1 = this.gladiators[0];
    const gladiator2 = this.gladiators[1];

    if (gladiator1.weapon === gladiator2.weapon) {
      this.gladiators = [];
    } else {
      if (gladiator1.weapon === "Trident") {
        if (gladiator2.weapon === "Spear") {
          this.gladiators.pop();
        } else {
          this.gladiators.shift();
        }
      } else if (gladiator1.weapon === "Spear") {
        if (gladiator2.weapon === "Club") {
          this.gladiators.pop();
        } else {
          this.gladiators.shift();
        }
      } else {
        if (gladiator2.weapon === "Trident") {
          this.gladiators.pop();
        } else {
          this.gladiators.shift();
        }
      }
    }

    console.log("WE HAVE A WINNAAAAAH!!!!!");
    console.log(this.gladiators);
  }
}

const game = new Arena("bananadome");

const bob = new Gladiator("bob", "Club");
const carl = new Gladiator("carl", "Spear");
const danny = new Gladiator("danny", "Trident");

game.addGladiator(bob);
game.addGladiator(carl);
game.addGladiator(carl);

console.log(game.gladiators);
