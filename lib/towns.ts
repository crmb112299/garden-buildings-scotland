export type Town = {
  slug: string;
  name: string;
  // Whether it's a town vs a region/county — affects copy ("in Edinburgh" vs "across Lanarkshire")
  type: "town" | "region" | "national";
};

// Pulled from the keyword volume list. Expand later.
export const TOWNS: Town[] = [
  { slug: "scotland", name: "Scotland", type: "national" },
  { slug: "edinburgh", name: "Edinburgh", type: "town" },
  { slug: "glasgow", name: "Glasgow", type: "town" },
  { slug: "dundee", name: "Dundee", type: "town" },
  { slug: "stirling", name: "Stirling", type: "town" },
  { slug: "perth", name: "Perth", type: "town" },
  { slug: "paisley", name: "Paisley", type: "town" },
  { slug: "ayrshire", name: "Ayrshire", type: "region" },
  { slug: "dumfries", name: "Dumfries", type: "town" },
  { slug: "fife", name: "Fife", type: "region" },
  { slug: "falkirk", name: "Falkirk", type: "town" },
  { slug: "east-kilbride", name: "East Kilbride", type: "town" },
  { slug: "dunfermline", name: "Dunfermline", type: "town" },
  { slug: "west-lothian", name: "West Lothian", type: "region" },
  { slug: "dalgety-bay", name: "Dalgety Bay", type: "town" },
  { slug: "motherwell", name: "Motherwell", type: "town" },
  { slug: "kilmarnock", name: "Kilmarnock", type: "town" },
  { slug: "troon", name: "Troon", type: "town" },
  { slug: "greenock", name: "Greenock", type: "town" },
  { slug: "lanarkshire", name: "Lanarkshire", type: "region" },
  { slug: "cumbernauld", name: "Cumbernauld", type: "town" },
  { slug: "coatbridge", name: "Coatbridge", type: "town" }
];

export const TOWN_SLUGS = TOWNS.map((t) => t.slug);

export function findTown(slug: string): Town | undefined {
  return TOWNS.find((t) => t.slug === slug);
}

export function locationPhrase(town: Town): string {
  if (town.type === "national") return "across Scotland";
  if (town.type === "region") return `across ${town.name}`;
  return `in ${town.name}`;
}
