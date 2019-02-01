import {
  curryN,
} from 'ramda';

const mHas = curryN(2, (k, m) => m.has(k));

export default mHas;
