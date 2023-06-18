import { createServer, Model } from "miragejs";

createServer({
  models: {
    recipes: Model,
  },

  seeds(server) {
    server.create("recipe", {
      id: "1",
      name: "Mushroom Skewer",
      ingredients: ["mushroom"],
      imageURL:
        "https://img.game8.co/3691866/80b6ab7dd1e5570f94569b561dc46dde.png/show",
    });

    server.create("recipe", {
      id: "2",
      name: "Meat and Mushroom Skewer",
      ingredients: ["mushroom", "meat"],
      imageURL:
        "https://img.game8.co/3704210/862d2c678a656fa877518b71ba078f9d.png/show",
    });

    server.create("recipe", {
      id: "3",
      name: "Fish and Mushroom Skewer",
      ingredients: ["mushroom", "fish"],
      imageURL:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/a/ad/3-fish-and-mushroom-skewer-totk-recipe-guide.jpg?width=640",
    });

    server.create("recipe", {
        id: "4",
        name: "Meat Skewer",
        ingredients: ["meat"],
        imageURL:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/a/ad/3-fish-and-mushroom-skewer-totk-recipe-guide.jpg?width=640",
      });

      server.create("recipe", {
        id: "5",
        name: "Fish Skewer",
        ingredients: ["fish"],
        imageURL:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/a/ad/3-fish-and-mushroom-skewer-totk-recipe-guide.jpg?width=640",
      });

      server.create("recipe", {
        id: "6",
        name: "Seafood Skewer",
        ingredients: ["snail", "crab"],
        imageURL:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/a/ad/3-fish-and-mushroom-skewer-totk-recipe-guide.jpg?width=640",
      });

      server.create("recipe", {
        id: "7",
        name: "Copious Meat Skewers",
        ingredients: ["any 4 different meat"],
        imageURL:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/a/ad/3-fish-and-mushroom-skewer-totk-recipe-guide.jpg?width=640",
      });

  },

  routes() {
    this.namespace = "api";

    this.get("/recipes", (schema, request) => {
      return schema.recipes.all();
    });

    this.get("/recipes/:query", (schema, request) => {
      const query = request.params.query;
      return schema.recipes.findBy({ingredients: query});
    });
  },
});
