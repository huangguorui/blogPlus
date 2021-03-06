/**
 * 自定义列表混合带分页带条件查询
 * @author Maybe
 */
export default {
    name: 'List',
    data() {
        return {
            pageInfo: {
                current: 1,
                size: 5,
                pages: 1,
                total: 1,
            },
            // query: {
            //     search: '', //搜索
            //     page: 1, //第一页
            //     page_size: 10, //页数
            //     count: 0,
            //     multipleSelection: [], //删除选中的数据
            //     DelId: [], //被删除数据的id
            // },
        }
    },
    computed: {

    },
    watch: {},
    //开局刷新
    created() {
        console.log("混入开始")
        this.getList(this.pageInfo)
    },
    methods: {
        //点击分页
        pageChange(e) {
            this.pageInfo.current = e

            this.getList(this.pageInfo)

        },
        //更换每页显示数量
        pageSizeChange(e) {
            this.pageInfo.size = e
            console.log("e=" + this.pageInfo.size)
            this.getList(this.pageInfo)
        },



    }
}