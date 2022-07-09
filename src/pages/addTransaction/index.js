// import { advancedComponents, basicComponents } from '../../configs/components';
// import { parse } from 'query-string';

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
    selected1: 'Account 1',
    selected2: null,
    items1: ['Account 1', 'Account 2'],
    items2: [
      { key: 1, label: 'necesities' },
      { key: 2, label: 'cafe' },
      { key: 3, label: 'work out' },
      { key: 4, label: 'transport' },
      { key: 5, label: 'health' },
      { key: 6, label: 'education' },
      { key: 7, label: 'entertainment' },
      { key: 9, label: 'more' }
    ],
    //------------------------------------------------
    activeTab1: 0,
    // activeTab2: 0,
    tabs1: [
      { title: 'Expense' },
      // { title: 'Tab' },
      // { title: 'Tab' },
      { title: 'Income' }
    ]
    // tabs2: [
    //   { title: 'Tab', icon: 'home' },
    //   { title: 'Tab', icon: 'home' },
    //   { title: 'Tab', icon: 'home' },
    //   { title: 'Tab', icon: 'home' }
    // ]
  },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index
    });
  },
  onChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index
    });
  },
  //------------------------------------------------------
  onSelect(selected) {
    this.setData({ selected });
  },
  onSelect1(selected1) {
    this.setData({ selected1 });
  },
  onSelect2(selected2) {
    this.setData({ selected2 });
  },
  gotoMain() {
    my.navigateTo({url: 'pages/main/index'})
  }
});