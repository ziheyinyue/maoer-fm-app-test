import { Button, Icon, Swipe, SwipeItem } from 'vant';

let plugins = [
    Icon, Swipe, SwipeItem, Button
]

export default function getVant(app) {
    plugins.forEach((item)=>{
        return app.use(item)
    })
}