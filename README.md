## Visual Inspector
> 这是一款chrome插件，可以高效的帮助前端工程师重构和设计师UI走查，亦可方便前端工程师UI自查。

> 你可以插入设计稿到当前页面，可以随意改变设计稿大小，位置，透明度，混合模式等，方便各种设计风格的UI对比。如果你在做页面重构，建议打开实时和冻结，方便页面刷新后恢复到之前的图片状态，同时不影响页面交互状态。

> 前端工程师在重构阶段就能快速发现页面和视觉稿的差异，减少后期和设计师的UI走查时间:)

### 基本操作步骤为：
- 点击插件icon，弹出插件菜单。
- 点击插入设计稿，将设计稿插入到当前页面。（设计稿插入到页面时候的处理方法:如果图片宽度超过了页面宽度，则以页面宽度为准缩放。如果图片宽度小于页面宽度，则显示原图大小）。
- 页面底部有帮助工具栏，可以调整设计稿透明度，快速显示和隐藏设计稿，切换设计稿和页面的混合模式，以及一些快捷设置设计稿大小和位置的预设，并提供了自定义大小和定位工具.
- 要退出程序，点击插件icon，在弹出的菜单里选择退出即可。没有开启实时功能的情况下，简单刷新页面也可以。

### 关键概念解释：

- 冻结：(默认不开启，`重构建议开启`) 
    
    指冻结当前页面的设计稿，冻结后设计稿将不响应鼠标操作，即不能移动和缩放设计稿。
    
- 实时：(默认不开启，`重构建议开启`) 

    实时保存数据，页面刷新后立即恢复到刷新前的状态。

- 图层混合模式：(默认正常模式)
    
    用过photoshop的都很了解图层混合模式，方便对不同风格的设计稿快速比对。

- 快速适配：

	快速操作图片大小和位置。 目前预定义了6种方式

	- 重置，也是插入图片时候的默认显示方式， 图片插入页面时候的处理方法:如果图片原大小超过了页面宽度，则以页面宽度为准缩放。如果图片原大小小于页面宽度，则显示原大小。
	- 原图大小。图片在当前位置以原大小显示。
	- 原图大小/2。图片在当前位置缩小到原图的一半。
	- 窗口宽高。图片宽度为窗口宽度，图片超出窗口高度的部分不显示（但是可以手动拉伸显示）
	- 页面宽高。图片宽度为窗口宽度，以整体页面大小（可能超出一屏）显示图片。
	- 窗口居中。在当前窗口位置居中显示图片。

### 本插件还支持快捷键操作:

- h 键: 快速显示和隐藏图片
- f 键: 快速显示和隐藏底部工具栏
- d 键: 快速冻结和解冻图片
- 数字键（0-9）：快速设置图片透明度。如：1秒内快速按下两次5，将设置图片55%的透明度。如果1秒内只按下了一次数字键，如5，一秒后将自动补0，即设置图片透明度为50%。
- 方向键：移动图片，一次移动1px。如果同时按下Shift键，将一次移动10px。

### Tips: 
如果快捷键不起作用，请检查当前页面焦点是否在其他页面控件内(eg.input, textarea...)？最简单的方法，点击页面空白处再试一试：）

