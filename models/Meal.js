class Meal {
  constructor(
    id,
    catgoryIds = [],
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.catgoryIds = catgoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
