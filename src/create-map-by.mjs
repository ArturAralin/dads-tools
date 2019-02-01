import {
  pipe,
  map,
  curryN,
} from 'ramda';

// Function f -> Array<T> -> Map<f(T), T>
const createMapBy = curryN(2, (f, arr) => pipe(
  map(o => [f(o), o]),
  pairs => new Map(pairs),
)(arr));

export default createMapBy;
