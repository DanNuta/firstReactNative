import { StatusBar } from "expo-status-bar";
import { StyleSheet, 
         Text,
        View, 
        TouchableWithoutFeedback, 
        TouchableNativeFeedback,  
        TouchableHighlight, 
        TouchableOpacity, 
        SafeAreaView, 
        Image, 
        Button,
        Alert,
        Platform,
        Dimensions
      } from "react-native";



export default function App() {

  console.log(Dimensions.get("screen"));


  const handlePress = () => {
    console.log("salut");
  };

  const handlePressNo = () => {
    console.log("no")
  }

  let a = "salu bar";


  const handlePrompt = () => {
    Alert.prompt("Buna", "Introdu numele tau", function(text){
      a = text;
    })
  }

  return (

    <>

    <View style={styles.viewElement}></View>

    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>salut din </Text>
      <Text>{a}</Text>
      <StatusBar style="auto" />
      <Image source={require("./assets/favicon.png")} />

      <TouchableHighlight onPress={handlePress}>
        <Image
          fadeDuration={1000}
          blurRadius={10}
          source={{
            width: 200,
            height: 200,
            uri: "https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg",
          }}
        />
      </TouchableHighlight>

      <Button 
           title="Click"
           color="green"
           onPress={() => Alert.alert("sall", "buna ziua", [
            {text: "Yes", onPress: handlePress},
            {text: "No", onPress: handlePressNo}
          ])}
           />


      <TouchableNativeFeedback >
        <View 
             style={{width: 100, 
                     height: 100, 
                     backgroundColor: "red"
                  }}
          >
        </View>
      </TouchableNativeFeedback>


      <Button
         color = "pink"
         title="Promt"
         onPress={() =>  Alert.alert("Buna", "Introdu numele tau")}
      
      />
    </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 0 : 20
  },

  text: {
    color: "black",
  },

  img: {
    width: 200,
    height: 300
  },

  viewElement: {
    width: "50%",
    height: 50,
    backgroundColor: "blue",
    paddingTop: Platform.OS === "ios" ? 0 : 100,
    marginTop: 100,
    flex: 0.5
  }
}
);
