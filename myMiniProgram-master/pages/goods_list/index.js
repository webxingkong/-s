import {
  request
} from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime.js'
Page({
  data: {
    tabs: [{
        id: 0,
        title: '综合',
        isActive: true
      },
      {
        id: 1,
        title: '销量',
        isActive: false
      },
      {
        id: 2,
        title: '价格',
        isActive: false
      }
    ],
    goodsList: [
            {
                "goods_id": 57445,
                "cat_id": 9,
                "goods_name": "创维（Skyworth）65V9E 65英寸25核4K HDR高清智能电视",
                "goods_price": 6499,
                "goods_number": 100,
                "goods_weight": 100,
                "goods_big_logo": "",
                "goods_small_logo": "",
                "add_time": 1516663280,
                "upd_time": 1516663280,
                "hot_mumber": 0,
                "is_promote": false,
                "cat_one_id": 1,
                "cat_two_id": 3,
                "cat_three_id": 9
            },
			{
			    "goods_id": 57445,
			    "cat_id": 9,
			    "goods_name": "创维（Skyworth）65V9E 65英寸25核4K HDR高清智能电视",
			    "goods_price": 6499,
			    "goods_number": 100,
			    "goods_weight": 100,
			    "goods_big_logo": "",
			    "goods_small_logo": "",
			    "add_time": 1516663280,
			    "upd_time": 1516663280,
			    "hot_mumber": 0,
			    "is_promote": false,
			    "cat_one_id": 1,
			    "cat_two_id": 3,
			    "cat_three_id": 9
			},
			{
			    "goods_id": 57445,
			    "cat_id": 9,
			    "goods_name": "创维（Skyworth）65V9E 65英寸25核4K HDR高清智能电视",
			    "goods_price": 6499,
			    "goods_number": 100,
			    "goods_weight": 100,
			    "goods_big_logo": "",
			    "goods_small_logo": "",
			    "add_time": 1516663280,
			    "upd_time": 1516663280,
			    "hot_mumber": 0,
			    "is_promote": false,
			    "cat_one_id": 1,
			    "cat_two_id": 3,
			    "cat_three_id": 9
			},
			{
			    "goods_id": 57445,
			    "cat_id": 9,
			    "goods_name": "创维（Skyworth）65V9E 65英寸25核4K HDR高清智能电视",
			    "goods_price": 6499,
			    "goods_number": 100,
			    "goods_weight": 100,
			    "goods_big_logo": "",
			    "goods_small_logo": "",
			    "add_time": 1516663280,
			    "upd_time": 1516663280,
			    "hot_mumber": 0,
			    "is_promote": false,
			    "cat_one_id": 1,
			    "cat_two_id": 3,
			    "cat_three_id": 9
			},
			{
			    "goods_id": 57445,
			    "cat_id": 9,
			    "goods_name": "创维（Skyworth）65V9E 65英寸25核4K HDR高清智能电视",
			    "goods_price": 6499,
			    "goods_number": 100,
			    "goods_weight": 100,
			    "goods_big_logo": "",
			    "goods_small_logo": "",
			    "add_time": 1516663280,
			    "upd_time": 1516663280,
			    "hot_mumber": 0,
			    "is_promote": false,
			    "cat_one_id": 1,
			    "cat_two_id": 3,
			    "cat_three_id": 9
			}
        ],
  },
  // 请求接口用参数
  QueryParams: {
    query: '',
    cid: '',
    pagenum: 1,
    pagesize: 10
  },
  // 总页数
  totalPages: 1,
  // 子组件触发的事件
  handleItemChange(e) {
    // console.log(e);
    const {
      index
    } = e.detail
    const tabs = this.data.tabs
    tabs.forEach((v, i) => {
      index === i ? v.isActive = true : v.isActive = false
    })
    this.setData({
      tabs
    })
  },

  onLoad: function (options) {
    // console.log(options);
    const {
      cid
    } = options
    this.QueryParams.cid = cid
    this.getGoodsList()
  },
  // 获取商品列表数据
  async getGoodsList() {
    // request({
    //   url: '/goods/search',
    //   data: this.QueryParams
    // }).then((result) => {
    //   // console.log(result);
    //   // 计算总页数
    //   this.totalPages = Math.ceil(result.total / this.QueryParams.pagesize)
    //   this.setData({
    //     goodsList: [...this.data.goodsList, ...result.goods]
    //   })
    //   wx.stopPullDownRefresh()
    // })
    const  result = await request({
      url: '',
      data: this.QueryParams
    })
    this.totalPages = Math.ceil( result.total / this.QueryParams.pagesize )
    this.setData({
      goodsList: [...this.data.goodsList, ...result.goods]
    })
    wx.stopPullDownRefresh()
  },
  // 上滑下一页
  onReachBottom() {
    if (this.QueryParams.pagenum >= this.totalPages) {
      wx.showToast({
        title: '没有更多数据了',
        icon: 'none',
      })
    } else {
      this.QueryParams.pagenum++
      this.getGoodsList()
    }
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.QueryParams.pagenum = 1
    this.setData({
      goodsList: []
    })
    this.getGoodsList()
  }
})