<template>
  <div>
    <Button @click="isModalClose=true"
            :disabled="delList.length==0?true:false">删除</Button>

    <Button @click="addData('formData')"
            type="primary">{{ title.addTitle}}</Button>
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
          <FormItem label="用户ID"
                    label-position="top">
            <Input v-model="formData.userId"
                   placeholder="用户ID" />
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
import api from '@/api/userRole'
export default {
  name: "userRole",
  mixins: [defaultValue, list, page],
  data () {
    return {
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
          title: '用户ID',
          key: 'userId'
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
                    this.titleDrawer = this.title.editData
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
          userId: '',
          roleId: '',
        },
      ],
      formData: {
      },
      title: {
        addTitle: '添加用户权限关联',
        editTitle: '编辑用户权限关联',
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