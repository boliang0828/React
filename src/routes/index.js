import  {
    Article,
    Login,
    Notfound,
} from "../views"   //引入页面


// /login 页面    /404  页面  
export const mainRoute = [
    {
        pathname:"/login",
        component:Login
    },
    {
        pathname:"/404",
        component:Notfound
    }
]


// /admin/XXX   dashboard article articleEdit settings  管理页面
export const admainRoute = [
    {
        pathname:"/admin/article",
        component:Article,
        exact:true  //配置App内置路由需要exact属性,详情见下文
    },
]
