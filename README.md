# Web3 University UI 组件库

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

这是一个基于 **Lerna** 和 **pnpm workspace** 的 Web3 大学前端 Monorepo 项目，包含了 UI 组件库、自定义 Hooks、工具库和钱包集成等模块。

## 📦 项目结构

```
web3-university-monorepo/
├── apps/
│   └── storybook/           # Storybook 组件文档和演示
├── packages/
│   ├── ui/                  # React UI 组件库
│   ├── hooks/               # 自定义 React Hooks
│   ├── libs/                # 通用工具函数库
│   └── uni-wallet-lib/      # Web3 钱包集成库
└── README.md
```

### 📋 包说明

| 包名 | 版本 | 描述 |
|------|------|------|
| `@web3-university/ui` | 1.0.4 | Web3 University UI 组件库 |
| `@web3-university/hooks` | 1.0.0 | Web3 University 自定义 React Hooks 库 |
| `@web3-university/libs` | 0.0.1 | Web3 University 通用工具函数库 |
| `@web3-university/uni-wallet-lib` | 0.0.1 | 基于 wagmi v2 和 RainbowKit v2 的 Web3 钱包库 |
| `@web3-university/storybook` | 1.0.0 | Storybook 组件文档和演示 |

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
# 安装所有依赖
pnpm install
```

### 开发命令

```bash
# 启动所有包的开发模式
pnpm run dev:all

# 启动 Storybook 组件文档
pnpm run dev:storybook

# 构建所有包
pnpm run build

# 运行测试
pnpm run test

# 代码格式化
pnpm run format

# 代码检查
pnpm run lint
```

### 包管理命令

```bash
# 构建所有包
pnpm run build:packages

# 发布所有包
pnpm run publish:packages

# 清理所有包的构建产物
pnpm run clean:packages
```

## 🛠️ 技术栈

- **包管理**: Lerna + pnpm workspace
- **开发语言**: TypeScript
- **UI 框架**: React 19
- **构建工具**: Rollup
- **Web3 集成**: wagmi v2 + RainbowKit v2 + viem
- **代码质量**: Biome (格式化 + 检查)
- **测试框架**: Jest + Cypress
- **组件文档**: Storybook
- **Git 管理**: Husky + lint-staged

## 📚 包详情

### @web3-university/ui

React UI 组件库，提供 Web3 应用常用的组件。

**特性:**
- TypeScript 支持
- React 19 兼容
- 模块化导出
- 完整的类型定义

### @web3-university/hooks

自定义 React Hooks 库，提供常用的状态管理和副作用处理。

**包含的 Hooks:**
- `useDebounce` - 防抖处理
- `useImmer` - 不可变状态管理
- `useLocalStorage` - 本地存储
- `usePrevious` - 前一个状态值
- `useWindowSize` - 窗口尺寸监听

### @web3-university/libs

通用工具函数库，提供项目中常用的工具函数。

### @web3-university/uni-wallet-lib

基于 wagmi v2 和 RainbowKit v2 构建的综合性 Web3 钱包库。

**特性:**
- 钱包连接和管理
- 多链支持
- 交易处理
- 智能合约交互
- SIWE (Sign-In with Ethereum) 支持

## 🎨 Storybook

访问 [Storybook](http://localhost:6006) 查看组件文档和交互式演示。

```bash
pnpm run dev:storybook
```

## 🧪 测试

```bash
# 单元测试
pnpm run test:unit

# E2E 测试
pnpm run test:e2e

# 测试覆盖率
pnpm run test:unit:ci
```

## 📝 代码规范

项目使用 Biome 进行代码格式化和检查：

```bash
# 格式化代码
pnpm run format

# 检查代码
pnpm run lint
```

## 🔧 开发工作流

1. 创建功能分支
2. 开发和测试
3. 提交代码 (会自动运行 lint-staged)
4. 创建 Pull Request
5. 代码审查和合并
6. 自动发布 (通过 Lerna)

## 📦 发布

项目使用 Lerna 进行版本管理和发布：

```bash
# 发布新版本
pnpm run publish:packages
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目使用 ISC 许可证。查看 [LICENSE](LICENSE) 文件了解更多信息。

## 📞 联系我们

- 项目地址: [GitHub Repository](https://github.com/web3-University/ui)
- 问题反馈: [GitHub Issues](https://github.com/web3-University/ui/issues)
