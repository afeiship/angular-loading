(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('loading', [function () {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="nx-widget-loading {{cssClass}}" data-visible="{{visible}}"><span class="loading-svg"></span></div>',
        scope: true
      };
    }]);

})();
