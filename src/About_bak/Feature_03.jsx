import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { enquireScreen } from 'enquire-js';
import './less/edit.less';
import 'font-awesome/less/font-awesome.less';
import 'react-fontawesome';

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
                <div className="cmbox-container">
                    <ul className="item-box">

                        <li className="item-container">
                            <div className="item-pic"><img src={require('../imgs/hzPBTkqtFpLlWCi.jpg')} /></div>
                            <h3>关于云天化信息</h3>
                            <p>工业自动化、智能化解决方案和服务</p>
                        </li>

                        <li className="item-container">
                            <div className="item-pic"><img src={require('../imgs/hzPBTkqtFpLlWCi.jpg')} /></div>
                            <h3>关于云天化信息</h3>
                            <p>工业自动化、智能化解决方案和服务</p>
                        </li>

                        <li className="item-container">
                            <div className="item-pic"><img src={require('../imgs/hzPBTkqtFpLlWCi.jpg')} /></div>
                            <h3>关于云天化信息</h3>
                            <p>工业自动化、智能化解决方案和服务</p>
                        </li> 
                    </ul>
                </div>
            </div>
        )

    }
}