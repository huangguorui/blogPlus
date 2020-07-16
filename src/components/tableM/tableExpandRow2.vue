<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="24"
           style="padding:5px 100px">
      <Col span="12">
      <span class="expand-key">权限名称: </span>
      </Col>
      <Col span="12">
      <span class="expand-key">权限描述: </span>
      </Col>
      </Col>
      <Col span="24"
           style="padding:5px 150px"
           v-for="item in row.roles"
           :key="item.id">
      <Col span="12">
      <span class="expand-value">{{ item.roleName }}</span>
      </Col>
      <Col span="12">
      <span class="expand-value">{{ item.roleDesc }}</span>
      </Col>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "tableExpandRow2",
  props: {
    row: Object
  }
};
</script>