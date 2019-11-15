import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { enquireScreen } from 'enquire-js';
import './less/edit.less';
//import './index.less';
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
                <div className="fu-container bg-xzpiypc cbg">
                     <div className="ant-row row-con-box"> 
                   <div className="ant-col  ant-col-xs-24 ant-col-md-24">
                       <center>
                   <h2>关于云天化信息</h2>
                        <h3>工业自动化、智能化解决方案和服务</h3>
                        <p>云天化集团有限责任公司是以化肥及现代农业、玻纤新材料为主业，石油化工、磷矿采选及磷化工 商贸及制造服务、产业金融等业务板块多元发展的国有综合性产业集团。</p>
                   </center>
                   </div>                 
                   </div>
                  
                </div>
            </div>
        )

    }
}