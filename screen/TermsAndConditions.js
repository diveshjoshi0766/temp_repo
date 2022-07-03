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
    ImageBackground
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


export default function TermsAndConditions({navigation}) {
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
    <View style={styles.container}>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: "rgb(235 235 235)"
        }]}
    >

        <View style={{alignItems: 'center', marginTop: '0'}}>
            <Image
                style={styles.stretch}
                source={require('../assets/icon_logo.png')}
            />
        </View>
        <View style={[styles.shadow_container, {alignItems: 'center'}]}>
        <Text style={{fontWeight: 'bold', fontSize: "30"}}>Terms And Conditions</Text>   
        <Text>Last Updated: Feburary 12, 2020</Text>   
        </View>




        <View style={[styles.text_container]}>
                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Agreement Between User and SurveyOptimus</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>The SurveyOptimus.com (“Site”) is comprised of various Web pages operated by SurveyOptimus. The Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. By using this Site you agree to all such terms of use, conditions, notices, and membership. You also confirm you have read and understood the terms, conditions and privacy policy (Click here to see Privacy Policy).
                        If you do not agree with the Terms and the Privacy Policy, please do not use this Site.
                    </Text>  

                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Membership Eligibility</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>Membership is open to any individual that is at least fifteen (15) years old or the minimum required age as per your geographic location. However, some panel membership with SurveyOptimus may have more specific age requirements and geographic restrictions.
                    </Text>  

                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Email Policy</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>Membership requires you to voluntarily register with your email, and confirm your e-mail address, phone number and postal code upon your registration. In accordance with this, you should not mark emails or other communications received from SurveyOptimus as spam, junk or unsolicited communication.
                        Mailbox settings could erroneously flag communications and surveys from SurveyOptimus and place them in your junk or spam folders. To avoid this, we suggest you add the (SurveyOptimus address) to your bookmark.
                    </Text>  

                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Member Code of Conduct</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus is dedicated to providing an environment where members participate and voice their opinions in a safe and respectful manner. While participating on the SurveyOptimus panel we would like all members to follow the codes of conducts below.
                    </Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Member Code of Conduct</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus is dedicated to providing an environment where members participate and voice their opinions in a safe and respectful manner. While participating on the SurveyOptimus panel we would like all members to follow the codes of conducts below.
                    </Text>  
                    <Text>{'\u2B24'}Act in good faith while participating in our surveys, by not speeding through survey, answering all answers in the same way, providing false answers or providing language SurveyOptimus and its partners deem inappropriate.</Text>
                    <Text>{'\u2B24'}Act in a manner identified as disrespectful, threatening, or abusive to SurveyOptimus helpdesk and support teams.</Text>
                    <Text>{'\u2B24'}Act in a manner described as manipulative practices such as editing the survey link to gain access to other surveys, trying to take the survey multiple times using different device or by changing IP address, using VPN to access survey not intended for your country / geography.</Text>
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus has the sole discretion to suspend or terminate membership and/or forfeit any points accumulated if you fail to comply with the code of conducts.</Text>  
                
                
                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Modification of These Terms of Use</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus reserves the right to change the terms, conditions, and notices under which the Site is offered, including but not limited to the charges associated with the use of the Site. SurveyOptimus also reserves the right to change the conditions in the terms and privacy policy without notice. It is the responsibility of each member and visitor of this Site to check and review the terms and privacy policy periodically.</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Notice Provision</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>Except as explicitly stated otherwise and with respect to any modifications to the terms outlined above, any notices from you to SurveyOptimus shall be delivered by email to support@surveyoptimus.com. Any notice for you shall be sent to the email provided in your registration or mail to the address you provide in your registration. Any notice shall be deemed delivered with 24hrs after the email or mail notice is sent. It is your responsibility to keep your contact details updated and current. We also encourage you to check for notices on the SurveyOptimus website.</Text>  



                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Links to Third Party Sites</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>The SurveyOptimus site may contain links to other websites ("linked sites"). The linked sites are not under the control of SurveyOptimus and SurveyOptimus is not responsible for the contents of any linked site, including without limitation of any link contained in a linked site, or any changes or updates to a linked site.
You may not use this Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided to you through the Sites.</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Modification of These Terms of Use</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus reserves the right to change the terms, conditions, and notices under which the Site is offered, including but not limited to the charges associated with the use of the Site. SurveyOptimus also reserves the right to change the conditions in the terms and privacy policy without notice. It is the responsibility of each member and visitor of this Site to check and review the terms and privacy policy periodically.</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Breach</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus reserves the right in its sole discretion to temporarily suspend, indefinitely suspend or terminate your membership, if you breach any of the terms and conditions or if SurveyOptimus cannot verify or authenticate any of the information you provide to SurveyOptimus.</Text>  

                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Confidentiality of Surveys</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus' clients may disclose confidential and/or proprietary information and materials to you as part of Surveys, and such information and materials shall remain the sole and exclusive property of its owner.
This confidential information may include, but is not limited to, new product ideas or concepts, packaging concepts, advertising and movie or television concepts or trailers, and the text, visual images and sounds related thereto. By becoming a member, you agree that you will keep the contents and materials disclosed to you as part of all Surveys in which you participate confidential and not disclose them to any third party or use the confidential information for any purpose except for the sole purpose of completing the Survey. If you breach this obligation, in addition to forfeiture of your points and termination of your account, you may be liable for monetary damages to SurveyOptimus and/or our client for damages caused by the result of your breach.
</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Survey Participation</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>All members will receive surveys via email (email address provided in registration). While members are not obligated to start every survey, however, we do encourage you to participate and complete as many surveys available to increase your opportunities of growing your rewards and shape the brands and services you love. To participate in a survey you must click on the link or cut and paste the survey URL address in your browser provided in the survey invite email we sent you. As mentioned in this terms and condition, we remind you to make sure your email security settings is not blocking SurveyOptimus survey invites from landing in your inbox. The number of surveys you will receive each month is directly based on your demographic profile required by the research surveys provided by SurveyOptimus and clients.
                    When all the required number of panelist answering a survey is achieved (“Quota Full), SurveyOptimus and the client has the right to close the survey at any point and stage of the survey.
