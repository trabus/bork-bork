import Ember from 'ember';
import request from 'ember-ajax/request';

export default Ember.Route.extend({
  model() {
      console.log('getting model');
      return request('https://api.imgur.com/3/gallery/search/top?q=bork-bork', {
        headers: {
          'Authorization': 'Client-ID 4fb58447b66cbc5'
        }
      }).then((result) => {
        let safeResults = result.data.filter((item) => {
          return !item.nsfw && item.layout !== 'blog';
        });
        return safeResults[Math.floor(Math.random() * safeResults.length)];
      });
  }
});
