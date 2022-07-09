import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [surveyQuestion, setSurveyQuestion] = useState({});
  const [trans_history, setTrans_history] = useState([])
  const [panelist_basic_details, setPanelist_basic_details] = useState(null)

  const panelist_profiling_ans = (ans_key) => {
    console.log(userInfo)
    console.log(ans_key)
    axios
      .put(`${BASE_URL}/setProfilingAnswer/${parseInt(userInfo.results.panelistID)}`, ans_key, {
        "Headers": {
          'Content-Type': 'application/json',
          'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB',
          "Access-Control-Allow-Methods": 'POST, PUT, GET, OPTIONS'
        }
      })
      .then(res => {
        let responce = res.data;
        console.log(responce);
        alert(res.data.message)
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        alert(`error ${e}`)
        setIsLoading(false);
      });
  }


  const avatar_set = (avatar_name) => {
    console.log(avatar_name)
    const data = JSON.stringify({
      "is_avatar" : 1, 
      "avatar_name" : avatar_name
    })

    axios
      .put(`${BASE_URL}/setAvatar/${parseInt(userInfo.Result.panelistID)}`, data, {
        "Headers": {
          'Content-Type': 'application/json',
          'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB',
          "Access-Control-Allow-Methods": 'POST, PUT, GET, OPTIONS'
        }
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        alert(res.data.message)
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        alert(`error ${e}`)
        setIsLoading(false);
      });
  }

  const redeem_request = (redeem_points, redeem_mode) => {
    const data = JSON.stringify({
      "panelistID" : `${userInfo.Result.panelistID}`,
      "redeem_points" : `${redeem_points}`,
      "redeem_mode" : `${redeem_mode}`
    })

    axios
      .put(`${BASE_URL}/redeemRequest`, data, {
        "Headers": {
          'Content-Type': 'application/json',
          'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB',
          "Access-Control-Allow-Methods": 'POST, PUT, GET, OPTIONS'
        }
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        alert(res.data.message)
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        alert(`error ${e}`)
        setIsLoading(false);
      });
  }

  const udpate_profile = (firstname, lastname, date, gender, add1, add2, city, state, country, zip, phone) => {
    setIsLoading(true);
      const data = JSON.stringify({
        "firstname": "Vimal", 
        "lastname": "Verma",
        "dob": "09/09/2101",
        "gender": 1,
        "address1": "ABCD 19",
        "address2": "XYZ 122002",
        "countryId": 100, "state": "Haryana",
        "city": "Gurgaon",
        "zipcode": "122002",
        "phone": "1111111111"
      })
      console.log(userInfo.Result.panelistID)
    axios
      .put(`${BASE_URL}/setBasicProfiling/${parseInt(userInfo.Result.panelistID)}`, data, {
        "Headers": {
          'Content-Type': 'application/json',
          'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB',
          "Access-Control-Allow-Methods": 'POST, PUT, GET, OPTIONS'
        }
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        alert(res.data.message)
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };


  const emailUnsubscribe = (unsubscribe_code, feedback_option_code, feedback_message) => {
    setIsLoading(true);
    let data = ""
    feedback_option_code !== 6 ? (
      data = JSON.stringify({
        "unsubscribe_code" : unsubscribe_code, 
        "feedback_option_code" : feedback_option_code,
      })
    ): (
      data = JSON.stringify({
        "unsubscribe_code" : unsubscribe_code, 
        "feedback_option_code" : feedback_option_code,
        "feedback_message": feedback_message
      })
    )
      console.log(data)
      console.log(parseInt(userInfo.Result.panelistID))
    axios
      .post(`${BASE_URL}/unsubscribes/${parseInt(userInfo.Result.panelistID)}`, data, {
        "Headers": {
          'Content-Type': 'application/json',
          'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB'
        }
      })  
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        alert(res.data.message)
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };
  
  const changePassword = (curr_pass, new_pass, conf_new_pass) => {
    setIsLoading(true);
      const data = JSON.stringify({
        "current_passwrod" : "111111", 
        "new_password" : "1111111",
        "confirm_new_password": "1111111"
      })
      console.log(userInfo.Result.panelistID)
    axios
      .put(`${BASE_URL}/changePassword/${parseInt(userInfo.Result.panelistID)}`, data, {
        "Headers": {
          'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB'
        }
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        alert(res.data.message)
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };


  const survey_question_func = () => {
    setIsLoading(true)
    axios
    .get(`${BASE_URL}/getCountryQuestion/232/536`)
    .then(res => {
      let questions = res.data;
      setSurveyQuestion(questions);
      console.log(questions);
      // AsyncStorage.setItem('surveyQuestion', JSON.stringify(surveyQuestion));
      setIsLoading(false);
    })
    .catch(e => {
      console.log(`register error ${e}`);
      setIsLoading(false);
    });
  }

  const register = (email, password, confirmPassword, firstName, lastName) => {
    setIsLoading(true);

    const data =JSON.stringify({
      "email": email,
      "password": password,
      "subscription" : 1,
      "registration_mode" :2,
      "ipaddress" : "192.241.148.69", 
      "firstName": firstName,
      "lastName": lastName,
      "isMobile" : 1
    })

    console.log(data)

      axios
      .post(`${BASE_URL}/registration`, data)
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  }

  const login = (email, password) => {
    setIsLoading(true);
      const data = JSON.stringify({
        "email" : email, 
        "password" : password
      });
      console.log(data)
    axios
      .post(`${BASE_URL}/login`, data, {
        "Headers": {
          'Content-Type': 'application/json',
          'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB'
        }
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = (email) => {
    setIsLoading(true);
    const data = JSON.stringify({
      email: email
    })
    axios
      .post(
        `${BASE_URL}/logout`,
        data,
        {
          "Headers": {
            'Content-Type': 'application/json',
            'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB'
          }
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const forgotpassword = (email) => {
      setIsLoading(true);
      const data = JSON.stringify({
        email: email
      })
      axios.put(
        `${BASE_URL}/forgotpassword`, data,{
          "Headers": {
            'Content-Type': 'application/json',
            'x-access-token': '3b5Udae8brA5yuXA7C3ZCnWVvwFUXPRB'
          }
        }
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };


  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        console.log(userInfo)
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };


  const panelistBasicDetails_func = () => {
    setIsLoading(true)
    axios
    .get(`${BASE_URL}/getBasicProfiling/${parseInt(userInfo.Result.panelistID)}`)
    .then(res => {
      let details = res.data;
      setPanelist_basic_details(details);
      console.log(details);
      setIsLoading(false);
    })
    .catch(e => {
      console.log(`register error ${e}`);
      setIsLoading(false);
    });
  }


  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
        forgotpassword,
        surveyQuestion,
        survey_question_func,
        survey_question_func,
        surveyQuestion,
        changePassword,
        emailUnsubscribe,
        trans_history,
        panelist_basic_details,
        panelistBasicDetails_func,
        udpate_profile,
        redeem_request,
        avatar_set,
        panelist_profiling_ans,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
