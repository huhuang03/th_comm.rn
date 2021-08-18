import {Dimensions} from 'react-native';

class Dp {
  width: number = 750;

  // real window width
  windowWidth: number = 720;

  widthScale: number = 1;

  constructor(width: number = 750) {
    this.width = width;
    this.windowWidth = Dimensions.get('window').width;
    this.widthScale = this.windowWidth / this.width;
  }

  /**
   * @param val 设计师给的UI设计图中的尺寸
   * @returns 要设置给控件的尺寸
   */
  dp(val: number): number {
    return val * this.widthScale;
  }

  /**
   * 具体怎么弄，我也不清楚
   * @param val
   */
  sp(val: number): number {
    return this.dp(val) * 1.4;
  }
}

let _gDpInstance: Dp;

function gDpInit(width: number = 750) {
  _gDpInstance = new Dp(width);
}

function gDp(val: number, width:number = 750): number {
  if (!_gDpInstance) {
    gDpInit(width);
  }
  return _gDpInstance.dp(val);
}

function gSp(val: number, width:number = 750): number {
  if (!_gDpInstance) {
    gDpInit(width);
  }
  return _gDpInstance.sp(val);
}

export default Dp;

export {
  gDpInit,
  gDp,
  gSp
};
