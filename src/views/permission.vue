<template>
  <div>
    <Button @click="isModalClose=true"
            :disabled="delList.length==0?true:false">删除</Button>

    <Button @click="addData('formData')"
            type="primary">{{title.addTitle}}</Button>
    <!-- @on-change="searchData" -->
    <Input v-model="pageInfo.permissionName"
           placeholder="请输入需要搜索的文字"
           style="width: 300px" />
    <Button type="primary"
            @click="searchData">搜索</Button>

    <Button type="primary"
            @click="addRoleAndPermission"
            :disabled="isBtnDisable">提交</Button>

    <Table border
           @on-selection-change="parkCheck"
           ref="selection"
           :loading="isTableLoading"
           :columns="rowTitle"
           :height="350"
           :data="list"></Table>
    <drawer-m :formData="formData"
              :isCloseDrawer="isCloseDrawer"
              :titleDrawer="titleDrawer"
              @closeDrawer="closeDrawer"
              @submitData="submitData">

      <template slot="formData">
        <Form :model="formData"
              ref="formData"
              :rules="ruleFormData">
          <FormItem label="资源名称"
                    label-position="top"
                    prop="permissionName">
            <Input v-model="formData.permissionName"
                   placeholder="请输入资源名" />
          </FormItem>
          <FormItem label="资源路径"
                    prop="url"
                    label-position="top">
            <Input v-model="formData.url"
                   placeholder="请输入资源路径" />
          </FormItem>

        </Form>
      </template>

    </drawer-m>

    <modal-m :isModalClose="isModalClose"
             :isModalLoading="isModalLoading"
             :delList="delList"
             @cancelModalClose="cancelModalClose"
             @deleteData="deleteData"></modal-m>
    {{isCloseDrawer}}
    <page-m :page-data="pageInfo"
            @pageChange="pageChange"
            @pagSizesChange="pageSizeChange"></page-m>
  </div>
</template>
<script>
import page from "@/common/mixins/page"
import defaultValue from "@/common/mixins/defaultValue"
import list from "@/common/mixins/list"
import api from '@/api/permission'

export default {
  name: "permission",
  mixins: [defaultValue, list, page],
  components: {
  },
  data () {
    return {

      formData: {
        permissionName: "",
        url: "",
      },
      ruleFormData: {
        permissionName: [
          { required: true, message: '资源名称', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '资源地址不可为空', trigger: 'blur' },
        ],

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

                    //防止表格中的数据随着修改而发生改变
                    this.formData = Object.assign({}, params.row)
                    console.log(params.row)
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
      ],
      title: {
        addTitle: '添加资源',
        editTitle: '编辑资源',
      }

    }
  },
  created () {
    this.getApi(api)

  },
  methods: {

    //发送角色和资源关联请求
    addRoleAndPermission () {
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