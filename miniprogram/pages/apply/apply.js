// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  table:[{
    imageurl:'/images/头像.png',
    text:'请输入姓名',
    title:'姓名',
    type:''
  },
  {
    imageurl:'/images/证件.png',
    text:'请输入学号',
    title:'学号',
    type:'idcard'
  },
  {
    imageurl:'/images/证件.png',
    text:'',
    title:'学生证/学生卡'
  }],
  idImg:'',
  treatment:[{
    imageurl:'/images/用户协议.png',
    text:'电子协议',
  },
  {
    imageurl:'/images/审核.png',
    text:'加急审核',
    sub:'添加管理员微信'
  }]
  },
 
  uploadImg(){
    var that=this;
    wx.chooseImage({
      count: 1,
      success: (result) => {
        that.setData({
          idImg:result.tempFilePaths
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  applyDeclear(){
    wx.showModal({
      title: '常见问题和说明',
      content: '1：学生卡和学生证的照片必须包含本人照片和本人学号。2：需要加急审核请添加管理微信，不要重复添加！'
      })
  },

  OnClickTreament(e){
     if (e.currentTarget.dataset.index){
       wx.showModal({
         title: '请勿重复添加!',
         content: '管理员微信Joenashen_',
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