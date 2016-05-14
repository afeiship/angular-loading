(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('loading', [function () {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="nx-widget-loading {{cssClass}}" data-visible="{{visible}}"><span class="loading-icon" data-icon="{{icon}}"></span><div class="loading-text">{{loadingText}}</div></div>',
        scope: true
      };
    }]);

})();
