import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message  //导入弹框提示组件
} from 'element-ui'

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$message = Message;
