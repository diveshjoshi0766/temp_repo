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

  const survey_question_func = (countryID, panelistID) => {
    setLoading(true)
    axios
    .get(`${BASE_URL}/registration/${countryID}/${panelistID}`)
    .then(res => {
      let questions = res.data;
      setSurveyQuestion(questions);
      AsyncStorage.setItem('surveyQuestion', JSON.stringify(surveyQuestion));
      setIsLoading(false);
      console.log(questions);
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
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

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
        survey_question_func
      }}>
      {children}
    </AuthContext.Provider>
  );
};
