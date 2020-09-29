// eslint-disable-next-line import/no-unresolved
import Setaria, { util } from 'setaria';
import wx from 'wx';

/**
 * 微信JSAPI封装模块
 *
 * @namespace _wechat
 * @version 1.0
 * @author HanL
 */

/**
 * 调用微信config接口注入权限验证配置
 *
 * @private
 */
function doSignature(apiName, handler) {
  // 获取当前窗口的Url并删除#及其后面的字符
  let currentUrl = window.location.href;
  const { hash } = window.location;
  if (util.lang.isNotEmpty(hash)) {
    currentUrl = currentUrl.replace(hash, '');
  }
  const http = Setaria.getHttp();
  // 调取服务取得签名所需参数
  http.api('js-auth', {
    params: {
      url: currentUrl,
    },
  }).then((resultObject) => {
    const { data } = resultObject.data;
    // 调用微信ready接口处理成功验证
    wx.ready(() => {
      if (typeof handler === 'function') {
        handler();
      }
    });
    // 调用微信config接口注入权限验证配置
    wx.config({
      debug: process.env.VUE_APP_WECHAT_JSSDK_DEBUG === 'true',
      ...data,
      jsApiList: [apiName],
    });
  });
}

// /**
//  * 判断是否已签名并获得调用api的权限
//  *
//  * @private
//  * @return {Boolean}
//  */
// function getIsSigned() {
//   return isSigned;
// };

/**
 * 微信JS API调用公用函数
 *
 * @param  {string}   apiName        [description]
 * @param  {Object}   param          [description]
 * @param  {Function} successHandler [description]
 */
function callWeChatJSApi(apiName, param) {
  // // 没有签名的场合
  // if (!isSigned) {
  // 调用微信ready接口处理成功验证
  wx.ready(() => {
    wx[apiName](param);
  });
  // 调用微信config接口注入权限验证配置
  doSignature(apiName);
  // } else {
  //   // 调用对应的微信JS API
  //   wx[apiName](param);
  // }
}

// /**
//  * 设置是否需要签名标识
//  *
//  * @public
//  * @param {Boolean} flag 是否需要签名
//  */
// function setIsNeedSignFlag(flag) {
//   isNeedSignFlag = flag;
//   isSigned = false;
// }

// /**
//  * 获取地理位置接口
//  *
//  * @param  {Function} handler 回调函数
//  */
// this.getLocation = function(handler) {
//   // 调用微信JS API
//   this.callWeChatJSApi(
//     'getLocation',
//     {
//       type: 'gcj02',
//     },
//     (res) => {
//       // 进行地址转换(国测局坐标<gcj02>->百度经纬度坐标<bd09ll>)
//       _3rdMap.geoconv(res.longitude + ',' + res.latitude, 3, 5, function(data) {
//         if (data.status === 0) {
//           handler(data.result[0]);
//         }
//       });
//     }
//   );
// };

/**
 * 拍照或从手机相册中选图接口
 *
 * @param  {Integer}  count      图片数量
 * @param  {Array}    sizeType   可以指定是原图还是压缩图，默认二者都有
 * @param  {Array}    sourceType 可以指定来源是相册还是相机，默认二者都有
 * @param  {Function} handler    回调函数
 */
function chooseImage(options) {
  callWeChatJSApi(
    'chooseImage',
    options,
  );
}

// /**
//  * 上传图片
//  *
//  * @param  {string}   localId
//  * @param  {Function} handler
//  */
// this.uploadImage = function(localId, handler) {
//   this.callWeChatJSApi(
//     'uploadImage',
//     {
//       localId: localId,
//       isShowProgressTips: 1,
//     },
//     function(res) {
//       handler(res);
//     }
//   );
// };

/**
 * 关闭窗口
 */
function closeWindow() {
  callWeChatJSApi('closeWindow');
}

export default {
  chooseImage,
  closeWindow,
};
