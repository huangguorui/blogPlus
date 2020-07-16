/**
 * 自定义列表混合带分页带条件查询
 * @author h
 */
export default {
    name: 'page',
    data() {
        return {
            api: {},
            apiList: {},
        }
    },
    computed: {

    },
    watch: {},
    created() {},
    methods: {
        getApi(apiList) {
            this.apiList = apiList
            this.getList(this.pageInfo)
        },
        //模块化的增删改查
        getList(data) {
            try {
                console.log(data)
            } catch (e) {
                console.log(e)
                return false
            }
            this.isTableLoading = true
            this.apiList.getListApi(data).then(res => {
                //数据处理
                this.pageInfo = res.pageInfo
                this.list = res.data.records
                this.isTableLoading = false
            }).catch(err => console.log(err))
        },
        deleteData() {
            this.isModalLoading = true
            this.apiList.postDeleteApi(this.delList).then(res => {
                //数据处理
                console.log(res)
                this.delList = []
                this.isModalLoading = false
                this.isModalClose = false
                this.getList(this.data)

            }).catch(err => console.log(err))
        },
        submitData(e) {
            this.isCloseDrawer = false
            //添加新的数据，拉取列表
            this.apiList.postSaveApi(e).then(res => {
                //数据处理
                console.log(res)
                this.getList(this.data)
            }).catch(err => console.log(err))

        },
        select(e) {
            if (e.length == 0) {
                this.delList = []
            }
            let id = []
            //分离出id进行发送
            e.forEach(item => {
                id.push(item.id)
            })
            this.delList = id
        },
        searchData() {
            this.getList(this.pageInfo)
            // console.log(this)

        },



    }
}