import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

function Toggle(props) {
  const { currentCategory } = props;

  if (currentCategory.name === "Resume") {
    return (
   <Resume></Resume>

    );
  }
  else if (currentCategory.name === "Portfolio") {
    return (
<Portfolio></Portfolio>
    )
  }
  else {
    return (
<div></div>
    );
  }

  // return (
  //   <section>
  //     <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
  //     <p>{currentCategory.name}</p>
  //   </section>
  // );
}



export default Toggle;
