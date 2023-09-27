// pages/purchase/index.js
import {
  fetchPchDetails
} from '../../services/fetchPchDetails';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    atvInfo: {},
    users: [],
    session: [],
    price: [],

    // 选择的选票信息
    userValue: 0,
    sessionValue: 0,
    priceValue: 0,
    pay: 88
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadData();
  },

  // 加载页面的信息
  async loadData() {
    const data = await fetchPchDetails();
    this.setData({
      atvInfo: data.atvInfo,
      users: data.users,
      session: data.session,
      price: data.price
    })
  },

  // 购票信息单选框
  changeUser(e) {
    this.setData({
      userValue: e.detail.value
    });
  },
  changeSession(e) {
    this.setData({
      sessionValue: e.detail.value
    });
  },
  changePrice(e) {
    this.setData({
      priceValue: e.detail.value,
      pay: this.data.price[e.detail.value].value[0]
    });
  },

  // 增加人员
  addUser() {
    wx.navigateTo({
      url: './adduser/index',
    })
  },

  // 确认购买
  comfirm() {
    const info = {
      user: this.data.users[this.data.userValue],
      session: this.data.session[this.data.sessionValue],
      price: this.data.price[this.data.priceValue]
    };
    console.log("info: ", info);
    wx.navigateTo({
      url: '/pages/purchase/result/index',
    })
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