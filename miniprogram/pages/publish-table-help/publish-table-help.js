// pages/publish-table-help/publish-table-help.js
const fetch=require('../../utils/fetch.js')
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    input_container:[
      {
        image:'/images/收货地址 (2).png',
        text:'求助地点',
        placeholder:'请输入地址',
        name:"orderStartpoint"
      },
      {
        image:'/images/时间.png',
        text:'开始时间',
        placeholder:'请输入开始时间',
        name:"startTime"

      },
      {
        image:'/images/时间.png',
        text:'结束时间',
        placeholder:'请输入结束时间',
        name:'finishTime'
      },
      {
        image:'/images/钱.png',
        text:'金额',
        placeholder:'请输入小费',
        name:"orderCost"
      }
    ],

    help_tips:['地址时间务必准确!'],
    order:''
  },
  //提交函数
  submit:function(e){
     //将页面数组整合
     var time=new Date().toJSON().substring(0,10)+" "+new Date().toTimeString().substring(0,8)
     this.setData({
       
       "order.orderTime":time,
       "order.orderType":"帮忙做",
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
      // console.log(res)
      // console.log(e.detail.value)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
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