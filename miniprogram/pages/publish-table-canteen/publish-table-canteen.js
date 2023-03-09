// pages/publish-table-canteen/publish-table-canteen.js
const fetch=require('../../utils/fetch.js')
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,//??????????????
    canteen:true,
    
    canteen_tips:['请务必备注准确','总金额是餐品价格加小费'],
    delivery_tips:['请务必备注外卖订单手机尾号','请备注外卖存放地点'],
    order:''
  },
  
  onClick_type(e){
  if (e.currentTarget.dataset.index=='食堂'&&!this.data.canteen){
    this.setData({
      canteen:true
    })
  }else if (e.currentTarget.dataset.index=='外卖'&&this.data.canteen){
    this.setData({
      canteen:false
    })
  }else{}
  },
 
  //提交函数
  submit:function(e){

    //将页面数组整合
    var time=new Date().toJSON().substring(0,10)+" "+new Date().toTimeString().substring(0,8)
    this.setData({
      
      "order.orderTime":time,
      "order.orderType":"食堂/快递代取",
      "order.expressNum":e.detail.value.expressNum,
      "order.expressVol":e.detail.value.expressVol,
      "order.orderCondition":false,
      "order.orderFinishpoint": e.detail.value.orderFinishpoint,
      "order.orderStartpoint": e.detail.value.orderStartpoint,
      "order.orderCost":e.detail.value.orderCost,
      "order.postscript": e.detail.value.postscript,
      "order.startTime":e.detail.value.startTime,
      "order.finishTime":e.detail.value.finishTime
    })
    fetch('',this.data.order,'post').then(res=>{
      console.log(res)
      console.log(this.data.order)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.setData({
    id:options.id,
    order:app.globalData.orderInfo
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