SurveyOptimus takes every opportunity to maintain high data security measures in the survey links. As such SurveyOptimus is not liable for any survey links containing viruses and other malicious malware.
</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Rewards Allocation</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus values and holds every panelist in high regard. Every member is rewarded with “Points” for registering on the SurveyOptimus panel, filling out demographic profile questions, completing surveys, and participating in polls. In addition, members will have the opportunity to participate in sweepstakes and draws. The size and type of points, sweepstakes or draws is solely dependent on the survey difficulty, length or other elements. SurveyOptimus will make every effort to provide details on the amount of the points for each survey or activity you participate in. The allocation of points is credited to your account and maintained by SurveyOptimus. Points can be redeemed for “vouchers” or cash in the form of “paypal” card.</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Redeeming Points</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>You can redeem your points from our “Rewards Center” after you log into your account at any point, providing you reached the minimum of 2500 points. If you request to redeem points in the form of voucher (e-voucher) the voucher will be sent to your email you have registered in your account within 1 week of your request. Any request to resend or resolve issues with the amount of the voucher must be sent to SurveyOptimus within one (1) month from the day originally sent. SurveyOptimus will not re-issue and send another voucher after the one (1) month period. All cash request in the form of PayPal will be deposited directly to the PayPal account provided in your registration within two (2) weeks of your request. It is your responsibility to keep your account information current and updated in your SurveyOptimus account section.
                    If you request to unsubscribe from the SurveyOptimus panel you have up to thirty (30 calendar days) calendar days to redeem your points and exchange them in vouchers (e-voucher) or cash in the form of PayPal. To redeem points you must accumulate a minimum of 2500 points. At the end of the thirty (30) day period your rewards account will be deleted. SurveyOptimus is not responsible for the functionality of any of the third party (3rd) vouchers (e-vouchers) and PayPal you use to redeem your points.
Rewards, incentives, points, sweepstakes, any prizes are not transferable.
</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Materials Provided to SurveyOptimus or Posted at Any SurveyOptimus Web Sit</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus does not claim ownership of the materials you provide to SurveyOptimus (including feedback and suggestions) or post, upload, input or submit to any SurveyOptimus Site or its associated services (collectively "submissions"). However, by posting, uploading, inputting, providing or submitting your submission you are granting SurveyOptimus, its affiliated companies and necessary sub licensees permission to use your submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your submission; and to publish your name in connection with your submission.
No compensation will be paid with respect to the use of your submission, as provided herein. SurveyOptimus is under no obligation to post or use any submission you may provide and may remove any submission at any time is SurveyOptimus's sole discretion.
By posting, uploading, inputting, providing or submitting your submission you warrant and represent that you own or otherwise control all of the rights to your submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the submissions.
</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Liability Disclaimer</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>The information, software, products, and services included in or available through the SurveyOptimus web site may include inaccuracies or typographical errors. Changes are periodically added to the information herein. SurveyOptimus and/or its suppliers may make improvements and/or changes in the SurveyOptimus web site at any time. Advice received via the SurveyOptimus web site should not be relied upon for personal, medical, legal or financial decisions and you should consult an appropriate professional for specific advice tailored to your situation.
SurveyOptimus and or its suppliers make no representations about the suitability, reliability, availability, timeliness, and accuracy of the information, software, products, services and related graphics contained on the SurveyOptimus web site for any purpose. To the maximum extent permitted by applicable law, all such information, software, products, services and related graphics are provided "as is" without warranty or condition of any kind. SurveyOptimus and/or its suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services and related graphics, including all implied warranties or conditions of merchantability, fitness for a particular purpose, title and non-infringement.
To the maximum extent permitted by applicable law, in no event shall SurveyOptimus and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of the SurveyOptimus web site, with the delay or inability to use the SurveyOptimus web site or related services, the provision of or failure to provide services, or for any information, software, products, services and related graphics obtained through the SurveyOptimus web site, or otherwise arising out of the use of the SurveyOptimus web site, whether based on contract, tort, negligence, strict liability or otherwise, even if SurveyOptimus or any of its suppliers has been advised of the possibility of damages. Because some states/jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. If you are dissatisfied with any portion of the SurveyOptimus web site, or with any of these terms of use, your sole and exclusive remedy is to discontinue using the SurveyOptimus web site.
</Text>  


                    <Text style={{fontWeight: 500, fontSize: 20, marginTop: 7}}>Disclosures</Text>  
                    <Text style={{fontWeight: 400, fontSize: 18}}>SurveyOptimus is operated by:

MrOptimus{'\n'}
2135, Coastland avenue,{'\n'}
San Jose CA 95125, United States{'\n'}
{'\n'}
Request of service please use:{'\n'}

</Text>  

<Text style={{fontWeight: 'bold'}}>Service contact : support@surveyoptimus.com</Text>
</View>


        
        
    </Animatable.View>
  </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f7f7f7',
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
    robot_img: {
        width: SCREEN_WIDTH * 0.5,
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 1,
        backgroundColor: 'rgb(235 235 235)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        marginTop: normalize(5),
        maxHeight: 50,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        borderRadius: normalize(10),
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        paddingRight: 3,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        height: normalize(20),
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: normalize(30),
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
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
