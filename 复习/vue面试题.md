1.mvvm 框架是什么？
model view viewModel 数据驱动视图

2.vue的优点是什么？（为什么大部分公司选择vue）
轻量，易于学习，没有历史包袱，数据驱动视图，对视图层与操作层进行很好的解耦，组件化应用，对代码进行封装复用，提升代码质量与效率

3.vue的两个核心点是什么？
1--双向数据绑定，数据驱动视图更新  2--组件系统

4.三大框架的优缺点？（vue、React）
react：
优点：引入虚拟dom的概念，运行速度快；跨浏览器兼容；模块化；单向数据流；
缺点：react并不是一个完整的框架，如果需要写大型项目，得加上ReactRouter和flux

vue：
优点：简单易学，组件化系统，templateDom模板，对模块友好
缺点：代码比较分散，不易集中管理，所以vue3.0新增了compositionAPI，在setUp中书写代码，可以将一个模块得代码继承在一块儿

5.vue和jQuery的区别？
vue操作的是虚拟dom，jQuery操作的是真实dom

6.渐进式框架的理解？
没有多做职责之外的事，没有强主张，可以使用它一小部分，并没有必须全部使用它。

7.单页面应用和多页面应用区别及优缺点？
优点：一个外壳应用和多个页面代码片段组成，资源共用，只在外壳页面加载一次；缺点：不利于seo，初次加载耗时较多；
优点：多个页面构成，资源不共用，每个页面都需要加载，缺点：页面重复代码多，维护相对复杂。

8.SPA首屏加载慢如何解决？
将一些静态资源进行缓存在本地，分模块进行加载，懒加载，图片压缩，代码压缩。

9.scss的安装以及使用？
sass-loader，css-loader，node-sass，在webpack.base.config.js里面extends进行配置.css的规则

10.vue常用的UI组件库？
element-ui，iview

11.vue构建初始化工程步骤？
npm install @vue/cli


-----------------------------------------------------------------------------------------------------------------------------
1.Vue中双向数据绑定是如何实现的？
vue2.x：
通过object.defineproperty给组件实例的属性都添加一个getter和setter，通过vue.js编译，给每个属性分配一个watcher，当属性发生变化通过diff算法对比不同，调用update方法实现数据更新视图。

vue3.0：
组件实例化过程中，通过proxy劫持对象属性，通过它里面的get set方法进行数据的绑定更新


2.请说出vue.cli项目中src目录每个文件夹和文件的用法？
api--接口js文件
views -- 页面
components -- 组件
until -- 一些公共方法
filters -- 全局过滤器
static -- 静态资源存放 -- 不被压缩打包
assets -- 静态资源存放 -- 被压缩打包
store -- vuex状态集中管理
styles -- 公共样式文件

3.package.json 里面的配置解释？
name:系统的名称，version：版本，author：作者，description：一些组件，dependencies用于发布环境（不仅开发环境可用，生产环境也可用），devDependencies用于开发环境时所需的依赖（生产环境时不会被打入包内）

3.assets和static的区别？
assets的打包时会进行压缩--支持相对路径，static打包时不会进行压缩，一般放些第三方的样式库等--需要使用绝对路径。


4.你们vue项目是打包了一个js文件，一个css文件，还是有多个文件？


5.$nextTick的使用？
更新后获取最新的dom，是一个微任务队列，会把多次更新放到一个队列里，然后合并更新

6.vue组件中data为什么必须是一个函数？
因为每一个组件都会生成一个实例，如果data不是一个函数，那它就会被多个实例共享，造成数据错乱

7.v-on可以监听多个方法吗？
可以

8.为什么使用key？
因为key的唯一性，可以优化diff算法的提升，避免不必要的dom操作。

9.vue初始化页面闪动问题？
因为vue在初始化的时候，我们的div还没有被它解析，所以容易出现花屏；使用v-cloak解决；在vue实例结束后，自动从绑定的html身上移除

10.vue禁止弹窗后的屏幕滚动？
禁用默认事件，将body的滚动条设置为hidden，使用事件监听，监听touchMove，

11.vue如何引进本地背景图片？
相对路径引入，import引入，require引入

12.vue修改打包后静态资源路径的修改？
将assetsPublicPath改为../../

13.vue的属性名称与method的方法名称一样时会发生什么问题？
method的方法名会被data的覆盖掉

14.你有使用过babel-polyfill模块吗？主要是用来做什么的？
用过，有些方法与属性浏览器不支持，比如promise Array.from Object.assign，就需要用babel-polyfill模拟这些对象和方法

15.vue为什么要求组件模板只能有一个根元素？
因为vue需要一个根节点入口，通过这个根节点遍历整个dom树，生成vnode，最终渲染成真实dom

16.v-show和v-if指令的共同点和不同点？
v-show会生成dom，只是style是display：none；v-if不会成dom

17.<keep-alive></keep-alive>的作用是什么?
保留组件状态，避免重复渲染        

18.如何获取dom？
ref

19.说出几种vue当中的指令和它的用法？
v-if  v-show  v-bind v-on  v-once

20.vue-loader是什么？使用它的用途有哪些？
是一个加载器，解析转换vue文件 ；js可以es6 style可以用scss less

21.如何让CSS只在当前组件中起作用？
style加上scoped

23.v-if和v-for的优先级？
v-for优先级高

---------------------------------------------------------------------------------------
1.vue父组件向子组件传递数据？
props

2.子组件像父组件传递事件？
$emit

3.非子组件与父组件通信？
vuex eventBus

4.跨组件双向数据绑定？
value $input / watch /computed

