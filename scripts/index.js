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
    constructor(name) {
        this._name = name;
        this._onUse = "";
    }

    get name() {
        return this._name;
    }

    get onUse() {
        return this._onUse;
    }

    set name(value) {
        this._name = value;
    }

    set onUse(value) {
        this._onUse = value;
    }
}

class Food extends Item {
    constructor(name, health) {
        super(name, description);
        this._health = health;
    }
}

class Character {
    constructor(name, description, health) {
        this._name = name;
        this._description = description;
        this._health = health;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
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

    set health(value) {
        this._health = value;
    }
}

class Player extends Character {
    constructor(name, description, conversation, health, inventory) {
        super(name, description, conversation);
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
    constructor(name, description, conversation, health, power, weakness) {
        super(name, description, conversation, health);
        this._power = power;
        this._weakness = weakness;
    }
}

// Displays information in current room
function displayRoomInfo(room) {
    textContent = room.describe();
    document.getElementById("title").innerHTML = `<h1>${room.name.toUpperCase()}</h1>`;
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("buttonarea").innerHTML = '<input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
}

// Room descriptions
const foyer = new Room;
foyer.name = `Foyer`;
foyer.description = `This grand entrance hall is spacious but sombre in appearance; cobwebs cling to every corner of the seemingly forgotten space around you. Elegant drapes hang lifelessly from rusted rails, which hide heavy iron barred windows. The room has been deprived of all natural light, but an immaculate chandelier hangs from the centre of the high ceiling, providing just enough light that you can vaguely make out the outline of two ornate, golden framed paintings, side by side on the northern wall of the upper foyer; it is difficult to see the subject of either from this distance. You feel alone in this almost bare expanse.`;
foyer.directions = `Two doors are located on the ground floor, one in the east wall and one to the west. To the north, a grand staircase ascends to the first floor.`;

const huntingLodge = new Room;
huntingLodge.name = `Hunting Lodge`;
huntingLodge.description = `This room is small and the air is warm. You are briefly soothed by the crackle of coals on the hearth, which to your surprise, is lit! A copper coal bucket sits to the side. You start to consider this space cosy. That is until you notice dozens of hunting trophies that adorn all four walls; each glassy gaze seeming to follow your every move. An almost lifelike bearskin rug covers the majority of the creaky wooden floorboards. The fire cannot quash the chills that run down your spine.`;
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
westCorridor.victoryDescription = `Rusted suits of armour lay scattered along this narrow passageway, while a single, silver clad knight stands alone on the southern wall, his head bowed in recognition of your unexpected success. While he refuses to give up his sword, the experience that you gained from the fight feels like it could prove valuable. The corridor is notably dark; there is just enough light from the glass door to the north to make several unlit torches in holders on the eastern wall visible.`;

const ballroom = new Room;
ballroom.name = `Ballroom`;
ballroom.description = `Soft music plays from a gramophone in one corner of the room. You walk further onto the dance floor and the music stops. You pause and look up to a crystal chandelier as you hear it’s gemstones collide with one another for no apparent reason. Your footsteps now echo on the polished floorboards and your blood runs cold unexplainably. You feel like you are being watched from every corner. Your attention is drawn suddenly by the sound of sobbing from behind the regal drawstring curtains that fall from the high ceiling down to the floor. Someone sounds in distress. Perhaps they are looking for an exit too?`;
ballroom.directions = `There is just one door in this room, to the east. There are two spiralled stairways that rise up to a spectacular balcony above the ballroom on the north and south walls.`;
ballroom.victoryDescription = `The room is eerily silent. The crystal chandelier now hangs still. Your footsteps echo on the polished floorboards. You remember the evil that previously resided here and curse at your trusting, helpful nature. Thankfully, you no longer feel like you are being watched.`;

const viewingPlatform = new Room;
viewingPlatform.name = `Viewing Platform`;
viewingPlatform.description = `Waist-high silver railings run the length of this impressive balcony that hangs over the ballroom floor.The area is illuminated by the crystal chandelier which you can now see must be constructed with hundreds upon thousands of individual diamonds, each reflecting the light, creating the illusion of twinkling stars. Half a dozen high-backed chairs, almost throne-like in appearance, are positioned in a semi circle facing toward a music stand, complete with various sheet music and a rather exquisit looking silver flute, which almost blinds you as it catches the light from above. So too, does a perfectly formed hand mirror, with a carved ivory frame and smooth reflective surface.`;
viewingPlatform.directions = `There are two spiralled stairways that lead back down to the Ballroom floor, one to the north and one to the south. There is also a door to the east.`;

const upperFoyer = new Room;
upperFoyer.name = `Upper Foyer`;
upperFoyer.description = `The space above the main Foyer seems to serve the pure purpose of a means to traverse between rooms on the upper floor. There are no outstanding features, and very little to stop and admire. This is except for the two elaborate, golden framed paintings on the northern wall which you now have a better view of. The first image unnerves you a little; the oily eyes of a tall, well-dressed man holding a glass of crimson wine bore into your soul. The second painting is of an ancient looking grandfather clock; it appears to be showing an oddly specific time.`;
upperFoyer.directions = `This empty hallway leads to two rooms, one to the east and one to the west. The grand staircase to the south leads back down to the main foyer.`;

const library = new Room;
library.name = `Library`;
library.description = `Your lungs are instantly filled with dust and you get a tickle in the back of your throat. The air around you is musty, and you can see a thick blanket of dirt on each of the scrolls and texts that have been crammed into bookshelves that completely cover two of the four walls of the library. One scruffy book lies open on the floor; its spine is broken and you can clearly see that a single page has been torn out, leaving tattered scraps of paper on the inside edge. The remaining pages are filled with unusual symbols and long words and you feel like you are reading a whole new language.`;
library.directions = `There is one door to the west and a rough cut, marble staircase to the east, leading down to the ground floor.`;

const ritualChamber = new Room;
ritualChamber.name = `Ritual Chamber`;
ritualChamber.description = `You immediately feel uncomfortable. This basement area is illuminated by the soft glow of a single candle; its deep red wax cascades down the sides of a brass candlestick and pools at the base. Its flame flickers in a gentle breeze that seemingly comes from nowhere. A strange symbol has been carved into the floorboards under your feet and painted in a blood red colour. A dark granite altar resides near the northern wall, engraved with foreign scribbles. Atop is a bottle of fine wine, an empty goblet and a bunch of plump red grapes. A familiar looking grandfather clock stands against the south wall.`;
ritualChamber.directions = `There are two sets of ascending stairs. One leading up to a wooden hatch in the north and the other to a door in the east.`;

const tunnel = new Room;
tunnel.name = `Tunnel`;
tunnel.description = `It is pitch black. You can’t see your own feet under you and you have no perspective of how deep the tunnel goes, but you take tentative steps forward. You stretch out both arms either side of you and feel rough cold stone on both palms of your hands. You are suddenly distracted by a crawling sensation over your right hand and then up your arm. Startled, you let go of the wall, stumble, and hurtle to the ground. You are left with a bruised ego and a face only a mother could love, as you kiss the hard concrete floor.`;
tunnel.directions = `It’s not too late to turn back to the Ritual Sanctum to the north. You can continue south to see what greets you at the end of the tunnel. You sense that freedom may be close.`;

const innerSanctum = new Room;
innerSanctum.name = `Inner Sanctum`;
innerSanctum.description = `You take little notice of the appearance of this room. You know where you want to be next, where you need to be to escape this wretched manor. You see a rope ladder hanging from an opening in the ceiling to the south, a slither of sunlight breaches the surrounding gloom. There’s just one obstacle in your way now, and he doesn’t look happy to see you. A towering, fanged monster of a man shoots you with his oily black stare. There’s no way he is going to oblige and let you pass without a fight. You must decide if you are ready to fight or flee back through the tunnel and better prepare yourself. You are sure however, that killing this nightmarish figure must be the only way out.`;
innerSanctum.directions = `Are you ready to fight? Or will you flee north through the tunnel?`;

// Linking rooms
foyer.linkRoom('east', huntingLodge);
foyer.linkRoom('west', westCorridor);
foyer.linkRoom('north', upperFoyer);

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

viewingPlatform.linkRoom('east', upperFoyer);
viewingPlatform.linkRoom('north', ballroom);
viewingPlatform.linkRoom('south', ballroom);

upperFoyer.linkRoom('south', foyer);
upperFoyer.linkRoom('east', library);
upperFoyer.linkRoom('west', viewingPlatform);

library.linkRoom('west', upperFoyer);
library.linkRoom('east', huntingLodge);

ritualChamber.linkRoom('north', conservatory);
ritualChamber.linkRoom('east', kitchen);
ritualChamber.linkRoom('south', tunnel) // Try and append this to the 'clock' command in the ritual chamber instead

tunnel.linkRoom('north', ritualChamber);
tunnel.linkRoom('south', innerSanctum);

innerSanctum.linkRoom('north', tunnel);

// Item initialisation
const unlitTorch = new Item;
unlitTorch.name = `Unlit Torch`;

const litTorch = new Item;
litTorch.name = `Lit Torch`;
litTorch.onUse = `You throw your torch onto the lumbering tree. It catches fire instantly and the flames spread rapidly over every branch.`;

const incantationPage = new Item;
incantationPage.name = `Incantation Page`;
incantationPage.onUse = `You reach for the incantation page that you found in the Hunting Lodge. You have no idea what you are saying, but you feel compelled to read aloud the scrawlings on the paper. Three shrill screams fill the entire room and the witches melt into the dance floor and vanish.`;

const emptyJar = new Item;
emptyJar.name = `Empty Jar`;
emptyJar.onUse = `You fill the empty jar with water from the fountain. You receive Holy Water.`;

const garlic = new Item;
garlic.name = `Garlic`;
garlic.onUse = `You notice the Count recoil at the smell of the garlic cloves that were hidden in your jeans pocket. You become more evasive to his attacks.`;

const holyWater = new Item;
holyWater.name = `Holy Water`;
holyWater.onUse = `You throw your jar of Holy Water into the face of the fiend. His skin starts to boil and he wretches in agony.`;

const apples = new Item;
apples.name = `Apples`;

const flute = new Item;
flute.name = `Flute`;
flute.onUse = `Ever grateful for your recorder lessons at school, you find the flute you picked up and pretend you know how to play it. Luckily for you, it doesn't take much of a tune to send this lazy hog back to sleep.`;

const mirror = new Item;
mirror.name = `Mirror`;
mirror.onUse = `You impressively divert the monster's attention for just enough time to reach the solitary sun beam and redirect it with the mirror, burning a hole in his chest.`;

const clockTime = new Item;
clockTime.name = `Clock Time`;

const candle = new Item;
candle.name = `Candle`;

const wine = new Item;
wine.name = `Wine`;

const grapes = new Item;
grapes.name = `Grapes`;

// Add items to rooms
westCorridor.item = unlitTorch;

huntingLodge.item = litTorch;
huntingLodge.item = incantationPage;

kitchen.item = emptyJar;
kitchen.item = garlic;
kitchen.item = apples;

courtyard.item = holyWater;

conservatory.item = apples;

viewingPlatform.item = flute;
viewingPlatform.item = mirror;

upperFoyer.item = clockTime;

ritualChamber.item = candle;
ritualChamber.item = wine;
ritualChamber.item = grapes;

// Initialising player character
const player = new Player();
console.log(`Your current health is ${player.health}`);

// Executes when game starts
function startGame() {
    currentRoom = foyer;
    document.getElementById('title').innerHTML = `<h1>Where Am I?</h1>`
    document.getElementById("textarea").innerHTML = `You wake up in a daze. You are disoriented and dehydrated. All you remember is the raging storm of wind and rain that started without warning when you were walking home from work last night. You conclude that you must have found your way here, for shelter from the bitter cold, and passed out due to exhaustion. You can't hear the lashing rain anymore, only the sound of silence. You pick yourself up off the ground to try the front door, hoping you can sneak away before anyone notices your intrusion. Your hand reaches for the brass handle of the threatening doors to the outside world when you hear the click of a metal latch. You tremble, searching erratically for your mobile phone, to no avail. You are locked inside. If the front door is no longer an option, there must be another way to...</p>`;
    document.getElementById("buttonarea").innerHTML = `<input id="foyerButton" type="button" value="Escape from the Manor" class="btn text-center" onclick="displayRoomInfo(foyer);"/>`;

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            command = document.getElementById('usertext').value.toLowerCase();
            const directions = ["north", "south", "east", "west"];
            const commands = [`fight`, `take ${item.name}`, `search ${item.name}`, `inventory`];

            if (directions.includes(command)) {
                currentRoom = currentRoom.move(command);
                displayRoomInfo(currentRoom); 
            } else if (commands.includes(command)) {
                commandHandler(command, currentRoom.character);
            } else {
                alert("You cannot do that, please try again");
            }
            document.getElementById('usertext').value = "";
        }
    })
}