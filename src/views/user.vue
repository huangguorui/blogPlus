<template>
  <div>
    <Button @click="modal2 = true">Custom header and footer</Button>
    <Modal v-model="modal2"
           width="360">
      <p slot="header"
         style="color:green;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>恭喜成功升级到VIP{{vipLevel}}</span>
        <span>获得称号{{vipLevel}}</span>
      </p>
      <div>
        <p>您已经成功解锁如下功能</p>
        <ul style="text-align:left;margin-left:10%;line-height: 25px;padding: 5px;padding: 10px 0 0 0; "
            v-for="item in unlockText"
            :key="item.id">

          <li v-show="vipLevel==item.id"
              v-for="(list,index) in item.text"
              :key="index">{{index+1}}、{{list}}</li>

        </ul>
      </div>
      <div slot="footer">
        <Button type="success"
                size="large"
                long
                :loading="modal_loading"
                @click="del">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modal2: false,
      modal_loading: false,
      vipLevel: 1,
      unlockText: [{
        id: 1,
        text: ['黑夜护眼功能111', '界面文章字体大小自定义111', '文字颜色修改111']
      }, {
        id: 2,
        text: ['黑夜护眼功能222', '界面文章字体大小自定义222', '文字颜色修改222']
      }, {
        id: 3,
        text: ['黑夜护眼功能333', '界面文章字体大小自定义333', '文字颜色修改333']
      }]

    }
  },
  methods: {
    del () {
      this.modal_loading = true;
      setTimeout(() => {
        this.modal_loading = false;
        this.modal2 = false;
        this.$Message.success('Success');
      }, 1000);
    }
  }
}
</script>
