<template>
    <div class="heyroom-header">

<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#FFFFFF"
  text-color="#000000"
  active-text-color="#000000">
  <el-menu-item index="1"><a href="https://toefl.liuxueheyroom.cn" class="nav" target="_blank">TOEFL</a></el-menu-item>
  <el-menu-item index="2"><a href="https://gre.liuxueheyroom.cn" class="nav" target="_blank">GRE</a></el-menu-item>
  <el-menu-item index="3"><a href="https://ielts.liuxueheyroom.cn" class="nav" target="_blank">IELTS</a></el-menu-item>
  <el-menu-item index="4"><a href="https://gmat.liuxueheyroom.cn" class="nav" target="_blank">GMAT</a></el-menu-item>
  <el-submenu index="5">
    <template slot="title">课程集训</template>
    <el-menu-item index="5-1">定制课程</el-menu-item>
    <el-menu-item index="5-2">真题集训</el-menu-item>
    <el-menu-item index="5-3">保分预测</el-menu-item>
    <el-menu-item index="5-4">学员感言</el-menu-item>
  </el-submenu>
  <el-submenu index="6" >
      <template slot="title">留学申请</template>
      <el-menu-item  index="6-1">DIY申请</el-menu-item>
      <el-menu-item  index="6-2">高端申请</el-menu-item>
      <el-menu-item  index="6-3">保录项目</el-menu-item>
      <el-menu-item  index="6-4">学员案例</el-menu-item>
  </el-submenu>
  <el-submenu index="7">
      <template slot="title">粉丝地带</template>
      <el-menu-item index="7-1">活动专区</el-menu-item>
      <el-menu-item index="7-1">福利专区</el-menu-item>
      <el-menu-item index="7-1">精选文章</el-menu-item>
  </el-submenu>
  <el-menu-item index="8">认识我们</el-menu-item>
</el-menu>

     </div>
</template>



<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key:string, keyPath:string) {
        console.log(key, keyPath);
      }
    }
    
    
})
</script>


