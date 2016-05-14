#angular-loading
AngularJS directive that display loading/busy indicator based on http://loading.io/


##usage:
+ html part(You need not add no more )
```html
<link rel="stylesheet" type="text/css" href="../dist/css/loading.css"/>
<script type="text/javascript" src="../bower_components/angular/angular.js"></script>
<script type="text/javascript" src="../dist/js/angular-loading.js"></script>
```

+ css part:
```css
/*Custom css*/
    .myLoading > .loading-text {
      color: #f00;
      font-size: 14px;
    }
```
+ javascript part:
```javascript
var TestModule = angular.module('TestApp', ['nx.widget'])
    .config(function (loadingProvider) {
      loadingProvider.setOptions({
        icon: 'default',
        cssClass: 'myLoading',
        loadingText: 'loading...'
      });
    })
    .controller('MainCtrl', function ($scope, nxLoading) {
      window.sp = $scope;
      $scope.show = function () {
        /*Show method will override the provider config*/
        nxLoading.show({
          visible: true,
          loadingText: 'tsll....'
        });
      };
      $scope.hide = function () {
        /*Hide method only toggle the visibility of loading widget.*/
        nxLoading.visible(false);
      };
    });
```
