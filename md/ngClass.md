# angular学习之ng-class

在angular里可以通过ng-style，ng-class来改变样式，这里我简单介绍一下ng-class。

在js里我们改变样式常常通过getElementById或者className获取DOM节点来改变样式。

那么在angular里有它独特的方法来改变样式。

#### 方法有以下几种
1.通过angular.element()来获取dom节点改变样式。

    angular.element().style.backgroundColor='red';

在angular里<b style='color:red'>不推荐</b>这种方式，angular不推荐直接操作DOM节点。

2.通过变量绑定

    function ctr($scope){
    $scope.test =“classname”;
    }

    <div class=”{{test}}”></div>

同样不推荐这种方式，在angular里controller最好保持纯净，不要参与view的改变。

3.字符串数组形式

    function Ctr($scope) {
    $scope.isActive = true;
    }

    <div ng-class="{true: 'active', false: 'inactive'}[isActive]">
    </div>


字符串数组形式是针对class简单变化，具有排斥性的变化，true是什么class，false是什么class，其形如

4.键值对形式

    function Ctr($scope) {

    }

    <div ng-class {'selected': isSelected, 'car': isCar}">
    </div>

键值对形式主要针对复杂的class混合。

当 isSelected = true 则增加selected class。

当isCar=true,则增加car class。

所以你结果可能是4种组合。

##### 个人推荐用第三，第四种方式，不建议将class放入controller scope之上，scope需要保持纯洁，scope上的只能是数据和行为。
