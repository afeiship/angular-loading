(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

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

(function () {
  'use strict';

  var extend = angular.extend;
  var jqLite = angular.element;

  angular.module('nx.widget').factory('nxLoading', [
    '$rootScope',
    '$timeout',
    '$compile',
    '$sce',
    function ($rootScope, $timeout, $compile, $sce) {

      var scope, element;
      var defaults = {
        cssClass: '',
        visible: false
      };
      initial();

      return {
        init: initial,
        visible: visible,
        destroy: destroy
      };

      function initial() {
        scope = extend($rootScope.$new(true), defaults);

        element = scope.element = $compile('<loading></loading>')(scope);
        jqLite(document.body).append(element);
      }

      function visible(inVisible) {
        $timeout(function(){
          scope.visible=!!inVisible;
        },0);
      }

      function destroy() {
        scope.$destroy();
        element.remove();
      }

    }]);
})();
