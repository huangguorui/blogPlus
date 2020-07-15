
<template>
  <Table :columns="columns10"
         :data="data9"></Table>
</template>
<script>
import expandRow from '../views/tableTab2';
export default {
  components: { expandRow },
  data () {
    return {
      columns10: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            })
          }
        },
        {
          title: 'ID',
          key: 'ID'
        },
        {
          title: 'roleName',
          key: 'roleName'
        },
        {
          title: 'roleDesc',
          key: 'roleDesc'
        }
      ],
      data9: [
        {
          id: 'Steve Jobs',
          permissionName: 'The Prestige',
          url: 'I Cry'
        },
      ]
    }
  }
}
</script>