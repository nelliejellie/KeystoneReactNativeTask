import { View, Text, SafeAreaView, Pressable, Modal, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
import React, {useState} from 'react'
import inventories from '../data'
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import Inventory from '../Components/Inventory';
import * as ImagePicker from 'expo-image-picker';
import AddImage from '../Components/AddImage';
import ShowImage from '../Components/ShowImage';

const Inventories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [selectedValue, setSelectedValue] = useState("jewelry");
  const [selectedImage, setSelectedImage] = useState(null);
  const [inventoriesStore, setInventoriesStore] = useState(inventories)

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

  const createNewItem = () =>{
    console.log(inventoriesStore)
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
  return (
    
    <SafeAreaView className="flex-1 mx-4 mt-20 bg-[#f7f2f2]">
      <Modal
        animationType="slide"
        visible={modalVisible}
        style={{
          backgroundColor:"#f7f2f2"
        }}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="bg-[#f7f2f2] flex-1">
          <View className="mx-4 mt-10 bg-[#f7f2f2]">
            <View className="flex flex-row justify-between mt-4">
              <Pressable onPress={()=>{
                setModalVisible(!modalVisible);
              }}>
                <Text className="text-blue-800 font-semiboldsetModalVisible">Cancel</Text>
              </Pressable>
              <Pressable
                onPress={createNewItem}
              >
                <Text className="text-blue-800">Add</Text>
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
                  className="border border-gray-400 w-[90%] h-10 rounded-md pl-3 bg-white"
                />
              </View>
              <View>
                <Text>Category</Text>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Jewelry" value="java" />
                  <Picker.Item label="Arts" value="arts" />
                  <Picker.Item label="Electronics" value="electronics" />
                  <Picker.Item label="Musical Instrument" value="musical instruments" />
                </Picker>
              </View>
              <View className="space-y-1">
                <Text className="text-bold">Value</Text>
                <TextInput 
                  onChangeText={(text)=>{handleInputs(text, setValue)}}
                  value={value}
                  placeholder="value"
                  keyboardType='numeric'
                  className="border border-gray-400 w-[90%] h-10 rounded-md pl-3 bg-white"
                />
              </View>
              <View className="space-y-1">
                <Text>Description</Text>
                <TextInput 
                  onChangeText={(text)=>{handleInputs(text, setDescription)}}
                  value={description}
                  multiline = {true}
                  numberOfLines = {8}
                  placeholder="description"
                  className="border border-gray-400 w-[90%] h-32 rounded-md pl-3 bg-white"
                />
              </View>
            </View>
          </View>
          </View>
          </TouchableWithoutFeedback>
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