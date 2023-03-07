// pages/publish-table-borrow/publish-table-borrow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  input_container:[{
    image:'/images/时间.png',
    text:'租借开始时间',
    placeholder:'请输入预计时间'
  },
  {
    image:'/images/时间.png',
    text:'归还时间',
    placeholder:'请输入预计时间'
  },
  {
    image:'/images/收货地址 (2).png',
    text:'租借数量',
    placeholder:'请输入租借物品数量'
  },
  {
    image:'/images/收货地址 (2).png',
    text:'隐藏备注',
    placeholder:'备注仅接单人可见？填是或否'
  },
  {
    image:'/images/钱.png',
    text:'金额',
    placeholder:'请输入小费'
  }
],
  borrow_tips:['归还时间务必准确','如果需要送货上门请在备注中说明']
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