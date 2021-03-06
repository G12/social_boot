import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './socially.html';
import {name as PartiesList} from '../partiesList/partiesList';
import {name as PartyDetails} from '../partyDetails/partyDetails';
import {name as Navigation} from '../navigation/navigation';

class Socially {
}

const name = 'socially';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  PartiesList,
  PartyDetails,
  Navigation,
  'accounts.ui'
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: Socially
  })
  .config(config)
  .run(run);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/parties');
}


function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('parties');
      }
    }
  );

  Accounts.onLogin(function () {

    console.log('Done Login!' + JSON.stringify(Meteor.user()));
    if ($state.is('login')) {
      //$state.go('main');
      console.log("User Logged in.");
    }
  });

}
