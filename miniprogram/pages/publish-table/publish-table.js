// pages/publish-table/publish-table.js
var app=getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
  id:0,
  takeToken:true,
  

  orderInfo:{
     userInfo:{
       header:'',
       nickName:''
     },
     accept_token:false,
     hidden_postscript:'',
     orderCondition: '等待中',
     orderNum:'',
     orderTime: '',
     orderType: '',
     imgurl:'',
     postscript:'', 
     expressNum: '',
     expressVol: '',
     orderStartpoint: '',
     orderFinishpoint: '',
     orderCost: '',
     runnerInfo:{
       header:'',
       nickName:''
     }

  },

  express_need:[{
  image:'/images/订单 (3).png',
  text:' 快递数量',
  placeholder:'请输入快递数量'
  },
  {
    image:'/images/订单 (3).png',
    text:' 快递大小',
    placeholder:'请输入快递体积大小，如大件，小件'
    },
    {
      image:'/images/订单 (3).png',
      text:' 隐藏备注',
      placeholder:'备注仅接单人可见？填是或否'
      },
  {
    image:'/images/钱.png',
    text:'金额',
    placeholder:'请输入小费'
  },
  
],

 tips_take:['如需拿超大件物品请加价，距离超远没人接单也在备注信息说明可加价，感谢支持！！','信息仅接单人可见，安全放心！','更多要求中可以选择快递大小'],
tips_email:['如果对快递商家有要求请备注！！','接单后请私信称重结算','信息仅接单人可见，安全放心！'],
// 快递拿寄方面

 submit_table:false
  },
  
  fillingFrom(e){
    
  },

  uploadImage(){
  var that=this;
  wx.chooseImage({
    count: 1,
    success: (result) => {
      this.setData({
        'orderInfo.imgurl':result.tempFilePaths
      })
    },
  })
  },

  onClick_type(e){
  var index=e.currentTarget.dataset.index
  if (index=='取快递'&&!this.data.takeToken){
    this.setData({
      takeToken:!this.data.takeToken
    })
  }else if (index=='寄快递'&&this.data.takeToken){
    this.setData({
      takeToken:!this.data.takeToken
    })
  }else{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      'orderInfo.userInfo':app.globalData.userInfo
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