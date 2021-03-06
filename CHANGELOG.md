1.4.1（2017-2-28）
===

- 图表心率标注修正
- 修复日历控件只显示英文的 bug

1.4.0（2017-2-22）
===

- 新增在床历史分析数据
- 报警改为异常，异常设置模块调整
- 新增一键分析生成个人综合分析报告的功能

1.3.6（2017-2-16）
===

- 修复系统设置用户管理的编辑用户 bug
- 修复首页在离床转换统计不正确的 bug
- 新增过往病史数据查看

1.3.5（2017-2-14）
===

- 新增用户的健康数据管理展示

1.3.1（2017-1-22）
===

- 解决 IE 下无法登录的 Bug
- 心率图颜色优化

1.3.0（2017-1-20）
===

- 登录试用户名或密码错误提示
- 首页新样式
- 基础信息展示调整
- 查询可按 Enter 键触发
- 其它的一些 bug fix

1.2.1（2017-1-11）
===

- 解决床位编辑下拉框数据显示时常为空的 bug
- 解决机构管理编辑功能中的下拉菜单逻辑问题

1.2.0（2017-1-10）
===

- 增加完善系统设置功能
- 其它一些 bug 的 fix，提高稳定性

1.1.3（2017-1-3）
===

- 全局字体修改，支持微软雅黑
- 一些图标的样式统一

1.1.2（2017-1-3）
===

- 修复床位列表显示不全的 Bug
- 修复报警中心和设置模块顶部导航不显示机构名称的 Bug
- 样式调整

1.1.1 (2016-12-23)
===

- 在离床分析现在只分析过去一天的数据
- 呼吸心率图表 y 轴最大值固定
- 开发环境 token 过期后的跳转 url 修复

1.1.0 (2016-12-22)
===

- 新增用户设置模块，包括：用户管理、床位管理、设备管理
- 提示弹出窗口样式优化

1.0.3 (2016-12-9)
===

- 首页逻辑重构，解决菜单切换机构时常无刷新的问题
- 修复报警中心点击“编辑”按钮跳转 bug
- 修复首页过滤搜索床位时常出现“无效ID”的 bug
- 睡眠质量分析页面，去除在线时长
- 床位基础信息获取报警记录优化
- mqttHelper pushState 方法更新，增加监听全部订阅类型

1.0.2 (2016-12-9)
===

- 增加退出功能
- 解决在离床分析下的横坐标显示日期的位置不对的 bug
- 针对设备，先判断是否报警，再判断是否异常
- 睡眠质量分析页面图表，去除在线时长显示
- 床位信息页心率和呼吸率显示坐标单位
- 增加床位信息报警查看和报警处理
- 修正首页过滤查询传参有误的问题
- 报警条件中时间的拆分
- 登录页实现键盘事件登录（回车）
- 首页的过滤条件记数，先已升级为根据实时数据动态计算
- 修复几个页面展示图表时出现 chart titile 问题
- 首页左侧树型菜单支持展开收起
- 其它一些 bug fixes

1.0.1 (2016-11-30)
===

- 报警中心整体样式修正与 bug 修复
- 解决 bedInfo 动态图 bug（超短时间间隔重渲染）
- 睡眠质量分析动态数据与样式完善
- 移除 highcharts credit 水印
- 用户实时监控数据头部去除
- 首页搜索、侧边栏样式调整
- 个人报警样式优化
- 床位的动态状态完善
- 在／离床分析和睡眠质量分析增加时间筛选
