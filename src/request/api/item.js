import service from "..";

// 获取歌单详情页数据
export function getMusicItemList(id) {
    return service({
        method:"GET",
        url:`playlist/detail?id=${id}`
    })
}