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
        template: '<div class="nx-widget-loading {{cssClass}}" data-visible="{{visible}}"><span class="loading-icon" data-icon="{{icon}}"></span><div class="loading-text">{{loadingText}}</div></div>',
        scope: true
      };
    }]);

})();

(function () {

  'use strict';

  var options = {
    cssClass: '',
    loadingText: '加载中...',
    icon: 'gears',
    visible: false
  };

  angular.module('nx.widget').provider('loading', function () {
    return {
      setOptions: function (inOptions) {
        options = angular.extend(options, inOptions);
      },
      $get: function () {
        return options;
      }
    }
  });

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
    'loading',
    function ($rootScope, $timeout, $compile, $sce,defaults) {

      var scope, element;

      initial();

      return {
        init: initial,
        show: show,
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
