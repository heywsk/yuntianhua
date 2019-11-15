import React from 'react';
/*
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: require('../imgs/ythlogo.png'),
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: { href: '/', children: [{ children: '首页', name: 'text' }] },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '/about',
          children: [{ children: '关于', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: '产品与研发', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '/product',
          children: [{ children: '资质', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};*/
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5 k2ogviy0kg-editor_css' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>云天化信息&nbsp;</p>
          </>
        ),
        className: 'banner5-title k2oh3tvma4-editor_css',
      },
      {
        name: 'explain',
        className: 'banner5-explain k2oh4futkii-editor_css',
        children: (
          <>
            <p>工业信息化、智能化服务平台&nbsp;</p>
          </>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content k2oh4ohhgu8-editor_css',
        children: (
          <>
            <p>
              一段80字左右的文字，如是什么东西之类的文字，最好是三行这样显得丰富一些。&nbsp;
            </p>
          </>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '/about',
          className: 'banner5-button k2oh4s55wjn-editor_css',
          type: 'primary',
          children: '了解更多',
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children: require('../imgs/ibntx.png'),
  },
};
export const Pricing00DataSource = {
  wrapper: {
    className: 'home-page-wrapper pricing0-wrapper k2t44alun5q-editor_css',
  },
  OverPack: {
    playScale: 0.3,
    className: 'home-page pricing0 k2ot02p9ewb-editor_css',
  },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children: require('../imgs/sl_i2.png'),
  },
  childWrapper: {
    className: 'pricing0-text-wrapper k2t44cktnu-editor_css',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>工业互联网</p>
          </>
        ),
        className: 'pricing0-title k2ot7ocbtal-editor_css',
      },
      {
        name: 'content',
        children: (
          <>
            <p>
              设备管理,基于快速开发平台，配置型系统，智能仓储基于快速开发平台，配置型系统，一句话简介，生产管理基于快速开发平台，一句话简介；电子作业票管理一句话简介，50字左右；智慧园区管理基于快速开发平台，配置型系统
            </p>
          </>
        ),
        className: 'pricing0-content k2ot7w7xqa-editor_css',
      },
      {
        name: 'button',
        children: {
          icon: '',
          href: '/Industry',
          type: 'primary',
          children: (
            <>
              了解产品
            </>
          ),
          className: 'k2sp890o8lg-editor_css',
        },
        className: 'k2sp7gg87ta-editor_css',
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper k2oj6vgxhbc-editor_css',
  },
  page: { className: 'home-page content0 k2ot3gk4ae-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>云服务</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon k2ojdmgiyhl-editor_css',
              children: require('../imgs/ico_yun1.png'),
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>物流信息共享</p>
                </>
              ),
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
            {
              name: 'button',
              children: {
                icon: '',
                href: '/Industry',
                type: 'primary',
                children: (
                  <>
                    了解产品
                  </>
                ),
                className: 'hobtn-cm-editor_css',
              },
              className: 'hobtn-cm-wrap-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: require('../imgs/ico_yun2.png'),
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>追溯云</p>
                </>
              ),
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
            {
              name: 'button',
              children: {
                icon: '',
                href: '/Industry',
                type: 'primary',
                children: (
                  <>
                    了解产品
                  </>
                ),
                className: 'hobtn-cm-editor_css',
              },
              className: 'hobtn-cm-wrap-editor_css',
            },
            
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: require('../imgs/ico_yun3.png'),
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>电子商务</p>
                </>
              ),
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
            {
              name: 'button',
              children: {
                icon: '',
                href: '/Industry',
                type: 'primary',
                children: (
                  <>
                    了解产品
                  </>
                ),
                className: 'hobtn-cm-editor_css',
              },
              className: 'hobtn-cm-wrap-editor_css',
            },
          ],
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: {
    className: 'home-page-wrapper content7-wrapper k2ojisjcrv-editor_css',
  },
  page: { className: 'home-page content7 k2ot4trrfuh-editor_css' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>服务</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <>
            <p>丰富的技术组件，简单组装即可快速搭建工业级应用</p>
          </>
        ),
      },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>服务</p>
              </>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'cloud-server' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>技术</h3>
                  <p>
                    丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                  </p>
                  <br />
                  <h3>融合</h3>
                  <p>
                    解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                  </p>
                  <br />
                  <h3>
                    开放
                  </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            children: require('../imgs/conpic1.png'),
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'elem~k2otw3cnrfi',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>技术特点</p>
              </>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'file-protect' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>技术</h3>
                  <p>
                    丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                  </p>
                  <br />
                  <h3>融合</h3>
                  <p>
                    解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                  </p>
                  <br />
                  <h3>
                    开放
                  </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            children: require('../imgs/conpic2.png'),
            md: 10,
            xs: 24,
          },
        },
      },
    ],
  },
};
export const Content40DataSource = {
  wrapper: {
    className: 'home-page-wrapper content4-wrapper k2ojrlmno0r-editor_css',
  },
  page: { className: 'home-page content4 k2ot51gq9wa-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>视频</p>
          </>
        ),
        className: 'title-h1 k2otfvrsvoc-editor_css',
      },
    ],
  },
  video: {
    className: 'content4-video',
    children: {
      video: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
      image: require('../imgs/video-poster.jpg'),
    },
  },
};
export const Feature01DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper k2oxr7s3oh7-editor_css',
  },
  page: { className: 'home-page content0 k2oxtiujeuf-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>资质</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper k2oxrwhje6d-editor_css',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon k2oxr5i6f9a-editor_css',
              children: require('../imgs/zhengshu.jpg'),
			  zmage:1,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>软件著作权</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>信息系统快速开发平台</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block~k2oxuo5rie',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon k2oxr5i6f9a-editor_css',
              children: require('../imgs/zhengshu.jpg'),
			  zmage:1,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>软件著作权</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>信息系统快速开发平台</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block~k2oxupbdq5b',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon k2oxr5i6f9a-editor_css',
              children: require('../imgs/zhengshu.jpg'),
			  zmage:1,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>软件著作权</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>信息系统快速开发平台</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: {
    className: 'home-page-wrapper content5-wrapper k2t47fq3c3p-editor_css',
  },
  page: { className: 'home-page content5 k2ot5w1nvze-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>客户</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>在这里用一段话介绍服务的客户情况</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: require('../imgs/logo_img.png') },
          content: {
            children: (
              <>
                云天化信息
              </>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: require('../imgs/logo_img.png') },
          content: {
            children: (
              <>
                云天化信息
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: require('../imgs/logo_img.png') },
          content: {
            children: (
              <>
                云天化信息
              </>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: require('../imgs/logo_img.png') },
          content: {
            children: (
              <>
                云天化信息
              </>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: require('../imgs/logo_img.png') },
          content: {
            children: (
              <>
                云天化信息
              </>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: require('../imgs/logo_img.png') },
          content: {
            children: (
              <>
                云天化信息
              </>
            ),
          },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: require('../imgs/logo_img.png') },
          content: {
            children: (
              <>
                云天化信息
              </>
            ),
          },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: require('../imgs/logo_img.png') },
          content: {
            children: (
              <>
                云天化信息
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2019 <a href="https://www.ythit.cn">云天化信息</a> All Rights
          Reserved. 滇ICP备1905468247-1
        </span>
      </>
    ),
  },
};
