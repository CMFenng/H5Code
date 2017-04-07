/**
 * Created by CMF on 2017/3/27.
 */
for (var i = 0; i < 2000000000; i++) {

}

// 切记：在子线程中不要去执行更新 UI 的代码，这里就是子线程环境
// 通过 postMessage() 方法回到主线程中，可以传递参数
// 当耗时操作完毕之后，调用这个方法会回到主线程中的 onMessage 监听事件回调函数中
postMessage(i);
