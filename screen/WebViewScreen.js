import React from 'react'
import {Platform} from 'react-native'
import { WebView } from 'react-native-webview';

function WebViewScreen(props) {
    console.log(props)
    let uri = props.link;
        return (
        Platform.OS === "web" ? (
        <iframe src={uri} height={'100%'} width={'100%'} />
        ) : (
        <View style={{ flex: 1 }}>
            <WebView
            src={uri}
            style={{marginTop: 22, flex: 1}}
            />
        </View>
        )
    );
}

export default WebViewScreen