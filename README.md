# 🚀 YOLOv8 智能识别系统

基于 YOLOv8 深度学习模型的 Web 端智能识别系统，支持图片识别、视频处理、实时摄像头检测等多种应用场景。

## ✨ 项目特色

- 🎯 **多场景识别**：支持图片、视频、实时摄像头三大识别场景
- 🚗 **车牌识别**：集成 LPRNet 车牌号识别模型，支持车牌定位与文字识别
- 🔐 **验证码识别**：基于 YOLOv8 实现验证码自动识别
- 🎨 **现代化 UI**：Vue + Element UI 构建的友好交互界面
- ⚙️ **灵活配置**：支持专家模式与简洁模式，可动态调整置信阈值等参数

## 🛠️ 技术栈

### 前端
- **框架**: Vue 2.6 + Vue Router + Vuex
- **UI 组件**: Element UI
- **HTTP 客户端**: Axios
- **构建工具**: Vue CLI

### 后端
- **框架**: Flask
- **深度学习**: YOLOv8 + PyTorch
- **车牌识别**: LPRNet
- **图像处理**: OpenCV, PIL

## 📦 项目结构

```
yolo/
├── 前端/                    # Vue 前端项目
│   ├── src/
│   │   ├── components/     # 组件目录
│   │   │   ├── main.vue   # 首页
│   │   │   ├── Content.vue # 图片识别
│   │   │   ├── ContentVideo.vue # 视频识别
│   │   │   └── detect.vue # 实时检测
│   │   ├── assets/        # 静态资源
│   │   └── theme/         # 自定义主题
│   └── package.json
│
├── 后端/                    # Flask 后端服务
│   ├── app.py             # 主应用入口
│   ├── core/              # 核心功能模块
│   │   ├── camera/        # 摄像头检测
│   │   ├── config/        # 配置管理
│   │   ├── img_process/   # 图片处理
│   │   └── video/         # 视频处理
│   ├── weights/           # 模型权重文件 (需自行下载)
│   └── templates/         # HTML 模板
│
├── 项目文档/               # 项目相关文档
└── 周报及总结/             # 开发记录
```

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 14.0
- **Python**: >= 3.8
- **CUDA**: >= 11.0 (可选，用于 GPU 加速)

### 前端部署

```bash
# 进入前端目录
cd 前端

# 安装依赖
npm install

# 开发模式运行
npm run serve

# 生产环境构建
npm run build
```

前端默认运行在 `http://localhost:8080`

### 后端部署

```bash
# 进入后端目录
cd 后端

# 创建虚拟环境 (推荐)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 下载模型权重文件
# 请将以下模型文件放入 weights/ 目录:
# - camera.pt    (摄像头检测模型)
# - car.pt       (车辆检测模型)
# - code.pt      (验证码识别模型)
# - video.pt     (视频检测模型)
# - yolo.pt      (通用 YOLO 模型)
# - lprnet_best.pth (车牌识别模型)

# 启动服务
python app.py
```

后端默认运行在 `http://localhost:5000`

## 📖 功能说明

### 1️⃣ 图片识别
- 支持上传 JPG/PNG 等格式图片
- 实时显示检测结果和置信度
- 支持多目标同时识别
- 可下载标注后的结果图片

### 2️⃣ 视频识别
- 支持 MP4/AVI 等常见视频格式
- 逐帧检测并生成结果视频
- 显示处理进度和检测统计

### 3️⃣ 实时检测
- 支持本地摄像头实时检测
- 支持屏幕区域捕获检测
- 实时显示 FPS 和检测结果

### 4️⃣ 车牌识别
- 车牌定位与文字识别
- 支持多种车牌类型
- 输出车牌号码和置信度

### 5️⃣ 验证码识别
- 自动识别图片验证码
- 输出识别结果和坐标信息

## ⚙️ 配置说明

### 前端配置 (`vue.config.js`)

```javascript
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // 后端地址
        changeOrigin: true
      }
    }
  }
}
```

### 后端配置 (`core/config/config.py`)

```python
# 模型配置
MODEL_PATH = 'weights/yolo.pt'
CONFIDENCE_THRESHOLD = 0.5

# 服务器配置
HOST = '0.0.0.0'
PORT = 5000
```
---
