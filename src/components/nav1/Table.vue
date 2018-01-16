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
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100">
        </el-table-column>
        <el-table-column prop="birth" label="生日" width="120">
        </el-table-column>
        <el-table-column prop="addr" label="地址" min-width="180">
        </el-table-column>
        <!--<el-table-column label="操作" width="150">-->
          <!--<template scope="scope">-->
            <!--<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
            <!--<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
      </el-table>

      <!--编辑界面-->
      <!--<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">-->
        <!--编辑-->
        <!--<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">-->
          <!--<el-form-item label="姓名" prop="name">-->
            <!--<el-input v-model="editForm.name" auto-complete="off"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="性别">-->
            <!--<el-radio-group v-model="editForm.sex">-->
              <!--<el-radio class="radio" :label="1">男</el-radio>-->
              <!--<el-radio class="radio" :label="0">女</el-radio>-->
            <!--</el-radio-group>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="年龄">-->
            <!--<el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="生日">-->
            <!--<el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="地址">-->
            <!--<el-input type="textarea" v-model="editForm.addr"></el-input>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
        <!--<div slot="footer" class="dialog-footer">-->
          <!--<el-button @click.native="editFormVisible = false">取消</el-button>-->
          <!--<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>-->
        <!--</div>-->
      <!--</el-dialog>-->

      <!--新增界面-->
      <!--<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">-->
        <!--增加-->
        <!--<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">-->
          <!--<el-form-item label="姓名" prop="name">-->
            <!--<el-input v-model="addForm.name" auto-complete="off"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="性别">-->
            <!--<el-radio-group v-model="addForm.sex">-->
              <!--<el-radio class="radio" :label="1">男</el-radio>-->
              <!--<el-radio class="radio" :label="0">女</el-radio>-->
            <!--</el-radio-group>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="年龄">-->
            <!--<el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="生日">-->
            <!--<el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="地址">-->
            <!--<el-input type="textarea" v-model="addForm.addr"></el-input>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
        <!--<div slot="footer" class="dialog-footer">-->
          <!--<el-button @click.native="addFormVisible = false">取消</el-button>-->
          <!--<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>-->
        <!--</div>-->
      <!--</el-dialog>-->

    </template>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        editFormVisible: false,  // 编辑界面是否显示
        editLoading: false,
        addFormVisible: false,  // 新增界面是否显示
        addLoading: false,
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

      },
      handleEdit: function (index, row) {  // 显示编辑界面
        this.editFormVisible = true
        this.editForm = Object.assign({}, row)
      },
      handleAdd: function () {  // 显示新增界面
        this.addFormVisible = true
        this.addForm = {
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        }
      },
      handleDel: function (index, row) {  // 删除
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true
//           NProgress.start()
//          let para = { id: row.id }
//          removeUser(para).then((res) => {
//            this.listLoading = false
//            // NProgress.done();
//
//            this.$message({
//              message: '删除成功',
//              type: 'success'
//            })

//            this.getUsers()
//          })
        }).catch(() => {

        })
      }
    }
  }
</script>
