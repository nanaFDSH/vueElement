<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="姓名" v-model="input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getUser">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <template>
      <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" sortable>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" sortable>
        </el-table-column>
        <el-table-column prop="birth" label="生日" width="120" sortable>
        </el-table-column>
        <el-table-column prop="addr" label="地址" min-width="180" sortable>
        </el-table-column>
      </el-table>
    </template>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        input: '',
        users: [
            {'addr': '福建省 三明市 三元区', 'age': '34', 'birth': '2005-08-11', 'id': '4296D4FA-195c-aA8D-E7FD-c9Bb537f1AA9', 'name': '钱霞', 'sex': 1},
            {'addr': '福建省 三明市 三元区', 'age': '12', 'birth': '2012-08-11', 'id': '4296D4FA-195c-aA8D-E7FD-c9Bb537f1AA8', 'name': '张三', 'sex': 0},
            {'addr': '福建省 三明市 三元区', 'age': '60', 'birth': '2017-08-11', 'id': '4296D4FA-195c-aA8D-E7FD-c9Bb537f1AA7', 'name': '李四', 'sex': 1}
        ]
      }
    },
    mounted () {
    },
    methods: {
      formatSex: function (row, column) { // 性别显示转换
        return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
      },
      getUser: function () { // 查询

      }
    }
  }
</script>
