import { Meteor } from 'meteor/meteor';
import { Parties } from '../api/parties';

Meteor.startup(() => {
  if (Parties.find().count() === 0) {
    const parties = [{
      'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'
    }, {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }, {
      'name': 'Savage Lounging',
      'description': 'Leisure suit required, and only the fiercest manners.'
    }];

    parties.forEach((party) => {
      Parties.insert(party)
    });
  }
});
