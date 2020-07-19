var jsData = [
    {
        itemName: "飞机大战",
        itemPic: "js-fjdz.jpg",
        itemUrl: "../../JavaScript/飞机大战/assets/index.html",
    },
    {
        itemName: "滚动时钟",
        itemPic: "js-gdsz.jpg",
        itemUrl: "../../JavaScript/时钟/滚动时钟.html",
    },
    {
        itemName: "LED时钟",
        itemPic: "js-ledsz.jpg",
        itemUrl: "../../JavaScript/时钟/LED时钟.html",
    },
    {
        itemName: "放大镜",
        itemPic: "js-fdj.jpg",
        itemUrl: "../../JavaScript/放大镜/放大镜.html",
    },
    {
        itemName: "手风琴",
        itemPic: "js-sfq.jpg",
        itemUrl: "../../JavaScript/手风琴/手风琴.html",
    },
    {
        itemName: "数字拼图",
        itemPic: "js-szpt.jpg",
        itemUrl: "../../JavaScript/数字拼图/数字拼图.html",
    },
];

var bsData = [
    {
        itemName: "Models",
        itemPic: "bs-models.jpg",
        itemUrl: "../../bootstrap/models/index.html",
    },
    {
        itemName: "派送喜悦",
        itemPic: "bs-psxy.jpg",
        itemUrl: "../../bootstrap/pantrysbest/pantrysbest.html",
    },
]

var c3Data = [
    {
        itemName: "3D柱形图",
        itemPic: "c3-3dzxt.jpg",
        itemUrl: "../../CSS3/3Dchart/chart.html",
    },
    {
        itemName: "背景视觉差",
        itemPic: "c3-bjsjc.jpg",
        itemUrl: "../../CSS3/背景视觉差/index.html",
    },
]

var h5Data = [

]

var part_js_row = document.querySelector(".part-js").querySelector(".row");
var part_bs_row = document.querySelector(".part-bs").querySelector(".row");
var part_c3_row = document.querySelector(".part-c3").querySelector(".row");
var part_h5_row = document.querySelector(".part-h5").querySelector(".row");


function createItem(partData,partRowDom) { 
    partData.forEach(function (element,index) { 
    
        var itemTop = document.createElement("div");
        itemTop.setAttribute("class","item-top");
        // var url = "background-image : url('page/img/" + element.itemPic + "')";
        // itemTop.setAttribute("style", url);
        itemTop.style.backgroundImage = "url('page/img/" + element.itemPic + "')";
    
    
        var itemTitle = document.createElement("div");
        itemTitle.setAttribute("class","item-title");
        itemTitle.innerText = element.itemName;
    
        var aDom = document.createElement("a");
        aDom.setAttribute("href",element.itemUrl);
        aDom.setAttribute("target","_blank");
    
        aDom.appendChild(itemTop);
        aDom.appendChild(itemTitle);
    
        var itemBox = document.createElement("div");
        itemBox.setAttribute("class","item-box");
    
        itemBox.appendChild(aDom);
    
        var node = document.createElement("div");
        node.setAttribute("class","col-xs-12 col-sm-6 col-md-4");
    
        node.appendChild(itemBox);
    
        partRowDom.appendChild(node);
        
     })
 }

 createItem(jsData,part_js_row);
 createItem(bsData,part_bs_row);
 createItem(c3Data,part_c3_row);
 createItem(h5Data,part_h5_row);