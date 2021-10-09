import {StyleProp, ViewStyle} from 'react-native';


function _arrayToStyle(style: StyleProp<any>): StyleProp<any> {
  if (Array.isArray(style))  {
    return style.reduce((a, b) => {
      return Object.assign(a, b);
    }, {});
  }
  return style;
}

/**
 * Merge style to one
 * @param style
 */
export function styleMerge<T>(style: StyleProp<T>): StyleProp<T> {
  let rst = _arrayToStyle(style);

  const containsArray = (obj: any): boolean => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
        return true;
      }
    }
    return false;
  }

  while (containsArray(rst)) {
    for (const key in rst) {
      if (rst.hasOwnProperty(key)) {
        const value = rst[key]
        if (Array.isArray(value)) {
          delete rst.key
          rst = {...rst, ..._arrayToStyle(value)}
        }
      }
    }
  }

  return rst;
}
