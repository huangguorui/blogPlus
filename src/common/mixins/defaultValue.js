/**
 * 
 * @author h
 */
export default {
    name: 'defaultValue',
    data() {
        return {
            isModalLoading: false, //模态框loading状态
            isModalClose: false, //是否关闭模态框
            isTableLoading: true, //表格loading
            isCloseDrawer: false, //是否关闭侧面窗口
            titleDrawer: "", //窗口标题
            delList: [], //删除列表
            isBtnDisable: true, //按钮状态

            search: { //搜索

            }

        }
    },
    computed: {

    },

    //开局刷新
    created() {
        // console.log("混入开始")
    },
    methods: {


    }
}