5.vue 各种组件通信方法（父子 子父 兄弟 爷孙 毫无关系的组件）？（详解）
props $emit / eventBus / vuex / $parent $child / $refs

6.EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢？
建议在created 注册  beforeDestory里面移除


-------------------------------------------------------------------------------------
1.v-model的使用？
通过 v-bind:value  $emit('input')

2.分别简述computed和watch的使用场景？
computed 一个值依赖多个值计算，并且需要用到缓存的时候，必须用return返回
watch 就是监听一个值，发生变化就触发，不需要return 执行的是一个回调

3.vue事件对象的使用？
@click拿到e

4.vue中过滤器有什么作用及详解？
根据传入的值，进行自定义方法的过滤处理reurn出新值

5.列举常用的指令？
v-if  v-show  v-for v-model v-once v-html v-text

6.vue常用的修饰符？
.stop .prevent .keyup .once .trim .captrue .self

7.数组更新检测？
push()         数组的后面插入元素
pop()          从数组的后面删除一个元素
shift()        从数组的前面删除一个元素
unshift()      从数组的前面插入一个元素
splice()       数组的剪贴、插入、删除等操作
sort()         数组的排序
reverse()      数组的反转

8.Vue.set视图更新？
数据必须是在data层才会触发set get方法，不然就要使用set手动更新数据，视图才会更新

9.vue更新数组时触发视图更新的方法？
this.$set(target,key,value)

10.如何自定义指令？
directive:{
  '指令的名字'：{
    bind(el,binding,nodeDom){}
    inserted(){}
    update(){}
  }
}

11.请说下封装 vue 组件的过程？
将公用的html代码，还有方法提取出来，将动态的变量写入prop里面，将一些公用的触发方法$emit出来

12.vue封装通用组件？
同上

13.引进组件的步骤？
import from  然后components里面注册

14.delete和Vue.delete删除数组的区别？


15.vue slot（插槽）？


16.vue渲染模板时怎么保留模板中的HTML注释呢？
comments设置为true

17.vue的表单修饰符.lazy？
会从input转换为change事件

18.说说你对vue的错误处理的了解？


19.在vue事件中传入$event，使用e.target和e.currentTarget有什么区别？


20.vue怎么实现强制刷新组件？
$forceUpdate

21.vue给组件绑定自定义事件无效怎么解决？
加上.native

22.watch的属性用箭头函数定义结果会怎么样？
获取不到this

----------------------------------------------------------------------

1.什么是 vue 生命周期？
组件实例的 创建 - 挂载 - 更新 - 销毁 

2.vue生命周期的作用是什么？
给我们提供了不同的生命周期钩子，在不同的周期可以做一些什么事情

3.第一次页面加载会触发哪几个钩子？
beforeCreate - create - beforeMount - mounted

4.简述每个周期具体适合哪些场景？
// 简单不叙述

5.created和mounted的区别？
created - 组件创建，还未挂载到dom，这时候获取不到dom
mounted - 组件挂载完毕，可以获取到真实的dom

6.vue获取数据在哪个周期函数？
created，mounted都可以。但是如果要获取dom做一些操作，就需要在mounted里面

----------------------------------------------------------------------

1.vue-router 是什么?它有哪些组件？
路由插件；router-link  router-view

2.active-class 是哪个组件的属性？
router-link；选中的效果

3.怎么定义 vue-router 的动态路由? 怎么获取传过来的值？
/user/:id
$route.params

4.vue-router 有哪几种导航钩子?
beforeEach afterEach beforeEnter beforeRouterEnter beforeRouterUpdate beforeRouterLeave

5.和router的区别？


6.vue-router响应路由参数的变化？
监听$route beforeRouterUpdate

7.vue-router传参？
query  params

8.vue-router的两种模式（hash，history）？
hash （锚点定位，地址栏里面带了#号）
history（h5新特性，pushState，replaceState）

9.vue-router实现路由懒加载（ 动态加载路由 ）？
component：（）=> import（组件地址）

10.vue-router怎么重定向页面？
redirect

11.vue-router怎么配置404页面？
组件编译时拿不到的文件，拿到的引入文件地址就是404的页面

12.vue跳转新路由 滚动到固定位置？
在router indexjs文件里面配置scrollBehavior 

13.vue 路由去掉#？
mode：history 加上 nginx

14.Vue-router跳转和location.href有什么区别？
location.href 会刷新页面
Vue-router 静态跳转 无刷新

15.Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？
安装babel-polypill

16.Vue2中注册在router-link上事件无效解决方法？
加上.native

17.RouterLink在IE和Firefox中不起作用（路由不跳转）的问题？
方法一：只用a标签，不适用button标签；
方法二：使用button标签和Router.navigate方法

-----------------------------------------------------------------------------

1.vuex是什么？怎么使用？哪种功能场景使用它？
状态存储仓库，购物车，非父子组件传值

2.vuex有哪几种属性？
state ，mutations，actions

3.不使用Vuex会带来什么问题？
小型项目用不到可以不用，如果是大型的传值嵌套过多时，如果不用就回造成数据流的一个不好追踪，可能中间某个环节出现错误无法定位

4.Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？
如果是组件内部用的方法就写在methods里，如果是需要保存在store就在actions里面写

5.vuex一个例子方法？


6.Vuex中如何异步修改状态？
actions里面请求，然后调用commit同步修改状态

7.Vuex中actions和mutations的区别？
mutations 同步 actions 异步

8.页面刷新后vuex的state数据丢失怎么解决？
可以存在localstorage里面  一些重要的数据可以action里面请求获取

9.vuex怎么知道state是通过mutation修改还是外部直接修改的？
底层的_commiting变量为true === 通过mutation修改
