一、导入elementui组件
npm i element-ui -S
在main.js 中 import
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)我们

二、删除模板信息
删除不需要的模板信息

三、git 版本控制
> git / svn 
1. git init -> .git
2. git status
3. git add .
4. git commit -m "zhushi"
5. 在代码托管平台（github）新建远程仓库 
6. git remote add origin https://github.com/xlhtyckj/yqgl.git 关联仓库 
7. git push -u origin master 推送项目到仓库，需要输入用户密码 （之后再push,直接git push）

四、新建登录窗口
> 新建一个分支 登录功能
> 查看当前分支
    git branch
> 创建分支 
    gt checkout -b 分支名，需要显示出是开发还是上线等各阶段状态
    git checkout -b dev-login
> 新建组件+配置路由
    




