import { request } from '../../request/index.js'
Page({
  data: {
    // 轮播图数据
    swiperList:[
        {
            "image_src": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3389912540,3233976783&fm=26&gp=0.jpg",
            "open_type": "navigate",
            "goods_id": 12,
        },
		{
		    "image_src": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=228494130,259376353&fm=26&gp=0.jpg",
		    "open_type": "navigate",
		    "goods_id": 19,
		},
		{
		    "image_src": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1938783128,3866225006&fm=26&gp=0.jpg",
		    "open_type": "navigate",
		    "goods_id": 29,
		}
    ],
    // 分类导航数据
    cateList:[
        {
            "name": "分类",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
            "open_type": "switchTab",
            "navigator_url": "/pages/category/index"
        },
        {
            "name": "秒杀",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_3@2x.png"
        },
        {
            "name": "超市",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png"
        },
        {
            "name": "母婴",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png"
        }
    ],
    // 楼层数据
    floorList:[
        {
            "floor_title": {
                "name": "时尚女装1",
                "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
            },
            "product_list": [
                {
                    "name": "优质服饰",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
                    "image_width": "232",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=服饰"
                },
                {
                    "name": "春季热门",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
                    "image_width": "233",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=热"
                },
                {
                    "name": "爆款清仓",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
                    "image_width": "233",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=爆款"
                },
                {
                    "name": "倒春寒",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
                    "image_width": "233",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=春季"
                },
                {
                    "name": "怦然心动",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
                    "image_width": "233",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=心动"
                }
            ]
        },
        {
            "floor_title": {
                "name": "户外活动",
                "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
            },
            "product_list": [
                {
                    "name": "勇往直前",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
                    "image_width": "232",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=户外"
                },
                {
                    "name": "户外登山包",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
                    "image_width": "273",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=登山包"
                },
                {
                    "name": "超强手套",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
                    "image_width": "193",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=手套"
                },
                {
                    "name": "户外运动鞋",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
                    "image_width": "193",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=运动鞋"
                },
                {
                    "name": "冲锋衣系列",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
                    "image_width": "273",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list/index?query=冲锋衣"
                }
            ]
        },
        {
            "floor_title": {
                "name": "箱包配饰",
                "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
            },
            "product_list": [
                {
                    "name": "清新气质",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
                    "image_width": "232",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=饰品"
                },
                {
                    "name": "复古胸针",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
                    "image_width": "263",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=胸针"
                },
                {
                    "name": "韩版手链",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
                    "image_width": "203",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=手链"
                },
                {
                    "name": "水晶项链",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
                    "image_width": "193",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=水晶项链"
                },
                {
                    "name": "情侣表",
                    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
                    "image_width": "273",
                    "open_type": "navigate",
                    "navigator_url": "/pages/goods_list?query=情侣表"
                }
            ]
        }
    ]
  },
  // // 页面一加载就触发
  // onLoad() {
  //   wx.request({
  //     url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
  //     success: (result)=>{
  //       console.log(result); 
  //     }
  //   });
  // }
  onLoad() {
    // 获取轮播图数据
    this.getSwiperList()
    // 分类导航
    this.getCateList()
    // 楼层
    this.getFloorList()
  },
  // 定义获取轮播图数据方法目前使用本都数据
  pinckdeitle:function(){//未完成提示
  wx.showLoading({
    title: '敬请期待'
  });
setInterval(function(){
	    wx.hideLoading();
},1000)
  },
  getSwiperList() {
    request({url: ''})
      .then((result) => {
        // console.log(result);
        this.setData({
       /*   swiperList: result */
        })
      })
  },
  // 定义获取分类导航数据的方法
  getCateList() {
    request({url: ''})
    .then((result) => {
      // console.log(result);
      this.setData({
      /*  cateList: result */
      })
    })
  },
  // 定义获取楼层数据方法
  getFloorList() {
    request({
      url: ''
    }).then((result) => {
      // console.log(result);
      this.setData({
       /* floorList: result */
      })
    })
  }
})