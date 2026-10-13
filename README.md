# NOVA 现代前端起点

这是一个适合继续学习和开发的现代响应式网页，使用 React、TypeScript、Vite 和 Tailwind CSS 构建。

## 技术栈

- React 19
- TypeScript 7
- Vite 8
- Tailwind CSS 4
- npm

## 开始使用

请先安装 Node.js。建议使用 Node.js 24 LTS；最低版本要求为 Node.js 20.19。

第一次运行项目时，在项目根目录执行：

```bash
npm install
npm run dev
```

终端会显示本地访问地址，通常为 `http://localhost:5173`。开发服务器运行时，修改并保存源代码即可看到页面自动更新。

## 常用命令

```bash
# 启动本地开发服务器
npm run dev

# 检查 TypeScript 类型
npm run typecheck

# 创建生产构建
npm run build

# 在本地预览生产构建
npm run preview
```

## 项目结构

```text
.
├── src/
│   ├── assets/              # 项目图片和图标
│   ├── components/          # 可复用页面组件
│   ├── App.tsx              # 页面主体
│   ├── index.css            # Tailwind 与全局样式
│   └── main.tsx             # React 入口
├── index.html               # 网页入口 HTML
├── package.json             # 依赖与 npm 命令
├── tsconfig*.json           # TypeScript 配置
└── vite.config.ts           # Vite 与 Tailwind 配置
```

## 说明

此项目不依赖数据库、后端接口、API Key 或任何付费服务。`npm run dev` 只会启动本地开发服务器，不会自动把网站部署到互联网。
