// Creating classes
class Room {
    constructor(name) {
        this._name = name;
        this._description = "";
        this._victoryDescription = "";
        this._enemy = "";
        this._item = "";
        this._directions = "";
        this._linkedRooms = {};
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get victoryDescription() {
        return this._victoryDescription;
    }

    get enemy() {
        return this._enemy;
    }

    get item() {
        return this._item;
    }
    
    get directions() {
        return this._directions;
    }

    set name(value) {
        this._name = value;
    }

    set description(value) {
        this._description = value;
    }

    set victoryDescription(value) {
        this._victoryDescription = value;
    }

    set enemy(value) {
        this._enemy = value;
    }

    set item(value) {
        this._item = value;
    }

    set directions(value) {
        this._directions = value;
    }

    describe() {
        if (this._name == 'Viewing Platform') {
            return `You are currently on the ${this._name}.</p><p>${this._description}</p><p>${this._directions}</p>`
        } else if (this._name == 'Tunnel') {
            return `You are currently in a ${this._name}.</p><p>${this._description}</p><p>${this._directions}</p>`
        } else if (this._name == 'Outside') { 
            return `You have made your Escape from the Manor.</p><p>${this._description}</p><p>${this._directions}</p>`
        } else {
            return `You are currently in the ${this._name}.</p><p>${this._description}</p><p>${this._directions}</p>`
        }
    }

    linkRoom(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
    }

    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            alert ("You can't go that way from here",);
            return this;
        }
    }
}

class Item {
    constructor(name, description) {
        this._name = name;
        this._description = description;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    set name(value) {
        this._name = value;
    }

    set description(value) {
        this._description = value;
    }
}

class Food extends Item {
    constructor(name, description, health) {
        super(name, description);
        this._health = health;
    }
}

class Character {
    constructor(name, health, description) {
        this._name = name;
        this._health = health;
        this._description = description;
    }

    get name() {
        return this._name;
    }

    get health() {
        return this._health;
    }

    get description() {
        return this._description;
    }

    set name(value) {
        this._name = value;
    }

    set health(value) {
        this._health = value;
    }

    set description(value) {
        this._description = value;
    }
}

class Player extends Character {
    constructor(name, description, health) {
        super(name, health, description);
        this._inventory = [];
        this._health = 100;
    }

    get health() {
        return this._health;
    }

    get inventory() {
        return this._inventory;
    }

    gainHealth(value, increase) {
        if (increase) {
            this._health = this._health + value;
        } else {
            this._health = this._health - value;
        }
        return this._health;
    }

    addToInventory(item) {
        this._inventory.push(item);
    }

    checkInventory(item) {
        for (let i = 0; i < this._inventory.length; i++) {
            if (list[i] === item) {
                return true;
            }
        }
        return false;
    }
}

class Enemy extends Character {
    constructor(name, health, description, power) {
        super(name, health);
        this._description = description;
        this._weakness = "";
    }
    get weakness() {
    
    }

    set weakness(value) {
        this._weakness = value;
    }

