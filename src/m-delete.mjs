import {
  curryN,
} from 'ramda';

const mDelete = curryN(2, (k, m) => m.delete(k));

export default mDelete;
