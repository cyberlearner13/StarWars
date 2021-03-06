const OpeningCrawl = [
  {
    title: "Films",
    path: "/films",
    text: `A Brief History of the Skywalker Saga, along with iconic dialogues
      to boot`
  },
  {
    title: "People",
    path: "/people",
    text: `See your favourite characters from the movies and step into their shoes in a galaxy not so far away`
  },
  {
    title: "Planets",
    path: "/planets",
    text: `Planets, star systems and moons with exotic creatures.Life never presents a dull moment`
  },
  {
    title: "Species",
    path: "/species",
    text: `Wanted to cozy up with a twirling Twi'lek, or share a groan with a Wookie?
            Here's your chance`
  },
  {
    title: "Starships",
    path: "/starships",
    text: `Nothing is complete in Star Wars without mad space dog fights, which are far better than any pod racing death match`
  },
  {
    title: "Vehicles",
    path: "/vehicles",
    text: `From mechanised walkers to strange beasts...we got your back, and the weirdest form of backup there is!`
  }
];

const movies = ['Episode IV','Episode V','Episode VI','Episode I','Episode II','Episode III','Episode VII','Episode VIII','Episode IX'];

const ot = movies.slice(0,3);
const pt = movies.slice(3,6);
const st = movies.slice(6,9);

export { OpeningCrawl, movies, ot, pt, st };
