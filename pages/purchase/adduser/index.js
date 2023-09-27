// pages/purchase/adduser/index.js
import Toast from 'tdesign-miniprogram/toast/index';
import { occupationOptions } from '../../../config/occupations';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制选择面板的数据
    chooseBirthday: false,
    chooseOccupation: false,
    chosenOccupation: 0,
    // 指定生日选择区间
    start: '1949-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
    // 可选择的职业
    occupationOptions,

    // 用户填写的信息
    switchValue: true,
    name: '',
    number: '',
    identity: '',
    email: '',
    birthday: '1994年1月1日',
    occupation: '设计师/艺术从业人员',
  },

  // 设置为默认
  handleSwitch() {
    let newValue = !this.data.switchValue;
    this.setData({
      switchValue: newValue
    })
  },

  // 输入属性
  onInput(e) {
    const {
      value
    } = e.detail;
    const {
      label
    } = e.currentTarget.dataset;
    this.setData({
      [label]: value
    });
  },

  // 弹出选择生日弹窗
  chooseBirthday() {
    this.setData({
      chooseBirthday: true
    })
  },

  // 确认选择生日
  onConfirm(e) {
    const {
      value
    } = e.detail;
    let arr = value.split('-');

    this.setData({
      birthday: arr[0] + '年' + arr[1] + '月' + arr[2] + '日'
    });
  },

  // 弹出选择职业弹窗
  chooseOccupation() {
    this.setData({
      chooseOccupation: true
    })
  },

  // 确认选择职业
  onPickerChange(e) {
    const {
      value,
      label
    } = e.detail;
    this.setData({
      chosenOccupation: value,
      occupation: label,
      chooseOccupation: false
    });
  },

  // 确认信息
  comfirm() {
    let info = {
      isDefault: this.data.switchValue,
      name: this.data.name,
      birthday: this.data.birthday,
      phoneNumber: this.data.number,
      identity: this.data.identity,
      email: this.data.email,
      occupation: this.data.occupation
    };

    if (!info.name) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '姓名不能为空',
        theme: 'warning',
        direction: 'column',
      });
    } else if (!info.phoneNumber) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '手机号不能为空',
        theme: 'warning',
        direction: 'column',
      });
    } else if (!info.identity) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '身份证号不能为空',
        theme: 'warning',
        direction: 'column',
      });
    } else {
      console.log('info: ', info);
      Toast({
        context: this,
        selector: '#t-toast',
        message: '报名成功',
        theme: 'success',
        direction: 'column',
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})