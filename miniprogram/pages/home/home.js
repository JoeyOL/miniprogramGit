// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  express_order:[{
    userInfo:{
      header:'/images/头像.jpg',
      nickname:'Joey',
     },
     orderCondition:'等待中',
     orderTime:'2023-02-22 12:30:55',
     orderType:'取快递',
     expressNum:'2',
     expressVol:'大件',
     orderStartpoint:'八栋楼下快递柜',
     orderFinishpoint:'荔园七栋',
     orderCosts:'5'
  }
],
  
  canteen_order:[{
     userInfo:{
       header:'/images/runnerimg2.jpg',
       nickname:'快乐胖子',
     },
     orderType:'食堂带饭',
     orderCondition:'等待中',
     orderTime:'2023-02-23 19:22:45',
     foodNum:'1',
     orderStartpoint:'四食堂',
     orderFinishpoint:'荔园7栋',
     orderCosts:'30'
  }
],
  
  borrow_order:[{
    userInfo:{
      header:'/images/runnerimg1.jpg',
      nickname:'Lucy&David',
    },
    orderType:'设备租借',
    orderCondition:'等待中',
    orderTime:'2023-02-23 19:22:45',
    borrowNum:'1',
    orderStartpoint:'今天下午',
    orderFinishpoint:'后天上午',
    orderCosts:'5'
  }
],
   
   help_order:[{
    userInfo:{
      header:'/images/header.png',
      nickname:'Nobody',
    },
    orderType:'帮忙做',
    orderCondition:'等待中',
    orderTime:'2023-02-23 19:22:45',
    startTime:'明天下午',
    finishTime:'明天下午',
    orderCosts:'5',
    orderAddress:'荔园七栋'
   }
  ]
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