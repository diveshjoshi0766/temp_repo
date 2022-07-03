import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Platform, 
    PixelRatio,
    ImageBackground,
    ScrollView
} from "react-native";
import {Avatar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import background from '../assets/background.jpeg'

import { useTheme } from 'react-native-paper';
var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT,} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
console.log(SCREEN_HEIGHT)
console.log(SCREEN_WIDTH)
export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}


export default function PrivacyPolicyScreen({navigation}) {
    const { colors } = useTheme();
    const [email, setEmail] = useState("");
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
   
    return (
    <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.container}>
            <Animatable.View 
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: "rgb(235 235 235)"
                }]}
            >

                <View style={{ marginTop: '0'}}>
                    <Image
                        style={styles.stretch}
                        source={require('../assets/icon_logo.png')}
                    />
                </View>
                <View style={[styles.shadow_container, {alignItems: 'center'}]}>
                    <Text style={{fontWeight: 'bold', fontSize: "30"}}>Privacy Policy</Text>   
                    <Text>Last Updated: Feburary 12, 2020</Text>   
                </View>
                <View style={[styles.text_container]}>
                    <Text style={{fontWeight: 400, fontSize: 18}}>On behalf of SurveyOptimus, we would like to thank you for joining our online community of panel members influencing and shaping the brands and services we all love to use.{'\n'}
We are a collective of market research professionals with over 20 years of online market research experience acquired from some of the industry’s largest and most innovative firms. We recruit members to participate in online surveys and polls while providing a safe and secure online experience with an emphasis on privacy and data security.{'\n'}
</Text>  

                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Our Commitment to you</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus is committed to protecting the privacy of your personal data that you share with us. This Statement of Privacy applies to the SurveyOptimus.com website, the data we collect and how we use it. By using our site, you consent to the data practices described in this statement.
                    </Text>  

                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>What Personal Data Do We Collect</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus collects personally identifiable information, such as your e-mail address, name, home or work address or telephone number. SurveyOptimus also collects anonymous demographic information, which is not unique to you, such as your Postal code, age, gender, preferences, interests and favourites.
{'\n'}
There is also information about your computer hardware and software that is automatically collected by SurveyOptimus. This information can include: your IP address, browser type, domain names, access times and referring Website addresses. This information is used by SurveyOptimus for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the SurveyOptimus website
{'\n'}
Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through SurveyOptimus public message boards, this information may be collected and used by others. Note: SurveyOptimus does not read any of your private online communications.
{'\n'}
SurveyOptimus encourages you to review the privacy statements of Websites you choose to link to from SurveyOptimus so that you can understand how those Websites collect, use and share your information. SurveyOptimus is not responsible for the privacy statements or other content on Websites outside of the SurveyOptimus and SurveyOptimus family of Websites.
{'\n'}

                    </Text>  

                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Using your Personal Information</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus collects and uses your personal information to operate the SurveyOptimus site and deliver the services you have requested. SurveyOptimus also uses your personally identifiable information to inform you of other products or services available from SurveyOptimus and its affiliates. SurveyOptimus may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered.
{'\n'}
SurveyOptimus does not sell, rent or lease its customer lists to third parties. SurveyOptimus may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases too, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. In addition, SurveyOptimus may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to SurveyOptimus, and they are required to maintain the confidentiality of your information.
{'\n'}
SurveyOptimus does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent.
{'\n'}
SurveyOptimus keeps track of the Websites and pages our customers visit within SurveyOptimus, in order to determine what SurveyOptimus services are the most popular. This data is used to deliver customized content and advertising within SurveyOptimus to customers whose behavior indicates that they are interested in a particular subject area.
{'\n'}
SurveyOptimus sites will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to:
{'\n'}
(a) conform to the edicts of the law or comply with legal process served on SurveyOptimus or the site;{'\n'}
(b) protect and defend the rights or property of SurveyOptimus;{'\n'}
(c) act under exigent circumstances to protect the personal safety of users of SurveyOptimus, or the public.
{'\n'}
Please note that our clients conduct marketing research studies using scientific methods and we promise that, in obtaining your cooperation, we will not mislead you about the general nature of the research or the use that will be made of the findings nor regarding the average time we expect that it will take to complete a survey.
{'\n'}

                    </Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Use of Cookies</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>The SurveyOptimus site use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
{'\n'}
One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize SurveyOptimus pages, or register with SurveyOptimus site or services, a cookie helps SurveyOptimus to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same SurveyOptimus site, the information you previously provided can be retrieved, so you can easily use the SurveyOptimus features that you customized.
{'\n'}
You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the SurveyOptimus services or Websites you visit.
{'\n'}</Text>


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Security of your Personal Information</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus secures your personal information from unauthorized access, use or disclosure. SurveyOptimus secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorised access, use or disclosure. When personal information (such as a credit card number) is transmitted to other Websites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Sharing</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>Though we make every effort to preserve your privacy, we may need to disclose your personal information when we have a good-faith belief that such action is necessary to comply with a judicial proceeding or a court order or if we believe it is necessary in order to investigate, prevent or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of the SurveyOptimus site terms, or as otherwise required by law. SurveyOptimus may also disclose your personal information to third parties where it has your express permission to do so, or where it can reasonably be inferred from the circumstances that you consent to the disclosure to the third parties.</Text>  



                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Changes to this Statement</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus will occasionally update this Statement of Privacy to reflect company and customer feedback. SurveyOptimus encourages you to periodically review this Statement to be informed of how SurveyOptimus is protecting your information. Please use the last updated date on this document to ensure you are referencing the most recent version.</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Contact Information</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus welcomes your comments regarding this Statement of Privacy. If you believe that SurveyOptimus has not adhered to this Statement, please contact SurveyOptimus at support@paneloptimus.com We will use commercially reasonable efforts to promptly determine and remedy the problem.</Text>  

                </View>
            </Animatable.View>
        </View>
    </ScrollView>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    stretch: {
        width: SCREEN_WIDTH * 0.5,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'rgb(235 235 235)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_container:{
        marginTop: normalize(20),
    },
    shadow_container:{
        marginTop: 10,
        padding:20,
        backgroundColor:'#e6e6e6',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
  });
