<template>
  <Table row-key="id"
         :columns="columns16"
         :data="data12"
         border></Table>
</template>
<script>
export default {
  data () {
    return {
      columns16: [
        {
          title: '权限名称',
          key: 'name',
          tree: true
        },
        {
          title: '所属资源',
          key: 'address'
        }
      ],
      data12: [
        {
          id: '100',
          name: 'ADMIN',

          address: 'ADMIN'
        },
        {
          id: '101',
          children: [
            {
              id: '10101',
              name: '/permission/list',
              age: 30,
              address: '/permission/list'
            },
            {
              id: '10102',
              name: '/permission/list',
              address: '/permission/list'
            },
          ]
        },
        {
          id: '102',
          name: 'USER',
          address: 'USER'
        },
        {
          id: '103',
          name: 'USER',
          address: 'USER'
        }
      ]
    }
  }
}
</script>