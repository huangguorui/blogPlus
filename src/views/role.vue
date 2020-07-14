<template>
  <div>
    <!-- @getApi="getApi" -->
    <!-- :list="list"  -->
    <table-m :rowTitle="rowTitle"
             @resData="resData"
             :list="list"
             :pageInfo="pageInfo"
             @isDrawer="isDrawer"
             :formData="formData"
             @closeDrawer="closeDrawer"
             :isCloseDrawer="isCloseDrawer"></table-m>
  </div>
</template>

<script>
import api from '@/api/api'
import page from "@/common/mixins/page"

export default {
  mixins: [page],

  created () {
    console.log(api)
  },
  data () {
    return {
      pageInfo: {
        currentPage: 1,
        size: this.$constDefault.page, //初始页数，10页  
        pages: 1,
        total: 1,
      },
      api: api,
      rowTitle: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'ID',
          key: 'id'
        }, {
          title: '资源名',
          key: 'permissionName'
        },
        {
          title: '资源路径',
          key: 'url'
        },
        {
          title: '操作',
          align: 'center',
          type: 'text',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                style: {
                  fontSize: '14px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                },
                on: {
                  click: () => {
                    this.isCloseDrawer = true
                    this.titleDrawer = "编辑资源"
                    this.formData = params.row
                  }
                }
              }, '编辑'),
              h('Button', {
                style: {
                  fontSize: '14px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                },
                on: {
                  click: () => {
                    console.log(params.row)
                    this.delList = [params.row.id]
                    this.isModalClose = true
                  }
                }
              }, '删除')
            ])
          }
        }

      ],
      list: [
        {
          id: 29232,
          permissionName: "项目列表999",
          url: "/project/findAll123",
        },
        {
          id: 0,
          permissionName: '123',
          url: '123',
        },

      ],
      formData: {
        permissionName: "",
        url: "",
      },
      isCloseDrawer: false
    }
  },
  methods: {
    closeDrawer (e) {
      this.isCloseDrawer = e

    },
    resData (res) {
      this.list = res.data.records
      this.pageInfo = res.pageInfo
      // console.log("res===", res)
      //  this.page = pages
    },
    isDrawer (e) {
      this.isCloseDrawer = e
    },
    select (e) {
      console.log(e)
      if (e.length == 0) {
        this.delList = []
      }
      let id = []
      //分离出id进行发送
      e.forEach(item => {
        id.push(item.id)
      })
      this.delList = id


    },
    submitData (e) {
      this.isCloseDrawer = false
      //添加新的数据，拉取列表
      api.postSaveApi(e).then(res => {
        //数据处理
        console.log(res)
        this.getList(this.data)
      }).catch(err => console.log(err))

    },
    apis (e) {
      console.log(e)
      console.log(e.getListApi(this.pageInfo).then(res => console.log(res)))
    },
    deleteData () {
      this.isModalLoading = true
      api.postDeleteApi(this.delList).then(res => {
        //数据处理
        console.log(res)
        this.delList = []
        this.isModalLoading = false
        this.isModalClose = false
        this.getList(this.data)

      }).catch(err => console.log(err))
    },
    addData () {
      this.titleDrawer = "添加资源"
      this.isCloseDrawer = true
    },
    editData () {
      this.titleDrawer = "编辑资源"
      this.isCloseDrawer = true

    },

    getList (data) {
      this.isTableLoading = true

      api.getListApi(data).then(res => {
        //数据处理
        this.pageInfo = res.pageInfo
        this.list = res.data.records
        this.isTableLoading = false
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>