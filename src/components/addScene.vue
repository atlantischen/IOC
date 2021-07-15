<template>
  <div class="container">
    <div class="warper">
      <el-dialog
        center
        :title="title"
        v-model="dialogShowChange"
        @close="closeDialog"
      >
        <div class="box">
          <!-- <div class="set_t">
                <span>设置时间</span>

            </div>
            <div class="set_r"></div> -->
          <div class="set_t">
            <span>设置时间</span>
            <span>请设置触发场景执行的时间</span>
            <span>选择执行结果</span>
            <span>如果时间到点了就做什么？</span>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            size="mini"
            label-width="200px"
            class="demo-ruleForm"
          >
            <el-form-item label="&nbsp;" prop="date">
              <el-date-picker
                type="date"
                placeholder="设置时间"
                v-model="ruleForm.date"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="&nbsp;" prop="type">
              <el-select
                v-model="ruleForm.type"
                multiple
                placeholder="设置重复(可多选)"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="interval" prop="type" label="&nbsp;">
              <el-select
                v-model="ruleForm.type1"
                multiple
                placeholder="选择区域(可多选)"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="&nbsp;" prop="resource">
              <el-radio-group
                v-model="ruleForm.resource"
                @change="changeSelect"
              >
                <el-radio label="开关回路"></el-radio>
                <el-radio label="照明回路"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-show="isShow">
              <el-slider v-model="value"></el-slider>
            </el-form-item>

            <el-form-item label="&nbsp;" prop="region">
              <el-select v-model="ruleForm.region" clearable  placeholder="选择执行动作">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
                <div class="add_btn">添加执行动作</div>
              <!-- <el-button plain size="mini">添加执行动作</el-button> -->
            </el-form-item>
          </el-form>
        </div>
        <div class="btn">
            <div class="btn_i" @click="submitForm('ruleForm')">提交</div>
            <div class="btn_i" @click="closeDialog">取消</div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogShowChange: this.dialogShow,
      ruleForm: {
        region: "",
        date: "",
        type: [],
        type1: [],
        resource: "开关回路",
      },
      rules: {
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
         region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],

        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个选项",
            trigger: "change",
          },
        ],
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      isShow: false,
      value: 50,
   
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    dialogShow: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    dialogShow(val) {
      this.dialogShowChange = val;
    },
  },

  methods: {
    closeDialog() {
      this.$emit("dialogShowChange", false);
    },
    // 单选框
    changeSelect(val) {
      console.log(val);
      if (val === "照明回路") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

           this.$message({ message: "照明场景添加成功", type: "success" });
            this.$emit("dialogShowChange", false);

        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },

  created() {},
};
</script>

<style lang="less" scoped>
.container {
  :deep(.warper) {
    .el-dialog {
      width: 15.6875rem /* 1255/80 */ /* 1331/80 */ /* 1744/80 */ /* 1392/80 */ !important;
      height: 8.8875rem /* 711/80 */ /* 724/80 */ /* 920/80 */ /* 750/80 */
        /* 772/80 */ !important;
      margin-top: 15vh !important;
      background-image: url("../assets/img/dtjk_pic.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-color: transparent;
    }
    .el-overlay {
      overflow: hidden;
    }
    .el-dialog__body {
      padding-top: 0.125rem /* 10/80 */;
    }
    .el-dialog__headerbtn .el-dialog__close {
      font-size: 0.375rem /* 30/80 */ /* 20/80 */;
      color: #fff;
    }
    .el-dialog__title {
      color: #fff;
      font-size: 0.3rem /* 24/80 */;
    }
    .el-dialog__header {
      padding: 0.266667rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
    .el-input__inner {
      width: 4.0375rem /* 323/80 */ !important ;
      background-color: rgba(0, 0, 0, .3);
    //   opacity: .5;
    }
  }
  :deep(.box) {
    position: relative;

    padding: 0.625rem /* 50/80 */ 2rem /* 140/80 */ /* 120/80 */ 0 /* 80/80 */;
    display: flex;
    justify-content: space-around;
    .set_t {
      display: flex;
      flex-direction: column;
      font-size: 0.3rem /* 24/80 */;
      color: #fff;
      &>span{
          margin-bottom: .3125rem /* 25/80 */;
          line-height: .4375rem /* 35/80 */;
      }
      &>span:nth-child(even){
          font-size: .225rem /* 18/80 */;
      }
      &>span:nth-child(3){
          margin-top: .85rem /* 68/80 */
      }
    }
    .el-form {
      float: right !important;
    }
    .el-input__inner, .el-textarea__inner{
        color:#fff ;
    }
    .el-slider__runway{
        background-color: #224362;
    }
    .interval{
        margin-top: 1.1625rem /* 93/80 *//* 57/80 */;
    }
    .el-form-item {
        margin-bottom: .3125rem /* 25/80 */;
    }
    .el-form-item.is-required:not(.is-no-asterisk)
      .el-form-item__label-wrap
      > .el-form-item__label:before,
    .el-form-item.is-required:not(.is-no-asterisk)
      > .el-form-item__label:before {
      content: "*";
      color: #4396f3;
      margin-right: 0.053333rem;
      font-size: 0.375rem /* 30/80 */;
    }
    .add_btn{
          width: 100%;
          height: .375rem /* 30/80 */;
          text-align: center;
            color: #4396f3;
            background: #101F33;
        border: 1px solid #FFFFFF;
        border-radius: .0625rem /* 5/80 */;
    }
    .el-button {
      width: 100%;
      color: #4396f3;
    }
     &::before{
        content: '';
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translateX(-50%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);;
        width: 80%;
    }
    &::after{
        content: '';
        position: absolute;
        bottom:0;
        left: 50%;
        transform: translateX(-50%);
         border-bottom: 1px solid rgba(255, 255, 255, 0.5);;
        width: 80%;
    }
  }
  .btn{
      display: flex;
      justify-content: center;
      margin-top: .5rem /* 40/80 */;
      .btn_i{
          width: 1.5rem /* 120/80 */;
          height: .4375rem /* 35/80 */;
          line-height: .4375rem /* 35/80 */;
          text-align: center;
          background-color: #4396f3;
          color: #fff;
          box-shadow: 0px 2px 5px 0px #021323;
            border-radius: 5px;
      }
      .btn_i:last-child{
          margin-left: .4375rem /* 35/80 */;
          background: linear-gradient(0deg, #6F7C9C, #D8E8FA);
      }
  }
}
</style>
