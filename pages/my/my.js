Page({
  data:{
    pageData:[
      {name:'按钮组件',id:1,src:'/pages/buttonPage/buttonPage'},
      {name:'图标组件',id:2,src:'/pages/iconPage/iconPage'},
      {name:'Tabs组件',id:3,src:'/pages/tabsPage/tabsPage'},
      {name:'grid组件',id:4,src:'/pages/gridPage/gridPage'}
    ]
  },
  handleTap(e){
    console.log('按钮点击:',e)
    my.navigateTo({
      url: e.currentTarget.dataset.src
    })
  }
});
