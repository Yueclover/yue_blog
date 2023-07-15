export interface YueTableData{
    blog_id:string,
    blog_name:string,
    class_id:string,// 类别id
    class_name:string,
    author_id:string,
    author_name:string,
    write_time:string,// 第一次保存时间
    edit_time:string,// 最新编辑时间
    publish_time:string,// 发布时间
    browser_times:string,// 浏览量
    like_times:string,// 点赞量
    favorite_times:string,// 收藏
    forwarding_times:string,// 转发
}