/**
 * 平台层级的 "默认" 配置
 * @private
 */
export default {
  core: {
    settings: {
      mode: 'ios',
      indicatorPresentWaitTime: 20, // indicator开启等待时间, 20ms
      indicatorPresentThrottleTime: 500, // indicator开启节流的时间
      indicatorDismissDebounceTime: 500, // indicator关闭时需要持续显示的最短时间
      imgRequestBuffer: 1400,
      imgRenderBuffer: 600,
      imgVelocityMax: 3
    }
  },
  mobile: {
    settings: {
      mode: 'ios' // 默认使用IOS样式
    }
  },
  android: {
    superset: 'mobile',
    subsets: [], // 平台支持列表, 由 setupPlatform() 完成
    settings: {
      toolbarMinHeight: 56, // toolbar的默认最小高度
      mode: 'md', // 模式
      backButtonText: '返回', // 后退按钮文字
      backButtonIcon: 'icon-arrow-back', // 后退图标
      onPullIcon: 'icon-md-arrow-down',
      iconMode: 'md', // icon的模式
      menuType: 'overlay', // menu组件的展开默认类型
      spinner: 'crescent',
      scrollAssist: false, // 是否需要使用jsScroll
      tabsHighlight: true, // tab是否显示下划线
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: false, // 切换到子页面后隐藏tab组件
      showIndicatorWhenPageChange: false, // 页面切换是否显示Indicator提示
      pageTransition: 'zoom-transition', // 转场动画
      pickerRotateFactor: 0,
      pickerScaleFactor: 0.81
    },
    isMatch (plt) {
      return plt.isPlatformMatch(
        'android',
        ['android', 'silk'],
        ['windows phone']
      )
    },
    versionParser (plt) {
      return plt.matchUserAgentVersion(/Android (\d+).(\d+)?/)
    }
  },
  ios: {
    superset: 'mobile',
    subsets: [], // 平台支持列表, 由 setupPlatform() 完成
    settings: {
      toolbarMinHeight: 44,
      mode: 'ios',
      backButtonText: '返回',
      backButtonIcon: 'icon-arrow-back', // 后退图标
      onPullIcon: 'icon-ios-arrow-down',
      iconMode: 'ios',
      menuType: 'reveal',
      spinner: 'ios',
      scrollAssist: false, // 是否需要使用jsScroll
      tabsHighlight: false,
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: false,
      showIndicatorWhenPageChange: false, // 页面切换是否显示Indicator提示
      pageTransition: 'fade-right-transition', // 'ios-transition'

      pickerRotateFactor: -0.46,
      pickerScaleFactor: 1
    },
    isMatch (plt) {
      return plt.isPlatformMatch(
        'ios',
        ['iphone', 'ipad', 'ipod'],
        ['windows phone']
      )
    },
    versionParser (plt) {
      return plt.matchUserAgentVersion(/OS (\d+)_(\d+)?/)
    }
  }
}