    fight(item) {
        if (player.health > this.health) {
            return true;
        } else {
            return false;
        }
        // if (item === this._weakness) {
        //     this._health = this._health / 10;
        //     if (player.health > this.health) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // } else {
        //     return false;
        // }
    }
}

// Displays information in current room
function displayRoomInfo(room) {
    textContent = room.describe();
    document.getElementById("title").innerHTML = `<h1>${room.name.toUpperCase()}</h1>`;
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("buttonarea").innerHTML = `<input type="text" id="usertext" />`;
    document.getElementById("usertext").focus();
}

// Room descriptions
const foyer = new Room;
foyer.name = `Foyer`;
foyer.description = `This grand entrance hall is spacious but sombre in appearance; cobwebs cling to every corner of the seemingly forgotten space around you. Elegant drapes hang lifelessly from rusted rails, which hide heavy iron barred windows. The room has been deprived of all natural light, but an immaculate chandelier hangs from the centre of the high ceiling, providing just enough light that you can vaguely make out the outline of an ornate, golden framed painting on the northern wall of the upper foyer; its subject is difficult to see from this distance. You feel alone in this almost bare expanse.`;
foyer.directions = `Two doors are located on the ground floor, one in the east wall and one to the west. To the north, a grand staircase ascends to the first floor`;

const huntingLodge = new Room;
huntingLodge.name = `Hunting Lodge`;
huntingLodge.description = `This room is small and the air is warm. You are briefly soothed by the crackle of coals on the hearth, which to your surprise, is lit! You start to consider this space cosy. That is until you notice dozens of hunting trophies that adorn all four walls; each glassy gaze seeming to follow your every move. An almost lifelike bearskin rug covers the majority of the creaky wooden floorboards. The fire cannot quash the chills that run down your spine.`;
huntingLodge.directions = `There are two doors in this room, one to the north and one to the west. To the east, a rough cut, marble staircase leads up to the first floor.`;

const banquetHall = new Room;
banquetHall.name = `Banquet Hall`;
banquetHall.description = `An enormous dinner table resides in the centre of this room full of various aromas. Most are mouth-wateringly good, others strange. You can’t decide if you want to salivate or be sick. Silver platters are laden with gigantic portions of several meats, exotic fruits, and pastries. Everything looks and smells fresh, as if it were cooked just for you. Taking pride of place at the head of the main table is an irresistible looking hog roast. You feel hungry and contemplate whether to eat.`;
banquetHall.directions = `There are three doors in this room, a small door to the north and one to the south. To the west, large glass doors appear to lead to an outside area.`;
banquetHall.victoryDescription = `An enormous dinner table has been upturned. Spoiled food is scattered all over the floor and up the walls. The corpse of a monstrous hog lies motionless.`;

const kitchen = new Room;
kitchen.name = `Kitchen`;
kitchen.description = `There is not much space to move. A tiny stove is cluttered with dirty dishes and a cast iron cooking pot, dripping with some unidentifiable liquid. Some juicy looking green apples reside in a woven bowl on the countertop. Wonky wooden shelves hold a few empty jars. The door of a cupboard swings eerily on its last remaining hinge. A draft must be coming from somewhere.`;
kitchen.directions = `There are two doors in this room. A small door to the south and one to the west which appears to lead to a descending staircase.`;

const courtyard = new Room;
courtyard.name = `Courtyard`;
courtyard.description = `The air is fresh and you breathe easier. Your attention is drawn to the beautiful natural stone fountain. Its white marble base has been delicately carved with stunning doves of peace and the water runs crystal clear. A huge oak tree towers over the grounds within the courtyard, close to the seemingly unbreachable northern boundary. Its branches look strong and sturdy. They sway with an almost human-like motion.`;
courtyard.directions = `Two doors lead back into the manor. Large glass doors inhabit the wall to the east and a smaller glass door to a conservatory can be seen to the west.`;
courtyard.victoryDescription = `A huge tree trunk lies along almost the entire length of the courtyard, unearthed from where it once stood. Snapped branches litter the cobbled floor. Miraculously, the beautiful stone fountain has avoided damage. Its white marble base has been delicately carved with stunning doves of peace and the water runs crystal clear.`;

const conservatory = new Room;
conservatory.name = `Conservatory`;
conservatory.description = `The room is softly lit with natural light piercing through the foggy walls. A quaint, oak side table supports a bowl of ripe red apples. The cold tiled floor has been decorated with dark, damp soil from a smashed flower pot; shards of porcelain are scattered around your feet.  Human-like footprints can be seen heading north within the soil deposit, and you feel a tentative sense of hope that you are not the only person in the manor anymore.`;
conservatory.directions = `There are three doors in this room. A wooden hatch in the north appears to lead to a descending staircase, a small glass door to the east appears to lead to an outdoor area, and a door to the south.`;

const westCorridor = new Room;
westCorridor.name = `West Corridor`;
westCorridor.description = `Two regimental lines of rusted suits of armour stand on either side of this narrow passageway, while a single, silver clad knight stands alone on the southern wall. Firmly grasped between two intertwined gauntlets is a striking looking sword, forged with distinguished expertise. The corridor is notably dark; there is just enough light from the glass door to the north to make several unlit torches in holders on the eastern wall visible.`;
westCorridor.directions = `There are three doors in the corridor. To the north, a small glass door. There are two regular doors either side of you. One to the east and one directly opposite, to the west.`;
westCorridor.victoryDescription = `Rusted suits of armour lay scattered along this narrow passageway, while a single, silver clad knight stands alone on the southern wall, his head bowed in recognition of your success. You hold his sword, presented as a gift for your admirable victory. The corridor is notably dark; there is just enough light from the glass door to the north to make several unlit torches in holders on the eastern wall visible. You hear soft classical music from behind the western wall.`;

const ballroom = new Room;
ballroom.name = `Ballroom`;
ballroom.description = `Soft music plays from a gramophone in one corner of the room. You walk further onto the dance floor and the music stops. Your footsteps now echo on the polished floorboards and your blood runs cold unexplainably. You feel like you are being watched from every corner. Your attention is drawn suddenly by the sound of sobbing from behind the regal drawstring curtains that fall from the high ceiling down to the floor. Someone sounds in distress. Perhaps they are looking for an exit too?`;
ballroom.directions = `There is just one door in this room, to the east. There are two spiralled stairwells that rise up to a spectacular balcony above the ballroom on the north and south walls.`;
ballroom.victoryDescription = `The room is eerily silent. Your footsteps echo on the polished floorboards. You remember the evil that previously resided here and curse at your trusting, helpful nature. Thankfully, you no longer feel like you are being watched.`;

const viewingPlatform = new Room('Viewing Platform', `Looking down on the ballroom. Winding stairs to the west leads down to the ballroom. Door the the east goes to the upper foyer. Door to the west goes to a corridor.`, `Would you like to go north, east, or west?`);

const upperFoyer = new Room('Upper Foyer', `This is above the foyer, looking down.`, `Would you like to go east, west, or south?`);

const library = new Room('Library', `Looking down on the hunting lodge.`, `Would you like to go south or west?`);

const ritualChamber = new Room('Ritual Chamber', `Ascending stairs to the west leading to a corridor on the ground floor. More ascending stairs on the north wall near the northeast corner leading to the kitchen. Tunnel to the east.`, `Would you like to go north, west, or east?`);

const tunnel = new Room('Tunnel', `Usually you would think of the light at the end of the tunnel, but this place is so dark that you cannot even see the end. Dread looms.`, `Would you like to continue to the east, or turn back and go west?`);

const innerSanctum = new Room('Inner Sanctum', `Massive boss here that looks like he wants to fuck you right up. Good luck. There are stairs leading upwards to the south but this guy really doesn't want you to get to them.`, `Would you like to run, fight, or die?`);

const outside = new Room('Outside', `You made it to safety. Let's not go back in there any time soon.`, `Go, the game has ended.`);

// Linking rooms
foyer.linkRoom('east', huntingLodge);
foyer.linkRoom('north', upperFoyer);
foyer.linkRoom('west', westCorridor);

huntingLodge.linkRoom('west', foyer);
huntingLodge.linkRoom('north', banquetHall);
huntingLodge.linkRoom('east', library);

banquetHall.linkRoom('south', huntingLodge);
banquetHall.linkRoom('north', kitchen);
banquetHall.linkRoom('west', courtyard);

kitchen.linkRoom('south', banquetHall);
kitchen.linkRoom('west', ritualChamber);

courtyard.linkRoom('east', banquetHall);
courtyard.linkRoom('west', conservatory);

conservatory.linkRoom('east', courtyard);
conservatory.linkRoom('north', ritualChamber);
conservatory.linkRoom('south', westCorridor);

westCorridor.linkRoom('north', conservatory);
westCorridor.linkRoom('east', foyer);
westCorridor.linkRoom('west', ballroom);

ballroom.linkRoom('east', westCorridor);
ballroom.linkRoom('north', viewingPlatform);
ballroom.linkRoom('south', viewingPlatform);

upperFoyer.linkRoom('south', foyer);
upperFoyer.linkRoom('east', library);
upperFoyer.linkRoom('west', viewingPlatform);

library.linkRoom('west', upperFoyer);
library.linkRoom('south', huntingLodge);

viewingPlatform.linkRoom('east', upperFoyer);
viewingPlatform.linkRoom('west', ballroom);

ritualChamber.linkRoom('north', kitchen);
ritualChamber.linkRoom('west', conservatory);
ritualChamber.linkRoom('east', tunnel);

tunnel.linkRoom('west', ritualChamber);
tunnel.linkRoom('east', innerSanctum);

innerSanctum.linkRoom('west', tunnel);
innerSanctum.linkRoom('south', outside);

// Add items
const flyswat = new Item("Flyswat", "Used for swatting flies");

// Add items to rooms
foyer.item = flyswat;

// Add enemies
const Fly = new Enemy("Fly", 1, "Clearly been flying around for a while", 1);
Fly.weakness = flyswat;

// Add enemies to rooms
foyer.character = Fly;

const player = new Player();
console.log(`Your current health is ${player.health}`);

// Handles commands regarding enemies
function enemyHandler(command, character) {
    switch (command) {
        case "fight":
            if (character.fight() === true) {
                document.getElementById("textarea").innerHTML = `${foyer.victoryDescription}`;
            } else {
                document.getElementById("textarea").innerHTML = `You got killed by ${foyer.character.name}. Game over. Type 'restart' to try again.`;
            }
            break;
        default:
            alert("This shouldn't be here.");
            break;    
    }
}

// Handles commands in the foyer
function foyerHandler(command, item) {
    switch(command) {
        case "flyswatter":
            player.addToInventory('flyswatter');
            console.log(player.inventory);
            break;
        case "pencil":
            player.addToInventory('pencil');
            console.log(player.inventory);
            break;
    }
}

// Executes when game starts
function startGame() {
    currentRoom = foyer;
    document.getElementById('title').innerHTML = `<h1>Where Am I?</h1>`
    document.getElementById("textarea").innerHTML = `You wake up in a daze. You are disoriented and dehydrated. All you remember is the raging storm of wind and rain that started without warning when you were walking home from work last night. You conclude that you must have found your way here, for shelter from the bitter cold, and passed out due to exhaustion. You can't hear the lashing rain anymore, only the sound of silence. You pick yourself up off the ground to try the front door, hoping you can sneak away before anyone notices your intrusion. Your hand reaches for the brass handle of the threatening doors to the outside world when you hear the click of a metal latch. You tremble, searching erratically for your mobile phone, to no avail. You are locked inside. If the front door is no longer an option, there must be another way to...</p>`;
    document.getElementById("buttonarea").innerHTML = `<input id="foyerButton" type="button" value="Escape from the Manor" class="btn text-center" onclick="displayRoomInfo(foyer);"/>`;

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            command = document.getElementById('usertext').value.toLowerCase();
            const moveCommands = ["north", "south", "east", "west"];
            const restart = ["restart"];
            const enemyCommands = ["fight"];
            const itemCommands= ["take", "search", "inventory"];
            const foyerCommands = ["flyswatter", "pencil"];
            

            if (moveCommands.includes(command)) {
                currentRoom = currentRoom.move(command);
                displayRoomInfo(currentRoom); 
            } else if (enemyCommands.includes(command)) {
                enemyHandler(command, currentRoom.character);
            } else if (itemCommands.includes(command)) {
                itemHandler(command, currentRoom.item);
            } else if (foyerCommands.includes(command)) {
                if (currentRoom = foyer) {
                    foyerHandler(command, currentRoom.item);
                } else {
                    alert("No")
                }
            } else if (restart.includes(command)) {
                location.reload();
            } else {
                alert("You cannot do that, please try again");
            }
            document.getElementById('usertext').value = "";
        }
    })
}