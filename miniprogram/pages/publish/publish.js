// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: [{
        imageurl: '/images/快递.png',
        descri: '取/寄快递',
      },
      {
        imageurl: '/images/社区食堂-01.png',
        descri: '食堂/外卖代取',
      },
      {
        imageurl: '/images/设备租赁.png',
        descri: '租借设备',
      },
      {
        imageurl: '/images/合作.png',
        descri: '帮忙做',
      }
    ]
  },
  

  onPublish(e){
  var id=e.currentTarget.dataset.id;
  if (!id){
    wx.navigateTo({
      url: '/pages/publish-table/publish-table?id='+id,
    })
  }else if (id==1){
    wx.navigateTo({
      url: '/pages/publish-table-canteen/publish-table-canteen?id='+id,
    })
  }else if (id==2){
    wx.navigateTo({
      url: '/pages/publish-table-borrow/publish-table-borrow?id='+id,
    })
  }else{
    wx.navigateTo({
      url: '/pages/publish-table-help/publish-table-help?id='+id,
    })
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