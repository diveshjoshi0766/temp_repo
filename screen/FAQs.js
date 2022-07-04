import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Poppins_Thin100,
  Poppins_Thin100_Italic,
  Poppins_ExtraLight200,
  Poppins_ExtraLight200_Italic,
  Poppins_Light300,
  Poppins_Light300_Italic,
  Poppins_Regular400,
  Poppins_Regular400_Italic,
  Poppins_Medium500,
  Poppins_Medium500_Italic,
  Poppins_SemiBold600,
  Poppins_SemiBold600_Italic,
  Poppins_Bold700,
  Poppins_Bold700_Italic,
  Poppins_ExtraBold800,
  Poppins_ExtraBold800_Italic,
  Poppins_Black900,
  Poppins_Black900_Italic,
} from '@expo-google-fonts/poppins';

export default function FAQs () {
  let [fontsLoaded] = useFonts({
    Poppins_Thin100,
    Poppins_Thin100_Italic,
    Poppins_ExtraLight200,
    Poppins_ExtraLight200_Italic,
    Poppins_Light300,
    Poppins_Light300_Italic,
    Poppins_Regular400,
    Poppins_Regular400_Italic,
    Poppins_Medium500,
    Poppins_Medium500_Italic,
    Poppins_SemiBold600,
    Poppins_SemiBold600_Italic,
    Poppins_Bold700,
    Poppins_Bold700_Italic,
    Poppins_ExtraBold800,
    Poppins_ExtraBold800_Italic,
    Poppins_Black900,
    Poppins_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Thin100' }}>
          Poppins_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Thin100_Italic' }}>
          Poppins_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_ExtraLight200' }}>
          Poppins_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_ExtraLight200_Italic' }}>
          Poppins_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Light300' }}>
          Poppins_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Light300_Italic' }}>
          Poppins_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Regular400' }}>
          Poppins_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Regular400_Italic' }}>
          Poppins_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Medium500' }}>
          Poppins_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Medium500_Italic' }}>
          Poppins_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_SemiBold600' }}>
          Poppins_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_SemiBold600_Italic' }}>
          Poppins_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Bold700' }}>
          Poppins_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Bold700_Italic' }}>
          Poppins_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_ExtraBold800' }}>
          Poppins_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_ExtraBold800_Italic' }}>
          Poppins_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Black900' }}>
          Poppins_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Black900_Italic' }}>
          Poppins_Black900_Italic
        </Text>
      </View>
    );
  }
