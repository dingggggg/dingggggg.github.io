# angular学习日记之ng-repeat

## ng-repeat初级使用

	<body ng-app="myApp" ng-controller="myCtrl">

	<h1 ng-repeat="x in records">{{x}}</h1>

	<script>
	var app = angular.module("myApp", []);
	app.controller("myCtrl", function($scope) {
		$scope.records = [
			"三月桃花1",
			"三月桃花2",
			"三月桃花3",
			"三月桃花4",
		]
	});
	</script>

	</body>

ng-repeat指令用于循环输出指定次数的HTML元素，集合必须是数组或对象。

## ng-repeat进阶使用
ng-repeat有六个特殊属性，分别为
* $index(Number)：遍历次数（从0开始）。
* $first(Boolean):当元素是遍历的第一个时值为true。
* $middle(Boolean)：当元素处于第一个和后元素之间时值为true
* $last(Boolean)：当元素是遍历的后一个时值为true。
* $even(Boolean)：当$index值是偶数时值为true。
* $odd(Boolean)：当$index值是奇数时值为true。

	<table>
			<tr>
				<td>日期</td>
				<td>风力</td>
				<td>风向</td>
				<td>最高温</td>
				<td>最低温</td>
				<td>类型</td>
			</tr>
			<tr ng-repeat='f in forecast' ng-show="$even">
				<td>{{f.date}}</td>
				<td>{{f.fengli}}</td>
				<td>{{f.fengxiang}}</td>
				<td>{{f.high}}</td>
				<td>{{f.low}}</td>
				<td>{{f.type}}</td>
			</tr>
	</table>

使用$even限制tabel只显示偶数行。
