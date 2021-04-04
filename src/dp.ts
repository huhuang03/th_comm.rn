import { useWindowDimensions } from "react-native";

class Dp {
    width: number = 750;
    windoWidth: number = 720;

    constructor(width: number = 750) {
        this.width = width;
        this.windoWidth = useWindowDimensions().width;
    }

    /**
     * @param val 设计师给的UI设计图中的尺寸
     * @returns 要设置给控件的尺寸
     */
    dp(val: number): number {
        return (val / this.width) * this.windoWidth;
        // return 0;
    }
}

// Error: Invalid hook call. Hooks can only be called inside of the body of a function component. 
var _gDpInstance: Dp;

function gDpInit(width: number) {
   _gDpInstance = new Dp(width);  
}

function gDp(val: number): number {
    return _gDpInstance.dp(val);
}

export default Dp;
export {
    gDpInit,
    gDp
};