# vue-input

> 解决移动端input框被输入法面新版遮挡的问题

## 安装

``` bash
npm install --save vue-input
```
## vue-input 说明

> 安装方法

``` bash
import VueInput from 'vue-input';
Vue.use(VueInput);
```

> 使用方法

在任意最外层的DOM元素中，为该元素添加 v-input 自定义指令
``` bash
<template>
  <div class="testDemo" v-input>
    <input/>
  </div>
</template>
```

代码会自动检索该DOM元素下的所有inputDOM，不需要添加指令到每个input DOM中
