import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <>   
   <ScrollView indicatorStyle="white" horizontal contentContainerStyle={{
    marginTop : 30
   }} >
    {
      [1,2,3,4,5,6,7,89,9].map((item) =>{
        return(
          <View
          style={{
            width :100,
            height : 100,
            backgroundColor : "white",
            marginBottom :20,
            marginRight : 20,
            borderRadius : 50,
            borderWidth  :1
          }}
          />
        )
      })
    }
   </ScrollView>


   <ScrollView indicatorStyle="white" horizontal contentContainerStyle={{
    marginTop : 30,
    flex : 1,
    alignItems : "flex-end"
   }} >
    {
      [1,2,3,4,5,6,7,89,9].map((item) =>{
        return(
          <View
          style={{
            width :100,
            height : 100,
            backgroundColor : "red",
            marginBottom :20,
            marginRight : 20,
            borderRadius : 50,
            borderWidth  :1
          }}
          />
        )
      })
    }
   </ScrollView>


   </>
  );
}
