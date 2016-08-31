import Engine from 'ember-engines/engine';
import Resolver from 'ember-engines/resolver';
import loadInitializers from 'ember-load-initializers';

const modulePrefix = 'bork-bork';
const Eng = Engine.extend({
  modulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;
