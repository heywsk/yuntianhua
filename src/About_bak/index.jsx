import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { enquireScreen } from 'enquire-js';
import './less/edit.less';
import Feature_01 from './Feature_01';
import Feature_02 from './Feature_02';
import Feature_03 from './Feature_03';
import Topic from './topic';
import Topic_c from './topic_c';
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port, // 如果不是 dva 2.0 请删除
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
        // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
        /* 如果不是 dva 2.0 请删除 start */
        if (location.port) {
            // 样式 build 时间在 200-300ms 之间;
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
        /* 如果不是 dva 2.0 请删除 end */
    }

    render() {
        const animType = {
            queue: 'bottom',
            one: {
                y: '+=30',
                opacity: 0,
                type: 'from',
                ease: 'easeOutQuad',
            },
        };
        return (
            <div>

             

                
                <Topic />
                <Feature_01 />
               <div className="bg-zsxnghf"><Feature_02 /> </div>
               
               
              
               



            </div>
        )

    }
}