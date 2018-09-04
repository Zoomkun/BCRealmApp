const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    webStyle: {
        width: deviceWidth,
        height: deviceWidth * 2,
    },
}