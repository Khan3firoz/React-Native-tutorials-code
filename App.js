import { View,StatusBar, Button } from "react-native";
import React,{useState} from "react"

export default App=()=>{
  const [isHideStatusBar, setIsHideStatusBar] = useState(false)
  return(
    <View style={{padding:60}}>
      <Button title="Hide status Bar"
        onPress={()=>setIsHideStatusBar(!isHideStatusBar)}
      />
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden={isHideStatusBar}/>
    </View>
  )
}