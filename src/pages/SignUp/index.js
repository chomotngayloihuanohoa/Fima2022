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
    text: 'One step to make a better life'
  },
  onSubmit(e) {
    console.log('onSubmit', e);
    my.alert({
      content: `Form value：${JSON.stringify(e.detail.value)}`
    });
  },
  onReset(e) {
    console.log('onReset', e);
  },
  gotoSignIn() {
    my.navigateTo({url : 'pages/index/index'})
  },
  gotoMain() {
    my.navigateTo({url: 'pages/main/index'})
  }
});