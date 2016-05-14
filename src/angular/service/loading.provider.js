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
