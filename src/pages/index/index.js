Page({
  data: {
    filled: 'Filled'
  },
  onInput(event) {
    console.log('onInput', event);
  },
  onConfirm(event) {
    console.log('onConfirm', event);
  },
  onFocus(event) {
    console.log('onFocus', event);
  },
  onBlur(event) {
    console.log('onBlur', event);
  },
  onChangeFilled(event) {
    this.setData({ filled: event.detail.value });
  },
  gotoMain() {
    my.navigateTo({url : 'pages/main/index'})
  },
  gotoSignUp() {
    my.navigateTo({url: 'pages/SignUp/index'})
  }
});