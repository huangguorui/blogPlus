<template>
  <div>
    <Button @click="isModalClose=true"
            :disabled="delList.length==0?true:false">删除</Button>

    <Button @click="addData"
            type="primary">添加角色</Button>
    <!-- @on-change="searchData" -->
    <Input v-model="pageInfo.permissionName"
           placeholder="请输入需要搜索的文字"
           style="width: 300px" />
    <Button type="primary"
            @click="searchData">搜索</Button>
    <Table border
           row-key="id"
           @on-selection-change="select"
           @on-row-click="expand"
           ref="selection"
           :loading="isTableLoading"
           :columns="rowTitle"
           :max-height="1000"
           :data="list"></Table>
    <drawer-m :formData="formData"
              :isCloseDrawer="isCloseDrawer"
              :titleDrawer="titleDrawer"
              @closeDrawer="closeDrawer"
              @submitData="submitData">

      <template slot="formData">

        <FormItem label="角色名称"
                  label-position="top">
          <Input v-model="formData.roleName"
                 placeholder="角色名称称" />
        </FormItem>

        <FormItem label="角色描述"
                  label-position="top">
          <Input type="textarea"
                 v-model="formData.roleDesc"
                 :rows="4"
                 placeholder="角色描述" />
        </FormItem>

      </template>

    </drawer-m>
    <modal-m :isModalClose="isModalClose"
             :isModalLoading="isModalLoading"
             :delList="delList"
             @cancelModalClose="cancelModalClose"
             @deleteData="deleteData"></modal-m>

    <page-m :page-data="pageInfo"
            @pageChange="pageChange"
            @pagSizesChange="pageSizeChange"></page-m>

  </div>
</template>
<script>
import page from "@/common/mixins/page"
import defaultValue from "@/common/mixins/defaultValue"
import api from '@/api/role'

export default {
  name: "role",
  mixins: [defaultValue, page],
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
          align: 'center',
        },
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h('table-expand-row', {
              props: {
                row: params.row,
                
              },
              on: {
                click: () => {
                  console.log(params.row)
                }
              }
            })
          }
        },
        {
          title: 'ID',
          key: 'id',
          tree: true

        }, {
          title: '角色名称',
          key: 'roleName'
        },
        {
          title: '角色描述',
          key: 'roleDesc'
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
                    // this.isCloseDrawer = true
                    // this.titleDrawer = "编辑资源"
                    //带上id跳转到资源列表页面
                    this.$router.push({ path: 'permission', query: { id: params.row.id } })
                    this.formData = params.row
                  }
                }
              }, '添加资源'),
              h('Button', {
                style: {
                  fontSize: '14px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                },
                on: {
                  click: () => {
                    this.isCloseDrawer = true
                    this.titleDrawer = "编辑角色"
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
          roleName: '',
          roleDesc: '',
        },
      ],
    }
  },
  methods: {
    cancelModalClose (e) {
      this.isModalClose = e
    },
    expand (e) {
      console.log(e)
    },
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
      this.titleDrawer = "添加角色"
      this.isCloseDrawer = true
    },
    editData () {
      this.titleDrawer = "编辑角色"
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

  }
}
</script>