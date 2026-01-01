async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;
  return <h1>Meal details Page with slug {mealSlug}</h1>;
}

export default MealDetailsPage;
