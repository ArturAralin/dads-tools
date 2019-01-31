import {
  pipe,
  map,
} from 'ramda';

// Function f -> Array<T> -> Map<f(T), T>
const createMapBy = f => pipe(
  map(o => [f(o), o]),
  pairs => new Map(pairs),
);

export default createMapBy;
