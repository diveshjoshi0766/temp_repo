
import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  Button,
  View,
  Touchable,
} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screen/SplashScreen';
import MyTabScreen from '../screen/MyTabScreen';
import SignInScreen from '../screen/SignInScreen';
import DefaultScreen from '../screen/DefaultScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import SignUpScreen from '../screen/SignUpScreen';
import PresonalDetailsScreen from '../screen/PresonalDetailsScreen';
import ProfileSurvey1 from '../screen/ProfileSurvey1';
import ChangePasswordScreen from '../screen/ChangePasswordScreen';
import MyAccountScreen from '../screen/MyAccountScreen';
import CommunicationOptionScreen from '../screen/CommunicationOptionScreen';
import DeactivationConfirmation from '../screen/DeactivationConfirmation';
import UnsubscribeReason from '../screen/UnsubscribeReason';
import RewardHistory from '../screen/RewardHistory';
import PrivacyPolicyScreen from '../screen/PrivacyPolicyScreen';
import FAQs from '../screen/FAQs'
import TermsAndConditions from '../screen/TermsAndConditions';
import UpdateProfileScreen from '../screen/UpdateProfileScreen';
import EndOfProfileSurveyScreen from '../screen/EndOfProfileSurveyScreen';
import LoadingScreen from '../screen/LoadingScreen';
import ProfileSurvey2 from '../screen/ProfileSurvey2';
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from '../screen/OnBoardingScreen';
import { TouchableOpacity } from 'react-native-web';
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();

// (userInfo.message !== undefined && userInfo.message.split('!!')[0] == 'Congratulations') ? (
//   <>
//     <Stack.Screen name="Profile Survey" component={ProfileSurvey1} screenOptions={{headerShown: false}}/>
//     <Stack.Screen
//       name="Home"
//       component={MyTabScreen}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="End Of Profile Survey Screen"
//       component={EndOfProfileSurveyScreen}
//       options={{headerShown: false}}
//     />
//   </>
// ) :



