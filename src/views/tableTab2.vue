<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="12">
      <span class="expand-key">资源名称: </span>
      </Col>
      <Col span="12">
      <span class="expand-key">资源路径: </span>
      </Col>
      <Col span="24"
           style="padding:10px 0"
           v-for="item in row.permissions"
           :key="item.id">
      <Col span="12">
      <span class="expand-value">{{ item.permissionName }}</span>
      </Col>
      <Col span="12">
      <span class="expand-value">{{ item.url }}</span>
      </Col>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
};
</script>