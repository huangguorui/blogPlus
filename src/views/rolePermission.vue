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
              ref="formData">
          <FormItem label="权限ID"
                    label-position="top">
            <Input v-model="formData.permissionId"
                   placeholder="权限ID" />
          </FormItem>
          <FormItem label="角色ID"
                    label-position="top">
            <Input type="textarea"
                   v-model="formData.roleId"
                   :rows="4"
                   placeholder="角色ID" />
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
            @pagSizesChange="pageSizeChange">
    </page-m>
  </div>
</template>
<script>
import page from "@/common/mixins/page"
import defaultValue from "@/common/mixins/defaultValue"
import list from "@/common/mixins/list"
import api from '@/api/rolePermission'
export default {
  name: "permission",
  mixins: [defaultValue, list, page],
  data () {
    return {

      formData: {
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
          title: '权限ID',
          key: 'permissionId'
        },
        {
          title: '角色ID',
          key: 'roleId'
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
                    this.titleDrawer = this.title.editTitle
                    //防止表格中的数据随着修改而发生改变
                    this.formData = Object.assign({}, params.row)
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
          permissionId: '',
          roleId: '',
        },
      ],
      title: {
        addTitle: '添加权限资源关联',
        editTitle: '编辑权限资源关联',
      }
    }
  },
  created () {
    this.getApi(api)
  },
  methods: {

  }
}
</script>