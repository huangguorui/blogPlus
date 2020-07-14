<template>
  <div>
    <Button @click="isModalClose=true"
            :disabled="delList.length==0?true:false">删除</Button>

    <Button @click="addData"
            type="primary">新增资源</Button>

    <!-- @on-change="searchData" -->
    <Input v-model="pageInfo.permissionName"
           placeholder="请输入需要搜索的文字"
           style="width: 300px" />
    <Button type="primary"
            @click="searchData">搜索</Button>

    <Button type="primary"
            @click="addRoleAndPermission">提交</Button>

    <Table border
           @on-selection-change="select"
           ref="selection"
           :loading="isTableLoading"
           :columns="rowTitle"
           :height="350"
           :data="list"></Table>
    <drawer-m :formData="formData"
              :isCloseDrawer="isCloseDrawer"
              :title="titleDrawer"
              @closeDrawer="closeDrawer"
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

    </drawer-m>

    <Modal v-model="isModalClose"
           width="360">
      <p slot="header"
         style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>删除确认</span>
      </p>
      <div style="text-align:center">
        <p>您当前的操作将会删除掉数据的ID为：</p>
        <p> {{this.delList}}</p>
        <p> 是否继续删除？</p>
      </div>
      <div slot="footer">
        <Button type="error"
                size="large"
                long
                :loading="isModalLoading"
                @click="deleteData">删除</Button>
      </div>
    </Modal>

    <page-m :page-data="pageInfo"
            @pageChange="pageChange"
            @pagSizesChange="pageSizeChange"></page-m>
  </div>
</template>
<script>
import page from "@/common/mixins/page"
import defaultValue from "@/common/mixins/defaultValue"
import api from '@/api/permission'

export default {
  name: "permission",
  mixins: [defaultValue, page],
  components: {
  },
  data () {
    return {

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
          id: 0,
          permissionName: '',
          url: '',
        },
      ]
    }
  },
  methods: {
    select (e) {
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
    closeDrawer () {
      this.isCloseDrawer = false
    },
    addData () {
      this.titleDrawer = "添加资源"
      this.isCloseDrawer = true
    },
    editData () {
      this.titleDrawer = "编辑资源"
      this.isCloseDrawer = true

    },
    searchData () {
      this.getList(this.pageInfo)
      // console.log(this)

    },
    getList (data) {
      this.isTableLoading = true
      api.getListApi(data).then(res => {
        //数据处理
        this.pageInfo = res.pageInfo
        this.list = res.data.records
        this.isTableLoading = false
      }).catch(err => console.log(err))
    },
    addRoleAndPermission () {
      //拼装语句
      let data = {
        roleIds: this.delList,
        permissionId: this.$route.query.id
      }
      if (this.$route.query.id == null) {
        return false
      }
      this.delList.push(this.$route.query.id)
      api.postAddRoleAndPermission(this.delList).then(res => {
        console.log(res)
        this.getList(this.data)
      }).catch(err => console.log(err))


    }
  },


}
</script>