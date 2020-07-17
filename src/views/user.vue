<template>
  <div>
    <Button @click="isModalClose=true"
            :disabled="isBtnDisable">删除</Button>

    <Button @click="addData('formData')"
            type="primary">添加角色</Button>
    <!-- @on-change="searchData" -->
    <Input v-model="pageInfo.permissionName"
           placeholder="请输入需要搜索的文字"
           style="width: 300px" />
    <Button type="primary"
            @click="searchData">搜索</Button>
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
          <FormItem label="用户昵称"
                    label-position="top">
            <Input v-model="formData.username"
                   placeholder="用户昵称" />
          </FormItem>
          <FormItem label="用户邮箱"
                    label-position="top">
            <Input v-model="formData.email"
                   placeholder="用户邮箱" />
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
import api from '@/api/user'

export default {
  name: "user",
  mixins: [defaultValue, list, page],
  created () {
    this.getApi(api)
  },
  data () {
    return {
      formData: {
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
            return h('table-expand-row2', {
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
          title: '用户ID',
          key: 'id'
        },
        {
          title: '用户名',
          key: 'username'
        },
        {
          title: '邮箱',
          key: 'email'
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
                    //防止表格中的数据随着修改而发生改变
                    this.formData = Object.assign({}, params.row)
                  }
                }
              }, '添加权限'),
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
                    //防止表格中的数据随着修改而发生改变
                    this.formData = Object.assign({}, params.row)
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
        },
      ],
      title: {
        addTitle: '添加用户',
        editTitle: '编辑用户',
      }
    }
  },

  methods: {



  }
}
</script>