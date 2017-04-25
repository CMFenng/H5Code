<template>
<div class="container-fluid">
    <h2>你的购物车</h2>
    <div class="alert alert-warning">
        这个购物车中没有任何商品
        <a href="/" class="alert-link">点击这里返回购物</a>
    </div>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>数量</th>
                    <th>商品名称</th>
                    <th class="text-right">单价</th>
                    <th>小计</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center store-number">
                        <div class="input-group">
                          <div class="input-group-btn">
                            <button type="button" class="btn btn-default">-</button>
                          </div>
                          <input type="text" class="form-control">
                          <div class="input-group-btn">
                            <button type="button" class="btn btn-default">+</button>
                          </div>
                        </div>
                    </td>
                    <td class="text-left">商品名称</td>
                    <td class="text-right">￥单价</td>
                    <td class="text-right">小计</td>
                    <td>
                        <button class="btn btn-sm btn-warning">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<style type="text/css">
.store-number{
    width: 20%;
}   
</style>