# 创建对象的方式

## 1. 直接使用字面量创建

var person = {}
用大括号将一系列的键值对括起来构成的对象称之为字面量对象。
**优点**：最简单，容易理解
**缺点**：使用同一个接口创建很多对象，会产生大量的重复代码

```js
var person = {
	name : "张三",
	age : 20,
	sex : "男",
	sayHello : function () {
		console.log(this.name + "," + this.sex + "," + this.age + "岁");
	}
}
person.sayHello();		//张三,男,20岁
```

## 2. 使用new Object()创建

var person = new Object()
此方法完全等同于 var person = {}
**优点**：可以方便地创建单个对象
**缺点**：使用同一个接口创建很多对象，会产生大量的重复代码

```js
var person = new Object();
//给对象添加属性
person.name = "张三";
person.age = 20;
person.sex = "男";
//给对象添加方法
person.sayHello = function () {
	console.log(this.name + "," + this.sex + "," + this.age + "岁");
}
person.sayHello();		//张三,男,20岁
```

## 3. 使用工厂模式创建

在函数中定义对象，并定义对象的属性和方法，在函数的最后返回该对象
**优点**：可以多次调用，每调用一次就会返回一个对象，而且对象的类型仍然是Object类型的。
**缺点**：虽然解决了多个相似对象的问题，但却没有解决对象类型识别的问题。

```js
function createPerson (name, age, sex) {
	var person = new Object();
	person.name = name;
	person.age = age;
	person.sex = sex;
	person.sayHello = function () {
		console.log(this.name + "," + this.sex + "," + this.age + "岁");
	}
	return person;
}
var person = createPerson("张三", 20, "男");
person.sayHello();		//张三,男,20岁
```

## 4. 使用构造函数模式创建

必须使用关键字new，后面跟着构造函数的名
与工厂方式相比，使用构造函数方式创建对象，无需在函数内部重新创建对象，而是使用this指代，并且函数不用明确返回对象（return this）
**优点**：解决对象类型识别问题，定义方便，拓展性强

```js
function Person (name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.sayHello = function () {
		console.log(this.name + "," + this.sex + "," + this.age + "岁");
	}
}
var person = new Person("张三", 20, "男");
person.sayHello();		//张三,男,20岁
```

# 函数的原型对象

​	在JavaScript中，创建一个函数A(**就是声明一个函数**)，那么浏览器就会在内存中创建一个对象B，而且每个函数都默认会有一个属性 **prototype** 指向了这个对象( 即：**prototype属性的值是这个对象** )。这个对象B就是函数A的原型对象，简称函数的原型。这个原型对象B 默认会有一个属性 **constructor** 指向这个函数A ( 意思就是说：constructor属性的值是函数A )。

​	注意：原型对象默认只有属性：constructor。其他都是从Object继承而来。

> 下面的图描述了声明一个函数之后发生的事情：

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-10/43031030.jpg)

# 使用构造函数创建对象

​	利用构造函数创建一个对象，则这个对象会自动添加一个不可见的属性 [[prototype]], 而且这个属性指向了构造函数的原型对象。

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-10/6663492.jpg)

> 说明：

1. 创建p1对象虽然使用的是Person构造函数，但是对象创建出来之后，这个p1对象其实已经与Person构造函数没有任何关系了，p1对象的[[ prototype ]]属性指向的是Person构造函数的原型对象。
2. 如果使用new Person()创建多个对象，则多个对象都会同时指向Person构造函数的原型对象。
3. 可以手动给这个原型对象添加属性和方法，那么p1,p2,p3...这些对象就会共享这些在原型中添加的属性和方法。
4. 如果访问p1中的一个属性name，如果在p1对象中找到，则直接返回。如果p1对象中没有找到，则直接去p1对象的[[prototype]]属性指向的原型对象中查找，如果查找到则返回。(如果原型中也没有找到，则继续向上找原型的原型---原型链。)。
5. 如果通过p1对象添加了一个属性name，则对p1对象来说就屏蔽了原型中的属性name。 换句话说：在p1中就没有办法访问到原型的属性name了。
6. 通过p1对象只能读取原型中的属性name的值，而不能修改原型中的属性name的值。 p1.name = "李四"; 并不是修改了原型中的值，而是在p1对象中给添加了一个属性name。

## 使用组合模式创建对象

```html
<script type="text/javascript">
	//在构造方法内部封装属性
	function Person(name, age) {
	    this.name = name;
	    this.age = age;
	}
	//在原型对象内封装方法
	Person.prototype.eat = function (food) {
		alert(this.name + "爱吃" + food);
	}
	Person.prototype.play = function (playName) {
		alert(this.name + "爱玩" + playName);
	}
    
	var p1 = new Person("李四", 20);
	var p2 = new Person("张三", 30);
	p1.eat("苹果");
	p2.eat("香蕉");
	p1.play("志玲");
	p2.play("凤姐");
</script>
```

