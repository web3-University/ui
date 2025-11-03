# @web3-university/ui

基于 shadcn/ui 的 Web3 University UI 组件库

## 特性

- 🎨 基于 shadcn/ui 构建的高质量组件
- 🎯 使用 Tailwind CSS 和 CSS 变量实现主题定制
- 📦 支持 Tree-shaking
- 🔧 TypeScript 支持
- 📚 完整的 Storybook 文档

## 安装

```bash
pnpm add @web3-university/ui
```

## 依赖要求

本组件库需要以下 peer dependencies：

```bash
pnpm add react react-dom tailwindcss
```

## 使用方法

### 1. 导入样式

在你的应用入口文件中导入样式：

```typescript
import '@web3-university/ui/styles.css';
```

### 2. 配置 Tailwind CSS

在你的项目中配置 Tailwind CSS 以包含组件库的内容：

```javascript
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@web3-university/ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 3. 使用组件

```typescript
import { Button } from '@web3-university/ui';

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
```

## 组件列表

### shadcn/ui 组件

- **Button** - 按钮组件，支持多种变体和尺寸

### 原有组件

- **ButtonCva** - 原有的 CVA 按钮组件
- **CourseCard** - 课程卡片组件

## 工具函数

组件库还导出了一些实用工具函数：

```typescript
import { cn } from '@web3-university/ui';

// 用于合并 Tailwind CSS 类名
const className = cn('base-class', condition && 'conditional-class');
```

## 主题定制

组件库使用 CSS 变量来定制主题。你可以在你的全局 CSS 文件中覆盖这些变量：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... 更多变量 */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... 更多变量 */
}
```

## 开发

### 构建

```bash
pnpm build
```

### 开发模式

```bash
pnpm dev
```

### 查看文档

使用 Storybook 查看组件文档：

```bash
cd ../../apps/storybook
pnpm dev
```

## 添加新的 shadcn/ui 组件

1. 使用 shadcn/ui CLI 添加组件：

```bash
cd packages/ui
npx shadcn@latest add <component-name>
```

2. 在 `src/index.ts` 中导出新组件：

```typescript
export * from "./components/<component-name>";
```

3. 构建组件库：

```bash
pnpm build
```

4. 在 Storybook 中创建 story：

```bash
cd ../../apps/storybook/src
# 创建 <ComponentName>.stories.tsx
```

## License

ISC
