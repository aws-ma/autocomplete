import meal from '../../src/images/meal.svg';
const Meal = ({ img = meal, title = 'Your Meal' }) => {
  return (
    <div className="meal">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Meal;
