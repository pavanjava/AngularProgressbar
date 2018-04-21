/**
 * angular-progress-bar
 * @version v0.1 - 2018-04-21
 * @author Pavan Kumar Mantha (manthapavankumar@gmail.com)
 * @link https://github.com/pavanjava/AngularProgressbar.git
 * @license Apache License 2.0(http://www.apache.org/licenses/LICENSE-2.0.html)
 * @Source https://www.cssscript.com/demo/pure-css-circular-percentage-bar/
 **/

(function () {
    'use strict';
    angular.module('ui.progressbar', []).constant('progressBarConfig', {
        'defaultSize': 'big',
        'defaultColor': 'green'

    }).controller('progressBarController', ['$scope', '$attrs', '$interpolate', 'progressBarConfig', function ($scope, $attrs, $interpolate, progressBarConfig) {

        var self = this;
        var progressBarConfigKeys = Object.keys(progressBarConfig);
        // Configuration attributes
        angular.forEach(progressBarConfigKeys, function (k, i) {
           if(angular.isDefined($attrs[k])){
               switch ( typeof progressBarConfig[k] ) {
                   case 'string':
                       self[k] = $interpolate($attrs[k])($scope.$parent);
                       break;
                   case 'function':
                       //TODO: logic to be done if the attribute is a callback function
                       break;
                   default:
                       self[k] = $scope.$parent.$eval($attrs[k]);
               }
           }else {    // use default from progressBarConfig
               self[k] = progressBarConfig[k];
           }
        });

        $scope.percentageStr = 'p' + $scope.percentageValue;
        $scope.progressbarStyle = [$scope.percentageStr,  self.defaultSize, self.defaultColor]

    }]).directive('progressBar', function () {

        return {
            restrict: 'AE',
            transclude: 'true',
            scope: {
                percentageValue: '='
            },
            controller: 'progressBarController',
            template: '<div class="clearfix">\n' +
            '                <div class="c100 medium green" ng-class="progressbarStyle">\n' +
            '                    <span>{{percentageValue}}%</span>\n' +
            '                    <div class="slice">\n' +
            '                        <div class="bar"></div>\n' +
            '                        <div class="fill"></div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>',
        };
    });
})();