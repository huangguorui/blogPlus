<template>
  <div>

    <!-- @on-selection-change="select" -->
    {{pageInfo}}
    <Table border
           ref="selection"
           :columns="rowTitle"
           :height="350"
           :loading="isTableLoading"
           :data="list"></Table>

    <drawer-m :formData="formData"
              :isCloseDrawer="isCloseDrawer"
              title="标题"
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
    <page-m :page-data="pageInfo"
            @pageChange="pageChange"
            @pagSizesChange="pageSizeChange"></page-m>
  </div>
</template>

<script>
import defaultValue from "@/common/mixins/defaultValue"
import page from "@/common/mixins/page"
import api from '@/api/api'

export default {
  mixins: [defaultValue, page],
  name: "tableM",
  props: {
    rowTitle: {
      type: Array,
      default: Array
    },
    list: {
      type: Array,
      default: Array
    },
    pageInfo: {
      type: Object,
      default: Object
    },

    formData: {
      type: Object,
      default: Object
    },
    apiList: {
      type: Object,
      default: Object
    },
    // titleDrawer: {
    //   type: String,
    //   default: String
    // },
    isCloseDrawer: {
      type: Boolean,
      default: false
    }


  },
  mounted () {
  },
  methods: {
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
      console.log("this.pageInfo===", this.pageInfo)
      //添加新的数据，拉取列表
      api.postSaveApi(e).then(res => {
        //数据处理
        console.log(res)
        this.getList(this.pageInfo)
      }).catch(err => console.log(err))
      this.$emit('closeDrawer', false)

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
        this.getList(this.pageInfo)

      }).catch(err => console.log(err))
    },
    closeDrawer () {
      console.log("取消激活")
      this.$emit('closeDrawer', false)
      // this.$emit("Drawer", false)
    },
    addData () {
      this.titleDrawer = "添加资源"
      this.$emit('closeDrawer', false)

    },
    editData () {
      console.log(123)
      this.titleDrawer = "编辑资源"
      this.$emit('closeDrawer', false)

    },

    getList (data) {
      this.isTableLoading = true
      api.getListApi(data).then(res => {
        //数据处理
        this.$emit("resData", res)
        this.isTableLoading = false
      }).catch(err => console.log(err))


    }
  }
}
</script>

<style lang="scss" scoped>
</style>