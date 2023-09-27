/** 模拟获取报名结果页的方法 */
import {
  config
} from '../config/index';
import delay from './delay';

const atvInfo = {
  img: '/src/imgs/activity/bc.png',
  name: '2021 SICC服务设计创新大会',
  date: '2021年3月16日',
  location: '深圳市腾讯滨海大厦'
};
const userInfo = {
  profile: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
  name: '蔡宣轩',
  tags: ['29岁', '设计师/艺术从业者']
};
const shareGrid = {
  friends: [
    {
      label: 'Allen',
      image: '/src/imgs/result/pro2.png'
    },
    {
      label: 'Nick',
      image: '/src/imgs/result/pro1.png'
    },
    {
      label: 'Jacky',
      image: '/src/imgs/result/pro4.png'
    },
    {
      label: 'Eric',
      image: '/src/imgs/result/pro3.png'
    }
  ],
  media: [
    {
      label: '微信',
      image: 'https://tdesign.gtimg.com/miniprogram/logo/wechat.png',
    },
    {
      label: 'QQ',
      image: 'https://tdesign.gtimg.com/miniprogram/logo/qq.png',
    },
    {
      label: 'Doc',
      image: '/src/imgs/result/doc.png'
    },
    {
      label: 'Map',
      image: '/src/imgs/result/map.png'
    }
  ]
};

// mock报名结果信息
function mockFetchResultDetails() {
  return delay().then(() => {
    return {
      atvInfo,
      userInfo,
      shareGrid
    }
  })
}

// 获取报名结果信息
export function fetchResultDetails() {
  if (config.useMock) {
    return mockFetchResultDetails();
  } else {
    return new Promise((resolve) => {
      resolve('real api')
    })
  }
};