// pages/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    tabs: ['新发布', '进行中', '已完成'],
    current:0,
    newPublish:[{
       userHeader:'/images/头像.jpg',
       userName:'JoeyOL',
       orderTime:'2022-12-31',
       orderType:'外卖代取',
       orderNum:'15487958',
       orderCondition:'等待中',
        orderBasis:'东南门美团外卖',
        orderMoney:5,
        runnerImg:'',
        runnerName:'',
    },
    { 
      userHeader:'/images/头像.jpg',
      userName:'JoeyOL',
      orderTime:'2022-10-31',
      orderType:'快递代取',
      orderNum:'16451975',
      orderCondition:'等待中',
      orderBasis:'八栋楼下快递',
      orderMoney:10,
      runnerImg:'',
      runnerName:''
    }],
    running:[{
      userHeader:'/images/头像.jpg',
      userName:'JoeyOL',
      orderTime:'2022-11-30',
      orderType:'快递代取',
      orderNum:'4532075',
      orderCondition:'进行中',
      orderBasis:'八栋楼下快递',
      orderMoney:10,
      runnerImg:'/images/runnerImg1.jpg',
      runnerName:'塔塔开'
    },
    {
      userHeader:'/images/头像.jpg',
      userName:'JoeyOL',
      orderTime:'2022-12-30',
      orderType:'饭堂带餐',
      orderNum:'4545305',
      orderCondition:'进行中',
      orderBasis:'4食堂紫薯粥一份',
      orderMoney:8,
      runnerImg:'/images/runnerImg2.jpg',
      runnerName:'Acmer'
    }],
    finish:[{
      userHeader:'/images/头像.jpg',
      userName:'JoeyOL',
      orderTime:'2023-01-03',
      orderType:'快递代取',
      orderNum:'4532075',
      orderCondition:'已完成',
      orderBasis:'八栋楼下快递',
      orderMoney:10,
      runnerImg:'/images/runnerImg1.jpg',
      runnerName:'塔塔开'
    },
    {
      userHeader:'/images/头像.jpg',
      userName:'JoeyOL',
      orderTime:'2022-12-31',
      orderType:'饭堂带餐',
      orderNum:'4545305',
      orderCondition:'已完成',
      orderBasis:'4食堂紫薯粥一份',
      orderMoney:8,
      runnerImg:'/images/runnerImg2.jpg',
      runnerName:' 快乐胖子'
    }]
  },
  tabSelect:function(e){
    var current = e.currentTarget.dataset.id
    this.setData({
      current:current
    })
  },

  orderDetail(e){
   var id=e.currentTarget.dataset.id;
   var index=e.currentTarget.dataset.index;
   let data=''
   if (id==0){
      data=JSON.stringify(this.data.newPublish[index])
   }else if(id==1){
    data=JSON.stringify(this.data.running[index])
   }else{
    data=JSON.stringify(this.data.finish[index])
   }
   wx.navigateTo({
    url: '/pages/order-detail/order-detail?id='+data,
  })
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