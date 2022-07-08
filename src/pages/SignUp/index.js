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
  }
});