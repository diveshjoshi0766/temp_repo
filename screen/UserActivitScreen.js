import React, { useEffect, useState } from "react";
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
    ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

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

export default function UserActivityScreen({navigation}) {
    const { colors } = useTheme();
    // const [tableHead, setTableHead] = ([])
    // const [tableData, setTableData] = ([])
    // const setTableHeadData = () =>{ 
    //     setTableHead(['Head', 'Head2', 'Head3', 'Head4'])
    // }
    // const setTableData_ = () =>{
    //     setTableData([
    //         ['1', '2', '3', '4'],
    //         ['a', 'b', 'c', 'd'],
    //         ['1', '2', '3', '4'],
    //         ['a', 'b', 'c', 'd']
    //     ])
    // }
    // useEffect(() => {
    //     console.log("useEffect called");
    //     // setTableHeadData
    //     // setTableData_
    //     console.log(tableData)
    // }
    // ,[])

    // console.log(tableData)
    
    return (
        <ScrollView showsVerticalScrollIndicator ={false}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Good Morning, Vimal</Text>
                </View>
                {/* heading */}
                <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: 6}}>
                    <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins Regular 400'}}>Points History</Text>
                    <Text style={{color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(22), fontFamily: 'Poppins Regular 400' }}><Icon name="user" size={20} color="black"/> Profile</Text>
                </View>
                <View style={styles.points}>
                    <View style={styles.center}>
                        <Text style={styles.text_box_black_header}>My Points</Text>
                        <Text style={styles.text_box_black_points}>1355</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.text_box_black_header}>My Profile</Text>
                        <Text style={styles.text_box_black_points}>100%</Text>
                    </View>
                </View>
                
                <View style={[styles.products, {display:'flex', flexDirection:'row', justifyContent: 'space-evenly', backgroundColor: '#d4d6d1', marginTop: 10}]}>
                    <Text style={styles.tabel_header}>Date</Text>
                    <Text style={styles.tabel_header}>Description</Text>
                    <Text style={styles.tabel_header}>Points</Text>
                </View>
                
                <View style={[styles.products, {justifyContent: 'space-evenly', textAlign: 'center'}]}>
                    <Text style={styles.table_row_data}>April 27,2022</Text>
                    <Text style={styles.table_row_data}>Spinner</Text>
                    <Text style={styles.table_row_data}>Points</Text>
                </View>
          </View>
          </ScrollView>

       
        
        //table



        // <Table borderStyle={{borderColor: 'transparent'}}>
        //   <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
        //   {
        //     tableData.map((rowData, index) => (
        //       <TableWrapper key={index} style={styles.row}>
        //         {
        //           rowData.map((cellData, cellIndex) => (
        //             <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
        //           ))
        //         }
        //       </TableWrapper>
        //     ))
        //   }
        // </Table>

    );
  }


const styles = StyleSheet.create({
    table_row_data:{
        color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(18)
    },
    tabel_header: {
        color: '#000000', marginTop:10, textAlign: "center", fontSize:normalize(20), fontFamily: 'Poppins_Thin100', fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#FAFAFA',
        padding: 10,
        flexDirection:'col',
        minHeight: SCREEN_HEIGHT,
        minWidth: SCREEN_WIDTH,
    },
    stretch: {
        width: 100,
        height: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        color: '#000000', 
        marginTop:10, 
        fontSize:normalize(25),
        fontWeight: 'bold',
        fontFamily: 'Poppins Regular 400'
        // fontFamily: 'Poppins_Black900' 
    },
    text_box_black_header: {
        color: '#fff', 
        marginTop:10, 
        fontWeight: '300',
        textAlign: "center", 
        fontSize:normalize(18),
        fontFamily: 'Poppins Regular 400'
    },
    text_box_black_points: {
        color: '#fff', 
        marginTop:5, 
        // fontWeight: '500',
        textAlign: "center", 
        fontSize: normalize(30),
        fontFamily: 'Poppins Regular 400'
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
    center :{
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1, 
    },
    points: {
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-evenly', 
        backgroundColor: '#1a1a1a', 
        alignContent: "center",
        height: 'justifyContent',
        paddingLeft: normalize(5),
        paddingRight: normalize(5),
        borderRadius: 20,
        padding: 10,
    },
    items:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-evenly', 
        backgroundColor: '#fff', 
        alignContent: "center",
        height: 'justifyContent',
        paddingLeft: normalize(5),
        paddingRight: normalize(5),
        borderRadius: 10,
        marginTop: normalize(10),
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    products: {
        marginTop: 3,
        minHeight: normalize(40),
        justifyContent: 'center',
        display:'flex',
        flexDirection:'row', 
        borderRadius: 10,
        // marginTop: normalize(10),
        borderColor: 'black',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.1
    }
  });
