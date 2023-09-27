// pages/purchase/result/index.js
import {
  fetchResultDetails
} from '../../../services/fetchResultDetails';
import ActionSheet, {
  ActionSheetTheme
} from 'tdesign-miniprogram/action-sheet/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    atvInfo: {},
    userInfo: {},
    shareGrid: {},
    popupVisible: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadData();
  },

  // 获取页面数据
  async loadData() {
    const {
      atvInfo,
      userInfo,
      shareGrid
    } = await fetchResultDetails();
    this.setData({
      atvInfo,
      userInfo,
      shareGrid
    });
  },

  // 分享动作面板
  handleShare() {
    let newValue = !this.data.popupVisible;
    this.setData({
      popupVisible: newValue
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