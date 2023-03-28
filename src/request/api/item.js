import service from "..";

// 获取歌单详情页数据
export function getMusicItemList(id) {
    return service({
        method:"GET",
        url:`playlist/detail?id=${id}`
    })
}

// 获取歌单内所有歌曲/playlist/track/all?id=24381616&limit=10&offset=1
export function getMusicItemAll(id) {
    return service({
        method:"GET",
        url:`playlist/track/all?id=${id}&limit=10&offset=0`
    })
}