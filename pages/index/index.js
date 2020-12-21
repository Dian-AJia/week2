//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },

  onLoad: function () {
    this.gettitle()
  },
  // 文章列表展示
  gettitle(){
    wx.request({
      url: 'http://www.week.com/home/article/index',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: ({data})=>{
        this.setData({data})
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  click(e){
    let id = e.target.dataset.id
    this.getcollection(id);
  },
  // 收藏
  getcollection(id){
    wx.request({
      url: 'http://www.week.com/home/article/collection/id/'+id,
      data: {},
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: ({data})=>{
        this.setData({data})
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  
  /** 
   * 
  getinfo(id){
    wx.request({
      url: 'http://www.tp5.com/news/news/read/id/'+id,
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: ({data})=>{
        // console.log(data)
        let title = data.t_name
        this.setData(title);
        console.log(title)
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  like(evt){
    console.log(evt);
  }
})
   * **/
  
})
