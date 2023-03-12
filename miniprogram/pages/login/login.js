// pages/login/login.js
//登录短信倒计时
const app=getApp()
var counter=60;
var settime=function(that){
  if (counter==0){
    that.setData({
      CodeIsClick:true
    })
    counter=60;
    return;
  }else{
    that.setData({
      CodeIsClick:false,
      last_time:counter
    })
    counter--;
  }
  setTimeout(function(){
    settime(that)
  },1000)
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // userInfo: '',
    // hasUserInfo: false,
    userInfo:{
      header:'',
      nickName:'',
      phone:''
    },
    avatarUrl:'/images/假的logo.jpg',
    code:"",
    button:"获取验证码",
    CodeIsClick:true,
  },
  // //获取用户头像与昵称
  // getUserInfo: function () {
  //   wx.getUserProfile({
  //     desc: '获取头像昵称',
  //     success: res => {
  //       console.log(res.userInfo)
  //       wx.setStorage({ key: 'userInfo', data: res.userInfo })
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     },
  //     fail:err=>{
  //       console.log('获取失败',err);
  //     }
  //   })
  // },
  //获取用户头像
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
      "userInfo.header":avatarUrl
    })
    //测试代码
    console.log(avatarUrl)
  },
  //
 onInputPhonenum:function (res) {
   if (res.detail.value.length==11){
    this.setData({
      phone:res.detail.value
    })
    console.log(this.data.phone)
   }
 },
 OnInputCode:function(res) {
  if (res.detail.value.length==4){
    this.setData({
      code:res.detail.value
    })
  }
  console.log(this.data.code)
},

sendMsg:function (res) {
  var that=this;
  settime(that)
},
//登录|注册提交函数
login:function(e){
  this.setData({
    "userInfo.nickname":e.detail.nickname,
    "userInfo.phone":e.detail.phone
  })
  wx.setStorage({key:userInfo,data:this.data.userInfo})
  app.globalData.orderInfo.userInfo=this.data.userInfo
  //测试
  console.log('userInfo:'+this.data.userInfo)
},
// verifyCode:function (params) {
//   wx.showToast({
//     title: 'Loading',
//     icon:"loading"
//   })
//   if (this.data.phone=="19128432548"&&this.data.code.length==4){
//     wx.navigateTo({
//       url: '../mine/mine',
//     })
//   }
// },
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