## 动态原型模式创建对象

​	动态原型模式把所有的属性和方法都封装在构造方法中，而仅仅在需要的时候才去在构造方法中初始化原型，又保持了同时使用构造函数和原型的优点。

```html
<script type="text/javascript">
	//构造方法内部封装属性
	function Person(name, age) {
		//每个对象都添加自己的属性
	    this.name = name;
	    this.age = age;
	    
	    if(typeof this.eat !== "function"){
	    	Person.prototype.eat = function () {
	    		alert(this.name + " 在吃");
	    	}
	    }
	}
	var p1 = new Person("志玲", 40);
	p1.eat();	
</script>
```

> 说明：

- 组合模式和动态原型模式是JavaScript中使用比较多的两种创建对象的方式。

- 建议以后使用动态原型模式。他解决了组合模式的封装不彻底的缺点。

## 更换构造函数的原型

![](http://o7cqr8cfk.bkt.clouddn.com/public/16-11-11/5352248.jpg)

> 说明：

1. 定义Son构造函数后，我们没有再使用Son的默认原型，而是把他的默认原型更换成了**Father**类型对象。
2. 这时，如果这样访问 son1.name, 则先在son1中查找name属性，没有然后去他的原型**( Father对象)**中找到了，所以是"马云"。
3. 如果这样访问 son1.giveMoney(), 先在son1中找这个方法，找不到去他的原型中找，仍然找不到，则再去这个原型的原型中去找，然后在 **Father的原型对象中** 找到了。
4. 从图中可以看出来，在访问属性和方法的时候，查找的顺序是这样的：对象->原型->原型的原型->...->原型链的顶端。 就像一个链条一样，这样 **由原型连成的"链条"，就是我们经常所说的原型链。** 
5. 从上面的分析可以看出，通过原型链的形式就完成了JavaScript的继承。

## 默认顶端原型

![mark](http://o7cqr8cfk.bkt.clouddn.com/blog/20161111/123921677.png)

> 说明：

1. 原型链的顶端一定是Object这个构造函数的原型对象。这也是为什么我们随意创建一个对象，就有很多方法可以调用，其实这些方法都是来自Object的原型对象。
2. 通过对象访问属性、方法的时候，一定是会通过原型链来查找的，直到原型链的顶端。
3. 一旦有了继承，就会出现多态的情况。假设需要一个Father类型的数据，那么你给一个Father对象，或Son对象都是没有任何问题的。而在实际执行的过程中，一个方法的具体执行结果，就看在原型链中的查找过程了。给一个实际的Father对象则从Fahter的原型链中查找，给一个实际的Son则从Son的原型链中查找。
4. 因为继承的存在，Son的对象，也可以看出Father类型的对象和Object类型的对象。 子类型对象可以看出一个特殊的父类型对象。

## 父类型的属性共享问题

在原型链中，父类型的构造函数创建的对象，会成为子类型的原型。那么父类型中定义的实例属性，就会成为子类型的原型属性。对子类型来说，这和我们以前说的在原型中定义方法，构造函数中定义属性是违背的。子类型原型(父类型对象)中的属性被所有的子类型的实例所共有，如果有个一个实例去更改，则会很快反应的其他的实例上。

## 组合继承

组合函数利用了原型继承和构造函数借调继承的优点，组合在一起。成为了使用最广泛的一种继承方式。

```html
<script type="text/javascript">
  	//定义父类型的构造函数
	function Father (name,age) {
		// 属性放在构造函数内部
		this.name = name;
		this.age = age;
		// 方法定义在原型中
		if((typeof Father.prototype.eat) != "function"){
			Father.prototype.eat = function () {
				alert(this.name + " 在吃东西");
			}
		}  
	}
  	// 定义子类类型的构造函数
	function Son(name, age, sex){
      	//借调父类型的构造函数，相当于把父类型中的属性添加到了未来的子类型的对象中
		Father.call(this, name, age);
		this.sex = sex;
	}
  	//修改子类型的原型为父类型的对象。这样就可以继承父类型中的方法了。
	Son.prototype = new Father(	);
	var son1 = new Son("志玲", 30, "女");
	alert(son1.name);
	alert(son1.sex);
	alert(son1.age);
	son1.eat();
</script>
```

> 说明：

1. 组合继承是我们实际使用中最常用的一种继承方式。
2. 可能有个地方有些人会有疑问：Son.prototype = new Father( );这不照样把父类型的属性给放在子类型的原型中了吗，还是会有共享问题呀。但是不要忘记了，我们在子类型的构造函数中借调了父类型的构造函数，也就是说，子类型的原型（也就是Father的对象）中有的属性，都会被子类对象中的属性给覆盖掉。就是这样的。

