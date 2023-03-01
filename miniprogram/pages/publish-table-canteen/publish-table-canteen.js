// pages/publish-table-canteen/publish-table-canteen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:0,
  canteen:true,
  oeder_info:{
    type:'',
    take_address:'',
    final_address:'',
    postsrcipt:'',
    total_cost:''
  },
  canteen_tips:['请务必备注准确','总金额是餐品价格加小费'],
  delivery_tips:['请务必备注外卖订单手机尾号','请备注外卖存放地点']
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
  Input_info(e){
  var index=e.currentTarget.dataset.index
  if (index=='取件地址'){
    this.setData({
      'order_info.take_address':e.detail.value
    })
  }else if(index=='目的地'){
    this.setData({
      'order_info.final_address':e.detail.value
    })
  }else if (index=='备注'){
    this.setData({
      'order_info.postscript':e.detail.value
    })
  }else{
    this.setData({
      'order_info.total_cost':e.detail.value
    })
  }
  console.log(this.data.order_info)

  },
  Test(){
  wx.request({
    url: 'http://localhost:8080/v1/weChat/getInfo',
    method:"GET",
    data:{
       id:220110608,
       password:1234561
    },
    header:{
      'content-type':'application/json'
    },
    success(res){
      console.log(res)
    }
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.setData({
    id:options.id
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