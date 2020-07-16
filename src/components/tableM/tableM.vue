<template>
  <div>

    <!-- @on-selection-change="select" -->
    {{pageInfo}}
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    {{isCloseModal}}
    {{isCloseModalTemp}}
    <Table border
           ref="selection"
           :columns="rowTitle"
           :height="350"
           :loading="isTableLoading"
           :data="list"></Table>

    <drawer-m :formData="formData"
              :isCloseDrawer="isCloseDrawer"
              :titleDrawer="titleDrawer"
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

    <Modal v-model="isCloseModalTemp"
           width="360">
      <p slot="header"
         style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>删除确认</span>
      </p>
      <div style="text-align:center">
        <p>您当前的操作将会删除掉数据的ID为：</p>
        <p> {{isDelList}}</p>
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

  </div>
</template>

<script>
import defaultValue from "@/common/mixins/defaultValue"
import page from "@/common/mixins/page"


export default {
  watch: {
    isDelList: function (e) {
      console.log(e)
      this.isCloseModalTemp = true
    },
    isCloseModal: function (e) {
      console.log(e)
      this.isCloseModalTemp = e
      this.$emit("closeModal", e)
    },
  },
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
    },
    //模态框
    isCloseModal: {
      type: Boolean,
      default: false
    },
    isDelList: {
      type: Array,
      default: Array
    },
    rightTitleDrawer: {
      type: Object,
      default: Object
    },
  },
  created () {
    //获取请求列表
    console.log(this.isDelList)
  },
  data () {
    return {
      isCloseModalTemp: this.sCloseModal
    }
  },
  mounted () {
  },
  methods: {
    select (e) {
      console.log(e)
      if (e.length == 0) {
        this.isDelList = []
      }
      let id = []
      //分离出id进行发送
      e.forEach(item => {
        id.push(item.id)
      })
      this.isDelList = id


    },
    submitData (e) {
      console.log("this.pageInfo===", this.pageInfo)
      //添加新的数据，拉取列表
      this.apiList.postSaveApi(e).then(res => {
        //数据处理
        console.log(res)
        this.getList(this.pageInfo)
      }).catch(err => console.log(err))
      this.$emit('closeDrawer', false)

    },
    deleteData () {
      this.isModalLoading = true
      console.log(this.isDelList)
      this.apiList.postDeleteApi(this.isDelList).then(res => {
        //数据处理
        console.log(res)
        this.isModalLoading = false
        this.$emit("closeModal", false)
        this.$emit("delList", [])

        this.getList(this.pageInfo)

      }).catch(err => console.log(err))
    },
    closeDrawer () {
      this.$emit('closeDrawer', false)
      // this.$emit("Drawer", false)
    },
    addData () {
      console.log("添加")
      this.titleDrawer = this.rightTitleDrawer.add
      this.$emit('closeDrawer', false)

    },
    editData () {
      this.titleDrawer = this.rightTitleDrawer.edit

      this.$emit('closeDrawer', false)

    },

    getList (data) {
      this.isTableLoading = true
      this.apiList.getListApi(data).then(res => {
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