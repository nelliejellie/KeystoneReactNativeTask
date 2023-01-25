import { View, Text, SafeAreaView, Pressable, Modal, TextInput } from 'react-native'
import React, {useState} from 'react'
import inventories from '../data'
import { AntDesign } from '@expo/vector-icons';
import Stuff from '../Components/Stuff';
import Inventory from '../Components/Inventory';

const Inventories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleInputs = (value, valueSetter) =>{
    valueSetter(value)
  }
  return (
    <SafeAreaView className="flex-1 mx-4 mt-20">
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View className="mx-2">
            <View className="flex flex-row justify-between mt-4">
              <Text className="text-blue-800 font-semiboldsetModalVisible">Cancel</Text>
              <Text>Add</Text>
            </View>
            <TextInput 
             onChangeText={(text)=>{handleInputs(text, setName)}}
             value={name}
             placeholder="name"
            />
            <TextInput 
             onChangeText={(text)=>{handleInputs(text, setCategory)}}
             value={category}
             placeholder="category"
            />
            <TextInput 
             onChangeText={(text)=>{handleInputs(text, setValue)}}
             value={value}
             placeholder="value"
            />
            <TextInput 
             onChangeText={(text)=>{handleInputs(text, setDescription)}}
             value={description}
             placeholder="description"
            />
          </View>
        </Modal>
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
    <View className="flex flex-row mt-5 justify-between">
      {
        inventories.map(item => (
          <Inventory name={item.name} photo={item.photo} purchasePrice={item.purchasePrice}/>
        ))
      }
    </View>
  </SafeAreaView>
  )
}

export default Inventories