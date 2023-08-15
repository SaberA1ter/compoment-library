# component lib template

vue 组件库模板。

## 组件构建

一个组件包含的东西有: 组件（本体）、样式（css）、类型（typescript 类型）

### 预构建

```shell
pnpm prebuild
```

### 预构建 & 构建组件 & 样式 & 类型

```shell
pnpm build:all
```

### 仅构建组件

```shell
pnpm build:core
```

### 仅构建样式

```shell
pnpm build:css
```

### 仅构建类型

```shell
pnpm build:types
```

## 文档

### 运行文档

```shell
pnpm docs:dev
```

### 构建文档

```shell
pnpm docs:build
```


## 测试

### 执行一次测试

```shell
pnpm test
```

### 监听变化运行测试

```shell
pnpm test:watch
```

## 调试组件

启动一个干净项目，用以开发调试组件

### 启动

```shell
pnpm play:dev
```
