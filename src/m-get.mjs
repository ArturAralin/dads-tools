import {
  curryN,
} from 'ramda';

const mGet = curryN(2, (k, m) => m.get(k));

export default mGet;
