import { useState } from "react"

const { View,Text, Button, Modal } = require("react-native")

export default function App(){
  const [isModalvisible,setIsModalVisible]=useState(false)
  return (
    <View style={{flex:1, backgroundColor:"red", padding:60}}>
      <Button 
      title="Press Here"
      onPress={()=>setIsModalVisible(true)}
      color="midnightblue"
      />
      <Modal 
        visible={isModalvisible} 
        onRequestClose={()=>setIsModalVisible(false)}
        animationType="slide"
        // presentationStyle="pageSheet"
        presentationStyle="formSheet"
        >
        <View style={{flex:1, backgroundColor:"plum"}}>
          <Text>Modal Content Herer</Text>
          <Button 
          title="Close"
          color="midnightblue"
          onPress={()=>setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  )
}