import { View, Text, SafeAreaView, Pressable, Modal, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
import { StatusBar } from 'react-native'
import React, {useState} from 'react'
import inventories from '../data'
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import Inventory from '../Components/Inventory';
import * as ImagePicker from 'expo-image-picker';
import AddImage from '../Components/AddImage';
import ShowImage from '../Components/ShowImage';
import { useToast } from 'react-native-toast-notifications';
import validator from 'validator';
import { Warning } from 'postcss';

const Inventories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [selectedValue, setSelectedValue] = useState("jewelry");
  const [selectedImage, setSelectedImage] = useState(null);
  const [inventoriesStore, setInventoriesStore] = useState(inventories)
  const toast = useToast();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const handleInputs = (value, valueSetter) =>{
    valueSetter(value)
    console.log(value)
  }

  const sumOfArrays = () =>{
    const numbers = inventoriesStore.map(item => item.purchasePrice);
    console.log(numbers)
    const totalValue = numbers.reduce((a,c)=> a+parseInt(c),0)
    const maxTotVal = totalValue + parseInt(value)
    console.log(maxTotVal)
    return maxTotVal
  }

  const createNewItem = () =>{
    if(validator.isEmpty(name) || validator.isEmpty(value) || selectedImage === null){
      setModalVisible(!modalVisible);
      toast.show("Please input Name, price and image",{type:Warning,placement: "top",
      duration: 4000,
      animationType: "slide-in"});
    }else if(sumOfArrays() > 40000){
      setModalVisible(!modalVisible);
      toast.show("total inventory value cannot be more than 40,000 euros",{type:Warning,placement: "top",
      duration: 4000,
      animationType: "slide-in"});
    }else{
      var newsy = {
        id:Math.random() * 100,
        name:name,
        purchasePrice:value,
        description:description,
        type:selectedValue,
        photo:selectedImage
      }
      setInventoriesStore([...inventoriesStore, newsy])
      setModalVisible(!modalVisible);
      setName("")
      setDescription("")
      setSelectedImage(null)
      setValue("")
    }
    
  }
  return (
    
    <SafeAreaView className="flex-1 mx-4 mt-20 bg-[#f7f2f2]">
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Platform.OS === "ios" ? "black" : "white"} translucent = {true}/>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        style={{
          backgroundColor:"#f7f2f2"
        }}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="bg-[#f7f2f2] flex-1">
          <View className="mx-4 mt-10 bg-[#f7f2f2]">
            <View className="flex flex-row justify-between mt-4">
              <Pressable onPress={()=>{
                setModalVisible(!modalVisible);
              }}>
                <Text className="text-blue-800 font-semibold">Cancel</Text>
              </Pressable>
              <Pressable
                onPress={createNewItem}
              >
                <Text className="text-blue-800 font-semibold">Add</Text>
              </Pressable>
            </View>
            <View className="space-y-3 mt-5">
              <View className="flex items-center">
                <Pressable
                  onPress={pickImageAsync}
                  className="w-28 h-28 "
                >
                  {
                    selectedImage == null ?
                    <AddImage/>
                    :
                    <ShowImage uri={selectedImage}/>
                  }
                  
                </Pressable>
              </View>
              
              <View className="space-y-1">
                <Text className="text-bold">Name</Text>
                <TextInput 
                  onChangeText={(text)=>{handleInputs(text, setName)}}
                  value={name}
                  placeholder="name"
                  className="border border-gray-400 w-[100%] h-14 rounded-md pl-3 bg-white"
                />
              </View>
              <View className="space-y-1">
                <Text>Category</Text>
                <View className="border border-gray-400 w-[100%] rounded-md">
                  <Picker
                    style={{
                      backgroundColor:"white",
                      width:'100%',
                      color:"gray"
                    }}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Jewelry" value="java" />
                    <Picker.Item label="Arts" value="arts" />
                    <Picker.Item label="Electronics" value="electronics" />
                    <Picker.Item label="Musical Instrument" value="musical instruments" />
                  </Picker>
                </View>
                
              </View>
              <View className="space-y-1">
                <Text className="text-bold">Value</Text>
                <TextInput 
                  onChangeText={(text)=>{handleInputs(text, setValue)}}
                  value={value}
                  placeholder="price"
                  keyboardType='numeric'
                  className="border border-gray-400 w-[100%] h-14 rounded-md pl-3 bg-white"
                />
              </View>
              <View className="space-y-1">
                <Text>Description</Text>
                <TextInput 
                  onChangeText={(text)=>{handleInputs(text, setDescription)}}
                  value={description}
                  multiline = {true}
                  numberOfLines = {8}
                  placeholder=""
                  className="border border-gray-400 w-[100%] h-28 mb-8 rounded-md pl-3 bg-white"
                />
              </View>
            </View>
          </View>
          </View>
          </TouchableWithoutFeedback>
          </ScrollView>
        </Modal>
    <ScrollView>
      <View className="flex flex-row w-full justify-between items-center">
        <Text className="text-2xl font-bold">Inventory</Text>
        <Pressable
          onPress={()=>{
            setModalVisible(true)
          }}
        >
          <AntDesign name="pluscircle" size={24} color="blue" />
        </Pressable>
        
      </View>
      <View className="flex flex-row w-[100vh] flex-wrap mt-5 justify-between">
        {
          inventoriesStore.map(item => (
            <Inventory key={item.id} name={item.name} photo={item.photo} purchasePrice={item.purchasePrice}/>
          ))
        }
      </View>
    </ScrollView> 
  </SafeAreaView>
  )
}

export default Inventories