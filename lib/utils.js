//CHARACTER STAT UTILS
//Función para calcular stat
export function calculateStat(
  statName,
  characterStat = 0,
  raceStat,
  job,
  equipment = []
) {
  const initialStat =
    characterStat + raceStat + (job.bonusType == statName ? job.bonusStat : 0);

  var finalStat = initialStat;

  equipment.map((item) => {
    if (item && item.bonus && item.bonusType == statName) {
      finalStat += item.bonus;
    }
    if (item && item.penalty && item.penaltyType == statName) {
      finalStat -= item.penalty;
    }
  });

  return { initial: initialStat, final: finalStat > 0 ? finalStat : 1 };
}

//Función que calcula la salud en función de la raza y oficio
//Endurance * Ratio HP = salud
export function calcHealth(race, job) {
  return (
    race.attributes.ratioHPE *
    (race.attributes.enduranceBase +
      (job.bonusType == "endurance" ? job.bonusStat : 0))
  );
}

//función que crea el personaje
export function createCharacter(name, race, job, health) {
  const equipment = [];

  equipment.push(
    job.leftHand,
    job.rightHand,
    job.armor,
    job.accessory1,
    job.accessory1
  );

  const character = {
    name,
    race: race.id,
    job: job.id,
    level: 1,
    experience: 0,
    health,
    strength: calculateStat(
      "strength",
      0,
      race.attributes.strengthBase,
      job,
      equipment
    ),
    perception: calculateStat(
      "perception",
      0,
      race.attributes.perceptionBase,
      job,
      equipment
    ),
    endurance: calculateStat(
      "endurance",
      0,
      race.attributes.enduranceBase,
      job,
      equipment
    ),
    charisma: calculateStat(
      "charisma",
      0,
      race.attributes.charismaBase,
      job,
      equipment
    ),
    intelligence: calculateStat(
      "intelligence",
      0,
      race.attributes.intelligenceBase,
      job,
      equipment
    ),
    agility: calculateStat(
      "agility",
      0,
      race.attributes.agilityBase,
      job,
      equipment
    ),
    luck: calculateStat("luck", 0, race.attributes.luckBase, job, equipment),
    equipment: {
      leftHand: job.leftHand,
      rightHand: job.rightHand,
      armor: job.armor,
      accessory1: job.accessory1,
      accessory2: job.accessory2,
    },
    inventory: [],
    slug: createSlug(name),
  };

  return character;
}

//función que crea el slug
export function createSlug(name) {
  if (!name) return "";
  return name.toLowerCase().replace(" ", "-");
}
