import type { ProjectConfig } from '/#/config';
import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';
import { SIDE_BAR_BG_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST } from './designSetting';
import { primaryColor } from '../../build/config/themeConfig';

// !更改后需要清除浏览器缓存
const setting: ProjectConfig = {
  // 是否显示配置按钮
  showSettingButton: true,

  // 是否显示主题切换按钮
  showDarkModeToggle: true,

  // “设置”按钮位置
  settingButtonPosition: SettingButtonPositionEnum.AUTO,

  // 权限模式
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,

  // 与权限相关的缓存存储在会话存储或本地存储中
  permissionCacheType: CacheTypeEnum.LOCAL,

  // 会话超时处理
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,

  // 颜色
  themeColor: primaryColor,

  // 网站灰色模式，对可能的哀悼日期开放
  grayMode: false,

  // 颜色弱势模式
  colorWeak: false,

  // 是否取消菜单、顶部、多标签页的显示，以便可能嵌入到其他系统中
  fullContent: false,

  // 内容模式
  contentMode: ContentEnum.FULL,

  // 是否显示徽标
  showLogo: true,

  // 是否显示页脚
  showFooter: false,

  // 标头配置
  headerSetting: {
    // 页眉 bg 颜色
    bgColor: HEADER_PRESET_BG_COLOR_LIST[0],
    // 固定在顶部
    fixed: true,
    // 是否显示顶部
    show: true,
    // 主题
    theme: ThemeEnum.LIGHT,
    // 是否启用锁屏功能
    useLockPage: true,
    // 是否显示全屏按钮
    showFullScreen: true,
    // 是否显示文档按钮
    showDoc: true,
    // 是否显示通知按钮
    showNotice: true,
    // 是否显示菜单搜索
    showSearch: true,
  },

  // 菜单配置
  menuSetting: {
    // 侧边栏菜单 bg 颜色
    bgColor: SIDE_BAR_BG_COLOR_LIST[0],
    //  是否修复左侧菜单
    fixed: true,
    // 菜单折叠
    collapsed: false,
    // 折叠菜单时是否显示菜单名称
    collapsedShowTitle: false,
    // 是否可以拖动
    // 仅限制在左侧菜单的打开，鼠标在菜单的右侧有一个拖动栏
    canDrag: false,
    // 是否显示没有 dom
    show: true,
    // 是否显示 dom
    hidden: false,
    // 菜单宽度
    menuWidth: 210,
    // 菜单模式
    mode: MenuModeEnum.INLINE,
    // 菜单类型
    type: MenuTypeEnum.SIDEBAR,
    // 菜单主题
    theme: ThemeEnum.DARK,
    // 拆分菜单
    split: false,
    // 顶部菜单布局
    topMenuAlign: 'center',
    // 折叠触发位置
    trigger: TriggerEnum.HEADER,
    // 打开手风琴模式，仅显示菜单
    accordion: true,
    // 将页面切换到关闭菜单
    closeMixSidebarOnChange: false,
    // 模块打开方法“单击”|”悬停'
    mixSideTrigger: MixSidebarTriggerEnum.CLICK,
    // 修复了扩展菜单
    mixSideFixed: false,
  },

  // 多标签
  multiTabsSetting: {
    cache: false,
    // 开
    show: true,
    // 是否可以拖放排序选项卡
    canDrag: true,
    // 启用快速操作
    showQuick: true,
    // 是否显示刷新按钮
    showRedo: true,
    // 是否显示折叠按钮
    showFold: true,
  },

  // 过渡设置
  transitionSetting: {
    //  是否打开页面切换动画
    // 禁用状态也将禁用 pageLoadinng
    enable: true,

    // 路由基本切换动画
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // 是否打开页面切换加载
    // 仅当启用 = true 时打开
    openPageLoading: true,

    // 是否打开顶部进度条
    openNProgress: false,
  },

  // 是否启用 KeepAlive 缓存最好在开发过程中关闭，否则每次都需要清除缓存
  openKeepAlive: true,

  // 自动屏幕锁定时间，0不锁定屏幕。单位分钟默认值 0
  lockTime: 0,

  // 是否显示面包屑
  showBreadCrumb: true,

  // 是否显示痕迹导航图标
  showBreadCrumbIcon: false,

  // 使用错误处理程序插件
  useErrorHandle: false,

  // 是否打开返回顶部
  useOpenBackTop: true,

  //  是否可以嵌入 iframe 页面
  canEmbedIFramePage: true,

  // 切换接口时是否删除未关闭的消息并发出通知
  closeMessageOnSwitch: true,

  // 切换接口时是否取消已发送但未响应的 http 请求。
  // 如果启用，我想覆盖单个接口。可在单独的界面中设置
  removeAllHttpPending: false,
};

export default setting;
