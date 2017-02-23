# 利用Angular2搭建业务架构及相关知识点介绍

项目由 [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24. 生成

## 启动开发服务

运行 `ng serve`  启动开发服务.打开 `http://localhost:4200/`. app 将自动载入源码的修改

## 代码骨架

运行 `ng generate component component-name` 生成新组件. 
可生成的文件类型 `ng generate directive/pipe/service/class/module`.

## 生产环境

运行 `ng build` 系统将自动编译.编译后存放在`dist/` 目录.使用参数 `-prod` 将发布为最终生成环境.
