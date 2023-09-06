var rule={
    title:'追剧影视',
    host:'https://www.a2mu.com',
    url:'/t/fyclass-fypage.html',
    searchUrl:'/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    class_parse:'.myui-header__menu&&li:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.myui-vodlist.clearfix;li;a&&title;img&&src;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist li;a&&title;img&&src;.pic-text&&Text;a&&href',
    二级:{"title":".myui-content__detail .title&&Text;.t-muted:eq(-1)&&Text","img":".lazyload&&src","desc":".text-muted:eq(-1)&&Text;.text-muted:eq(-5)&&Text;.myui-content__detail p:eq(4)&&Text;.myui-content__detail p:eq(5)&&Text;.myui-content__detail p:eq(6)&&Text","content":".content&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    搜索:'.myui-vodlist__media li;a&&title;*;*;a&&href;.text-muted:eq(-1)&&Text',
}
