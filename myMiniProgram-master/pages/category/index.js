import { request } from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  results:[
	      {
	        "cat_id": 1,
	        "cat_name": "电子产品",
	        "cat_pid": 0,
	        "cat_level": 0,
	        "cat_deleted": false,
	        "cat_icon": "",
	        "children": [
	          {
	            "cat_id": 3,
	            "cat_name": "电视",
	            "cat_pid": 1,
	            "cat_level": 1,
	            "cat_deleted": false,
	            "cat_icon": "",
	            "children": [
	              {
	                "cat_id": 5,
	                "cat_name": "曲面电视",
	                "cat_pid": 3,
	                "cat_level": 2,
	                "cat_deleted": false,
	                "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
	              },	              {
	                "cat_id": 5,
	                "cat_name": "曲面电视",
	                "cat_pid": 3,
	                "cat_level": 2,
	                "cat_deleted": false,
	                "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
	              },	              {
	                "cat_id": 5,
	                "cat_name": "曲面电视",
	                "cat_pid": 3,
	                "cat_level": 2,
	                "cat_deleted": false,
	                "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
	              }
	            ]
	          }
	        ]
	      },
		  {
		    "cat_id": 1,
		    "cat_name": "电子产品",
		    "cat_pid": 0,
		    "cat_level": 0,
		    "cat_deleted": false,
		    "cat_icon": "",
		    "children": [
		      {
		        "cat_id": 3,
		        "cat_name": "电视",
		        "cat_pid": 1,
		        "cat_level": 1,
		        "cat_deleted": false,
		        "cat_icon": "",
		        "children": [
		          {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          },	              {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          },	              {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          }
		        ]
		      }
		    ]
		  },
		  {
		    "cat_id": 1,
		    "cat_name": "电子产品",
		    "cat_pid": 0,
		    "cat_level": 0,
		    "cat_deleted": false,
		    "cat_icon": "",
		    "children": [
		      {
		        "cat_id": 3,
		        "cat_name": "电视",
		        "cat_pid": 1,
		        "cat_level": 1,
		        "cat_deleted": false,
		        "cat_icon": "",
		        "children": [
		          {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          },	              {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          },	              {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          }
		        ]
		      }
		    ]
		  },
		  {
		    "cat_id": 1,
		    "cat_name": "电子产品",
		    "cat_pid": 0,
		    "cat_level": 0,
		    "cat_deleted": false,
		    "cat_icon": "",
		    "children": [
		      {
		        "cat_id": 3,
		        "cat_name": "电视",
		        "cat_pid": 1,
		        "cat_level": 1,
		        "cat_deleted": false,
		        "cat_icon": "",
		        "children": [
		          {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          },	              {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          },	              {
		            "cat_id": 5,
		            "cat_name": "曲面电视",
		            "cat_pid": 3,
		            "cat_level": 2,
		            "cat_deleted": false,
		            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
		          }
		        ]
		      },
			  {
			    "cat_id": 1,
			    "cat_name": "电子产品",
			    "cat_pid": 0,
			    "cat_level": 0,
			    "cat_deleted": false,
			    "cat_icon": "",
			    "children": [
			      {
			        "cat_id": 3,
			        "cat_name": "电视",
			        "cat_pid": 1,
			        "cat_level": 1,
			        "cat_deleted": false,
			        "cat_icon": "",
			        "children": [
			          {
			            "cat_id": 5,
			            "cat_name": "曲面电视",
			            "cat_pid": 3,
			            "cat_level": 2,
			            "cat_deleted": false,
			            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
			          },	              {
			            "cat_id": 5,
			            "cat_name": "曲面电视",
			            "cat_pid": 3,
			            "cat_level": 2,
			            "cat_deleted": false,
			            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
			          },	              {
			            "cat_id": 5,
			            "cat_name": "曲面电视",
			            "cat_pid": 3,
			            "cat_level": 2,
			            "cat_deleted": false,
			            "cat_icon": "http://img4.imgtn.bdimg.com/it/u=4152815087,2869769493&fm=26&gp=0.jpg"
			          }
			        ]
			      }
			    ]
			  }
		    ]
		  }
	    ],
    // 左侧
    leftMenuList: [],
    // 右侧
    rightGoodsList: [],
    // 菜单索引
    current: 0,
    // 滚动条距离
    scrollTop: 0
  },
  // 储备数据
  cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cateData = wx.getStorageSync('cates');
      if(!cateData) {
        this.getCategoryList()
      }else {
        if(Date.now() - cateData.time > 1000*10) {
          this.getCategoryList()
        }else {
          this.cates = cateData.data
          const leftMenuList = this.cates.map(v => ({cat_id: v.cat_id, cat_name: v.cat_name}))
          const rightGoodsList = this.cates[0].children
          this.setData({
            leftMenuList,
            rightGoodsList
          })
        }
      }
    
  },
  // 获取分类数据方法
  getCategoryList() {
    request({
      url: ''
    }).then((result) => {
      const leftMenuList = this.data.results.map(v => ({ cat_id: v.cat_id, cat_name: v.cat_name }))
      const rightGoodsList = this.data.results[0].children
      this.cates = this.data.results
      wx.setStorageSync('cates', {time: Date.now(), data: this.data.results});
      this.setData({
        leftMenuList,
        rightGoodsList
      })
    })
  },
  // 点击左侧
  handleTapMenu(e) {
    // console.log(e);
    const { index } = e.currentTarget.dataset
    this.setData({
      current: index,
      rightGoodsList: this.cates[index].children,
      scrollTop: 0
    })
  }
})