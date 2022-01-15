import { PixelRatio, Dimensions } from 'react-native';

const BASE = {
    HEIGHT: 'height',
    WIDTH: 'width'
};

const { width, height } = Dimensions.get('window');
const baseScreen = {
    WIDTH: 375,
    HEIGHT: 812
};

const widthBaseScale = width / baseScreen.WIDTH;
const heightBaseScale = height / baseScreen.HEIGHT;

export const calcDevicePx = (px, base = BASE.WIDTH) => {
    const newSize = base === BASE.HEIGHT ? px * heightBaseScale : px * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

//for width  pixel
export const widthPixel = (size) => {
    return calcDevicePx(size, BASE.WIDTH);
};
//for height  pixel
export const heightPixel = (size) => {
    return calcDevicePx(size, BASE.HEIGHT);
};

//for font  pixel
export const fontPixel = (size) => {
    return widthPixel(size);
};
