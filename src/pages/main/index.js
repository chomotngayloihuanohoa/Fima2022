Page({
  onLoad(query) {
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  data: {
    items: []
  },
  /* js */
  data: {
    showInfo: false 
  },
  gotoPlanning() {
    my.navigateTo({url: 'pages/planning/index'})
  },
  gotoSetting() {
    my.navigateTo({url: 'pages/setting/index'})
  },
  gotoAddTransaction() {
    my.navigateTo({url: 'pages/addTransaction/index'})
  },
  gotoPrediction() {
    my.navigateTo({url: 'pages/prediction/index'})
  }
});