const killerPerks = [
  {
    name: "Unnerving Presence",
    image: "./Images/KillerPerks/UnnervingPrescence.png",
  },
  {
    name: "Brutal Strength",
    image: "./Images/KillerPerks/BrutalStrength.png",
  },
  {
    name: "Agitation",
    image: "./Images/KillerPerks/Agitation.png",
  },
  {
    name: "Predator",
    image: "./Images/KillerPerks/Predator.png",
  },
  {
    name: "Bloodhound",
    image: "./Images/KillerPerks/Bloodhound.png",
  },
  {
    name: "Shadowborn",
    image: "./Images/KillerPerks/Shadowborn.png",
  },
  { name: "Enduring", image: "./Images/KillerPerks/Enduring.png" },
  { name: "Lightborn", image: "./Images/KillerPerks/Lightborn.png" },
  { name: "Tinkerer", image: "./Images/KillerPerks/Tinkerer.png" },
  { name: "Stridor", image: "./Images/KillerPerks/Stridor.png" },
  { name: "Thanatophobia", image: "./Images/KillerPerks/Thanatophobia.png" },
  {
    name: "A Nurse's Calling",
    image: "./Images/KillerPerks/ANursesCalling.png",
  },
  {
    name: "Save The Best For Last",
    image: "./Images/KillerPerks/SaveTheBestForLast.png",
  },
  {
    name: "Play With Your Food",
    image: "./Images/KillerPerks/PlayWithYourFood.png",
  },
  { name: "Dying Light", image: "./Images/KillerPerks/DyingLight.png" },
  {
    name: "Hex: The Third Seal",
    image: "./Images/KillerPerks/TheThirdSeal.png",
  },
  { name: "Hex: Ruin", image: "./Images/KillerPerks/Ruin.png" },
  { name: "Hex: Devour Hope", image: "./Images/KillerPerks/DevourHope.png" },
  {
    name: "Overwhelming Prescence",
    image: "./Images/KillerPerks/OverwhelmingPrescence.png",
  },
  {
    name: "Monitor & Abuse",
    image: "./Images/KillerPerks/MonitorAndAbuse.png",
  },
  { name: "Overcharge", image: "./Images/KillerPerks/Overcharge.png" },
  { name: "Beast Of Prey", image: "./Images/KillerPerks/BeastOfPrey.png" },
  {
    name: "Territorial Imperative",
    image: "./Images/KillerPerks/TerritorialImperative.png",
  },
  {
    name: "Hex: Huntress Lullaby",
    image: "./Images/KillerPerks/HuntressLullaby.png",
  },
  { name: "Knock Out", image: "./Images/KillerPerks/KnockOut.png" },
  { name: "Barbecue & Chilli", image: "./Images/KillerPerks/Bbq.png" },
  {
    name: "Franklin's Demise",
    image: "./Images/KillerPerks/FranklinsDemise.png",
  },
  { name: "Fire Up", image: "./Images/KillerPerks/FireUp.png" },
  { name: "Remember Me", image: "./Images/KillerPerks/RememberMe.png" },
  { name: "Blood Warden", image: "./Images/KillerPerks/BloodWarden.png" },
  { name: "Hangman's Trick", image: "./Images/KillerPerks/HangmansTrick.png" },
  { name: "Surveillance", image: "./Images/KillerPerks/Surveillance.png" },
  {
    name: "Make Your Choice",
    image: "./Images/KillerPerks/MakeYourChoice.png",
  },
  { name: "Bamboozle", image: "./Images/KillerPerks/Bamboozle.png" },
  { name: "Cauldrophobia", image: "./Images/KillerPerks/Cauldrophobia.png" },
  { name: "Pop Goes The Weasel", image: "./Images/KillerPerks/Pop.png" },
  { name: "Spirit Fury", image: "./Images/KillerPerks/SpiritFury.png" },
  {
    name: "Hex: Haunted Ground",
    image: "./Images/KillerPerks/HauntedGround.png",
  },
  { name: "Rancor", image: "./Images/KillerPerks/Rancor.png" },
  { name: "Discordance", image: "./Images/KillerPerks/Discordance.png" },
  { name: "Mad Grit", image: "./Images/KillerPerks/MadGrit.png" },
  { name: "Iron Maiden", image: "./Images/KillerPerks/IronMaiden.png" },
  {
    name: "Corrupt Intervention",
    image: "./Images/KillerPerks/CorruptIntervention.png",
  },
  {
    name: "Infectious Fright",
    image: "./Images/KillerPerks/InfectiousFright.png",
  },
  { name: "Dark Devotion", image: "./Images/KillerPerks/DarkDevotion.png" },
  { name: "I'm All Ears", image: "./Images/KillerPerks/ImAllEars.png" },
  {
    name: "Thrilling Tremors",
    image: "./Images/KillerPerks/ThrillingTremors.png",
  },
  { name: "Furtive Chase", image: "./Images/KillerPerks/FurtiveChase.png" },
  { name: "Surge", image: "./Images/KillerPerks/Surge.png" },
  { name: "Cruel Limits", image: "./Images/KillerPerks/CruelLimits.png" },
  { name: "Mindbreaker", image: "./Images/KillerPerks/Mindbreaker.png" },
  { name: "Zanshin Tactics", image: "./Images/KillerPerks/ZanshinTactics.png" },
  { name: "Blood Echo", image: "./Images/KillerPerks/BloodEcho.png" },
  { name: "Nemesis", image: "./Images/KillerPerks/Nemesis.png" },
  { name: "Gearhead", image: "./Images/KillerPerks/Gearhead.png" },
  {
    name: "Dead Man's Switch",
    image: "./Images/KillerPerks/DeadMansSwitch.png",
  },
  { name: "Hex: Retribution", image: "./Images/KillerPerks/Retribution.png" },
  { name: "Forced Penance", image: "./Images/KillerPerks/ForcedPenance.png" },
  {
    name: "Trail Of Torment",
    image: "./Images/KillerPerks/TrailOfTorment.png",
  },
  { name: "Deathbound", image: "./Images/KillerPerks/Deathbound.png" },
  { name: "Dragon's Grip", image: "./Images/KillerPerks/DragonsGrip.png" },
  { name: "Hex: Blood Favor", image: "./Images/KillerPerks/BloodFavor.png" },
  { name: "Hex: Undying", image: "./Images/KillerPerks/Undying.png" },
  { name: "Hoarder", image: "./Images/KillerPerks/Hoarder.png" },
  { name: "Oppression", image: "./Images/KillerPerks/Oppression.png" },
  { name: "Coup De Grace", image: "./Images/KillerPerks/CoupDeGrace.png" },
  { name: "Starstruck", image: "./Images/KillerPerks/Starstruck.png" },
  {
    name: "Hex: Crowd Control",
    image: "./Images/KillerPerks/CrowdControl.png",
  },
  { name: "No Way Out", image: "./Images/KillerPerks/NoWayOut.png" },
  { name: "Lethal Persuer", image: "./Images/KillerPerks/LethalPersuer.png" },
  { name: "Hysteria", image: "./Images/KillerPerks/Hysteria.png" },
  { name: "Eruption", image: "./Images/KillerPerks/Eruption.png" },
  { name: "Deadlock", image: "./Images/KillerPerks/Deadlock.png" },
  { name: "Hex: Plaything", image: "./Images/KillerPerks/Plaything.png" },
  {
    name: "Scourge Hook: Gift of Pain",
    image: "./Images/KillerPerks/GiftOfPain.png",
  },
  { name: "Grim Embrace", image: "./Images/KillerPerks/GrimEmbrace.png" },
  {
    name: "Scourge Hook: Pain Resonance",
    image: "./Images/KillerPerks/PainResonance.png",
  },
  { name: "Hex: Pentimento", image: "./Images/KillerPerks/Pentimento.png" },
  {
    name: "Scourge Hook: Floods of Rage",
    image: "./Images/KillerPerks/FloodsOfRage.png",
  },
  { name: "Call of Brine", image: "./Images/KillerPerks/CallOfBrine.png" },
  { name: "Merciless Storm", image: "./Images/KillerPerks/MercilessStorm.png" },
  { name: "Dissolution", image: "./Images/KillerPerks/Dissolution.png" },
  { name: "Septic Touch", image: "./Images/KillerPerks/SepticTouch.png" },
  {
    name: "Darkness Revealed",
    image: "./Images/KillerPerks/DarknessRevealed.png",
  },
  {
    name: "Superior Anatomy",
    image: "./Images/KillerPerks/SuperiorAnatomy.png",
  },
  {
    name: "Awakened Awareness",
    image: "./Images/KillerPerks/AwakenedAwareness.png",
  },
  {
    name: "Terminus",
    image: "./Images/KillerPerks/Terminus.png",
  },
  {
    name: "Hubris",
    image: "./Images/KillerPerks/Hubris.png",
  },
  {
    name: "Hex: Face The Darkness",
    image: "./Images/KillerPerks/HexFaceTheDarkness.png",
  },
  {
    name: "Nowhere To Hide",
    image: "./Images/KillerPerks/NowhereToHide.png",
  },
  {
    name: "Bitter Murmur",
    image: "./Images/KillerPerks/BitterMurmur.png",
  },
  {
    name: "Deerstalker",
    image: "./Images/KillerPerks/Deerstalker.png",
  },
  {
    name: "Distressing",
    image: "./Images/KillerPerks/Distressing.png",
  },

  {
    name: "Hex: No One Escapes Death",
    image: "./Images/KillerPerks/noed.png",
  },

  {
    name: "Hex: Thrill of the Hunt",
    image: "./Images/KillerPerks/thrillofthehunt.png",
  },

  {
    name: "Insidious",
    image: "./Images/KillerPerks/Insidious.png",
  },
  {
    name: "Iron Grasp",
    image: "./Images/KillerPerks/IronGrasp.png",
  },
  {
    name: "Scourge Hook: Monstrous Shrine",
    image: "./Images/KillerPerks/MonstrousShrine.png",
  },
  {
    name: "Shattered Hope",
    image: "./Images/KillerPerks/ShatteredHope.png",
  },
  {
    name: "Sloppy Butcher",
    image: "./Images/KillerPerks/SloppyButcher.png",
  },
  {
    name: "Spies From The Shadows",
    image: "./Images/KillerPerks/SpiesFromTheShadows.png",
  },
  {
    name: "Unrelenting",
    image: "./Images/KillerPerks/Unrelenting.png",
  },
  {
    name: "Whispers",
    image: "./Images/KillerPerks/Whispers.png",
  },
  {
    name: "Thwack!",
    image: "./Images/KillerPerks/Thwack.png",
  },
  {
    name: "Leverage",
    image: "./Images/KillerPerks/Leverage.png",
  },
  {
    name: "Game Afoot",
    image: "./Images/KillerPerks/GameAfoot.png",
  },
  {
    name: "SINGULARITY PERK 1",
    image: "./Images/KillerPerks/GameAfoot.png",
  },
  {
    name: "SINGULARITY PERK 2",
    image: "./Images/KillerPerks/GameAfoot.png",
  },
  {
    name: "SINGULARITY PERK 3",
    image: "./Images/KillerPerks/GameAfoot.png",
  },
  {
    name: "XENO PERK 1",
    image: "./Images/KillerPerks/GameAfoot.png",
  },
  {
    name: "XENO PERK 2",
    image: "./Images/KillerPerks/GameAfoot.png",
  },
  {
    name: "XENO PERK 3",
    image: "./Images/KillerPerks/GameAfoot.png",
  },
];
