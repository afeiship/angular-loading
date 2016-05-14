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
        template: '<div id="widget-loading {{cssClass}}" class="ng-widget-loading" data-visible="{{visible}}" ng-bind-html="msg"></div>',
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
        interval: 2000,
        cssClass: '',
        msg: _trustAsHtml('You loading <b>msg</b>!'),
        visible: false
      };
      initial();

      return {
        init: initial,
        show: Loading,
        destroy: destroy
      };

      function initial() {
        scope = extend($rootScope.$new(true), defaults);

        element = scope.element = $compile('<loading></loading>')(scope);
        jqLite(document.body).append(element);
      }

      function Loading(inOptions) {

        //init default options:
        var options = extend(scope, inOptions || {});
        scope.show = function () {
          scope.msg = _trustAsHtml(options.msg);
          scope.visible = true;
          scope.close();
        };

        scope.close = function () {
          $timeout(function () {
            scope.visible = false;
          }, options.interval);
        };


        scope.show();
      }

      function destroy() {
        scope.$destroy();
        element.remove();
      }


      /**@private**/
      function _trustAsHtml(inHtml) {
        return $sce.trustAsHtml(inHtml);
      }

    }]);
})();
