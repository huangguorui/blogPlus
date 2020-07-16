<template>
  <div>
    <Button @click="isModalClose=true"
            :disabled="delList.length==0?true:false">删除</Button>

    <Button @click="addData('formData')"
            type="primary">添加角色</Button>
    <!-- @on-change="searchData" -->
    <Input v-model="pageInfo.permissionName"
           placeholder="请输入需要搜索的文字"
           style="width: 300px" />
    <Button type="primary"
            @click="searchData">搜索</Button>
    <Button type="primary"
            @click="addUserAndRole">提交</Button>
    <Table border
           row-key="id"
           @on-selection-change="parkCheck"
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
        <Form :model="formData"
              ref="formData">
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
        </Form>
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
import list from "@/common/mixins/list"
import api from '@/api/role'

export default {
  name: "role",
  mixins: [defaultValue, list, page],
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
              }, this.title.editTitle),
              h('Button', {
                style: {
                  fontSize: '14px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                },
                on: {
                  click: () => {
                    this.isCloseDrawer = true
                    this.titleDrawer = this.title.editTitle
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
      title: {
        addTitle: '添加角色',
        editTitle: '编辑角色',
      }
    }
  },
  created () {
    this.getApi(api)
  },
  methods: {
    expand (e) {
      console.log(e)
    },

    addUserAndRole () {
      if (this.$route.query.id == null) {
        return false
      }
      this.delList.push(this.$route.query.id)
      api.postAddUserAndRole(this.delList).then(res => {
        console.log(res)
        this.getList(this.data)
      }).catch(err => console.log(err))

    }
  }
}
</script>