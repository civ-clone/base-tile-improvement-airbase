import Airbase from '../Airbase';
import TileImprovement from '@civ-clone/core-tile-improvement/TileImprovement';
import { expect } from 'chai';

describe('Airbase', (): void => {
  it('should be a tile improvement', (): void => {
    expect(Airbase.prototype).to.be.instanceOf(TileImprovement);
  });
});
