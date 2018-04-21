# AngularProgressbar
This is a custom progress bar that can be controlled as angular directive.
![alt text](https://github.com/pavanjava/AngularProgressbar/blob/master/progressBar.png)

Include the progressBar module in your index.html as below

```HTML
<script src="modules/progressBar.js" type="text/javascript"></script>
```
Include the module as below into your application
```Javascript
var myapp = angular.module('MyApp',['ui.progressbar']);
```
to implement the logic in html please include as below 
```HTML
<div ng-controller="TestBenchController">
    <progress-bar percentage-value="value"></progress-bar>
</div>
```

operate the progress bar from the controller as below. 
```Javascript
myapp.controller('TestBenchController',['$scope',function ($scope) {

	$scope.value = 85; // percentage that should be shown in the progressbar as completed min:0, max:100
    
}]);
```

Additional optional attributes using which you can controll color and size:
```Javascript
default-size = [big,medium,small]
default-color = [green,orange]
```
example:
```HTML
<progress-bar percentage-value="value" default-size="medium", default-color="orange"></progress-bar>
```
