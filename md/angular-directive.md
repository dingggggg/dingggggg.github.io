# angular学习日记之directive

---

## 先写一个简单的directive

	var myApp = angular.module('myApp', [])
		.directive('myDirective', function() {
		return {
			restrict: 'A',
			replace: true,
			template: '<p>wojiaoleijiawei</p>'
		};
	})

directive接受两个参数
* name：字符串，指令的名字
* function：函数，指令的行为

## 接下来记录自定义指令的属性

### restrict
该属性定义指令以什么形式被使用，默认为A。四中形式分别为元素E,属性A，类C，注释M。代码示例如下。

	<my-directive></my-directive>
	<div my-directive>
	<div class="my-directive">
	<--directive:my-directive-->

### priority(Number)
也就是优先级，默认为0。<br>
在同一元素上声明了多个指令时，根据优先级决定哪个先被调用。 <br>
如果priority相同，则按声明顺序调用。<br>
另外，no-repeat是所有内置指令中优先级最高的。<br>

### template(String,function)

String类型时，template可以是一段HTML。<br>
Function类型时，template是一个接受两个参数的函数，分别为：<br>

* tElement
* tAttrs

函数返回一段字符串作为模板。

### replace(Boolean/String)
true则替代原有HTML。<br>
false反之。

### scope
默认为false，true时会从父作用域继承并创建一个自己的作用域。<br>
而ng-controller的作用也是从父作用域继承并创建一个新的作用域。<br>
“@”是通过DOM的属性来跟控制器交互绑定一起。<br>
“=”有双重绑定的功能,如控制器与子指令进行双重绑定。<br>
“&”的意思是子指令能调用父控制器的方法。<br>
比较模糊，我自己还不太懂。

### controller（String/function）
控制器也可以在指令里定义，比如:

	.directive('myDirective', function() {
		restrict: 'A',
		controller: function($scope, $element, $attrs) {
		//...
	})

### controllerAs (String)

可以从名字和类型看出，这个选项是用来设置控制器的别名的。<br>
比如这样:

	directive('myDirective', function() {
		return {
			restrict: 'A',
			template: '<p>{{ myController.name }}</p>',
			controllerAs: 'myController',
			controller: function() {
				this.name = "leijiawei"
			}
		};
	});

