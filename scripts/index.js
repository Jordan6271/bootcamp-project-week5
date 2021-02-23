class Room {
    constructor(name, description, directions) {
        this._name = name;
        this._description = description;
        this._directions = directions;
        this._linkedRooms = {};
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
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

    set directions(value) {
        this._directions = value;
    }

    describe() {
        return "You find yourself in the " + this._name + ". " + this._description + " " + this._directions;
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

class Character {
    constructor(name, description, conversation, health) {
        this._name = name;
        this._description = description;
        this._conversation = conversation;
        this._health = health;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get conversation() {
        return this._conversation;
    }

    get health() {
        return this._health;
    }

    set name(value) {
        this._name = value;
    }

    set description(value) {
        this._description = value;
    }

    set conversation(value) {
        this._conversation = value;
    }

    set health(value) {
        this._health = value;
    }
}

class Player extends Character {
    constructor(name, description, conversation, health, inventory) {
        super(name, description, conversation, health);
        this._inventory = inventory;
    }
}

class Enemy extends Character {
    constructor(name, description, conversation, health, power, weakness) {
        super(name, description, conversation, health);
        this._power = power;
        this._weakness = weakness;
    }
}

function displayRoomInfo(room) {
    textContent = room.describe();
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("usertext").focus();
}

function startGame() {
    currentRoom = foyer;
    document.getElementById("textarea").innerHTML = "You enter the house and find yourself in the " + foyer._name + ". You hear a loud click behind you. You try to exit through the main door, but it is now locked. This place feels worse than the cold outside. You decide it would be safer to try and leave. " + foyer._description + " " + foyer._directions;

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            command = document.getElementById('usertext').value.toLowerCase();
            const directions = ["north", "south", "east", "west"];

            if (directions.includes(command)) {
                currentRoom = currentRoom.move(command);
                displayRoomInfo(currentRoom); 
            } else {
                alert("You cannot do that, please try again");
            }
            document.getElementById('usertext').value = "";
        }
    })
}

const foyer = new Room('foyer', `The chandelier dangling from the centre of the roof is the largest you've ever seen, and draws your attention. There are cobwebs all over it, giving you shivers and making you wonder if there is anyone in this house at all. You can see a large, looming staircase ascending to the north. There are also two doors on the ground level, one to the west and one to the east.`, `Would you like to go north, east, or west?`);

const huntingLodge = new Room('hunting lodge', `This is the hunting lodge. There are stuffed animals around the room, deer heads mounted above the fireplace, and fur rugs that look like freshly killed bears.`, `Would you like to go north, east, or west?`);

const banquetHall = new Room('banquet hall', `This is the banquet hall. There is glorious food on delicate looking tables. There is an odd looking pig on what looks like the head table.`, `Would you like to go north, south, or west?`);

const kitchen = new Room('kitchen', `This is the kitchen. There is the distinct smell of grease and cooked flesh. Also evil mushrooms are lurking. There are descending stairs to the west, which must go into a basement. There is also the door into the banquet hall to the south?`, `Would you like to go west or south?`);

const courtyard = new Room('courtyard', `This is the courtyard. The cold winter air is refreshing, but the hedges at the edge of the yard look much too thick to push through. There is a fountain in the centre, but the fish have sharp teeth, they must be piranhas. Some of them have their bones showing, they must be eating each other. There is a tree swaying in the distance down the path, but it looks like it's slowly lumbering towards you. There is a door to the west, and a door to the kitchen to the west.`, `Would you like to go east or west?`);

const upperFoyer = new Room('upper foyer', `This is above the foyer, looking down.`, `Would you like to go east, west, or south?`);

const groundCorridorWest1 = new Room('corridor', `Leads to other rooms.`, `Would you like to go west, north, or east?`);

const upperCorridorEast = new Room('corridor', `Looking down on the hunting lodge.`, `Would you like to go south or west?`);

const groundCorridorWest2 = new Room('corridor', `There is a door to a basement, stairs up to another corridor, and doors to the south and east.`, `Would you like to go north, east, south, or west?`);

const ballroom = new Room('ballroom', `Description goes here. Maybe some mobs to fight. Door to the east leads to a corridor, ascending stairs to the north and south both lead to the upper observation deck.`, `Would you like to go east, north, or south?`);

const observationDeck = new Room('observationDeck', `Looking down on the ballroom. Winding stairs to the west leads down to the ballroom. Door the the east goes to the upper foyer. Door to the west goes to a corridor.`, `Would you like to go north, east, or west?`);

const upperCorridorWest = new Room('corridor', `Door to the south leads to the observation deck above the ballroom. Descending stairs to the north leads to a corridor on the ground floor.`, `Would you like to go north or south?`);

const basement = new Room('basement', `Ascending stairs to the west leading to a corridor on the ground floor. More ascending stairs on the north wall near the northeast corner leading to the kitchen. Door to the south leading to the ritual chamber.`, `Would you like to go north, west, or south?`);

const ritualChamber = new Room('ritual chamber', `Door to the north leading to the basement. Hidden entrance to the east leading to a tunnel.`, `Would you like to go north or east?`);

const tunnel = new Room('tunnel', `Usually you would think of the light at the end of the tunnel, but this place is so dark that you cannot even see the end. Dread looms.`, `Would you like to continue to the east, or turn back and go west?`);

const innerSanctum = new Room('inner sanctum', `Massive boss here that looks like he wants to fuck you right up. Good luck. There are stairs leading upwards to the south but this guy really doesn't want you to get to them.`, `Would you like to run, fight, or die?`);

const outside = new Room('outside', `You made it to safety. Let's not go back in there any time soon.`, `Go, the game has ended.`);

foyer.linkRoom('east', huntingLodge);
foyer.linkRoom('north', upperFoyer);
foyer.linkRoom('west', groundCorridorWest1);

huntingLodge.linkRoom('west', foyer);
huntingLodge.linkRoom('north', banquetHall);
huntingLodge.linkRoom('east', upperCorridorEast);

banquetHall.linkRoom('south', huntingLodge);
banquetHall.linkRoom('north', kitchen);
banquetHall.linkRoom('west', courtyard);

kitchen.linkRoom('south', banquetHall);
kitchen.linkRoom('west', basement);

courtyard.linkRoom('east', banquetHall);
courtyard.linkRoom('west', groundCorridorWest2);

groundCorridorWest2.linkRoom('east', courtyard);
groundCorridorWest2.linkRoom('west', basement);
groundCorridorWest2.linkRoom('north', upperCorridorWest);
groundCorridorWest2.linkRoom('south', groundCorridorWest1);

groundCorridorWest1.linkRoom('north', groundCorridorWest2);
groundCorridorWest1.linkRoom('east', foyer);
groundCorridorWest1.linkRoom('west', ballroom);

ballroom.linkRoom('east', groundCorridorWest1);
ballroom.linkRoom('north', observationDeck);
ballroom.linkRoom('south', observationDeck);

upperFoyer.linkRoom('south', foyer);
upperFoyer.linkRoom('east', upperCorridorEast);
upperFoyer.linkRoom('west', observationDeck);

upperCorridorEast.linkRoom('west', upperFoyer);
upperCorridorEast.linkRoom('south', huntingLodge);

observationDeck.linkRoom('east', upperFoyer);
observationDeck.linkRoom('west', ballroom);
observationDeck.linkRoom('north', upperCorridorWest);

upperCorridorWest.linkRoom('south', observationDeck);
upperCorridorWest.linkRoom('north', groundCorridorWest2);

basement.linkRoom('north', kitchen);
basement.linkRoom('west', groundCorridorWest2);
basement.linkRoom('south', ritualChamber);

ritualChamber.linkRoom('north', basement);
ritualChamber.linkRoom('east', tunnel);

tunnel.linkRoom('west', ritualChamber);
tunnel.linkRoom('east', innerSanctum);

innerSanctum.linkRoom('west', tunnel);
innerSanctum.linkRoom('south', outside);

startGame();
