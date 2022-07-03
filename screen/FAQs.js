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
    SafeAreaView,
    Button
} from "react-native";
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

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

export const hide_show = (display_txt) => {
    return display_txt ? '' : 'none'
}

export default function FAQs({navigation}) {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    const [show21, setShow21] = useState(false);
    const [show22, setShow22] = useState(false);
    const [show23, setShow23] = useState(false);
    const [show24, setShow24] = useState(false);
    const [show25, setShow25] = useState(false);
    const [show26, setShow26] = useState(false);
    const [show27, setShow27] = useState(false);
    const [show28, setShow28] = useState(false);
    const [show29, setShow29] = useState(false);
    const [show30, setShow30] = useState(false);
    const [show31, setShow31] = useState(false);
    const [show32, setShow32] = useState(false);
    const [show33, setShow33] = useState(false);
    const [show34, setShow34] = useState(false);
    const [show35, setShow35] = useState(false);
    const [show36, setShow36] = useState(false);
    const [show37, setShow37] = useState(false);
    const [show38, setShow38] = useState(false);
    const [show39, setShow39] = useState(false);
    const [show40, setShow40] = useState(false);

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
        <Text style={{fontWeight: 'bold', fontSize: "30"}}>Frequently Asked Questions</Text>   
        <Text>Last Updated: Feburary 12, 2020</Text>   
        </View>


       
        

        <Text style={{fontWeight: 600, fontSize: 18, marginTop: 7}}>Here you will find answers to the most common questions about SurveyOptimus and how our survey panel works</Text>  
            <Text style={{fontWeight: 400, fontSize: 16}}>SurveyOptimus is an online research community created to allow members to influence and help shape the brands they love. SurveyOptimus will present you with opportunities to voice your opinions in surveys and polls from global brands in a unique and transparent insight marketplace. We will take strict measures to ensure the privacy of your data and will only provide information to clients in an anonymized and aggregated form. Your data will never be used for direct marketing and advertising.</Text>  

            <View style={styles.faq_list}>
            <View>
            {show ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow(!show)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Am I eligible to participate in surveys?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow(!show)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Am I eligible to participate in surveys?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show ?
            (<View style={styles.box}> <Text>By joining our community you are automatically eligible to participate in our surveys. If you have still not joined, please register and make your opinions heard.</Text> </View>) : null}
            </View>
        </View>
        
        <View style={styles.faq_list}>
            <View>
            {show2 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow2(!show2)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>What's in it for me?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show2 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow2(!show2)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>What's in it for me?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show2 ?
            (<View style={styles.box}> <Text>You will earn SurveyOptimus points for registering in our community, completing your profile questions, participating in polls and completing surveys. Each point you earn is accumulated and is redeemable after you reach 2500 points in your account. 2500 points has a value of ₹500 you can redeem in the form of vouchers or cash in the form of PayPal.</Text> </View>) : null}
            </View>
        </View>
        
            
        
        <View style={styles.faq_list}>
            <View>
            {show3 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow3(!show3)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>What exectly will the SurveyOptimus panel send me?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show3 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow3(!show3)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>What exectly will the SurveyOptimus panel send me?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show3 ?
            (<View style={styles.box}> <Text>SurveyOptimus Panel will send you e-mail invitations to participate in surveys, notifications to complete profile, and notices about your membership.</Text> </View>) : null}
            </View>
        </View>
        

        <View style={styles.faq_list}>
            <View>
            {show4 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow4(!show4)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>I have not been active for a while and now there is no points (money) in my pannel account. Why?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show4? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow4(!show4)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>I have not been active for a while and now there is no points (money) in my pannel account. Why?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show4 ?
            (<View style={styles.box}> <Text>In activity of 90 days or more will result in account and points change to an inactive status. Along the way SurveyOptimus will send reminder email messages at the 30 day and 60 day period. The email message will alert you that inactivity within your account and inactivity on survey starts will deactivate your membership when inactivity reaches 90 days. SurveyOptimus will also send a final reminder email 1 week before the 90 day inactivity period is achieved.
\n
Prior to the 90 day period you can reactivate your account and points by sending us an email at support@surveyoptimus.com and allow up to 7 days for us to reactive your points.
\n
At the 90 day period 2 things will occur. Your total earned points will be forfeit and your account will be disabled but not deleted. All disabled accounts will have the opportunity to reactive account by sending us an email at support@surveyoptimus.com and allow up to 7 days for us to reactivate your membership status with us.
\n
</Text> </View>) : null}
            </View>
        </View>
        

        <View style={styles.faq_list}>
            <View>
            {show5 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow5(!show5)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Routing from one survey to another?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show5 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow5(!show5)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Routing from one survey to another?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show5 ?
            (<View style={styles.box}> <Text>Surveys are sent automatically to you when your profile matches the requirements of the survey. However, there will be times when the survey is full or you are screened out and instead of terminating you from the survey the panel system automatically looks for other surveys that match your profile. So, you get an opportunity to participate in another survey.</Text> </View>) : null}
            </View>
        </View>
        

        
        <View style={styles.faq_list}>
            <View>
            {show6 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow6(!show6)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Getting an error in survey?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show6 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow6(!show6)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Getting an error in survey?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show6 ?
            (<View style={styles.box}> <Text>An error can occur on a survey for a couple of reasons. {'\n'}
            <Text style={styles.box_content_points}>
                1. If cookies are not enabled the survey will not recognize you as the respondent when you reach the end page of the survey and you will receive timed out. Please make sure that you have your cookies enabled.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                2. When a survey is left open for an extended period of time the browser session expires and you will be timed out from the survey. In this case it is not possible to start the survey again or for a new link to be
            </Text>{'\n'}
            </Text> </View>) : null}
            </View>
        </View>
        

        
        <View style={styles.faq_list}>
            <View>
            {show7 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow7(!show7)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Why do I need to get a surveys?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show7 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow7(!show7)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Why do I need to get a surveys?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show7 ?
            (<View style={styles.box}> <Text>Surveys are sent automatically when your profile matches the requirements of the survey. So, we recommend that you answer ALL profile questions and keep your profile information updated. An updated profile it easier for the system to match your profile to surveys that suit you based on your personal data, shopping activity and your interest.</Text> </View>) : null}
            </View>
        </View>
        
        
        <View style={styles.faq_list}>
            <View>
            {show8 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow8(!show8)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Why do I get asked the same question twice?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show8 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow8(!show8)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Why do I get asked the same question twice?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show8 ?
            (<View style={styles.box}> 
            <Text>On our part we always attempt to find the right survey for you. However, there may be times that you are asked the same question more than once in our pre-screening phase (where we are looking for a survey to match your profile), and once in the actual survey itself (where we are verifying that you meet the survey's criteria). Although it might seem like an inconvenience or an error that you are asked the same question more than once. This is a quality assurance process to help us do two things
            </Text>{'\n'} 
            <Text style={styles.box_content_points}>
                1. It gives us a better chance of finding a survey for you
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                2. It provides better quality data to our clients who are looking for a certain type of person.
            </Text>{'\n'}
            </View>) : null}
            </View>
        </View>

        
        <View style={styles.faq_list}>
            <View>
            {show9 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow9(!show9)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>What does screen out means?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show9 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow9(!show9)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>What does screen out means?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show9 ?
            (<View style={styles.box}> <Text>A screen out occurs when you are outside the target group for a given survey. Rather than consuming your time on answers that cannot be used the survey finishes early (normally within the first few questions). This can happen from time to time even if you have originally been selected to take part as some surveys require specific information. Surveys where you receive "screen out" do not count as fully completed and incentives are not rewarded as the information is not used.</Text> </View>) : null}
            </View>
        </View>

        
        <View style={styles.faq_list}>
            <View>
            {show10 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow10(!show10)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Why is there a negative on my account?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show10 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow10(!show10)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Why is there a negative on my account?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show10 ?
            (<View style={styles.box}> <Text>Negative incentives can occur when someone completed a survey in a manner deemed inappropriate (bad or untruthful). We will not share with you which questions proved to be problematic for our clients. Below are some ways clients define "bad"? or "untruthful"? responses.</Text> </View>) : null}
            </View>
        </View>

        
        <View style={styles.faq_list}>
            <View>
            {show12 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow12(!show12)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Speeding through a survey?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show12 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow12(!show12)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Speeding through a survey?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show12 ?
            (<View style={styles.box}> <Text>Every survey finished has an estimated time to complete. If you complete a survey in a time frame that does not fall within the range that is acceptable you will not qualify for the survey, receive an incentive and may be terminated from the panel.</Text> </View>) : null}
            </View>
        </View>

        
        <View style={styles.faq_list}>
            <View>
            {show13? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow13(!show13)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Inconsistent or Inaccurate Answers?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show13 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow13(!show13)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Inconsistent or Inaccurate Answers?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show13 ?
            (<View style={styles.box}> <Text>If you provide answers that are not accurate and or inconsistent in any manner whatsoever you will not qualify for the survey, receive an incentive and may be terminated from the panel.</Text> </View>) : null}
            </View>
        </View>

        
        <View style={styles.faq_list}>
            <View>
            {show14 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow14(!show14)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Red Herring questions?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show14 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow14(!show14)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Red Herring questions?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show14 ?
            (<View style={styles.box}> <Text>Sometimes, Clients will put questions in the survey multiple times or require you choose a specific answer to ensure you are being truthful and/or reading the entire survey question. If our client should find that your responses are unacceptable as per the red herring directive you will not qualify for the survey, receive an incentive and may be terminated from the panel.</Text> </View>) : null}
            </View>
        </View>


        
        <View style={styles.faq_list}>
            <View>
            {show15 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow15(!show15)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Open End Questions?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show15 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow15(!show15)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Open End Questions?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show15 ?
            (<View style={styles.box}> <Text>At times clients will have a section within a survey that requests panelists to fill in their answers by writing them in, rather than selecting an answer from a set of pre-identified responses. If a response in Open Ended question is considered to contain language that is inappropriate, non-sensible, or not fitting for the question you will not qualify for the survey, receive an incentive and may be terminated from the panel.</Text> </View>) : null}
            </View>
        </View>


        
        <View style={styles.faq_list}>
            <View>
            {show16 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow16(!show16)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Tax - Will SurveyOptimus report my income?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show16 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow16(!show16)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Tax - Will SurveyOptimus report my income?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show16 ?
            (<View style={styles.box}> <Text>If the amount of incentives provided does not exceed $600 in a calendar year, then no 1099 is needed and nothing about the individual recipient needs to be reported to the federal or a state government nor does a SS# need to be gathered.</Text> </View>) : null}
            </View>
        </View>

        
        <View style={styles.faq_list}>
            <View>
            {show17 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow17(!show17)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Should I send my password and /or username to SurveyOptimus when something is wrong?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {setShow17 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow17(!show17)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Should I send my password and /or username to SurveyOptimus when something is wrong?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show17 ?
            (<View style={styles.box}> <Text>NO!! You should never give away your log in details. Not to SurveyOptimus or to anyone else. We don't need your password or username. We will use other information to find you in our system when you contact us.</Text> </View>) : null}
            </View>
        </View>
        


        
        <View style={styles.faq_list}>
            <View>
            {show18 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow18(!show18)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>I received an e-mail asking for my presonal details. What is a phishing email?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show18 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow18(!show18)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>I received an e-mail asking for my presonal details. What is a phishing email?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show18 ?
            (<View style={styles.box}> <Text>Sometimes you may receive an email falsely claiming to be from PayPal or another known entity. This is called "phishing" because the sender is "fishing" for your personal data. The goal is to trick you into clicking through to a fake or "spoof" website, or into calling a bogus customer service number where they can collect and steal your sensitive personal or financial information. If you have responded to a phishing email and provided any personal information, or if you think someone has used your account without permission, you should immediately change your password and security questions.
{'/n'}
You should also report it to PayPal immediately and they will help protect you as much as possible.
</Text> </View>) : null}
            </View>
        </View>
        


        
        <View style={styles.faq_list}>
            <View>
            {show19 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow19(!show19)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Will I get any calls or promotional material?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show19 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow19(!show19)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Will I get any calls or promotional material?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show19 ?
            (<View style={styles.box}> <Text>No, we will only send survey invitations to you.</Text> </View>) : null}
            </View>
        </View>
        



        
        <View style={styles.faq_list}>
            <View>
            {show20 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow20(!show20)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>What information will I share?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show20 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow20(!show20)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>What information will I share?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show20 ?
            (<View style={styles.box}> <Text>Joining our community requires sharing personal information that we use to build out your profile. The more information we collect you will increase your opportunity to receive more surveys and your survey qualification rate could increase. Examples of information we collect:
{'\n'}

<Text style={styles.box_content_points}>
    1. Basic info (Name, email, mobile phone #, address, etc)
</Text>{'\n'}
<Text style={styles.box_content_points}>
    2. Household (Household income, # of kids and adults in household, etc)
</Text>{'\n'}
<Text style={styles.box_content_points}>
    3. Finance (Investments, credits cards types, etc)
</Text>{'\n'}
<Text style={styles.box_content_points}>
    4. Technology (Mobile devices, tech devices you use and have in household)
</Text>{'\n'}
</Text> </View>) : null}
            </View>
        </View>
        

        
        <View style={styles.faq_list}>
            <View>
            {show21 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow21(!show21)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Will anyone have access to my profile?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show21 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow21(!show21)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Will anyone have access to my profile?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show21 ?
            (<View style={styles.box}> <Text>Protecting your privacy is of the utmost importance to us. Any information that you provide is kept strictly confidential. SurveyOptimus aggregates your responses to the online surveys with those of other SurveyOptimus community members so your individual responses are not identifiable.</Text> </View>) : null}
            </View>
        </View>

        
        <View style={styles.faq_list}>
            <View>
            {show22 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow22(!show22)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How many survey should I expect to reveive per month?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show22 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow22(!show22)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>How many survey should I expect to reveive per month?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show22 ?
            (<View style={styles.box}> <Text>Depending on your profile (i.e. your gender, your location, etc) and the needs of our clients, normaly you can expect from 1 to 5 surveys per month.</Text> </View>) : null}
            </View>
        </View>


        
        <View style={styles.faq_list}>
            <View>
            {show23 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow23(!show23)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How much I have to pay for the service?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show23 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow19(!show19)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>How much I have to pay for the service?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show23 ?
            (<View style={styles.box}> <Text>This service offered to you by SurveyOptimus is completely free of charge. We will never ask you for any money in any way. No catch.</Text> </View>) : null}
            </View>
        </View>


        
        <View style={styles.faq_list}>
            <View>
            {show24 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow24(!show24)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>What if I want to receive more surveys and earn more money?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show24 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow24(!show24)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>What if I want to receive more surveys and earn more money?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show24 ?
            (<View style={styles.box}> <Text>The more profile information you provide when you register, the more likely you are to receive survey invites. On registering we also ask how frequently you would like to participate. We aim to match the number of surveys with your interest in completing surveys.</Text> </View>) : null}
            </View>
        </View>


        
        <View style={styles.faq_list}>
            <View>
            {show25 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow25(!show25)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Can I invite my friends to join?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show25 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow25(!show25)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Can I invite my friends to join?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show25 ?
            (<View style={styles.box}> <Text>We encourage you to invite as many friends to join. In fact, we made it easy for you to do this.</Text> {'\n'}
            
            <Text style={styles.box_content_points}>
                1. From your account you can select "My Referral" button in the Dashboard
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                2. Share your personal referral link with your friends
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                3. You will receive a referral bonus reward if your referral joins and completes a survey with us
            </Text>{'\n'}

            </View>) : null}
            </View>
        </View>


        
        <View style={styles.faq_list}>
            <View>
            {show26 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow26(!show26)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>When should I expect to receive my first paid survey?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show26 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow26(!show26)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>When should I expect to receive my first paid survey?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show26 ?
            (<View style={styles.box}> <Text>Shortly after you have submitted your information through our signup form, you will be sent your first paid survey. The survey will be sent to the e-mail address that you have provided on the signup form. So, you are eligible from the very moment you sign-up to receive paid-surveys. In general however, you should receive your first survey within two or three weeks, depending on the completeness of your profile information and the current requirements of the organizations.</Text> </View>) : null}
            </View>
        </View>


        
        <View style={styles.faq_list}>
            <View>
            {show27 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow27(!show27)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How much money will I need make for finishing a given paid survey?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show27 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow27(!show27)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>How much money will I need make for finishing a given paid survey?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show27 ?
            (<View style={styles.box}> <Text>The surveys from SurveyOptimus are incentivize in reward points which are redeemable against various vouchers (e-vouchers) or through Paypal (for 10000 points & above). The points earned for completing a survey generally depends on factors such as the length of survey and complexity of the survey.</Text> </View>) : null}
            </View>
        </View>

        
        <View style={styles.faq_list}>
            <View>
            {show28 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow28(!show28)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How will I get paid and by whom?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show28 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow28(!show28)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>How will I get paid and by whom?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show28 ?
            (<View style={styles.box}> <Text>You will earn reward points by SurveyOptimus to your panel account, redeemable in form of vouchers (e-vouchers) or PayPal. Just redeem your points (after you reach 2500 points and 10000 for PayPal) and we will process your reward selection for you.</Text> </View>) : null}
            </View>
        </View>


        
        <View style={styles.faq_list}>
            <View>
            {show29 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow29(!show29)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Will all the surveys pay cash?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show29 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow29(!show29)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Will all the surveys pay cash?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show29 ?
            (<View style={styles.box}> <Text>No, surveys earn you reward points only.</Text> </View>) : null}
            </View>
        </View>


        <View style={styles.faq_list}>
            <View>
            {show30 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow30(!show30)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How do I get a Disbursement?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show30 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow30(!show30)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>How do I get a Disbursement?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show30 ?
            (<View style={styles.box}> <Text>To make a disbursement you first need to choose a pay-out method.{'\n'}
            
            <Text style={styles.box_content_points}>
            1. Login to your account.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                2. Click on "My Rewards".
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                3. Choose the payment option that you wish to use from the list given.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                4. In the bottom of the Voucher click on "points" that you wish to use.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                4. Click "Update".
            </Text>{'\n'}

            </Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show31 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow31(!show31)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How To Make A Pay-out To Paypal?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show31 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow31(!show31)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>How To Make A Pay-out To Paypal    ?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show31 ?
            (<View style={styles.box}> <Text>If you do not already have a PayPal account please go to https://www.paypal.com and open an account. It is important that your Paypal account has the same email address as the email address you receive surveys to. If you already have a Paypal account you can add the email address you receive surveys to in your PayPal account.{'\n'}
            
            <Text style={styles.box_content_points}>
                1. Login to your survey panel account..
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                2. Click on "My Rewards"?.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                3. Once you have reached the redeemable amount click on the "update" button and your money will be transferred to your online account at PayPal.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                4. Please make sure that you login to your PayPal account and accept the transfer.
            </Text>{'\n'}
            </Text> </View>) : null}
            </View>
        </View>

            
        
        <View style={styles.faq_list}>
            <View>
            {show32 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow32(!show32)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Payment solution is not available for the moment, please try again leter.</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show32 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow32(!show32)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Payment solution is not available for the moment, please try again leter.</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show32 ?
            (<View style={styles.box}> <Text>This message is seen when PayPal is trying to connect to your panelist account. You will see your attempted transfer as "FAILED". Please wait 2 to 4 days before re-attempting the transfer. The connection will correct itself and allow the transfer to take place.</Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show33 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow33(!show33)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Can reward be paid by cheque?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show33 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow33(!show33)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Can reward be paid by cheque?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show33 ?
            (<View style={styles.box}> <Text>No. We use Pay Pal because they are efficient systems, widely used and respected. It allows us to keep administration costs lower, and to pay our panelists quickly and easily.</Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show34 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow34(!show34)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How to change your E-mail address?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show34 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow34(!show34)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>How to change your E-mail address?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show34 ?
            (<View style={styles.box}> <Text>To change your email address please send an email to support (support@surveyoptimus.com). Share your old email address that you currently receive surveys to and the new email address that you would like your surveys sent to. For security reasons add your postcode and year of birth. Once these are received your email address will be updated.</Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show35 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow35(!show35)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How to recover Username/Password?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show35 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow35(!show35)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>How to recover Username/Password?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show35 ?
            (<View style={styles.box}> <Text>If you have forgotten your Username or Password please follow the steps below.
            {'\n'}
            <Text style={styles.box_content_points}>
                1. Click on the link:
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                2. Click on the link "Forgot Password?".
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                3. Enter your email address that you receive the surveys to.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                4. Click on the "Submit" button
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
                5. A new Password will be sent to your registered email address.
            </Text>{'\n'}
            If you get a message that you are using an invalid email address, check that your Browser accept Cookies (Including third party Cookies). You can also try to use another Browser to see if this helps.
            </Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show36 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow36(!show36)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>I have tried to log in to my pannel account, but I failed. Why can't I log in? It says Username or password is wrong, invalid, or unrecognized</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show36 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow36(!show36)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Will all the surveys pay cash?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show36 ?
            (<View style={styles.box}> <Text>Make sure that:
            
            <Text style={styles.box_content_points}>
            There isn't a typo in your username or password.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            You've entered your full email address. For example, "username@gmail.com" instead of "username@gmail."
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Caps lock is turned off.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Your keyboard is in the right language.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Refresh your browser and try signing in again.
            </Text>{'\n'}
            
            </Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show37 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow37(!show37)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Cookies must be turned to use Your SureveyOptimus account. Turn on cookies, then try signing in again.</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show37 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow37(!show37)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Cookies must be turned to use Your SureveyOptimus account. Turn on cookies, then try signing in again.</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show37 ?
            (<View style={styles.box}> <Text>If you're still getting an error message, here are some possible solutions. Try each one, then try signing in.
            <Text style={styles.box_content_points}>
            1. Open a new browser window.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            2. Clear your browser's cache and cookies.
            </Text>{'\n'}
            </Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show38 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow38(!show38)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>How to clear cache and cookies?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show38 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow38(!show38)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Will all the surveys pay cash?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show38 ?
            (<View style={styles.box}> <Text>Cookies, are files created by websites you've visited, and your browser's cache, which helps pages load faster, make it easier for you to browse the web.
{'\n'}
Clearing your browser's cache and cookies means that website settings (like usernames and passwords) will be deleted and some sites might appear to be a little slower because all of the images have to be loaded again.
{'\n'}
On Google Chrome
{'\n'}

            <Text style={styles.box_content_points}>
            1. On your computer, open Chrome.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            2. On your browser toolbar, click More More Tools Clear Browsing Data .
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            3. In the "Clear browsing data" box, click the checkboxes for Cookies and other site data and Cached images and files .
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            4. Use the menu at the top to select the amount of data that you want to delete. Choose beginning of time to delete everything.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            4. Click Clear browsing data .
            </Text>{'\n'}
            On other browsers
            {'\n'}
            Review and follow the instructions provided by your browser:
            {'\n'}
            <Text style={styles.box_content_points}>
            Windows Internet Explorer

            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Mozilla Firefox

            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Apple Safari
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Opera
            </Text>{'\n'}
            If web pages aren't displaying correctly, you can try using your browser's incognito or "private browsing" mode to see if the problem is caused by something other than cache or cookies.
Change your browser's privacy settings.
{'\n'}
</Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show39 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow39(!show39)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>Change your privacy settings?</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show39 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow39(!show39)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Will all the surveys pay cash?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show39 ?
            (<View style={styles.box}> <Text>
                If you're having problems getting into your account, try changing your privacy settings.
{'\n'}
If you have your browser's privacy settings set to "High," add www.MROptimus.com and www.surveyoptimus.com to your browser's list of allowed sites.
{'\n'}
Learn how to check or change your browser's privacy settings:
{'\n'}

<Text style={styles.box_content_points}>
            Windows Internet Explorer

            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Mozilla Firefox

            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Chrome
            </Text>{'\n'}

            <Text style={styles.box_content_points}>
            Change your privacy settings

            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            If you use a firewall, proxy, or anti-virus program to increase your computer's security, temporarily turn off the program and try signing into SurveyOptimus.
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            If that fixes the problem, the security program might have been stopping you from using SurveyOptimus. Contact the program's support center and ask how to use their
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            program without blocking SurveyOptimus Access.
            </Text>{'\n'}
            <Text>Please check the following settings on your computer: {'\n'}</Text>
            <Text style={styles.box_content_points}>
            Ensure cookies are enabled

            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Ensure ISP settings are not blocking access to surveyoptimus.com
            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Ensure ISP settings are not blocking access to surveyoptimus.com

            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Ensure that you add the surveyoptimus.com web site as a Trusted Site on your internet browser

            </Text>{'\n'}
            <Text style={styles.box_content_points}>
            Passwords are case sensitive and check that your Caps Lock is switched off

            </Text>{'\n'}
            </Text> </View>) : null}
            </View>
        </View>



        <View style={styles.faq_list}>
            <View>
            {show40 ? 
            <TouchableOpacity
                style={styles.button}
                onPress={() => setShow40(!show40)}
            >
            <View style={{flex: 0.8}}>
                <Text style={styles.question}>What are a Cookies(Source Wikipedia)</Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'center'}}>
                {show40 ? <MaterialCommunityIcons name="plus-circle" color={"#fff"} size={26} /> : <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />}
            </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.button_green}
                onPress={() => setShow40(!show40)}
            >
                <View style={{flex: 0.8}}>
                    <Text tyle={styles.question}>Will all the surveys pay cash?</Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'center'}}>
                    <MaterialCommunityIcons name="plus-circle" color={"#369239"} size={26} />
                </View>
            </TouchableOpacity>
            }
            {show40 ?
            (<View style={styles.box}> <Text>A cookie, also known as an HTTP cookie, web cookie, or browser cookie, is used for an origin website to send state information to a user's browser and for the browser to return the state information to the origin site. The state information can be used for authentication, identification of a user session, user's preferences, shopping cart contents, or anything else that can be accomplished through storing text data on the user's computer.
{'/n'}
Cookies cannot be programmed, cannot carry viruses, and cannot install malware on the host computer. However, they can be used by spyware to track user's browsing activities-a major privacy concern that prompted European and US law makers to take action. Cookie data can also be illicitly disclosed by hackers to gain access to a victim's web account.
{'/n'}
More information about cookies here: http://en.wikipedia.org/wiki/HTTP_cookie
{'/n'}
</Text> </View>) : null}
            </View>
        </View>


    </Animatable.View>
  </View>
    );
  }


const styles = StyleSheet.create({
    question: {
        fontWeight: 500,
    },
    box_content_points:{
        padding: normalize(5),
    },
    box: {
        margin: 4,
        padding: 4,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderRadius: 5,
        alignItem: 'center'
    },
    button_green: {    
        borderWidth: 1,
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderBottomColor: '#369239',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        padding: 10,
        flexDirection: 'row',
        flex: 1,
    },
    button: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#369239',
        padding: 10,
        flexDirection: 'row',
        flex: 1,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
    countText: {
        color: '#FF00FF'
    },
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
    faq_list: {
        marginTop: 5,
    }
  });
