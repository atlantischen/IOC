<template>
  <!-- 警报确认 -->
  <div class="alarmAck">
    <button class="testBtn" @click="sureAlarmFun">警报确认</button>
    <RightAlert :fade="isFade" class="sureAlarm">
      <p class="formTitle">警报确认</p>
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm alarmAckForm mniBar"
        >
          <el-form-item label="警报对象：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="警报类型：" prop="type">
            <el-input v-model="ruleForm.type"></el-input>
          </el-form-item>
          <el-form-item label="报警原因：" prop="because">
            <el-input
              type="textarea"
              :rows="3"
              v-model="ruleForm.because"
            ></el-input>
          </el-form-item>
          <el-form-item label="处理人：" prop="handler">
            <el-input v-model="ruleForm.handler"></el-input>
          </el-form-item>
          <el-form-item label="处理结果：" prop="result">
            <el-input
              type="textarea"
              :rows="3"
              v-model="ruleForm.result"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="form_bt x_c">
        <el-button
          class="formBtn"
          type="primary"
          @click="submitForm('ruleForm')"
          >确认警报</el-button
        >
      </div>
    </RightAlert>
  </div>
</template>

<script>
export default {
  name: "alarmAck",
  data () {
    return {
      isFade: false,
      ruleForm: {
        name: "",
        type: "",
        because: "",
        handler: "",
        result: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入报警对象", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        type: [{ required: true, message: "请输入报警类型", trigger: "blur" }],
        because: [
          {
            required: true,
            message: "请输入报警原因",
            trigger: "blur",
          },
        ],
        handler: [
          {
            required: true,
            message: "请输入处理人",
            trigger: "blur",
          },
        ],
        result: [
          { required: true, message: "请输入处理结果", trigger: "blur" },
        ],
      },
    };
  },
  components: {},
  mounted () { },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sureAlarmFun();
          this.$message.success("已确认警报！");
          this.resetForm("ruleForm");
        } else {
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    sureAlarmFun () {
      this.isFade = !this.isFade;
      if (this.isFade) {
        this.ruleForm = {
          name: "中心广场摄像机",
          type: "物品偷盗",
          because: "摄像头侦测报警",
          handler: "梁海山",
          result: "已派人通知查看",
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.alarmAck {
  .testBtn {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 101;
  }
  .sureAlarm {
    width: 4.25rem /* 340/80 */;
    height: 6.25rem /* 500/80 */;
    right: 0.25rem /* 20/80 */;
    overflow: hidden;
    color: #fff;
    background: #0a131f;
    border: 1px solid #4396f3;
    box-shadow: inset 0 5px 15px 0.1px rgba(67, 149, 243, 0.5);
    -moz-box-shadow: inset 0 5px 15px 0.1px rgb(67, 150, 243, 0.5);
    -webkit-box-shadow: inset 0 5px 15px 0.1px rgb(67, 150, 243, 0.5);
    border-radius: 0px 0px 5px 5px;
    padding: 0.125rem /* 10/80 */ 0 0.125rem /* 10/80 */ 0.25rem /* 20/80 */;
    z-index: 101;
    .formTitle {
      font-size: 0.2rem /* 16/80 */;
      padding: 10px 0;
    }
    .form_bt {
      width: 100%;
      padding: 0.3125rem /* 25/80 */ 0 0.25rem /* 20/80 */;
      .formBtn {
        width: 2.5rem /* 200/80 */;
        height: 0.25rem /* 20/80 */;
        background: #4396f3;
      }
    }
    :deep(.alarmAckForm) {
      height: 4.375rem /* 350/80 */;
      overflow-y: auto;
      font-size: 0.175rem /* 14/80 */;
      padding-right: 0.375rem /* 30/80 */;
      .el-form-item__label {
        width: 1.25rem /* 100/80 */;
        text-align: left;
        color: #fff;
      }
      .el-form-item {
        margin-bottom: 10px;
      }
      .el-textarea__inner {
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid #4396f3;
        background: transparent;
        border-radius: 0;
      }
      .el-input__inner {
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid #4396f3;
        height: 0.4375rem /* 35/80 */;
        background: transparent;
        border-radius: 0;
      }
    }
  }
}
</style>
