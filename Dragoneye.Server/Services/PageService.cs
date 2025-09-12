using Dragoneye.Server.Models;

namespace Dragoneye.Server.Services
{
    public class PageService
    {
        private readonly List<Page> _pages;

        public PageService()
        {
            _pages = GenerateGameDesignPages();
        }

        public List<Page> GetAllPages()
        {
            return _pages;
        }

        public Page? GetPageById(string id)
        {
            return _pages.FirstOrDefault(p => p.Id == id);
        }

        private List<Page> GenerateGameDesignPages()
        {
            return new List<Page>
            {
                new Page
                {
                    Id = "Card System",
                    Title = "Card System",
                    Content = @"# Card System Overview

The **Card System** is the core mechanic of our tabletop RPG. Every character action, from combat to social encounters, is resolved using cards.

## Basic Mechanics

- **Action Points (AP)**: Each card costs a certain amount of AP to play
- **Spirit Points (SP)**: Some cards require SP, representing magical or spiritual energy
- **Card Types**: Action Cards, Reaction Cards, and Passive Cards

## Card Resolution

When a card is played, the player:

1. Declares the action and target
2. Spends the required AP/SP
3. Resolves any immediate effects
4. Applies ongoing effects if applicable

### Example Cards

- **Strike**: Basic attack card (1 AP)
- **Dodge**: Defensive reaction (0 AP, 1 SP)
- **Inspiration**: Buff allies (+2 to next action)

## Advanced Rules

Cards can be **combined** in certain situations to create more powerful effects. See Combat System for detailed combat applications.",
                    Section = "Core Mechanics",
                    Tags = new List<string> { "cards", "mechanics", "core-rules" },
                    Certainty = CertaintyLevel.Locked,
                    Updated = DateTime.Now.AddDays(-5)
                },
                new Page
                {
                    Id = "Action Cards",
                    Title = "Action Cards",
                    Content = @"# Action Cards

Action Cards represent specific actions a character can take during their turn.

## Categories

### **Attack Cards**
- Physical attacks using weapons or unarmed combat
- Each weapon type has unique attack cards
- Examples: Sword Strike, Bow Shot, Grapple

### **Movement Cards**
- Control character positioning on the battlefield
- Examples: Dash, Climb, Stealth Movement

### **Utility Cards**
- General-purpose actions
- Examples: Search, Interact, Prepare

## Card Anatomy

Each Action Card contains:

- **Name**: Clear action description
- **AP Cost**: Action Point requirement (1-3 typically)
- **SP Cost**: Spirit Point cost (if applicable)
- **Effect**: What happens when played
- **Requirements**: Any prerequisites to play the card

## Domain-Specific Cards

Each character Domain has access to unique Action Cards that reflect their training and abilities. Warriors get combat-focused cards, while Scholars get knowledge-based actions.",
                    Section = "Core Mechanics",
                    Tags = new List<string> { "cards", "actions", "gameplay" },
                    Certainty = CertaintyLevel.Testing,
                    Updated = DateTime.Now.AddDays(-2)
                },
                new Page
                {
                    Id = "Combat System",
                    Title = "Combat System",
                    Content = @"# Combat System

Combat in our RPG uses the Card System with special timing and interaction rules.

## Initiative and Turns

1. **Initiative Phase**: All participants draw initiative cards
2. **Action Phase**: Players act in initiative order
3. **Resolution Phase**: Apply all effects and damage

## Action Economy

Each character has:
- **3 Action Points (AP)** per turn
- **Variable Spirit Points (SP)** based on character level and domain

## Combat Actions

### Primary Actions (Cost varies)
- **Attack**: Use attack cards to damage enemies
- **Defend**: Increase defense for the round
- **Cast**: Use magical abilities

### Reactions (0 AP, may cost SP)
- **Block**: Reduce incoming damage
- **Counter**: Attack immediately after being attacked
- **Dodge**: Avoid area effects

## Damage and Health

- **Health Points**: Track character vitality
- **Armor**: Reduces physical damage
- **Resistance**: Reduces magical damage

## Special Combat Rules

### Flanking
Characters attacking from opposite sides gain +2 to their attack cards.

### High Ground
Elevated position provides +1 to ranged attack cards.

See Warrior Domain for combat-focused character builds.",
                    Section = "Systems",
                    Tags = new List<string> { "combat", "rules", "turn-based" },
                    Certainty = CertaintyLevel.Testing,
                    Updated = DateTime.Now.AddDays(-1)
                },
                new Page
                {
                    Id = "Warrior Domain",
                    Title = "Warrior Domain",
                    Content = @"# Warrior Domain

The Warrior Domain focuses on martial prowess, weapons mastery, and battlefield tactics.

## Core Abilities

### **Weapon Mastery**
Warriors gain access to specialized weapon cards for:
- Swords and axes
- Bows and crossbows  
- Polearms and shields

### **Combat Training**
- Additional attack cards per level
- Improved defensive reactions
- Leadership abilities in group combat

## Domain Cards

### Level 1 Cards
- **Power Strike**: Enhanced attack (+2 damage, 2 AP)
- **Shield Wall**: Protect adjacent allies (1 AP, ongoing)
- **Battle Cry**: Boost ally morale (+1 to all actions, 2 AP)

### Level 3 Cards
- **Whirlwind**: Attack all adjacent enemies (3 AP)
- **Taunt**: Force enemy to target you (1 AP, 1 SP)
- **Second Wind**: Recover health mid-combat (2 AP, 2 SP)

### Level 5 Cards
- **Execute**: Massive damage to wounded foes (3 AP, 2 SP)
- **Rallying Presence**: Allies gain extra AP (2 AP, 3 SP)

## Character Progression

Warriors advance by:
- Mastering weapon types
- Learning tactical maneuvers
- Developing leadership skills

See Combat System for how Warrior abilities integrate with battle mechanics.",
                    Section = "Content",
                    Tags = new List<string> { "domain", "warrior", "combat", "character-class" },
                    Certainty = CertaintyLevel.Locked,
                    Updated = DateTime.Now.AddDays(-3)
                },
                new Page
                {
                    Id = "Resource Management",
                    Title = "Resource Management",
                    Content = @"# Resource Management

Characters must carefully manage their Action Points (AP) and Spirit Points (SP) throughout encounters.

## Action Points (AP)

### Basic Rules
- All characters start each turn with **3 AP**
- Most cards cost 1-2 AP to play
- Powerful effects may cost 3 AP (full turn)
- Unused AP is lost at turn end

### AP Strategy
- Balance offense and defense
- Save AP for reactions when needed
- Consider multi-turn setups for big plays

## Spirit Points (SP)

### Core Concept
SP represents inner energy, magical power, or spiritual focus.

### SP Sources
- **Base SP**: Determined by domain and level
- **Rest**: Recover SP during short/long rests
- **Meditation**: Some domains can recover SP mid-encounter

### SP Usage
- Enhance card effects
- Power domain-specific abilities
- Fuel magical items and artifacts

## Resource Recovery

### Short Rest (1 hour)
- Recover half of maximum SP
- No AP recovery (AP resets each turn)

### Long Rest (8 hours)
- Full AP and SP recovery
- Heal some health points
- Reset daily abilities

## Advanced Resource Management

Some domains and abilities modify resource rules:
- **Scholar Domain**: Can trade SP for extra card draw
- **Mystic Domain**: SP pool larger but slower recovery
- **Exhaustion**: Reduces maximum AP when severely tired",
                    Section = "Core Mechanics",
                    Tags = new List<string> { "resources", "AP", "SP", "management" },
                    Certainty = CertaintyLevel.Ideas,
                    Updated = DateTime.Now.AddHours(-6)
                },
                new Page
                {
                    Id = "Human Race",
                    Title = "Human Race",
                    Content = @"# Human Race

Humans are the most adaptable and diverse race in the world, found in every corner of civilization.

## Racial Traits

### **Adaptability**
Humans gain an extra card slot at character creation, allowing them to start with one additional card from any domain.

### **Determination**
Once per encounter, humans can gain +1 AP on their turn, representing their renowned persistence.

### **Versatile Learning**
Humans learn domain cards 25% faster than other races, reflecting their quick adaptation to new skills.

## Cultural Variations

### **City-States**
- Bonus to social interaction cards
- Start with additional trade goods
- Access to urban-specific equipment

### **Frontier Settlements**
- Bonus to survival and exploration cards
- Hardy constitution (+2 Health)
- Knowledge of local terrain

### **Nomadic Tribes**
- Movement cards cost -1 AP
- Animal handling bonuses
- Cultural knowledge of migration routes

## Appearance and Lifespan

Humans display the widest variety in appearance of all races:
- Height: 5 feet to 6 feet 5 inches
- Build: From lean to stocky
- Coloring: All variations of skin, hair, and eye color
- Lifespan: 60-80 years typically

## Relations with Other Races

Humans serve as diplomatic bridges between other races due to their adaptability and shorter lifespans creating urgency for cooperation.

See World Overview for how humans fit into the broader setting.",
                    Section = "Content",
                    Tags = new List<string> { "race", "human", "character-creation" },
                    Certainty = CertaintyLevel.Locked,
                    Updated = DateTime.Now.AddDays(-4)
                },
                new Page
                {
                    Id = "World Overview",
                    Title = "World Overview",
                    Content = @"# World Overview

The world of **Aethermoor** is a realm where ancient magic and emerging technology create a unique fantasy setting.

## Geography

### **The Central Continent**
The main landmass where most adventures take place.

#### Major Regions:
- **The Ironlands**: Industrial city-states powered by magical engines
- **Whisperwood**: Ancient forests inhabited by elves and spirits
- **The Sunward Reach**: Desert kingdoms built around oasis cities
- **Northmark**: Harsh mountains home to dwarven clans

### **The Shattered Isles**
A chain of mystical islands accessible only by airship, each with unique magical properties.

## History

### **The Age of Harmony** (Ancient Times)
A golden age when all races worked together to build great wonders.

### **The Sundering** (500 years ago)
A catastrophic magical event that shattered the old world and created the current political landscape.

### **The Age of Recovery** (Present Day)
Nations slowly rebuilding while navigating new magical phenomena and political tensions.

## Magic and Technology

### **Aether Crystals**
Magical crystals that power both spells and mechanical devices, creating a unique magitech aesthetic.

### **The Card Codex**
The mysterious source of all Card System magic, with cards appearing to those destined to wield them.

## Current Events

- Rising tensions between the Ironlands and traditional kingdoms
- Strange magical storms appearing without warning
- Ancient ruins revealing new secrets about the Sundering

See Locations for detailed area descriptions and NPCs for key figures shaping the world.",
                    Section = "Setting & Lore",
                    Tags = new List<string> { "world", "setting", "lore", "history" },
                    Certainty = CertaintyLevel.Ideas,
                    Updated = DateTime.Now.AddHours(-12)
                },
                new Page
                {
                    Id = "Social Encounters",
                    Title = "Social Encounters",
                    Content = @"# Social Encounters

Social interactions use the same Card System as combat, but with different card types and resolution mechanics.

## Social Mechanics

### **Influence Points**
Instead of damage, social cards generate Influence Points toward specific goals:
- **Persuade**: Logic and reasoning
- **Charm**: Emotional appeal and charisma  
- **Intimidate**: Fear and dominance
- **Deceive**: Misdirection and lies

### **Social Defenses**
NPCs have social defenses based on their personality:
- **Willpower**: Resistance to persuasion and charm
- **Suspicion**: Defense against deception
- **Courage**: Resistance to intimidation

## Social Card Types

### **Approach Cards**
Determine your overall strategy:
- **Diplomatic Approach**: Bonus to persuasion, penalty to intimidation
- **Friendly Approach**: Bonus to charm, penalty to deception
- **Aggressive Approach**: Bonus to intimidation, penalty to charm

### **Action Cards**
Specific social maneuvers:
- **Appeal to Logic**: Present rational arguments (2 AP)
- **Share Personal Story**: Create emotional connection (1 AP, 1 SP)
- **Veiled Threat**: Intimidation without open hostility (2 AP)

### **Reaction Cards**
Respond to NPC actions:
- **Smooth Recovery**: Recover from social blunder (0 AP, 1 SP)
- **Read Motivation**: Understand NPC's true desires (1 AP)

## Complex Negotiations

Multi-party negotiations use initiative order just like combat, with each participant pursuing their own agenda.

Success often requires understanding what each party truly wants beyond their stated position.",
                    Section = "Systems",
                    Tags = new List<string> { "social", "diplomacy", "roleplay", "encounters" },
                    Certainty = CertaintyLevel.Questions,
                    Updated = DateTime.Now.AddHours(-3)
                },
                new Page
                {
                    Id = "Exploration System",
                    Title = "Exploration System",
                    Content = @"# Exploration System

Exploration transforms the unknown into adventure using structured mechanics that maintain mystery while providing clear player agency.

## Exploration Phases

### **Journey Planning**
Before setting out, players:
- Choose route and method of travel
- Assign party roles (Navigator, Scout, etc.)
- Prepare supplies and equipment

### **Travel Cards**
Each day of travel, players play cards to:
- Navigate terrain challenges
- Forage for supplies
- Avoid or handle encounters
- Make progress toward destination

### **Discovery Mechanics**

#### **Points of Interest**
- Hidden locations requiring specific cards to discover
- Ancient ruins, natural wonders, settlements
- Each offers unique rewards or story hooks

#### **Random Encounters**
- Not truly random - triggered by player choices
- Exploration cards influence encounter type
- Social, combat, or environmental challenges

## Exploration Cards

### **Navigation Cards**
- **Path Finding**: Efficient travel (+1 progress)
- **Terrain Reading**: Avoid hazardous areas  
- **Shortcut**: Risk/reward fast travel option

### **Survival Cards**
- **Foraging**: Find food and useful materials
- **Shelter Building**: Protection from weather
- **Track Reading**: Follow or avoid creatures

### **Discovery Cards**
- **Keen Eye**: Notice hidden details and secrets
- **Archaeological Insight**: Understand ancient sites
- **Cultural Knowledge**: Interact with local customs

## Environmental Challenges

Different terrain types require specific approaches:
- **Forests**: Navigation and stealth challenges
- **Mountains**: Climbing and weather survival
- **Deserts**: Water management and heat protection
- **Swamps**: Disease and difficult movement

See World Overview for specific regions to explore.",
                    Section = "Systems",
                    Tags = new List<string> { "exploration", "travel", "survival", "discovery" },
                    Certainty = CertaintyLevel.Testing,
                    Updated = DateTime.Now.AddDays(-1)
                },
                new Page
                {
                    Id = "Scholar Domain",
                    Title = "Scholar Domain",
                    Content = @"# Scholar Domain

Scholars pursue knowledge, magical theory, and intellectual mastery above all else.

## Core Abilities

### **Arcane Studies**
Access to magical theory and spellcasting cards that manipulate reality through understanding rather than raw power.

### **Lore Mastery**
Extensive knowledge about history, cultures, monsters, and magical phenomena.

### **Research Techniques**
Ability to discover information, decode ancient texts, and unravel mysteries.

## Domain Cards

### **Level 1 Cards**
- **Analyze**: Reveal creature or item properties (1 AP)
- **Recall Lore**: Access relevant historical knowledge (1 AP)
- **Cantrip**: Minor magical effects (1 AP, 1 SP)

### **Level 3 Cards**
- **Identify Magic**: Understand magical items and effects (2 AP, 1 SP)
- **Language Comprehension**: Understand any language temporarily (1 AP, 2 SP)
- **Magical Theory**: Enhance ally's magical cards (2 AP, 2 SP)

### **Level 5 Cards**
- **Decipher Ancient**: Unlock secrets of lost civilizations (3 AP, 3 SP)
- **Spell Synthesis**: Combine multiple magical effects (3 AP, 4 SP)
- **Akashic Reading**: Glimpse past events at a location (2 AP, 5 SP)

## Magical Schools

Scholars can specialize in different magical traditions:

### **Elementalism**
- Control over fire, water, earth, and air
- Focuses on direct magical effects

### **Transmutation**
- Changing matter and energy
- Alchemy and item enhancement

### **Divination**
- Information gathering and foresight
- Scrying and prediction magic

## Academic Pursuits

Scholars advance through:
- Researching new magical theories
- Studying under master practitioners
- Discovering ancient knowledge

Character progression ties directly to in-game learning and discovery.",
                    Section = "Content",
                    Tags = new List<string> { "domain", "scholar", "magic", "knowledge" },
                    Certainty = CertaintyLevel.Ideas,
                    Updated = DateTime.Now.AddDays(-2)
                }
            };
        }
    }
}