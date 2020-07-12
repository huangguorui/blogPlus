<style lang="less" scoped>
.ibutton {
  margin-top: 10px;
  margin-left: 10px;
  color: #fff;
  border: 1px solid #c1c1c1;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 7px;
  width: 50px;
  height: 40px;
}
#play {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div>
    <div id="play"
         v-if="message===1">{{message}}
      <span>输入数字,点击开始,会生成对应输入数字的表格,从表格中数字1开始点击,按顺序点击到最后....</span><br /> <input type="number"
             v-model="num" />
      <button @click='arr'>开始</button>
      <br />
      <div v-for="(index, item) in list"
           :key="item">

        <template v-if="index % num == 0 && index!=0"><br><br><br></template>

        <div style="float: left;">
          <button class="ibutton"
                  @click='time(item)'>{{item}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'oneGame',
  data: function () {
    return {
      num: 2,
      list: [],
      startTime: 0,
      endTime: 0,
      checkNum: 0
    };
  },
  created () {
    //console.log('启动', this.message)
  },
  props: {
    message: {
      type: Number,
      default: -1
    }
  },
  methods: {
    arr: function () {
      if (this.num > 20) {
        alert('数值过大,浏览器会死掉,最好不要大于20');
        return;
      }
      this.checkNum = 0;
      var arrlength = this.num * this.num;
      var arr = new Array(arrlength);
      var index = 0;
      for (var i = 1; i <= arrlength; i++) {
        //生成随机数
        var num = Math.random(); //Math.random()：得到一个0到1之间的随机数
        num = Math.ceil(num * arrlength); //num*?的取值范围在0~?之间,使用向上取整就可以得到一个1~?的随机
        if (arr[0] != 0) {
          var flag = false; // 控制是否存在重复元素
          // 遍历生产数组中的元素
          for (var j = 0; j < arr.length; j++) {
            if (num != arr[j]) {
              flag = true;
            } else {
              flag = false;
              break;
            }
          }
          if (flag == true) {
            arr[index++] = num;
          } else {
            // 发现有重复元素重新产生新的随机数
            i--;
          }
        } else {
          arr[index++] = num;
        }

      }
      this.list = arr;
    },
    time: function (item) {
      if (this.checkNum + 1 != item) {
        alert('game over');
        this.checkNum = 0;
        return;
      }
      var date = new Date();
      if (item == 1) {
        this.startTime = date.getTime();
      }
      if (item == this.num * this.num) {
        this.endTime = date.getTime();
        var useTime = ((this.endTime - this.startTime) / 1000).toFixed(2);
        alert('使用了' + useTime + '秒');
        this.checkNum = 0;
        return;
      }
      this.checkNum = item;
    }
  }
}
</script>

