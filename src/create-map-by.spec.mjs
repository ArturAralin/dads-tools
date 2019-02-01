import { expect } from 'chai';
import createMapBy from './create-map-by';

describe('create-map-by', () => {
  it('should be instance of Map', () => {
    const result = createMapBy(v => v, []);

    expect(result).to.be.instanceOf(Map);
  });

  it('should create Map by prop "X"', () => {
    const srcArr = [
      { X: 'A' },
      { X: 'B' },
      { X: 'C' },
    ];
    const m = createMapBy(v => v.X, srcArr);

    expect(m.get('A')).to.equals(srcArr[0]);
    expect(m.get('B')).to.equals(srcArr[1]);
    expect(m.get('C')).to.equals(srcArr[2]);
  });
});
