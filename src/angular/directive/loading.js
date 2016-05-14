(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('loading', [function () {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="nx-widget-loading {{cssClass}}" data-visible="{{visible}}" ng-bind-html="msg"><img src="svg/default.svg" alt=""></div>',
        scope: true
      };
    }]);

})();