const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);
  
  const [isFirstLaunch, setIsFirstTimeLaunch] = useState(null)

  useEffect(() => {
      AsyncStorage.getItem('alreadyLaunched').then(value => {
          if(value == null){
              AsyncStorage.setItem('alreadyLaunched', 'true')
              setIsFirstTimeLaunch(true)
          }else{
              setIsFirstTimeLaunch(false)
          }
      })
  },[])

  return (
      <>
        {splashLoading ? (
          <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Loading Screen"
                component={LoadingScreen}
                options={{headerShown: false}}
              />
              </Stack.Navigator>
            </NavigationContainer>
        ) :
        userInfo.Result  ? isFirstLaunch == null ? <></> : (
        <NavigationContainer>
        <Stack.Navigator
        // screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="OnBoarding Screen" 
            component={OnboardingScreen} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Home" 
            component={MyTabScreen} 
            options={{headerShown: false}} 
          />
          <Stack.Screen
            name="Communication Option Screen"
            component={CommunicationOptionScreen}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            },
            // headerLeft: () => (
            //   <TouchableOpacity
            //     onPress={() => Navigation.navigate('Communication Option Screen')}>
            //       <Icon name="angle-left" color="#378C3C" size={25}></Icon>  
            //     </TouchableOpacity>
            // ),

            // header: ({ goBack }) => ({
            //     left: ( <Icon name="angle-right" color="#fff" size={25} onPress={ () => { goBack() } }></Icon>),  
            // }),

            }}
            headerLeft={<Icon name="angle-right" color="#fff" size={25} ></Icon>}
          />
          <Stack.Screen
            name="Deactivation Confirmation Screen"
            component={DeactivationConfirmation}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}
          />
          <Stack.Screen
            name="Unsubscribe Reason Screen"
            component={UnsubscribeReason}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}
          />
          <Stack.Screen
            name="Reward History"
            component={RewardHistory}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}
          />
          <Stack.Screen
            name="Change Password Screen"
            component={ChangePasswordScreen}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}
          />
          <Stack.Screen
            name="Privacy Policy Screen"
            component={PrivacyPolicyScreen}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}
          />
          <Stack.Screen
            name="FAQs Screen"
            component={FAQs}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}
          />
          <Stack.Screen
            name="Terms And Conditions Screen"
            component={TermsAndConditions}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}
            
          />
          <Stack.Screen
            name="Update Profile Screen"
            component={UpdateProfileScreen}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}
          />
          <Stack.Screen
            name="Profile Survey"
            component={ProfileSurvey1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="End Of Profile Survey Screen"
            component={EndOfProfileSurveyScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile Survey 2"
            component={ProfileSurvey2}
            options={{headerStyle: {
              backgroundColor: '#378C3C'
            },
            headerTitleStyle: {
              color: 'white'
            }
            }}

          />
        </Stack.Navigator>
    </NavigationContainer>
        ) : (
          <NavigationContainer>
            <Stack.Navigator
            
            >
            <Stack.Screen
              name="Defualt Screen"
              component={DefaultScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Sign In Screen"
              component={SignInScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Forgot Password Screen"
              component={ForgotPasswordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Sign Up Screen"
              component={SignUpScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Presonal Details Screen"
              component={PresonalDetailsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile Survey"
              component={ProfileSurvey1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Change Password Screen"
              component={ChangePasswordScreen}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}
            />
            <Stack.Screen
              name="My Account Screen"
              component={MyAccountScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Terms And Conditions Screen"
              component={TermsAndConditions}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            <Stack.Screen 
              name="Home" 
              component={MyTabScreen} 
              // screenOptions={{ headerShown: false }}
            />
            <Stack.Screen
              name="Communication Option Screen"
              component={CommunicationOptionScreen}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            <Stack.Screen
              name="Deactivation Confirmation Screen"
              component={DeactivationConfirmation}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            <Stack.Screen
              name="Unsubscribe Reason Screen"
              component={UnsubscribeReason}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            <Stack.Screen
              name="Reward History"
              component={RewardHistory}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            <Stack.Screen
              name="Privacy Policy Screen"
              component={PrivacyPolicyScreen}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            <Stack.Screen
              name="FAQs Screen"
              component={FAQs}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            <Stack.Screen
              name="Update Profile Screen"
              component={UpdateProfileScreen}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            <Stack.Screen
              name="End Of Profile Survey Screen"
              component={EndOfProfileSurveyScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile Survey 2"
              component={ProfileSurvey2}
              options={{headerStyle: {
                backgroundColor: '#378C3C'
              },
              headerTitleStyle: {
                color: 'white'
              }
              }}

            />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </>
  );
};

export default Navigation;














// const Navigation = () => {
//   const {userInfo, splashLoading} = useContext(AuthContext);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//       screenOptions={{ headerShown: false }}
//       >
//         {splashLoading ? (
//           <Stack.Screen
//             name="Loading Screen"
//             component={LoadingScreen}
//             options={{headerShown: false}}
//           />
//         ) :
//         userInfo.Result  ? (<>
//             <Stack.Screen 
//               name="Home" 
//               component={MyTabScreen} 
//               screenOptions={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Communication Option Screen"
//               component={CommunicationOptionScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Deactivation Confirmation Screen"
//               component={DeactivationConfirmation}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Unsubscribe Reason Screen"
//               component={UnsubscribeReason}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Reward History"
//               component={RewardHistory}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Change Password Screen"
//               component={ChangePasswordScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Privacy Policy Screen"
//               component={PrivacyPolicyScreen}
//               // options={{headerShown: false}}
//               options={{
//                 headerTitle: () => {<Text>Privacy Policy</Text>},
//                 headerRight: () => (
//                   <Button
//                     onPress={() => alert('This is a button!')}
//                     title="Info"
//                     color="#00cc00"
//                   />
//                 ),
//               }}
//             />
//             <Stack.Screen
//               name="FAQs Screen"
//               component={FAQs}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Terms And Conditions Screen"
//               component={TermsAndConditions}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Update Profile Screen"
//               component={UpdateProfileScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Profile Survey"
//               component={ProfileSurvey1}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="End Of Profile Survey Screen"
//               component={EndOfProfileSurveyScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Profile Survey 2"
//               component={ProfileSurvey2}
//               options={{headerShown: false}}
//             />
//           </>
//         ) : (
//           <>
//             <Stack.Screen
//               name="Defualt Screen"
//               component={DefaultScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Sign In Screen"
//               component={SignInScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Forgot Password Screen"
//               component={ForgotPasswordScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Sign Up Screen"
//               component={SignUpScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Presonal Details Screen"
//               component={PresonalDetailsScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Profile Survey"
//               component={ProfileSurvey1}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Change Password Screen"
//               component={ChangePasswordScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="My Account Screen"
//               component={MyAccountScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Terms And Conditions Screen"
//               component={TermsAndConditions}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen 
//               name="Home" 
//               component={MyTabScreen} 
//               screenOptions={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Communication Option Screen"
//               component={CommunicationOptionScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Deactivation Confirmation Screen"
//               component={DeactivationConfirmation}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Unsubscribe Reason Screen"
//               component={UnsubscribeReason}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Reward History"
//               component={RewardHistory}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Privacy Policy Screen"
//               component={PrivacyPolicyScreen}
//               // options={{headerShown: false}}
//               options={{
//                 headerTitle: () => {<Text>Privacy Policy</Text>},
//                 headerRight: () => (
//                   <Button
//                     onPress={() => alert('This is a button!')}
//                     title="Info"
//                     color="#00cc00"
//                   />
//                 ),
//               }}
//             />
//             <Stack.Screen
//               name="FAQs Screen"
//               component={FAQs}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Update Profile Screen"
//               component={UpdateProfileScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="End Of Profile Survey Screen"
//               component={EndOfProfileSurveyScreen}
//               options={{headerShown: false}}
//             />
//             <Stack.Screen
//               name="Profile Survey 2"
//               component={ProfileSurvey2}
//               options={{headerShown: false}}
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;