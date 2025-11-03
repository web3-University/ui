# shadcn/ui 集成完成

## ✅ 已完成的工作

### 1. UI 库集成 shadcn/ui

#### 安装依赖
- ✅ `class-variance-authority` - CVA 样式变体管理
- ✅ `clsx` - 类名合并工具
- ✅ `tailwind-merge` - Tailwind 类名合并优化
- ✅ `tailwindcss-animate` - Tailwind 动画插件
- ✅ `@radix-ui/react-slot` - Radix UI Slot 组件
- ✅ `tailwindcss`, `postcss`, `autoprefixer` - CSS 处理工具

#### 配置文件
- ✅ `packages/ui/tailwind.config.js` - Tailwind CSS 配置
- ✅ `packages/ui/postcss.config.js` - PostCSS 配置
- ✅ `packages/ui/components.json` - shadcn/ui CLI 配置
- ✅ `packages/ui/tsconfig.json` - 添加路径别名支持 (`@/*`)

#### 核心文件
- ✅ `packages/ui/src/lib/utils.ts` - `cn()` 工具函数
- ✅ `packages/ui/src/styles/globals.css` - 全局样式和 CSS 变量
- ✅ `packages/ui/src/components/button.tsx` - shadcn/ui Button 组件

#### 构建配置
- ✅ 更新 `rollup.config.mjs`：
  - 支持路径别名解析
  - 集成 PostCSS 处理 Tailwind CSS
  - 分离 CSS 构建流程
  - 生成 `dist/styles.css`

- ✅ 更新 `package.json`：
  - 添加 `style` 字段
  - 添加 `exports` 字段支持 CSS 导入
  - 添加 `files` 字段
  - 更新关键字

### 2. Storybook 配置

#### 样式集成
- ✅ 更新 `apps/storybook/.storybook/preview.css` - 添加 shadcn/ui CSS 变量
- ✅ 更新 `apps/storybook/.storybook/preview.ts` - 导入 UI 库样式
- ✅ 更新 `apps/storybook/tailwind.config.js` - 添加 shadcn/ui 主题配置
- ✅ 安装 `tailwindcss-animate` 到 Storybook

#### 组件文档
- ✅ `apps/storybook/src/ShadcnButton.stories.tsx` - Button 组件展示文档

### 3. 文档
- ✅ `packages/ui/SHADCN_GUIDE.md` - 详细的使用指南

## 📦 导出的内容

### 组件
```typescript
import { Button, ButtonCva, CourseCard } from '@web3-university/ui';
```

### 工具函数
```typescript
import { cn } from '@web3-university/ui';
```

### 样式
```typescript
import '@web3-university/ui/styles.css';
```

## 🚀 使用方式

### 开发模式

1. 启动 UI 库开发模式：
```bash
cd packages/ui
pnpm dev
```

2. 启动 Storybook 查看组件：
```bash
cd ../../
pnpm dev:storybook
```

访问：http://localhost:6006

### 构建

```bash
cd packages/ui
pnpm build
```

这将生成：
- `dist/index.js` - CommonJS 格式
- `dist/index.esm.js` - ESM 格式
- `dist/index.d.ts` - TypeScript 类型定义
- `dist/styles.css` - 编译后的样式文件

## 📝 添加新的 shadcn/ui 组件

1. 进入 UI 包目录：
```bash
cd packages/ui
```

2. 使用 shadcn/ui CLI 添加组件：
```bash
npx shadcn@latest add <component-name>
```

组件会自动添加到 `src/components/` 目录。

3. 在 `src/index.ts` 中导出组件：
```typescript
export * from "./components/<component-name>";
```

4. 构建包：
```bash
pnpm build
```

5. 在 Storybook 中创建 story：
```bash
cd ../../apps/storybook/src
# 创建 <ComponentName>.stories.tsx
```

## 🎨 主题定制

shadcn/ui 使用 CSS 变量进行主题定制。可以在以下位置修改：

1. **UI 库**：`packages/ui/src/styles/globals.css`
2. **Storybook**：`apps/storybook/.storybook/preview.css`
3. **应用**：在你的应用中覆盖 CSS 变量

## ⚙️ 技术栈

- **shadcn/ui** - 组件库基础
- **Tailwind CSS** - 样式系统
- **Radix UI** - 无样式的可访问组件
- **class-variance-authority** - 样式变体管理
- **Rollup** - 打包工具
- **Storybook** - 组件文档

## 📂 目录结构

```
packages/ui/
├── src/
│   ├── components/         # shadcn/ui 组件
│   │   └── button.tsx
│   ├── lib/               # 工具函数
│   │   └── utils.ts
│   ├── styles/            # 全局样式
│   │   └── globals.css
│   ├── Button/            # 原有组件
│   ├── CourseCard/
│   └── index.ts           # 主入口
├── dist/                  # 构建输出
│   ├── index.js
│   ├── index.esm.js
│   ├── index.d.ts
│   └── styles.css
├── components.json        # shadcn/ui 配置
├── tailwind.config.js
├── postcss.config.js
├── rollup.config.mjs
└── package.json

apps/storybook/
├── src/
│   ├── ShadcnButton.stories.tsx
│   ├── ButtonCva.stories.tsx
│   └── CourseCard.stories.tsx
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── preview.css
└── tailwind.config.js
```

## 🔗 相关链接

- [shadcn/ui 官方文档](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Storybook](https://storybook.js.org)

## ✨ 下一步

你现在可以：
1. 访问 Storybook (http://localhost:6006) 查看组件
2. 添加更多 shadcn/ui 组件（如 Card, Dialog, Input 等）
3. 自定义主题颜色
4. 创建更多组件文档

有任何问题欢迎随时询问！
