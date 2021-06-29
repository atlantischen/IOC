<template>
  <!-- 警报确认 -->
  <div class="alarmAck">
    <button class="testBtn" @click="sureAlarmFun">警报确认</button>
    <RightAlert :fade="isFade" class="sureAlarm">
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm alarmAckForm"
        >
          <p class="formTitle">警报确认</p>
          <el-form-item label="警报对象" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="警报类型" prop="type">
            <el-input v-model="ruleForm.type"></el-input>
          </el-form-item>
          <el-form-item label="报警原因" prop="because">
            <el-input type="textarea" v-model="ruleForm.because"></el-input>
          </el-form-item>
          <el-form-item label="处理人" prop="handler">
            <el-input v-model="ruleForm.handler"></el-input>
          </el-form-item>
          <el-form-item label="处理结果" prop="result">
            <el-input type="textarea" v-model="ruleForm.result"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >确认警报</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </RightAlert>
  </div>
</template>

<script>
export default {
  name: "alarmAck",
  data() {
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
  mounted() {},
  methods: {
    submitForm(formName) {
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    sureAlarmFun() {
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
    right: 0;
    color: #fff;
    background: #02597f;
    z-index: 101;
    :deep(.alarmAckForm) {
      padding: 0.125rem /* 10/80 */ 0.375rem /* 30/80 */ 0.125rem /* 10/80 */
        0.25rem /* 20/80 */;
      .formTitle {
        font-size: 0.25rem /* 20/80 */;
      }
      .el-form-item__label {
        color: #fff;
      }
      .el-input__inner {
        height: 0.375rem /* 30/80 */;
      }
    }
  }
}
</style>
