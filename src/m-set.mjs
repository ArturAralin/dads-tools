import {
  curryN,
} from 'ramda';

const mHas = curryN(2, (k, m) => m.set(k));

export default mHas;
