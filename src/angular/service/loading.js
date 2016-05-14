(function () {
  'use strict';

  var extend = angular.extend;
  var jqLite = angular.element;

  angular.module('nx.widget').factory('nxLoading', [
    '$rootScope',
    '$timeout',
    '$compile',
    '$sce',
    'loading',
    function ($rootScope, $timeout, $compile, $sce,defaults) {

      var scope, element;

      initial();

      return {
        init: initial,
        show: show,
        hide: hide,
        visible: visible,
        destroy: destroy
      };

      function initial() {
        scope = extend($rootScope.$new(true), defaults);

        element = scope.element = $compile('<loading></loading>')(scope);
        jqLite(document.body).append(element);
      }

      function show(inOptions){
        var _visible=inOptions.visible;
        angular.extend(scope,inOptions);
        visible(_visible);
      }

      function hide(){
        visible(false);
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
