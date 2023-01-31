import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

function Toggle(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
    </section>
  );
}
export default Toggle;
