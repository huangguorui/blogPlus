
<style  lang="less" scoped>
.box {
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 1%;
  padding: 2%;
  margin: 3% 0;
  box-sizing: border-box;
}
.box span {
  margin: 0 1%;
}
.mian-text {
  display: flex;
}
.img {
  width: 100%;
  height: auto;
  margin-right: 2%;
  overflow: hidden;
  border-radius: 5px;
  img {
    display: block;
    width: 100%;
    height: 130px;
    transition: all 0.6s;
  }
  &:hover img {
    transform: scale(1.2) rotate(5deg);
  }
}
.text {
}
.status {
  margin-top: 0.1%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  span {
    display: inline-block;
    padding: 1.1% 1%;
    text-align: center;
    width: 23%;
    height: 32px;
  }
  span:first-child {
    width: 35%;
  }
  span:last-child {
    border-radius: 5px;
    transition: all 0.6s;
    border: 1px solid #ccc;

    &:hover {
      box-sizing: border-box;
      border: 1px solid #57a3f3;
      cursor: pointer;
    }
  }
  .icon-user {
    height: 15px;
    margin-right: 3px;
    font-weight: 500;
  }
}
h2 {
  font-size: 16px !important;
  padding: 2.7px 0 !important;
}
</style>
<template>
  <div class="container"
       style="padding-bottom: 6.5%;">
    <Banner></Banner>

    <Row align="top">
      <Col :xs="24"
           :sm="24"
           :md="24"
           :lg="24">

      <div class="box"
           v-for="(item) in list"
           :key="item.id">
        <div class="mian-text">
          <Row>
            <Col :xs="24"
                 :sm="24"
                 :md="24"
                 :lg="24">
            <!-- <router-link exact
                         tag="div"
                         class="img"
                         style="cursor:pointer;"
                         :to="{path:'/article/id/'+item.id}"><img src="../assets/login-background.png"></router-link> -->
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="24"
                 :lg="24">
            <div class="text">
              <a href="javascript:;">
                <router-link exact
                             tag="h2"
                             :to="{path:'/article/id/'+item.id}">
                  {{item.title}}</router-link>
              </a>
              {{item.content}}
            </div>
            <!-- <div class="status">
              <span>
                <Icon type="ios-clock-outline"
                      size="13"
                      class="icon-user" />2019年01月01日</span>
              <span>
                <Icon type="ios-eye-outline"
                      class="icon-user" />999</span>
              <span>
                <Icon type="ios-text-outline"
                      size="13"
                      class="icon-user" />2人评论</span>
              <span class="none"
                    @click="fabulous(index)">
                <Icon type="ios-hand-outline"
                      size="13"
                      class="icon-user" />
                {{item.fabulousNumber}}人赞同</span>
              <router-link exact
                           class="none"
                           tag="span"
                           :to="{path:'/article/id/'+item.id}">
                <Icon type="md-heart-outline"
                      size="13"
                      class="icon-user" />Primary</router-link>
            </div> -->
            </Col>
          </Row>

        </div>
      </div>
      <Page :page-data="pageInfo"
            @pageChange="pageChange"
            @pagSizesChange="pageSizeChange"></Page>
      </Col>
    </Row>

  </div>
  </div>

</template>
<script>
// Do not use built-in or reserved HTML elements as component id: XXX  https://blog.csdn.net/shooke/article/details/72801735  模板为关键字
// @ is an alias to /src
import Banner from '@/components/banner/banner.vue'
// import Slide from '@/components/slide/slide.vue'
import Page from '@/components/page/page.vue'
import pageM from "../common/pageM"

export default {
  name: 'Index',
  mixins: [pageM],
  components: {
    Banner,
    // Slide,
    Page
  },

  data () {
    return {
      list: [
        {
          id: 1,
          fabulousNumber: 99,
          title: "",
          description: "",
          content: "",
          created: "",
        }
      ],
      pageInfo: {
        current: 1,
        size: 5,
        pages: 1,
        total: 1,
      }

    }
  },
  methods: {
    ok (e) {
      console.log(e)
    },
    getList (data) {
      this.$axios({
        url: "http://localhost:8081/blogs?currentPage=" + data.current + "&size=" + data.size,
        method: "get",
        params: {}
      }).then(res => {
        console.log(res)

        //获取分页
        this.pageInfo.current = res.data.data.current
        this.pageInfo.pages = res.data.data.pages
        this.pageInfo.size = res.data.data.size
        this.pageInfo.total = res.data.data.total

        res.data.data.records.forEach((item, i) => {
          res.data.data.records[i].fabulousNumber = 0
          res.data.data.records[i].content = res.data.data.records[i].content.slice(0, 200)
        })
        this.list = res.data.data.records
        // 赋值以后添加，修改的值是不会被vue监听的
        this.list.forEach((item, i) => {
          this.list[i].fabulousNumber = 1
        })
      })
    },
    fabulous (id) {
      this.$Message.success('点赞成功，积分+10');


      this.list[id].fabulousNumber = ++this.list[id].fabulousNumber
      console.log(this.list[id])
    }
  },
}
</script>
