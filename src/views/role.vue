<template>
  <div>
    <Table border
           ref="selection"
           :columns="columns4"
           :data="data1"></Table>
    <Button @click="handleSelectAll(true)">全选</Button>
    <Button @click="handleSelectAll(false)">取消</Button>
  </div>
</template>
<script>
export default {
  name: "role",
  data () {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '角色',
          key: 'role'
        },
        {
          title: '所属资源',
          key: 'sourcore'
        }

      ],
      data1: [

        {
          role: '超级管理员',
          sourcore: '删除权限',
        },
        {
          role: '超级管理员',
          sourcore: '删除权限',
        },
        {
          role: '超级管理员',
          sourcore: '增加权限',
        },
      ]
    }
  },
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status);
    }
  }
}
</script>