import { Fragment } from 'react';

import ListItem from './ListItem';
const data = [
  { name: 'x', id: '1' },
  { name: 'y', id: '2' },
  { name: 'z', id: '3' },
  { name: 'q', id: '4' },
];

const data1 = [
  {
    name: 'Baked Salmon',
    ingredients: [
      { name: 'Salmon', amount: 1, measurement: 'l lb' },
      { name: 'Pine Nuts', amount: 1, measurement: 'cup' },
      { name: 'Butter Lettuce', amount: 2, measurement: 'cups' },
    ],
    steps: [
      'Preheat the oven to 350 degrees.',
      'Spread the olive oil around a glass baking dish.',
      'Add the yellow squash and place in the oven for 30 mins.',
      'Add the salmon, garlic, and pine nuts to the dish.',
      'Bake for 15 minutes.',
      'Remove from oven. Add the lettuce and serve.',
    ],
  },
];

const List = ({ count }) => {
  return (
    <>
      <h2>hi there</h2>
      <ul>
        {count === 10 &&
          data.map((el) => <ListItem key={el.id} element={el} />)}
      </ul>
    </>
  );
};

export default List;
