// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }
    // //登录态测试
    // //清除缓存
    // wx.removeStorage({key:'userInfo'})
    // wx.removeStorage({key:'token'})
    // this.checkLogin(res => {
    //   console.log('is_login: ', res.is_login)
    //   if (!res.is_login) {
    //     this.login()
    //   }
    // })
    // this.globalData.userInfo = wx.getStorageSync('userInfo')
    // console.log(this.globalData.userInfo)


   
  },
  // //登录测试
  // login: function () {
  //   wx.login({
  //     success: res => {
  //       console.log('login code: ' + res.code)
  //       wx.request({
  //         url: 'http://127.0.0.1:3000/login',
  //         method: 'post',
  //         data: { code: res.code },
  //         success: res => {
  //           console.log('token: ' + res.data.token)
  //           // 将token保存为公共数据（用于在多页面中访问）
  //           this.globalData.token = res.data.token
  //           // 将token保存到数据缓存（下次打开小程序无需重新获取token）
  //           wx.setStorage({ key: 'token', data: res.data.token })
  //         }
  //       })
  //     }
  //   })
  // },
  // checkLogin: function (callback) {
  //   var token = this.globalData.token
  //   if (!token) {
  //     // 从数据缓存中获取token
  //     token = wx.getStorageSync('token')
  //     if (token) {
  //       this.globalData.token = token
  //     } else {
  //       callback({ is_login: false })
  //       return
  //     }
  //   }
  //   wx.request({
  //     url: 'http://127.0.0.1:3000/checklogin',
  //     data: { token: token },
  //     success: res => {
  //       callback({ is_login: res.data.is_login })
  //     }
  //   })
  // },
  globalData:{
    // token:null,
    // userInfo: null,
    orderInfo:{
      userInfo:{
        header:'',
        nickName:'',
        phone:''

      },
      accept_token:false,//初始值为否
      hidden_postscript:false,
      orderTime:'',
      orderType:'',
      expressNum:'',
      expressVol:'',
      orderCondition:'',
      orderStartpoint:'',
      orderFinishpoint:'',
      orderCost:'',
      postscript:'',
      startTime:'',
      finishTime:'',
      imgurl:'',
      runnerInfo:{
        header:'',
        nickName:''
      }
    }
  }
});
