import service from "..";
// 获取首页轮播图
export function getBanner(){
    return service({
        method:"GET",
        url:"banner?type=2"
    })
}

// 直播List
export function getLiveList(){
    return service({
        method:"GET",
        url:"personalized?limit=7"
    })
}