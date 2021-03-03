// Creating classes
class Room {
    constructor(name) {
        this._name = name;
        this._description = ``;
        this._enemy = ``;
        this._item = ``;
        this._directions = ``;
        this._background = ``;
        this._linkedRooms = {};
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
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

    get background() {
        return this._background;
    }

    set name(value) {
        this._name = value;
    }

    set description(value) {
        this._description = value;
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

    set background(value) {
        this._background = value;
    }

    location() {
        if (this._name === `Viewing Platform`) {
            return `You are currently on the ${this._name}.`;
        } else if (this._name === `Tunnel`) {
            return `You are currently in a ${this._name}.`;
        } else if (this._name === `Outside`) {
            return `You have made your Escape from the Manor.`;
        } else {
            return `You are currently in the ${this._name}.`;
        }
    }

    linkRoom(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
    }

    move(direction) {
        if (currentRoom.name === `Inner Sanctum` && direction === `north` ) {
            currentRoom = this._linkedRooms[direction];
            displayRoomInfo(currentRoom);
            if (player._inventory.includes(candle.name) || player._inventory.includes(litTorch.name)) {
                document.getElementById(`description`).innerHTML = `You are grateful that you had enough wits about you to 
                    pick up a light source to illuminate this tunnel. The tunnel is narrow, no wider than the span of your arms. 
                    Thousands of spiders move as one on the walls around you. They flee from the heat of the flame you bear. 
                    You can just make out the tunnel exit ahead, but there is still some distance to travel.`;
            } else {
                document.getElementById(`description`).innerHTML = `It is pitch black. You can’t see your own feet under you and 
                    you have no perspective of how far the tunnel goes, but you take tentative steps forward. You stretch out both 
                    arms either side of you and feel rough cold stone on both palms of your hands.`;
            }
            return this._linkedRooms[direction];
        } else if (currentRoom.name === `Ritual Chamber` && direction === `south`) {
            if (player._kills.includes(`Clock`)) {
                ritualChamber.linkRoom(`south`, tunnel);
                currentRoom = this._linkedRooms[direction];
                displayRoomInfo(currentRoom);
                if (player._inventory.includes(candle.name) || player._inventory.includes(litTorch.name)) {
                    document.getElementById(`description`).innerHTML = `You are grateful that you had enough wits about you to pick 
                        up a light source to illuminate this tunnel. The tunnel is narrow, no wider than the span of your arms. 
                        Thousands of spiders move as one on the walls around you. They flee from the heat of the flame you bear. 
                        You can just make out the tunnel exit ahead, but there is still some distance to travel.`;
                } else {
                    player._health = player._health - 10;
                    player.updateHealth();
                    showErrors();
                    document.getElementById(`errors`).innerHTML = `You have lost 10 health.`; 
                }
                return this._linkedRooms[direction];
            } else {
                displayRoomInfo(currentRoom);
                showErrors();
                document.getElementById(`errors`).innerHTML = `There is no apparent path that way.`;
                return this;
            }
        } else if ((currentRoom.name === `Conservatory` && direction === `north` && player._kills.includes(`Clock`))
                || (currentRoom.name === `Kitchen` && direction === `west` && player._kills.includes(`Clock`))
                || (currentRoom.name === `Tunnel` && direction === `north` && player._kills.includes(`Clock`))) {
                    currentRoom = this._linkedRooms[direction];
                    displayRoomInfo(currentRoom);
                    document.getElementById(`directions`).innerHTML = `There are two sets of ascending stairs. One leading up to a 
                        wooden hatch in the north and the other to a door in the east. There is now a tunnel entrance to the south.`;
                    return this._linkedRooms[direction];

        } else if ((currentRoom.name === `Foyer` && direction ===`west` && player._kills.includes(`${knights.name}`))
                || (currentRoom.name === `Ballroom` && direction === `east` && player._kills.includes(`${knights.name}`))
                || (currentRoom.name === `Conservatory` && direction === `south` && player._kills.includes(`${knights.name}`))) {
                    currentRoom = this._linkedRooms[direction];
                    displayRoomInfo(currentRoom);
                    document.getElementById(`description`).innerHTML = `${knights.afterFight}`;
                    return this._linkedRooms[direction];
        } else if ((currentRoom.name === `Hunting Lodge` && direction === `north` && player._kills.includes(`${hog.name}`)) 
                || (currentRoom.name === `Kitchen` && direction === `south` && player._kills.includes(`${hog.name}`)) 
                || (currentRoom.name === `Courtyard` && direction === `east` && player._kills.includes(`${hog.name}`))) {
            currentRoom = this._linkedRooms[direction];
            displayRoomInfo(currentRoom);
            document.getElementById(`description`).innerHTML = `${hog.afterFight}`;
            return this._linkedRooms[direction];
        } else if ((currentRoom.name === `Hunting Lodge` && direction === `north` && player._kills.includes(`${hog.name} with the ${hog.weakness.name}`)) 
                || (currentRoom.name === `Kitchen` && direction === `south` && player._kills.includes(`${hog.name} with the ${hog.weakness.name}`)) 
                || (currentRoom.name === `Courtyard` && direction === `east` && player._kills.includes(`${hog.name} with the ${hog.weakness.name}`))) {
                    currentRoom = this._linkedRooms[direction];
                    displayRoomInfo(currentRoom);
                    document.getElementById(`description`).innerHTML = `${hog.easyFight}`;
                    return this._linkedRooms[direction];
        } else if ((currentRoom.name === `West Corridor` && direction === `west` && player._kills.includes(`${witches.name}`)) 
                || (currentRoom.name === `Viewing Platform` && direction === `north` && player._kills.includes(`${witches.name}`)) 
                || (currentRoom.name === `Viewing Platform` && direction === `south` && player._kills.includes(`${witches.name}`))
                || (currentRoom.name === `West Corridor` && direction === `west` && player._kills.includes(`${witches.name} with the ${witches.weakness.name}`)) 
                || (currentRoom.name === `Viewing Platform` && direction === `north` && player._kills.includes(`${witches.name} with the ${witches.weakness.name}`))
                || (currentRoom.name === `Viewing Platform` && direction === `south` && player._kills.includes(`${witches.name} with the ${witches.weakness.name}`))) {
                    currentRoom = this._linkedRooms[direction];
                    displayRoomInfo(currentRoom);
                    document.getElementById(`description`).innerHTML = `${witches.afterFight}`;
                    return this._linkedRooms[direction];
        } else if ((currentRoom.name === `Banquet Hall` && direction === `west` && player._kills.includes(`${tree.name}`)) 
                || (currentRoom.name === `Conservatory` && direction === `east` && player._kills.includes(`${tree.name}`))) {
                    currentRoom = this._linkedRooms[direction];
                    displayRoomInfo(currentRoom);
                    document.getElementById(`description`).innerHTML = `${tree.afterFight}`;
                    return this._linkedRooms[direction];
        } else if ((currentRoom.name === `Banquet Hall` && direction === `west` && player._kills.includes(`${tree.name} with the ${tree.weakness.name}`)) 
                || (currentRoom.name === `Conservatory` && direction === `east` && player._kills.includes(`${tree.name} with the ${tree.weakness.name}`))) {
                    currentRoom = this._linkedRooms[direction];
                    displayRoomInfo(currentRoom);
                    document.getElementById(`description`).innerHTML = `${tree.easyFight}`;
                    return this._linkedRooms[direction];
        } else if (direction in this._linkedRooms) {
            currentRoom = this._linkedRooms[direction];
            
            displayRoomInfo(currentRoom);
            return this._linkedRooms[direction];
        } else {
            showErrors();
            document.getElementById(`errors`).innerHTML = `You can't go that way.`;
            return this;
        }
    }
}

class Item {
    constructor(name) {
        this._name = name;
        this._onUse = ``;
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
        super(name);
        this._health = health;
    }
}

class Character {
    constructor(name, health) {
        this._name = name;
        this._health = health;
    }

    get name() {
        return this._name;
    }

    get health() {
        return this._health;
    }

    set name(value) {
        this._name = value;
    }

    set health(value) {
        this._health = value;
    }
}

class Player extends Character {
    constructor(name) {
        super(name,);
        this._inventory = [];
        this._food = [];
        this._kills = [];
        this._health = 100;
        this._deathText = ``;
    }

    get health() {
        return this._health;
    }

    get inventory() {
        return this._inventory;
    }

    get food() {
        return this._food;
    }

    get kills() {
        return this._kills;
    }

    get deathText() {
        return this._deathText;
    }

    set deathText(value) {
        this._deathText = value;
    }

    addToInventory(item) {
        if (this._inventory.includes(item.name)) {
            showErrors();
            if (item === clockTime) {
                document.getElementById(`errors`).innerHTML = `You have already made a note of the time on the clock.`;
            } else {
                document.getElementById(`errors`).innerHTML = `You have already picked up the ${item.name.toLowerCase()}.`;
            }
        } else {
            showItems();
            this._inventory.push(item.name);
            this.updateInventory();
        }
    }

    updateInventory() {
        if (player.inventory.length <= 0) {
            document.getElementById(`inventory-area`).innerHTML = `<p>You have nothing in your inventory yet.</p>`;
        } else {
            document.getElementById(`inventory-area`).innerHTML = `<p>Your inventory contains:`;
            var i;
            for (i = 0; i < player.inventory.length; i++) {
                document.getElementById(`inventory-area`).innerHTML += `<li class="item-text">${player.inventory[i]}</li>`;
            }
        }   
    }

    eatFood(item) {
        if (player.food.includes(item.name)) {
            showErrors();
            if (item.name === `Wine`) {
                document.getElementById(`errors`).innerHTML = `You have already drunk all of the ${item.name.toLowerCase()}.`;
            } else if (item.name === `Grapes`) { 
                document.getElementById(`errors`).innerHTML = `You have already eaten the ${item.name.toLowerCase()}.`;
            } else {
                document.getElementById(`errors`).innerHTML = `You have already eaten a ${item.name.toLowerCase()}.`;
            }
        } else {
            showHealth();
            if (item.name === `Wine`) {
                document.getElementById(`health`).innerHTML = `You chug a glass of ${item.name.toLowerCase()}, 
                    increasing your health by ${item.health}.`;
            } else if (item.name === `Grapes`) {
                document.getElementById(`health`).innerHTML = `You eat a whole bunch of ${item.name.toLowerCase()}, 
                    increasing your health by ${item.health}.`;
            } else {
                document.getElementById(`health`).innerHTML = `You eat a ${item.name.toLowerCase()}, 
                    increasing your health by ${item.health}.`;
            }
            this._food.push(item.name);
            this._health = this._health + item.health;
        }
        this.updateHealth();
    }

    updateHealth() {
        if (this._health >= 100) {
            document.getElementById(`health-area`).innerHTML = `Current health:<br /><div class="health-text w-100">${this._health}</div>`;
        } else {
            document.getElementById(`health-area`).innerHTML = `Current health:<br /><div class="error-text w-100">${this._health}</div>`;
        }
        
    }

    startFight(enemy) {
        if (this._kills.includes(enemy.name) || this._kills.includes(`${enemy.name} with the ${enemy.weakness.name}`)) {
            showErrors();
            document.getElementById(`errors`).innerHTML = `You have already slain this enemy.`;
        } else {
            document.getElementById(`errors`).style.display = `none`;
            document.getElementById(`health`).style.display = `none`;
            document.getElementById(`items`).style.display = `none`;
            document.getElementById(`health-area`).style.display = `none`;
            document.getElementById(`inventory-area`).style.display = `none`;
            document.getElementById(`userinput`).style.display = `none`;
            document.getElementById(`location`).style.display = `none`;
            document.getElementById(`description`).innerHTML = `${enemy.description}`;
            document.getElementById(`directions`).style.display = `none`;
            document.getElementById(`buttonarea`).style.display = `block`;
            document.getElementById(`buttonarea`).innerHTML = `<input id="fightButton" type="button" value="Fight Outcome" class="btn text-center" onclick="player.fight(${enemy.name.toLowerCase()});"/>`;
        }   
    }

    fight(enemy) {
        document.getElementById(`errors`).style.display = `none`;
        if (enemy.name === `Vampire`) {
            document.getElementById(`location`).style.display = `block`;
            document.getElementById(`location`).innerHTML = `You've already been through hell and back, but it's nearly over. 
                All that's left to do now is throw everything you've learnt from your experience in the manor right back at this monster. 
                Then maybe this nightmare will end!`;
            if (this._inventory.includes(holyWater.name)) {
                enemy.health = enemy.health - 140;
            }
            if (this._inventory.includes(mirror.name)) {
                enemy.health = enemy.health - 80;
            }
            if (this._inventory.includes(garlic.name)) {
                enemy.health = enemy.health - 80;
            }
            this._health = this._health - enemy.health;
            player.updateHealth();
            if (!this._inventory.includes(holyWater.name) && !this._inventory.includes(mirror.name) && this._inventory.includes(garlic.name)) {
                document.getElementById(`description`).innerHTML = `${garlic.onUse}`;
            } else if (!this._inventory.includes(holyWater.name) && this._inventory.includes(mirror.name) && !this._inventory.includes(garlic.name)) {
                document.getElementById(`description`).innerHTML = `${mirror.onUse}`;
            } else if (this._inventory.includes(holyWater.name) && !this._inventory.includes(mirror.name) && !this._inventory.includes(garlic.name)) {
                document.getElementById(`description`).innerHTML = `${holyWater.onUse}`;
            } else if (!this._inventory.includes(holyWater.name) && this._inventory.includes(mirror.name) && this._inventory.includes(garlic.name)) {
                document.getElementById(`description`).innerHTML = `${mirror.onUse}</p><p>${garlic.onUse}`;
            } else if (this._inventory.includes(holyWater.name) && this._inventory.includes(mirror.name) && !this._inventory.includes(garlic.name)) {
                document.getElementById(`description`).innerHTML = `${holyWater.onUse}</p><p>${mirror.onUse}`;
            } else if (this._inventory.includes(holyWater.name) && !this._inventory.includes(mirror.name) && this._inventory.includes(garlic.name)) {
                document.getElementById(`description`).innerHTML = `${holyWater.onUse}</p><p>${garlic.onUse}`;
            } else if (this._inventory.includes(holyWater.name) && this._inventory.includes(mirror.name) && this._inventory.includes(garlic.name)) {
                document.getElementById(`description`).innerHTML = `${holyWater.onUse}</p><p>${mirror.onUse}</p><p>${garlic.onUse}`;
            } else {
                document.getElementById(`description`).style.display = `none`;
            }
            if (this._health > 0) {
                this.killEnemy(enemy);
            } else {
                loseGame(enemy);
            }
        } else {
            if (this._inventory.includes(enemy.weakness.name)) {
                this._health = this._health + 30;
                player.updateHealth();
                this.killEnemy(enemy);
            } else {
                this._health = this._health - enemy.health;
                if (this._health > 0) {
                    this.killEnemy(enemy);
                } else {
                    loseGame(enemy);
                }
            }
        }
        player.updateHealth();
    }

    killEnemy(enemy) {
        document.getElementById(`errors`).style.display = `none`;
        if (enemy.name === `Vampire`) {
            document.getElementById(`directions`).style.display = `block`;
            document.getElementById(`directions`).innerHTML = `Your hard work and keen eye have proven invaluable and you can 
                see that your foe has almost met his demise. The Count falls to his knees and looks at you with a melancholy smile; 
                his eyes plead for forgiveness. But you are not in a forgiving mood. You reach down, a new sense of rejuvenation, 
                you pull down part of the boarded ceiling above and ram your newly fashioned stake right through his heart.`;
            document.getElementById(`buttonarea`).style.display = `block`;
            document.getElementById(`buttonarea`).innerHTML = `<input id="winGame" type="button" value="Escape" class="btn text-center" onclick="winGame();"/>`;
        } else if (enemy.name === `Knights`) {
            document.getElementById(`description`).innerHTML = `With no other option, you tuck your head into your shoulders 
                and tackle each suit, one by one. On impact, the rusted plate breaks into pieces and clatters to the floor. 
                When the last soldier falls, you pick yourself off and allow a brief smile. Fortunately for you, this fight didn't 
                require any brain cells. You learn a little from this encounter.</p><p class="error-text">You lose ${enemy.health} health.</p>`;
            this._kills.push(enemy.name);
            document.getElementById(`buttonarea`).style.display = `block`;
            document.getElementById(`buttonarea`).innerHTML = `<input id="backToRoom" type="button" value="Continue" class="btn text-center" onclick="backToRoom(${enemy.name.toLowerCase()});"/>`;
        } else {
            if (this._inventory.includes(enemy.weakness.name)) {
                document.getElementById(`description`).innerHTML = `${enemy.weakness.onUse}</p><p class="health-text">Your strength 
                    and ingeniousness has seen you victorious. You gain experience from your success. Your health has been increased by 30.</p>`;
                this._kills.push(`${enemy.name} with the ${enemy.weakness.name}`)
                const index = this._inventory.indexOf(enemy.weakness.name);
                this._inventory.splice(index, 1);
                this.updateInventory();
            } else {
                document.getElementById(`description`).innerHTML = `${enemy.hardFight}</p><p><span class="error-text">You are lucky 
                    to have finished this fight in one piece. Perhaps you can learn from this and come more prepared to future fights. 
                    Your health has been reduced by ${enemy.health}.</span>`;
                this._kills.push(enemy.name);
            }
            document.getElementById(`buttonarea`).style.display = `block`;
            document.getElementById(`buttonarea`).innerHTML = `<input id="backToRoom" type="button" value="Continue" class="btn text-center" onclick="backToRoom(${enemy.name.toLowerCase()});"/>`;
        }
    }
}

class Enemy extends Character {
    constructor(name, health, description) {
        super(name, health);
        this._description = description;
        this._afterFight = ``;
        this._easyFight = ``;
        this._hardFight = ``;
        this._deathText = ``;
        this._weakness = [];
    }
    get description() {
        return this._onFight;
    }

    get afterFight() {
        return this._afterFight;
    }

    get easyFight() {
        return this._easyFight;
    }

    get hardFight() {
        return this._hardFight;
    }

    get deathText() {
        return this._deathText;
    }

    set description(value) {
        this._onFight = value;
    }

    set afterFight(value) {
        this._afterFight = value;
    }

    set easyFight(value) {
        this._easyFight = value;
    }

    set hardFight(value) {
        this._hardFight = value;
    }

    set deathText(value) {
        this._deathText = value;
    }
}

// Displays information in current room
function displayRoomInfo(room) {
    document.body.style.background = room.background;
    document.body.style.backgroundSize = `cover`;
    document.getElementById(`errors`).style.display = `none`;
    document.getElementById(`items`).style.display = `none`;
    document.getElementById(`health`).style.display = `none`;
    document.getElementById(`title`).innerHTML = `<h1>${room.name.toUpperCase()}</h1>`;
    document.getElementById(`location`).innerHTML = room.location();
    document.getElementById(`description`).innerHTML = `${room.description}`;
    document.getElementById(`directions`).innerHTML = `${room.directions}`;
    document.getElementById(`buttonarea`).style.display = `none`;
    document.getElementById(`health-area`).style.display = `inline-block`;
    document.getElementById(`inventory-area`).style.display = `inline-block`;
    document.getElementById(`userinput`).style.display = `inline-block`;
    document.getElementById(`usertext`).focus();
}

// Room descriptions
const foyer = new Room;
foyer.name = `Foyer`;
foyer.description = `This grand entrance hall is spacious but sombre in appearance; cobwebs cling to every corner of the seemingly 
    forgotten space around you. Elegant drapes hang lifelessly from rusted rails, which hide heavy iron barred windows. The room has 
    been deprived of all natural light, but an immaculate chandelier hangs from the centre of the high ceiling, providing just enough 
    light that you can vaguely make out the outline of two ornate, golden framed paintings, side by side on the northern wall of the 
    upper foyer; it is difficult to see the subject of either from this distance. You feel alone in this almost bare expanse.`;
foyer.directions = `Two doors are located on the ground floor, one in the east wall and one to the west. To the north, a grand 
    staircase ascends to the first floor.`;
foyer.background = `url('images/foyer.jpg') no-repeat center`;

const huntingLodge = new Room;
huntingLodge.name = `Hunting Lodge`;
huntingLodge.description = `This room is small and the air is warm. You are briefly soothed by the crackle of coals on the hearth, 
    which to your surprise, is lit! A copper coal bucket sits to the side. You start to consider this space cosy. That is until you 
    notice dozens of hunting trophies that adorn all four walls; each glassy gaze seeming to follow your every move. An almost lifelike 
    bearskin rug covers the majority of the creaky wooden floorboards. The fire cannot quash the chills that run down your spine.`;
huntingLodge.directions = `There are two doors in this room, one to the north and one to the west. To the east, a rough cut, marble 
    staircase leads up to the first floor.`;
huntingLodge.background = `url('images/hunting-lodge.jpg') no-repeat center`;

const banquetHall = new Room;
banquetHall.name = `Banquet Hall`;
banquetHall.description = `An enormous dinner table resides in the centre of this room full of various aromas. Most are mouth-wateringly 
    good, others strange. You can’t decide if you want to salivate or be sick. Silver platters are laden with gigantic portions of several 
    meats, exotic fruits, and pastries. Everything looks and smells fresh, as if it were cooked just for you. Taking pride of place at the 
    head of the main table is an irresistible looking hog roast. You feel hungry and contemplate whether to eat.`;
banquetHall.directions = `There are three doors in this room, a small door to the north and one to the south. To the west, large glass 
    doors appear to lead to an outside area.`;
banquetHall.background = `url('images/banquet-hall.jpg') no-repeat center`;

const kitchen = new Room;
kitchen.name = `Kitchen`;
kitchen.description = `There is not much space to move. A tiny stove is cluttered with dirty dishes and a cast iron cooking pot, 
    dripping with some unidentifiable liquid. Some juicy looking green apples reside in a woven bowl on the countertop. Wonky wooden 
    shelves hold a few empty jars. The door of a cupboard swings eerily on its last remaining hinge. A draft must be coming from somewhere.`;
kitchen.directions = `There are two doors in this room. A small door to the south and one to the west which appears to lead to a 
    descending staircase.`;
kitchen.background = `url('images/kitchen.jpg') no-repeat center`;

const courtyard = new Room;
courtyard.name = `Courtyard`;
courtyard.description = `The air is fresh and you breathe easier. Your attention is drawn to the beautiful natural stone fountain. 
    Its white marble base has been delicately carved with stunning doves of peace and the water runs crystal clear. A huge oak tree 
    towers over the grounds within the courtyard, close to the seemingly unbreachable northern boundary. Its branches look strong and 
    sturdy. They sway with an almost human-like motion.`;
courtyard.directions = `Two doors lead back into the manor. Large glass doors inhabit the wall to the east and a smaller glass door to 
    a conservatory can be seen to the west.`;
courtyard.background = `url('images/courtyard.jpg') no-repeat center`;

const conservatory = new Room;
conservatory.name = `Conservatory`;
conservatory.description = `The room is softly lit with natural light piercing through the foggy walls. A quaint, oak side table supports 
    a bowl of ripe red apples. The cold tiled floor has been decorated with dark, damp soil from a smashed flower pot; shards of porcelain 
    are scattered around your feet.  Human-like footprints can be seen heading north within the soil deposit, and you feel a tentative sense 
    of hope that you are not the only person in the manor anymore.`;
conservatory.directions = `There are three doors in this room. A wooden hatch in the north appears to lead to a descending staircase, a small 
    glass door to the east appears to lead to an outdoor area, and a door to the south.`;
conservatory.background = `url('images/conservatory.jpg') no-repeat center`;

const westCorridor = new Room;
westCorridor.name = `West Corridor`;
westCorridor.description = `Two regimental lines of rusted suits of armour stand on either side of this narrow passageway, while a single, 
    silver clad knight stands alone on the southern wall. Firmly grasped between two intertwined gauntlets is a striking looking sword, 
    forged with distinguished expertise. The corridor is notably dark; there is just enough light from the glass door to the north to make 
    several unlit torches in holders on the eastern wall visible.`;
westCorridor.directions = `There are three doors in the corridor. To the north, a small glass door. There are two regular doors either 
    side of you. One to the east and one directly opposite, to the west.`;
westCorridor.background = `url('images/west-corridor.jpg') no-repeat center`;

const ballroom = new Room;
ballroom.name = `Ballroom`;
ballroom.description = `Soft music plays from a gramophone in one corner of the room. You walk further onto the dance floor and the music 
    stops. You pause and look up to a crystal chandelier as you hear it’s gemstones collide with one another for no apparent reason. Your 
    footsteps now echo on the polished floorboards and your blood runs cold unexplainably. You feel like you are being watched from every 
    corner. Your attention is drawn suddenly by the sound of sobbing from behind the regal drawstring curtains that fall from the high 
    ceiling down to the floor. Someone sounds in distress. Perhaps they are looking for an exit too?`;
ballroom.directions = `There is just one door in this room, to the east. There are two spiralled stairways that rise up to a spectacular 
    balcony above the ballroom on the north and south walls.`;
ballroom.background = `url('images/ballroom.jpg') no-repeat center`;

const viewingPlatform = new Room;
viewingPlatform.name = `Viewing Platform`;
viewingPlatform.description = `Waist-high silver railings run the length of this impressive balcony that hangs over the ballroom floor. 
    The area is illuminated by the crystal chandelier which you can now see must be constructed with hundreds upon thousands of individual 
    diamonds, each reflecting the light, creating the illusion of twinkling stars. Half a dozen high-backed chairs, almost throne-like in 
    appearance, are positioned in a semi circle facing toward a music stand, complete with various sheet music and a rather exquisit looking 
    silver flute, which almost blinds you as it catches the light from above. So too, does a perfectly formed hand mirror, with a carved ivory 
    frame and smooth reflective surface.`;
viewingPlatform.directions = `There are two spiralled stairways that lead back down to the Ballroom floor, one to the north and one to the 
    south. There is also a door to the east.`;
viewingPlatform.background = `url('images/viewing-platform.jpg') no-repeat center`;

const upperFoyer = new Room;
upperFoyer.name = `Upper Foyer`;
upperFoyer.description = `The space above the main Foyer seems to serve the pure purpose of a means to traverse between rooms on the upper 
    floor. There are no outstanding features, and very little to stop and admire. This is except for the two elaborate, golden framed 
    paintings on the northern wall which you now have a better view of. The first image unnerves you a little; the oily eyes of a tall, 
    well-dressed man holding a glass of crimson wine bore into your soul. The second painting is of an ancient looking grandfather clock; 
    it appears to be showing an oddly specific time.`;
upperFoyer.directions = `This empty hallway leads to two rooms, one to the east and one to the west. The grand staircase to the south 
    leads back down to the main foyer.`;
upperFoyer.background = `url('images/upper-foyer.jpg') no-repeat center`;

const library = new Room;
library.name = `Library`;
library.description = `Your lungs are instantly filled with dust and you get a tickle in the back of your throat. The air around you is 
    musty, and you can see a thick blanket of dirt on each of the scrolls and texts that have been crammed into bookshelves that completely 
    cover two of the four walls of the library. One scruffy book lies open on the floor; its spine is broken and you can clearly see that a 
    single page has been torn out, leaving tattered scraps of paper on the inside edge. The remaining pages are filled with unusual symbols 
    and long words and you feel like you are reading a whole new language.`;
library.directions = `There is one door to the west and a rough cut, marble staircase to the east, leading down to the ground floor.`;
library.background = `url('images/library.jpg') no-repeat center`;

const ritualChamber = new Room;
ritualChamber.name = `Ritual Chamber`;
ritualChamber.description = `You immediately feel uncomfortable. This basement area is illuminated by the soft glow of a single candle; 
    its deep red wax cascades down the sides of a brass candlestick and pools at the base. Its flame flickers in a gentle breeze that 
    seemingly comes from nowhere. A strange symbol has been carved into the floorboards under your feet and painted in a blood red colour. 
    A dark granite altar resides near the northern wall, engraved with foreign scribbles. Atop is a bottle of fine wine, an empty goblet and 
    a bunch of plump red grapes. A familiar looking grandfather clock stands against the south wall.`;
ritualChamber.directions = `There are two sets of ascending stairs. One leading up to a wooden hatch in the north and the other to a door 
    in the east.`;
ritualChamber.background = `url('images/ritual-chamber.jpg') no-repeat center`;

const tunnel = new Room;
tunnel.name = `Tunnel`;
tunnel.description = `It is pitch black. You can’t see your own feet under you and you have no perspective of how far the tunnel goes, 
    but you take tentative steps forward. You stretch out both arms either side of you and feel rough cold stone on both palms of your 
    hands. You are suddenly distracted by a crawling sensation over your right hand and then up your arm. Startled, you let go of the 
    wall, stumble, and hurtle to the ground. You are left with a bruised ego and a face only a mother could love, as you kiss the hard 
    concrete floor.`;
tunnel.directions = `You may wish to return to Ritual Sanctum to the north. There is another exit to the south. In this tunnel, you sense 
    that freedom may be close.`;
tunnel.background = `url('images/tunnel.jpg') no-repeat center`;

const innerSanctum = new Room;
innerSanctum.name = `Inner Sanctum`;
innerSanctum.description = `You take little notice of the appearance of this room. You know where you want to be next, where you need 
    to be to escape this wretched manor. You see a rope ladder hanging from an opening in the ceiling to the south, a slither of sunlight 
    breaches the surrounding gloom. There’s just one obstacle in your way now, and he doesn’t look happy to see you. A towering, fanged 
    monster of a man shoots you with his oily black stare. There’s no way he is going to oblige and let you pass without a fight. You must 
    decide if you are ready to fight or flee back through the tunnel and better prepare yourself. You are sure however, that killing this 
    nightmarish figure must be the only way out.`;
innerSanctum.directions = `Are you ready to fight? Or will you flee north through the tunnel?`;
innerSanctum.background = `url('images/inner-sanctum.jpg') no-repeat center`;

// Linking rooms
foyer.linkRoom(`east`, huntingLodge);
foyer.linkRoom(`west`, westCorridor);
foyer.linkRoom(`north`, upperFoyer);

huntingLodge.linkRoom(`west`, foyer);
huntingLodge.linkRoom(`north`, banquetHall);
huntingLodge.linkRoom(`east`, library);

banquetHall.linkRoom(`south`, huntingLodge);
banquetHall.linkRoom(`north`, kitchen);
banquetHall.linkRoom(`west`, courtyard);

kitchen.linkRoom(`south`, banquetHall);
kitchen.linkRoom(`west`, ritualChamber);

courtyard.linkRoom(`east`, banquetHall);
courtyard.linkRoom(`west`, conservatory);

conservatory.linkRoom(`east`, courtyard);
conservatory.linkRoom(`north`, ritualChamber);
conservatory.linkRoom(`south`, westCorridor);

westCorridor.linkRoom(`north`, conservatory);
westCorridor.linkRoom(`east`, foyer);
westCorridor.linkRoom(`west`, ballroom);

ballroom.linkRoom(`east`, westCorridor);
ballroom.linkRoom(`north`, viewingPlatform);
ballroom.linkRoom(`south`, viewingPlatform);

viewingPlatform.linkRoom(`east`, upperFoyer);
viewingPlatform.linkRoom(`north`, ballroom);
viewingPlatform.linkRoom(`south`, ballroom);

upperFoyer.linkRoom(`south`, foyer);
upperFoyer.linkRoom(`east`, library);
upperFoyer.linkRoom(`west`, viewingPlatform);

library.linkRoom(`west`, upperFoyer);
library.linkRoom(`east`, huntingLodge);

ritualChamber.linkRoom(`north`, conservatory);
ritualChamber.linkRoom(`east`, kitchen);

tunnel.linkRoom(`north`, ritualChamber);
tunnel.linkRoom(`south`, innerSanctum);

innerSanctum.linkRoom(`north`, tunnel);

// Item initialisation
const unlitTorch = new Item;
unlitTorch.name = `Unlit Torch`;

const litTorch = new Item;
litTorch.name = `Lit Torch`;
litTorch.onUse = `You turn your back to the old oak, thinking that maybe if you just return to the manor, you can both put this 
    misunderstanding behind you. But as you face the fountain, you catch the reflection of a low branch sweeping the floor, 
    threatening to take you clean off your feet. Without a second thought, you nimbly jump the arm of the ancient and throw your 
    torch with determination onto the lumbering tree. It catches fire instantly and the flames spread rapidly from branch to branch.`;

const incantationPage = new Item;
incantationPage.name = `Incantation Page`;
incantationPage.onUse = `You start to turn to a set of spiral stairs leading to the balcony, when you hear the three beings start 
    some sort of chanting as they draw strange symbols in the air around them. You realise these signs are not too dissimilar to 
    the marks on the paper you found. You reach for the incantation page that you discovered in the Hunting Lodge. You have no idea 
    what you are saying, but you feel compelled to read aloud the scrawlings. Three shrill screams fill the entire room and the 
    witches melt into the dance floor and vanish.`;

const emptyJar = new Item;
emptyJar.name = `Empty Jar`;
emptyJar.onUse = `You fill the empty jar with water from the fountain. You receive Holy Water.`;

const garlic = new Item;
garlic.name = `Garlic`;
garlic.onUse = `You confidently thrust forward the garlic cloves that were hidden in your jean pocket. The Count recoils at the 
    smell, throwing his cloak over his nose in disgust. His only option is to attack from afar, and as a result you become more 
    evasive to his attacks.`;

const holyWater = new Item;
holyWater.name = `Holy Water`;
holyWater.onUse = `You remember the fondness that the old ancient in the courtyard had towards the pristine fountain and it strikes 
    you that its unblemished waters must hold some special quality. You hurl your jar of holy water into the face of the fiend. 
    His skin starts to boil and he wretches in agony.`;

const flute = new Item;
flute.name = `Flute`;
flute.onUse = `You recall how the beast was in a deep slumber before you rudely interrupted, so maybe there's a way you can get him 
    back down and dreaming. Ever grateful for your recorder lessons at school, you find the flute you picked up and pretend you know 
    how to play it. Luckily for you, it doesn't take much of a tune to send this lazy hog back to sleep.`;

const mirror = new Item;
mirror.name = `Mirror`;
mirror.onUse = `In the heat of the moment, you put your head down and run forward, directly toward the Count. This move was entirely 
    unexpected by both parties, and whether brave or stupid, you manage to bamboozle the monster in such a way that you gain just 
    enough time to reach the solitary sun beam that streams through the ceiling and redirect it with the mirror, burning a hole in 
    his chest. He cries out in anguish.`;

const clockTime = new Item;
clockTime.name = `Note of Clock Time`;

const candle = new Item;
candle.name = `Candle`;

// Add items to rooms
westCorridor.item = unlitTorch;

huntingLodge.item = litTorch;
huntingLodge.item = incantationPage;

kitchen.item = emptyJar;
kitchen.item = garlic;

courtyard.item = holyWater;

viewingPlatform.item = flute;
viewingPlatform.item = mirror;

upperFoyer.item = clockTime;

ritualChamber.item = candle;

// Initialising food
const greenApple = new Food;
greenApple.name = `Green Apple`;
greenApple.health = 15;

const redApple = new Food;
redApple.name = `Red Apple`;
redApple.health = 15;

const wine = new Food;
wine.name = `Wine`;
wine.health = 15;

const grapes = new Food;
grapes.name = `Grapes`;
grapes.health = 5;

// Add food to rooms
kitchen.item = greenApple;
conservatory.item = redApple;
ritualChamber.item = wine;
ritualChamber.item = grapes;

// Initialising enemies
const knights = new Enemy;
knights.name = `Knights`;
knights.health = 10;
knights.description = `You gaze upon the sword and consider the protection it could offer within these unknown walls. You also think 
    you'd look pretty great swinging a sword around. You pull the sword toward you and it is rapidly snatched back by its owner. The 
    silver knight slowly raises one arm and you find yourself following the direction of its outstretched finger, pointing behind you. 
    His rusted friends start to dismount themselves from their positions and slave towards you. You are eventually surrounded.`;
knights.afterFight = `Rusted suits of armour lay scattered along this narrow passageway, while a single, silver clad knight stands alone 
    on the southern wall, his head bowed in recognition of your unexpected success. While he refuses to give up his sword, the experience 
    that you gained from the fight feels like it could prove valuable. The corridor is notably dark; there is just enough light from the 
    glass door to the north to make several unlit torches in holders on the eastern wall visible.`;
knights.weakness = [];

const hog = new Enemy;
hog.name = `Hog`;
hog.health = 50;
hog.description = `You cannot resist the temptation of the feast you have laid your eyes on. You work your way from one end of the 
    table to the other, plunging the fine silver cutlery into various soups, breads, and sponges. The food is extraordinary! Upon 
    reaching the head of the table, and without a second thought, you plunge a fork with a heavy hand into what had looked like a 
    glorious hog roast. A piercing squeal follows as your fork makes connection with the snout of an enormous, seething, mutant pig. 
    You leap backward, only narrowly missed by the dining table which had been upturned in indeniable rage of being woken.`;
hog.afterFight = `An enormous dinner table has been upturned. Spoiled food is scattered all over the floor and up the walls. The corpse 
    of a monstrous hog lies motionless.`;
hog.easyFight = `An enormous dinner table has been upturned. Spoiled food is scattered all over the floor and up the walls. You take note 
    of the monstrous hog in deep slumber and move around the room with great caution, so not to wake the beast.`;
hog.hardFight = `There's no time to waste before you become supper! You scramble along the floor, picking up any cutlery you can grab a 
    hold of. You throw sharp knives, forks, and broken plates towards the hog and eventually you hit a sweet spot. As it loses concentration, 
    you plunge a carving knife into its swollen belly and watch in disgust as a wave of partially digested food laps around your feet and 
    the beast slumps to the ground.`;
hog.deathText = `You are exhausted and in a panic. You try to run to safety, but you slip on the soup-soaked floorboards and crash to 
    the ground, slicing your hands and knees open on the broken plates around you. You feel a damp, warm breath on the back of your neck.`;
hog.weakness = flute;

const witches = new Enemy;
witches.name = `Witches`;
witches.health = 50;
witches.description = `Your better nature takes control of you and you find yourself pulling back the drapes to comfort this unseen 
    stranger. Soon after, a hellish cackle penetrates your eardrums from all directions. A dark wispy figure rushes through you. You 
    are forced against your will to turn towards the centre of the room. You can feel the temperature of the room dropping at great speed; 
    it's like your life-force is being drained away. A second entity swoops in from the balcony above and a third ammasses from nowhere. 
    Your eyes adjust in time to see each of the three forms take the shape of a gruesome, wart-riddled witch. The trio smirk wickedly and 
    await your first move.`;
witches.afterFight = `The room is eerily silent. The crystal chandelier now hangs still. Your footsteps echo on the polished floorboards. 
    You remember the evil that previously resided here and curse at your trusting, helpful nature. Thankfully, you no longer feel like you 
    are being watched.`;
witches.easyFight = witches.afterFight;
witches.hardFight = `You have no knowledge of these beings have no clue where their weaknesses lie, but you feel energetic enough to try 
    and escape up the spiral stairs and onto the balcony above. Spells of arcane and fire are flung playfully in your general direction. 
    You reach the balcony and peer over the edge to see the cluster of witches cackling maniacally in the center of the ballroom floor. 
    You see a fireball rise upwards; not toward you, but toward the diamond chandelier above you. It is reflected back down and you note 
    the sudden silence as the witches stop laughing and realise their fate. Your comedic hopelessness was enough to put them off their game. 
    You return to the ballroom floor.`;
witches.deathText = `You are frozen in fear. What little strength you came here with is ebbing away. The maniacal cackles of the witches 
    grow louder and louder. Then quiet. Then silence. Your body becomes wrapped in a black wispy shroud.`;
witches.weakness = incantationPage;

const tree = new Enemy;
tree.name = `Tree`;
tree.health = 50;
tree.description = `Your presence has been noticed by the resident flora and fauna around you. Engraved ravens caw at the sight of you 
    spoiling this timeless courtyard. The gargantuan oak tree stirs and shakes off its broad branches. A shower of club-shaped leaves 
    rain down over your head and your jaw drops as you see what was previously an ordinary oak transforms. Arms sprout from the sides 
    of the trunk and sections of bark crack and separate, revealing facial features. You have disrupted the eternal rest of a 
    Slumbering Ancient. He's looking to return your body to the ground.`;
tree.afterFight = `A huge tree trunk lies along almost the entire length of the courtyard, unearthed from where it once stood. Snapped 
    branches litter the cobbled floor. Miraculously, the beautiful stone fountain has avoided damage. Its white marble base has been 
    delicately carved with stunning doves of peace and the water runs crystal clear.`;
tree.easyFight = `The air is filled with thick black smoke. You start to choke a little. A pile of hot ash smoulders in the northern 
    most area of the courtyard. The beautiful natural stone fountain remains unblemished. Its white marble base has been delicately 
    carved with stunning doves of peace and the water runs crystal clear.`;
tree.hardFight = `You turn your back to the old oak, thinking that maybe if you just return to the manor, you can both put this 
    misunderstanding behind you. But as you face the fountain, you catch the reflection of a low branch sweeping the floor, threatening 
    to take you clean off your feet. Your legs move with just enough speed that you avoid the full force of the hit, but you trip and 
    hit the ground. The ancient raises one arm into the heavens and with stinging palms, you crawl and put the fountain between yourself 
    and your inevitable downfall. All you can do is watch through trembling fingers as the tree hesitates, falters, and loses balance with 
    the mighty swing of it’s arm, crashing to the floor beside you.`;
tree.deathText = `You turn your back to the old oak, thinking that maybe if you just return to the manor, you can both put this 
    misunderstanding behind you. But as you face the fountain, you catch the reflection of a low branch sweeping the floor, threatening 
    to take you clean off your feet. Your reactions are slow and you hear the cracking of bone as you are launched into the air and crash 
    through the glass of the conservatory. You sit up for a moment, but can feel that you are bleeding out.`;
tree.weakness = litTorch;

const vampire = new Enemy;
vampire.name = `Vampire`;
vampire.health = 300;
vampire.description = `Your challenge is graciously accepted and the Count of the Manor gestures for you to move forward to meet him. 
    His whole persona captivates you and you slip into a trance, becoming a slave to his every will. But his majesty grows weary at how 
    easy it is proving to be to manipulate you. He wants a real challenge. With the flick of a wrist, your body is flung against the 
    concrete floor. You are dazed for only a few seconds before you snap out of your submissive state and are filled with a new sense 
    of confidence. The Count applauds the new you. It's time for the real fight.`;
vampire.afterFight = `You bat away a plume of iridescent smoke where your enemy stood only seconds ago. You are breathless and exhausted 
    but the prospect of daylight is enough for you to muster the energy to negotiate your way up the unstable looking rope ladder. With 
    each painful rung, the sound of birds chirping and traffic on the road becomes clearer. Much to your delight and confusion, the ladder 
    holds and you pull yourself out of the ground, directly outside your own front door.</p><p>You don’t understand how you got here, but 
    you don’t care to work out those small details right now. Looking behind you, the hole in the ground you just ascended from has 
    disappeared. You pat your jean pocket and find your house keys and mobile phone, right where you always keep them. At this moment, 
    all you can think to yourself is “Maybe I’ll take an Uber next time”.`;
vampire.deathText = `But despite your best efforts, you are not strong enough to overcome this powerful foe. You drop to your knees and 
    beg for mercy. The Count shakes his head at your feeble attempts to dethrone him, clearly unimpressed with your lack of perseverance 
    and quick thinking. Disappointed with your performance, he places his hands either side of your head, and a wry smile appears on his 
    ghostly white face.`;
vampire.weakness = [holyWater, mirror, garlic];

// Adding enemies to rooms
westCorridor.enemy = knights;
banquetHall.enemy = hog;
ballroom.enemy = witches;
courtyard.enemy = tree;
innerSanctum.enemy = vampire;

// Initialising player character
const player = new Player();
player.deathText = `You slump to the floor and take your last breath. You have been foolish. You must better prepare yourself next time. 
    Click the button below to try again.`;

// Function to show next section of rules before the game starts
function showNextSection(current, next) {
    document.getElementById(`rules-title`).style.display = `none`;
    document.getElementById(current).style.display = `none`;
    document.getElementById(next).style.display = `block`;
}

// Function to hide item messages when reaching an error or losing health
function showErrors() {
    document.getElementById(`items`).style.display = `none`;
    document.getElementById(`health`).style.display = `none`;
    document.getElementById(`errors`).style.display = `block`;
}

// Function to hide errors when interacting with items
function showItems() {
    document.getElementById(`errors`).style.display = `none`;
    document.getElementById(`health`).style.display = `none`;
    document.getElementById(`items`).style.display = `block`;
}

// Function to hide errors when gaining health
function showHealth() {
    document.getElementById(`errors`).style.display = `none`;
    document.getElementById(`items`).style.display = `none`;
    document.getElementById(`health`).style.display = `block`;
}

// Function to show new room description after killing enemies
function backToRoom(enemy) {
    document.getElementById(`errors`).style.display = `none`;
    document.getElementById(`location`).style.display = `block`;
    document.getElementById(`directions`).style.display = `block`;
    document.getElementById(`directions`).innerHTML = `${currentRoom.directions}`;
    document.getElementById(`buttonarea`).style.display = `none`;
    document.getElementById(`userinput`).style.display = `inline-block`;
    document.getElementById(`health-area`).style.display = `inline-block`;
    document.getElementById(`inventory-area`).style.display = `inline-block`;
    if (player._kills.includes(`${enemy.name} with the ${enemy.weakness.name}`)) {
        document.getElementById(`description`).innerHTML = `${enemy.easyFight}`;
    } else {
        document.getElementById(`description`).innerHTML = `${enemy.afterFight}`;
    }
    document.getElementById(`usertext`).focus();
}

// Function to unlock the hidden tunnel behind the clock after player interacts with it correctly
function clockUnlock() {
    document.getElementById(`location`).style.display = `block`;
    document.getElementById(`description`).style.display = `block`;
    document.getElementById(`buttonarea`).style.display = `none`;
    document.getElementById(`userinput`).style.display = `inline-block`;
    document.getElementById(`health-area`).style.display = `inline-block`;
    document.getElementById(`inventory-area`).style.display = `inline-block`;
    document.getElementById(`usertext`).focus();
    document.getElementById(`description`).innerHTML = `${currentRoom.description}`;
    document.getElementById(`directions`).innerHTML = `There are two sets of ascending stairs. One leading up to a wooden hatch 
        in the north and the other to a door in the east. There is now a tunnel entrance to the south.`;
    const index = player._inventory.indexOf(clockTime.name);
    player._inventory.splice(index, 1);
    player.updateInventory();
}

// Function to end the game when player dies
function loseGame(enemy) {
    document.getElementById(`errors`).style.display = `none`;
    document.getElementById(`items`).style.display = `none`;
    document.getElementById(`health`).style.display = `none`;
    document.getElementById(`userinput`).style.display = `none`;
    document.getElementById(`buttonarea`).style.display = `block`;
    document.getElementById(`buttonarea`).innerHTML = `<input id="restartButton" type="button" value="Restart" class="btn text-center" onclick="location.reload();"/>`;
    if (enemy.name === `Vampire`) {
        document.getElementById(`location`).style.display = `block`;
        document.getElementById(`directions`).style.display = `block`;
        document.getElementById(`directions`).innerHTML = `${enemy.deathText}</p><p class="error-text">${player.deathText}`;
    } else {
        if (currentRoom.name === `Tunnel`) {
            document.getElementById(`description`).innerHTML = `<span class="error-text">You slump to the floor and take your last 
                breath. You have been foolish. You must better prepare yourself next time. Click the button below to try again.</span>`;
        } else {
            if (enemy.name === `Knights`) {
            document.getElementById(`description`).innerHTML = `<span="error-text">${player.deathText}</span>`;
            } else {
            document.getElementById(`description`).innerHTML = `${enemy.deathText}</p><p class="error-text">${player.deathText}`;
            }
        }
    }
} 

function winGame() {
    document.body.style.background = `url('images/outro.jpg') no-repeat center`;
    document.body.style.backgroundSize = `cover`;
    document.getElementById(`title`).style.display = `none`;
    document.getElementById(`location`).innerHTML = `<br /><br />${vampire.afterFight}</p><p>Congratulations, you have escaped from the manor!`;
    document.getElementById(`description`).style.display = `none`;
    document.getElementById(`directions`).style.display = `none`;
    document.getElementById(`buttonarea`).style.display = `block`;
    document.getElementById(`buttonarea`).innerHTML = `<input id="restartGame" type="button" value="Click to Play Again" class="btn text-center" onclick="location.reload();"/>`;
}

// Function to handle commands
function commandHandler(command) {
    switch(command) {
        default: 
            if (currentRoom.name === `Hunting Lodge`) {
                switch(command) {
                    case `unlit torch`:
                    case `torch`:
                    case `fire`:
                    case `hearth`:
                        if (player.inventory.includes(unlitTorch.name)) {
                            document.getElementById(`items`).innerHTML = `You light the torch with the flames of the hearth.`;
                            const index = player.inventory.indexOf(unlitTorch.name);
                            player.inventory.splice(index, 1);
                            player.addToInventory(litTorch);
                        } else {
                            showErrors();
                            document.getElementById(`errors`).innerHTML = `You don't have anything to set alight.`;
                        }
                        break;
                    case `bucket`:
                    case `coal`:
                        document.getElementById(`items`).innerHTML = `You search the coal bucket and pull out a torn and crumpled 
                            piece of paper. It appears to be an incantation of some kind.`;
                        player.addToInventory(incantationPage);
                        break;
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Banquet Hall`) {
                switch(command) {
                    case `hog`:
                    case `table`:
                    case `eat`:
                        player.startFight(hog);
                        break;
                    case `flute`:
                        if (player._inventory.includes(flute.name)) {
                            player.startFight(hog);
                        } else {
                            showErrors();
                            document.getElementById(`errors`).innerHTML = `You can't do that.`;
                        }
                        break; 
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Kitchen`) {
                switch(command) {
                    case `jar`:
                    case `jars`:
                    case `empty jar`:
                    case `empty jars`:
                    case `shelf`:
                    case `shelves`:
                        document.getElementById(`items`).innerHTML = `You pick up an empty jar.`;
                        player.addToInventory(emptyJar);
                        break;
                    case `cupboard`:
                        document.getElementById(`items`).innerHTML = `You find a string of garlic cloves.`;
                        player.addToInventory(garlic);
                        break;
                    case `apples`:
                    case `apple`:
                    case `green apples`:
                    case `green apple`:
                        player.eatFood(greenApple);
                        break;
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Courtyard`) {
                switch(command) {
                    case `fountain`:
                    case `water`:
                    case `empty jar`:
                    case `jar`:
                        if (player.kills.includes(tree.name) || player.kills.includes(`${tree.name} with the ${tree.weakness.name}`)) {
                            if (player.inventory.includes(emptyJar.name)) {
                                document.getElementById(`items`).innerHTML = `${emptyJar.onUse}`;
                                const index = player.inventory.indexOf(emptyJar.name);
                                player.inventory.splice(index, 1);
                                player.addToInventory(holyWater);
                            } else {
                                showErrors();
                                document.getElementById(`errors`).innerHTML = `You don't have anything to store the water in.`;
                            }
                        } else {
                            if (player._inventory.includes(`${emptyJar.name}`)) {
                                showErrors();
                                document.getElementById(`errors`).innerHTML = `You attempt to fill the jar up with water 
                                    from the fountain, but you are stopped in your tracks.`;
                            }
                            player.startFight(tree);
                        }
                        break;
                    case `tree`:
                    case `oak tree`:
                        player.startFight(tree);
                        break;
                    case `torch`:
                    case `lit torch`:
                        if (player._inventory.includes(litTorch.name)) {
                            player.startFight(tree);
                        } else {
                            showErrors();
                            document.getElementById(`errors`).innerHTML = `What torch?`;
                        }
                        break;
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                } 
            } else if (currentRoom.name === `Conservatory`) {
                switch(command) {
                    case `apples`:
                    case `apple`:
                    case `red apples`:
                    case `red apple`:
                        player.eatFood(redApple);
                        break;
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `West Corridor`) {
                switch(command) {
                    case `sword`:
                    case `knight`:
                        player.startFight(knights);
                        break;
                    case `torch`:
                    case `unlit torch`:
                        document.getElementById(`items`).innerHTML = `You pick up an unlit torch.`;
                        player.addToInventory(unlitTorch);
                        break;
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Ballroom`) {
                switch(command) {
                    case `curtain`:
                    case `curtains`:
                        player.startFight(witches);
                        break;
                    case `incantation`:
                    case `incantation page`:
                    case `page`:
                        if (player._inventory.includes(incantationPage.name)) {
                            player.startFight(witches);
                        } else {
                            showErrors();
                            document.getElementById(`errors`).innerHTML = `You can't do that.`;
                        }
                        break; 
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Viewing Platform`) {
                switch(command) {
                    case `flute`:
                        document.getElementById(`items`).innerHTML = `You pick up a flute.`;
                        player.addToInventory(flute);
                        break;
                    case `mirror`:
                        document.getElementById(`items`).innerHTML = `You pick up a mirror.`;
                        player.addToInventory(mirror);
                        break;
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Upper Foyer`) {
                switch(command) {
                    case `clock`:
                    case `painting`:
                        document.getElementById(`items`).innerHTML = `You note down the time on the Clock in the painting. It's 7:06.`;
                        player.addToInventory(clockTime);
                        break;  
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`; 
                }
            } else if (currentRoom.name === `Ritual Chamber`) {
                switch(command) {
                    case `candle`:
                        document.getElementById(`items`).innerHTML = `You pick up a candle.`;
                        player.addToInventory(candle);
                        break; 
                    case `wine`:
                    case `bottle`:
                    case `goblet`:
                        player.eatFood(wine);
                        break;
                    case `grapes`:
                    case `red grapes`:
                        player.eatFood(grapes);
                        break;
                    case `clock`:
                        if (player.inventory.includes(clockTime.name)) {
                            if (player._kills.includes(`Clock`)) {
                                showErrors();
                                document.getElementById(`errors`).innerHTML = `You have already found a secret tunnel behind the clock.`;
                            } else {
                                document.getElementById(`errors`).style.display = `none`;
                                document.getElementById(`items`).style.display = `none`;
                                document.getElementById(`health`).style.display = `none`;
                                document.getElementById(`location`).style.display = `none`;
                                document.getElementById(`description`).innerHTML = `You inspect the clock and notice a draft from the 
                                    wall behind it. You recall seeing this clock in a painting on the Upper Foyer and move its hands 
                                    to replicate the time shown in the picture. The clock's chimes strike once and its door swings open. 
                                    The floor rumbles as the wall behind the clock opens to reveal a dark tunnel ahead.`;
                                document.getElementById(`buttonarea`).style.display=`block`;
                                document.getElementById(`buttonarea`).innerHTML = `<input id="clockUnlockButton" type="button" value="Continue" class="btn text-center" onclick="clockUnlock();"/>`;
                                document.getElementById(`userinput`).style.display = `none`;
                                document.getElementById(`health-area`).style.display = `none`;
                                document.getElementById(`inventory-area`).style.display = `none`;
                                player._kills.push(`Clock`);
                            }
                        } else {
                            showErrors();
                            document.getElementById(`errors`).innerHTML = `This clock looks familiar, as if you have seen it somewhere 
                                recently. You notice a draft from the wall behind it but feel you might be missing something.`;
                        }
                        break;
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Inner Sanctum`) {
                switch(command) {
                    case `fight`:
                        player.startFight(vampire);
                        break;
                    case `water`:
                    case `holy water`:
                        if (player._inventory.includes(holyWater.name)) {
                            player.startFight(vampire);
                        } else {
                            showErrors();
                            document.getElementById(`errors`).innerHTML = `You can't do that.`;
                        }
                        break;
                    case `mirror`:
                        if (player._inventory.includes(mirror.name)) {
                            player.startFight(vampire);
                        } else {
                            showErrors();
                            document.getElementById(`errors`).innerHTML = `You can't do that.`;
                        }
                        break;
                    case `garlic`:
                        if (player._inventory.includes(garlic.name)) {
                            player.startFight(vampire);
                        } else {
                            showErrors();
                            document.getElementById(`errors`).innerHTML = `You can't do that.`;
                        }
                        break;
                    case `flee`:
                        currentRoom.move(`north`);
                        break;
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Foyer`) {
                switch(command) {
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else if (currentRoom.name === `Library`) {
                switch(command) {
                    default: 
                        showErrors();
                        document.getElementById(`errors`).innerHTML = `You can't do that.`;
                }
            } else {
                showErrors();
                document.getElementById(`errors`).innerHTML = `You can't do that here.`;
                break;
            }   
            break;
        case `restart`:
            location.reload();
            break;
    }
}

// Executes when game starts
function startGame() {
    document.getElementById(`rules`).style.display = `none`;
    document.getElementById(`game-details`).style.display = `block`;
    currentRoom = foyer;
    document.getElementById(`title`).innerHTML = `<h1>Where Am I?</h1>`;
    document.getElementById(`description`).innerHTML = `You wake up in a daze. You are disoriented and dehydrated. All you remember 
        is the raging storm of wind and rain that started without warning when you were walking home from work last night. You conclude 
        that you must have found your way here, for shelter from the bitter cold, and passed out due to exhaustion. You can't hear the 
        lashing rain anymore, only the sound of silence. You pick yourself up off the ground to try the front door, hoping you can sneak 
        away before anyone notices your intrusion. Your hand reaches for the brass handle of the threatening doors to the outside world 
        when you hear the click of a metal latch. You tremble, searching erratically for your mobile phone, to no avail. You are locked 
        inside. If the front door is no longer an option, there must be another way to...</p>`;
    document.getElementById(`buttonarea`).innerHTML = `<input id="foyerButton" type="button" value="Escape from the Manor" class="btn text-center" onclick="displayRoomInfo(foyer);"/>`;
    player.updateHealth();
    document.getElementById(`inventory-area`).innerHTML = `<p>You have nothing in your inventory yet.</p>`;
    document.getElementById(`userinput`).style.display = `none`;
    document.getElementById(`health-area`).style.display = `none`;
    document.getElementById(`inventory-area`).style.display = `none`;
    document.addEventListener(`keydown`, function (event) {
        if (event.key === `Enter`) {
            command = document.getElementById(`usertext`).value.toLowerCase();
            const directions = [`north`, `south`, `east`, `west`];
            const commands = [`restart`, `fire`, `hearth`, `bucket`, `coal`, `hog`, `table`, `eat`, `jar`, `jars`, `empty jar`, 
                `empty jars`, `shelf`, `shelves`, `cupboard`, `apples`, `apple`, `green apples`, `green apple`, `red apples`, 
                `red apple`, `fountain`, `water`, `tree`, `oak tree`, `sword`, `knight`, `torch`, `unlit torch`, `curtain`, 
                `curtains`, `incantation`, `page`, `flute`, `mirror`, `clock`, `painting`, `candle`, `wine`, `bottle`, `goblet`, 
                `grapes`, `red grapes`, `fight`, `holy water`, `garlic`, `flee`];
            if (directions.includes(command)) {
                currentRoom = currentRoom.move(command);
            } else if (commands.includes(command)) {
                commandHandler(command, currentRoom.character);
            } else {
                showErrors();
                document.getElementById(`errors`).innerHTML = `You can't do that.`;
            }
            document.getElementById(`usertext`).value = ``;
        }
    })
}
