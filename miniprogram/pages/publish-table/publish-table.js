// pages/publish-table/publish-table.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:0,
  takeToken:true,
  uploadImg:'',
  additional:[{
     title:'期望送达',
     selector:['不限制','尽快送达','今天中午','今天晚上','其他时间备注'],
     id:0,
  },
  {
    title:'性别限制',
    selector:['不限制','男','女'],
    id:0,
  },
  {
    title:'快递大小',
    selector:['小件','中件','大件'],
    id:0,
 }],
  onClickAddition:false,

  express_need:[{
  image:'/images/订单 (3).png',
  text:' 快递数量',
  placeholder:'请输入快递数量'
  },
  {
    image:'/images/钱.png',
    text:'金额',
    placeholder:'请输入小费'
  },
],

 tips_take:['如需拿超大件物品请加价，距离超远没人接单也在备注信息说明可加价，感谢支持！！','信息仅接单人可见，安全放心！','更多要求中可以选择快递大小'],
tips_email:['请备注要求！！','接单后请私信称重结算','信息仅接单人可见，安全放心！'],
// 快递拿寄方面

 submit_table:false
  },
  
  uploadImage(){
  var that=this;
  wx.chooseImage({
    count: 1,
    success: (result) => {
      this.setData({
        uploadImg:result.tempFilePaths
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

  onClick_Addition(){
  this.setData({
    onClickAddition:!this.data.onClickAddition
  })
  },

  onClick_Addition_select(e){
    var tmp=this.data.additional;
    var index=e.currentTarget.dataset.index;
    tmp[index].id=e.detail.value;
    this.setData({
      additional:tmp,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.setData({
    id:options.id
  })
  console.log(this.data.id)
  wx.enableAlertBeforeUnload({
    title:'提示',
    message: '是否要保存数据',
    success: (res) => {},
    fail: (res) => {},
    complete: (res) => {},
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