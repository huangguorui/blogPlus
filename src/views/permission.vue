<template>
  <div>
    <Button @click="add">添加</Button>
    <Button @click="isModalClose=true"
            :disabled="del.length==0?true:false">删除</Button>

    <Button @click="add"
            type="primary">新增资源</Button>
    <drawerM :formData="formData"
             :isClose="isClose"
             :title="title"
             @closepop="closepop"
             @submitData="submitData">

      <template slot="formData">

        <FormItem label="资源名称"
                  label-position="top">
          <Input v-model="formData.permissionName"
                 placeholder="请输入资源名" />
        </FormItem>
        <FormItem label="资源路径"
                  label-position="top">
          <Input v-model="formData.url"
                 placeholder="请输入资源路径" />
        </FormItem>
        <FormItem label="Description"
                  label-position="top">
          <Input type="textarea"
                 v-model="formData.permissionName"
                 :rows="4"
                 placeholder="permissionName" />
        </FormItem>

      </template>

    </drawerM>
    <Modal v-model="isModalClose"
           width="360">
      <p slot="header"
         style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>删除确认</span>
      </p>
      <div style="text-align:center">
        <p>您当前的操作将会删除掉数据的ID为：</p>
        <p> {{this.del}}</p>
        <p> 是否继续删除？</p>
      </div>
      <div slot="footer">
        <Button type="error"
                size="large"
                long
                :loading="isModalLoading"
                @click="deletes">删除</Button>
      </div>
    </Modal>
    <Table border
           @on-selection-change="select"
           ref="selection"
           :loading="isTableLoading"
           :columns="rowTitle"
           :height="350"
           :data="list"></Table>

    <Page :page-data="pageInfo"
          @pageChange="pageChange"
          @pagSizesChange="pageSizeChange"></Page>
  </div>
</template>
<script>
import Page from '@/components/page/page.vue'
import drawerM from '@/components/drawerM/drawerM.vue'
import pageM from "../common/mixins/pageM"
import api from '@/api/api'
// import { getList, postSave, postDelete } from '@/api/api'

export default {
  name: "permission",
  mixins: [pageM],
  components: {
    Page,
    drawerM
  },
  data () {
    return {
      isModalLoading: false,
      isModalClose: false,
      isDisable: true,
      isTableLoading: true,
      isClose: false,

      del: [],
      title: "",

      formData: {
        permissionName: "",
        url: "",
      },
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
                    this.isClose = true
                    this.title = "编辑资源"
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
                    this.del = [params.row.id]
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
          id: 0,
          permissionName: '',
          url: '',
        },
      ]
    }
  },
  methods: {
    select (e) {
      console.log(e)
      if (e.length == 0) {
        this.del = []
      }
      let id = []
      //分离出id进行发送
      e.forEach(item => {
        id.push(item.id)
      })
      this.del = id


    },
    submitData (e) {
      this.isClose = false
      //添加新的数据，拉取列表
      api.postSave(e).then(res => {
        //数据处理
        console.log(res)
        this.getList(this.data)
      }).catch(err => console.log(err))

    },
    deletes () {
      this.isModalLoading = true
      // async deletes() {
      //   let data = await api.postDelete(this.del)
      //   console.log(data..code)
      api.postDelete(this.del).then(res => {
        //数据处理
        console.log(res)
        this.del = []
        this.isModalLoading = false
        this.isModalClose = false
        this.getList(this.data)

      }).catch(err => console.log(err))
    },
    closepop () {
      this.isClose = false
    },
    add () {
      this.title = "添加资源"
      this.isClose = true
    },
    edit () {
      this.title = "编辑资源"
      this.isClose = true

    },

    getList (data) {
      this.isTableLoading = true

      api.getList(data).then(res => {
        //数据处理
        console.log(res)
        this.pageInfo.current = res.data.current
        this.pageInfo.pages = res.data.pages
        this.pageInfo.size = res.data.size
        this.pageInfo.total = res.data.total

        this.list = res.data.records
        this.isTableLoading = false
      }).catch(err => console.log(err))
    }
    // getList (data) {
    //   this.$axios({
    //     url: "http://localhost:8081/permission/list?currentPage=" + data.current + "&size=" + data.size,
    //     method: "get",
    //     params: {}
    //   }).then(res => {
    //     console.log(res)

    //     //获取分页
    //     this.pageInfo.current = res.data.current
    //     this.pageInfo.pages = res.data.pages
    //     this.pageInfo.size = res.data.size
    //     this.pageInfo.total = res.data.total

    //     this.list = res.data.records
    //     // 赋值以后添加，修改的值是不会被vue监听的
    //     this.list.forEach((item, i) => {
    //       this.list[i].fabulousNumber = 1
    //     })
    //   })
    // },
  }
}
</script>