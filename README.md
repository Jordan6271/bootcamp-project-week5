# bootcamp-project-week5

## Room By Room Interactions
Here is a list of all interactable objects in each area, the commands required for interaction to take place, and the item received or event that takes place. Where an item is required in your inventory before an interaction can occur, the item and its location is specified. These are written in the format: Command / Alt Command + (required item - location) = item or event.  

_Ground Floor_  

__Foyer:__ 
* No Interactions  

__Hunting Lodge:__ 
* unlit torch / torch / fire / hearth + (Unlit Torch - West Corridor) = Torch
* bucket / coal = Incantation Page  

__Banquet Hall:__
* hog / table / eat + (Flute - Viewing Platform) = Easy Hog Encounter
* hog / table / eat = Hard Hog Encounter  

__Kitchen:__ 
* jar / jars / empty jar / empty jars / shelf / shelves = Empty Jar
* cupboard = Garlic
* apple / apples / green apple / green apples = +15 Health  

__Courtyard:__ 
* water / fountain / empty jar / jar + (Empty Jar - Kitchen) = Holy Water **
* torch / lit torch / tree / oak tree + (Lit Torch - Hunting Lodge) = Easy Tree Encounter
* tree / oak tree / water / fountain / empty jar / jar = Hard Tree Encounter  
  
** Holy Water is only obtainable after the tree has been defeated. Calling one of these commands when the boss is alive will start the encounter, but you are required to use the command again after your victory to obtain the Holy Water.  

__Conservatory:__ 
* apple / apples / red apple / red apples = +15 Health  

__West Corridor:__ 
* sword / knight = Suits of Armour Encounter
* torch / unlit torch = Unlit Torch  

__Ballroom:__ 
* curtain / curtains + (Incantation Page - Hunting Lodge) = Easy Witch Encounter
* curtain / curtains = Hard Witch Encounter  

_Upper Floor_  

__Viewing Platform:__ 
* flute = Flute
* mirror = Mirror  

__Upper Foyer:__ 
* painting / clock = Note of Clock Time  

__Library:__ 
* No Interactions  


_Lower Floor_  

__Ritual Chamber:__ 
* candle = Candle
* wine / bottle / goblet = +15 Health
* grapes / red grapes = +5 Health
* clock + (Note of Clock Time - Upper Foyer) = Tunnel Opens**  
  
**The “Note of Clock Time” is required in your inventory in order to progress. Using the command without the note will provide a hint to this effect. After opening the tunnel, the command “south” becomes available to use to enter the next room.  

__Tunnel:__ 
* No Interactions**  

**If entering the tunnel without either the Candle (Ritual Sanctum) or the Lit Torch (Hunting Lodge), the player will lose 10 Health.  

__Inner Sanctum:__ 
* fight = Vampire Encounter
* flee = Player is sent back to Tunnel  


## Fight Mechanics:
Fights are triggered when certain commands are given (see above).  

An Easy Fight is triggered when the player holds the bosses weakness item in their inventory.
* Hog - Flute
* Witches - Incantation Page
* Tree - Lit Torch
* Vampire - Garlic, Mirror, Holy Water

A Hard Fight is triggered when the player does not hold the bosses weakness item in their inventory.  
  
In the case of the first 3 boss encounters, an Easy Fight will result in the player being rewarded with 30 health. Players will be penalised for starting a Hard Fight and lose 50 health. If a player's health reaches 0, they will receive a message indicating that they must restart the game.  
  
The suit of armour encounter (West Corridor) deducts 10 health and has no item to combat this.  
  
The final boss has a total health of 300. The sum of the player’s total health and the power of the vampire’s weakness items in the player’s inventory must exceed 300 when the fight is initiated in order to win the final encounter. The power of these items are as follows:  
* Garlic - 80
* Mirror - 80
* Holy Water - 140  
  

## Acknowledgements
Many thanks to Charley for helping with the descriptive content for many of the rooms, items, and interactions.