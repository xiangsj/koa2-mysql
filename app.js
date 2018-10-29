const Koa = require('koa'); //引入koa
 
const app = new Koa();        //new 一个koa事例
 
app.use(async(ctx)=>{         //中间件
    ctx.body = 'hello world';
})
 
app.listen(3000,() => {       //监听端口
    console.log("success port on 3000");     //成功后打印这句话
})