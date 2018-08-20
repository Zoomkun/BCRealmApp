import React, { Component } from "react";
import { Dimensions, View, } from "react-native";
import moment from 'moment';
import {
    ListItem,
    Text,
    Thumbnail
} from "native-base";

/**
 * 新闻/话题组件
 */
export default class NewsItem extends Component {
    render() {

        let { avatar, onPress, title, time, like, read } = this.props;
        return (
            <ListItem style={styles.listItemStyle} button onPress={onPress} >
                <View>
                    <Thumbnail source={avatar} style={styles.avatarStyle} />
                </View>
                <View style={styles.bodyViewStyle}>
                    <Text numberOfLines={2} style={styles.content}>{title}</Text>
                    <Text note style={styles.timeStyle}>{moment(time).format('YYYY-MM-DD  HH:mm:ss')}</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text>{like}赞</Text>
                    <Text>{read}阅读</Text>
                </View>
            </ListItem>
        );
    }
}
const { width, height } = Dimensions.get("window")
const styles = {
    listItemStyle: {
        height: 80,
    },
    avatarStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    bodyViewStyle: {
        flexDirection: 'column',
        marginLeft: 5,
        width: width * 0.49,
    },
    content: {
        width: width * 0.49,
        lineHeight: 25
    },
    timeStyle: {
        marginLeft: -width / 8.57
    },
    viewStyle: {
        flexDirection: 'column',
        marginLeft: 5
    },
};
