import service from "..";
// 获取首页轮播图
export function getBanner(){
    return service({
        method:"GET",
        url:"banner?type=2"
    })
}

// 猜你喜欢List
export function getLikeList(){
    return service({
        method:"GET",
        url:"personalized?limit=6"
    })
}

// 直播List
export function getLiveList(){
    return service({
        method:"GET",
        url:"personalized/newsong?limit=7"
    })
}

// 播放量数字加单位
export function changeCount(num){
    if(num>=100000000) {
        return (num / 100000000).toFixed(1) + "亿";
    } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
    } else {
        return num;
    }
}