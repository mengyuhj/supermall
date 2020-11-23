import {debounce} from "./utils";

// 混入对象 抽取复用代码
export const itemListenerMixin={
  data(){
    return {
      itemImageListener: null,
      newRefresh:null
    }
  },
  mounted(){
    //高频率刷新是可以调用防抖函数用于优化
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)

    //监听item中图片加载完成
    this.itemImageListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
  }
}