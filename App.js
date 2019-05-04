/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, FlatList,Alert } from 'react-native';
import TaskItem from './TaskItem'
import ViewAdd from './ViewAdd'


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFlatList: [
                {
                    title: "Go to the office",
                    mesg: "Go to the office"
                    , isFinished: true
                },
                {
                    title: "Playing football",
                    mesg: "Playing football",
                    isFinished: false
                },
                {
                    title: "React Native Tutorial",
                    mesg: "React Native Tutorial",
                    isFinished: true
                },
            ],
        }
    }
    addNewTask = (inputText) => {
        var newTask = { title: inputText,mesg:'', isFinished: false }
        var newTaskList = [...this.state.dataFlatList, newTask]
        this.setState({ dataFlatList: newTaskList });
    }
    onFinishedItem = (index) => {
        let newTaskList = this.state.dataFlatList;
        newTaskList[index].isFinished = !newTaskList[index].isFinished;
        this.setState({ dataFlatList: newTaskList });
    }
    onDeleteItem = (index) => {
        let newTaskList = this.state.dataFlatList.filter((item, i) => i != index);
        this.setState({ dataFlatList: newTaskList });
    }
    ChangeNoidung = (nd)=>{
        let updatemesgList = [...this.state.dataFlatList];
        updatemesgList.map((item)=>item.mesg=nd);
        this.setState({
            dataFlatList: updatemesgList,
        });
        Alert.alert("Messenger","success...!");
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "#efefef", marginBottom: 20, }}>
                    <Text style={styles.welcome}>To Do App</Text>
                </View>
                <ViewAdd addNewTask={this.addNewTask} />
                <TaskItem
                    dataFlatList={this.state.dataFlatList}
                    onFinishedItem={this.onFinishedItem}
                    onDeleteItem={this.onDeleteItem}
                    ChangeNDApp = {this.ChangeNoidung}
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#88e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20

    }
});
