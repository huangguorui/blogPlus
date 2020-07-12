<style lang="less" scoped>
.title {
  color: #000;
  width: 80px;
  height: 30px;
  background: red;
  box-sizing: border-box;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  left: 3%;
  top: 0%;
  font-family: "kaiti";
}
.guide {
  margin-top: 10%;
  text-indent: 2em;
}
.slide-style {
  margin-bottom: 5%;
  height: auto;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 3%;
  position: relative;
  .title-slide {
    height: 30px;
    line-height: 30px;
    //background: red;
    box-sizing: border-box;
    text-align: left;
    color: #000;
    font-size: 15px;
    font-weight: 500;
  }
}

li {
  list-style: none;
  overflow: hidden;
}
.uls li {
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  margin: 2% 0;
}
.tag {
  display: flex;
  flex-wrap: wrap;
}
.tag li {
  background: #dcdee2;
  width: auto;
  padding: 0 3%;
  box-sizing: border-box;
  margin: 1%;
  height: 25px;
  border-radius: 5px;
  a {
    display: block;
    text-align: center;
    line-height: 25px;
  }
}
.news {
  width: 100%;
  height: auto;
  li:nth-child(1) {
    margin-top: 3%;
  }
  li {
    width: 100%;
    margin-bottom: 3%;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  img {
    float: left;
    width: 70px;
    height: 40px;
  }
  p {
    float: left;
    margin-left: 3%;
    line-height: 40px;
  }
}
.uls {
  height: auto;
  li {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
}
</style>

<template>
  <div>
    <Col :xs="24"
         :sm="8"
         :md="7"
         :lg="7"
         :style="{padding: '0 0 0 0'}">
    <div class="slide-style">
      <div class="title">个人博客</div>
      <div class="guide">
        该站主要用来技术探索，笔记记录该站主要用来技术探索，笔记记录......
      </div>
    </div>
    <div class="slide-style"
         style="display:none;">
      <div class="title-slide">随机好文</div>
      <ul class="news">
        <li v-for="item in list"
            :key="item.id">
          <a href="javascript:;">
            <img src="@/assets/logo.png">
            <router-link exact
                         tag="p"
                         :to="{path:'/article/id/'+item.id}">{{item.text|interceptStr(item.text)}}</router-link>
          </a>
        </li>
      </ul>
    </div>
    <div class="slide-style">
      <div class="title-slide">文章排行</div>
      <ul class="uls">
        <li v-for="(item,index) in list"
            :key="item.id">
          <p>
            <span style="margin-right:2%;">第{{index+1}}个</span>{{item.text|interceptStr(item.text)}}</p>
        </li>
      </ul>
    </div>
    <div class="slide-style">
      <div class="title-slide">标签云</div>
      <ul class="tag">
        <li v-for="item in tag"
            :key="item.id">
          <a href="javascript:;">{{item.text}}</a>
        </li>
      </ul>
    </div>
    </Col>
  </div>
</template>
<script>
export default {
  name: 'Slide',
  data () {
    return {
      list: [


        { id: 1, text: '利用swiper插件实现3D轮播效果 ' },
        { id: 2, text: 'mui中dtpicker组件--弹出日期选择器(移动端滑动日历)' },
        { id: 3, text: 'mui框架grid栅格布局 ' },
        { id: 4, text: 'jquery实现上传多个文件 (file类型) ，并能单个删除 ' },
        { id: 5, text: 'js利用substring ()替换指定长度的字符串' },
        { id: 6, text: '  原生js实现图片放大镜效果及原理分析      ' }
      ],
      tag: [
        { id: 1, text: 'Vue', },
        { id: 2, text: 'Web技术', },
        { id: 3, text: '前端', },
        { id: 4, text: 'javaScript学习指南', },
        { id: 5, text: '后端', },
        { id: 6, text: 'React', },
        { id: 7, text: 'Web前端', },
        { id: 8, text: 'Blog', },
        { id: 9, text: 'Elment UI', },
        { id: 10, text: 'CSS', },
        { id: 11, text: 'Iview UI', },
        { id: 12, text: 'HTML5', },
        { id: 13, text: 'MUI', },
        { id: 14, text: 'CSS3', },
        { id: 15, text: 'Float', },
        { id: 16, text: 'Axios', }
      ]
    }
  },
  filters: {
    interceptStr: function (value) {
      if (value.length >= 10) {
        return value.substr(0, 16) + "……"
      } else {
        return value
      }
    }
  }
}
</script>

