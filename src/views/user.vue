<template>
  <div>
    <Button @click="modal2 = true">Custom header and footer</Button>
    <Modal v-model="modal2"
           width="360">
      <p slot="header"
         style="color:green;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>恭喜成功升级到VIP{{vipLevel}}</span>
      </p>
      <p slot="header"
         style="color:green;text-align:center">
        <span>获得称号【{{nickName[vipLevel-1].text}}】称号</span>
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
      }],
      nickName: [{
        text: '倔强青铜'
      }, {
        text: '持续白银'
      }, {
        text: '荣耀黄金'
      }, {
        text: '尊贵铂金'
      }, {
        text: '永恒钻石'
      }, {
        text: '最强王者'
      }, {
        text: '荣耀王者'
      }]
    }
  },
  /*
小萌新
倔强青铜 
持续白银 
荣耀黄金 
尊贵铂金 
永恒钻石 
最强王者 
荣耀王者

特殊VIP徽章 黑夜护眼 字体大小自定义 文章颜色自定义 每次登陆经验值+10 每日免费转盘一次
特殊VIP徽章 音乐播放 每次登陆经验值+15 每日免费转盘一次
特殊VIP徽章 页面背景自定义颜色 每次登陆经验值+20
特殊VIP徽章 每次登陆经验值+25

*/
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
