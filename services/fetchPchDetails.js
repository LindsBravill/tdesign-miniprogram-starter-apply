/** 模拟获取活动购买页的方法 */
import {
  config
} from '../config/index';
import delay from './delay';

const atvInfo = {
  name: '2021 SICC服务设计创新大会',
  date: '2021年3月16日',
  location: '深圳市腾讯滨海大厦'
};
const users = ['蔡宣轩', '蔡晓萱'];
const session = ['2021年3月16日'];
const price = [{
    title: '早鸟价-单人票',
    value: ['88', '128']
  },
  {
    title: '早鸟价-双人票',
    value: ['168', '228']
  },
  {
    title: '正价-单人票',
    value: ['128']
  },
  {
    title: '正价-双人票',
    value: ['228']
  }
];


// mock活动购买信息
function mockFetchPchDetails() {
  return delay().then(() => {
    return {
      atvInfo,
      users,
      session,
      price
    }
  })
}

// 获取活动购买信息
export function fetchPchDetails() {
  if (config.useMock) {
    return mockFetchPchDetails();
  } else {
    return new Promise((resolve) => {
      resolve('real api')
    })
  }
};