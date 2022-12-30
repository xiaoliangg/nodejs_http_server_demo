## 运行
node app.js 8081 &  
node app.js 8082 &  
node app.js 8083 &  
// 结尾处的& 代表着：以后台任务模式运行该程序，以下指令或许对你有用(我没在win机器上试过)  
//显示所有后台进程：jobs  
//把最近创建的后台任务变成普通进程：fg  
//把普通进程变成后台任务：CTRL+z  


## 请求:
node server.js  
//然后我们可以在另一个命令行窗口用curl测试，或者在浏览器中访问：localhost:8080  
curl -X GET localhost:8080  

## 参考
[简单NodeJS负载均衡(逐次对多个node进程的HTTP代理)](http://eisneim.github.io/articles/2014-12-3-nodejs_load_banlancer_using_http_proxy.html) 印象笔记有备份  