Page({
  data: {
    filled: 'Filled',
    iconType: [
      'home',
      'search',
      'calendar',
      'location',
      'setting',
      'contact',
      'chat',
      'info',
      'warning',
      'success',
      'plus',
      'minus',
      'geometry',
      'close',
      'close_circle',
      'more',
      'arrow_right',
      'arrow_left',
      'arrow_down',
      'arrow_up',
      'bookmark',
      'app_home',
      'phone_home',
      'share',
      'warning_glyph',
      'success_glyph',
      'close_glyph'
    ]
    // listGroups: [
    //   'Group 1',
    //   'Group 2',
    //   'Group 3',
    //   'Group 4',
    //   'Group 5'
    // ],
    // listGeneral: [
    //   "Thông báo",
    //   "Ngôn ngữ",
    //   "Bảo mật và riêng tư",
    //   "Điều khoản",
    //   "Hỗ trợ",
    //   "Đăng xuất"
    // ]
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
  onTap() {
    my.navigateTo({url : 'emptyPage/index'});
  }
});