import {request} from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime'
import { getStorageCart, setStorageCart } from '../../utils/storage.js'
Page({
  data: {
    goodsInfo: {
        "goods_id": 8888,
        "cat_id": 1085,
        "goods_name": "富文本测试文件嘛",
        "goods_price": 500,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_introduce": "富文本内容",
        "goods_state": 2,
        "is_del": "0",
		"goods_small_logo":'http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg',
        "add_time": 1516361489,
        "upd_time": 1516361489,
        "delete_time": null,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 995,
        "cat_two_id": 1075,
        "cat_three_id": 1085,
        "goods_cat": "995,1075,1085",
        "pics": [
            {
                "pics_id": 38711,
                "goods_id": 8888,
                "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
                "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
                "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
                "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
                "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
                "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
            }
        ],
        "attrs": [
            {
                "goods_id": 8888,
                "attr_id": 9210,
                "attr_value": "工艺品",
                "add_price": 0,
                "attr_name": "主体参数-类别",
                "attr_sel": "only",
                "attr_write": "manual",
                "attr_vals": "放大镜"
            }
        ]
    },
    // 是否收藏
    isCollected: false
  },
  goodsObj: {
	  
  },
  onLoad(options) {
    // console.log(options);
    this.getGoodsInfo(options.goods_id)
  },
  // 获取商品详情
  async getGoodsInfo(goods_id) {
    const result = await request({
      url: '',
      data: {goods_id}
    })
    this.goodsObj = result;
    // console.log(result);
    
    // 判断是否收藏
    let collect = wx.getStorageSync('collect') || [];
    let isCollected = collect.some(v => {
      return v.goods_id === this.goodsObj.goods_id
    })

    this.setData({
      goodsInfo: {
        goods_name: result.goods_name,
        goods_price: result.goods_price,
        goods_introduce: result.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: result.pics
      },
      isCollected
    })
  },
  // 预览图片
  handlePreviewImage(e) {
    // console.log(e);
    const { index } = e.currentTarget.dataset
    const urls = this.data.goodsInfo.pics.map(v=>v.pics_big)
    wx.previewImage({
      current: urls[index],
      urls
    });
  },
  // 加入购物车
  handleAddCart() {
    let cart = getStorageCart() || {}
    if(cart[this.data.goodsInfo.goods_id]) {
      // 已存在购物车
      cart[this.data.goodsInfo.goods_id].num++
    }else {
      // 还没存在购物车
      cart[this.data.goodsInfo.goods_id] = this.data.goodsInfo
      cart[this.data.goodsInfo.goods_id].num = 1
      cart[this.data.goodsInfo.goods_id].checked = true
    }
    setStorageCart(cart)
    wx.showToast({
      title: '成功加入购物车',
      mask: true
    });
  },


  // 收藏
  handleCollected() {
    let collect = wx.getStorageSync('collect') || [];
    // let isCollected = collect.some(v => {
    //   return v.goods_id === this.data.goodsObj.goods_id
    // })
    let index = collect.findIndex(v => {
      return v.goods_id === this.goodsInfo.goods_id
    })
    let text = index > -1 ? '取消收藏' : '成功收藏'
    if(index > -1) {
      collect.splice(index, 1)
    }else {
      collect.push(this.goodsInfo)
    }
    wx.showToast({
      title: text,
      icon: 'success',
      mask: true
    });
    
    wx.setStorageSync('collect', collect);
    this.setData({
      isCollected: !this.data.isCollected
    })
  }
})