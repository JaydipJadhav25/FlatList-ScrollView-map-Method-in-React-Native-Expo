import { FlatList, ScrollView, Text, View } from "react-native";

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


  {/* <View> */}
    <FlatList
    data={ [1,2,3,4,5,6,7,89,9,2,4,5,667,6765,453,3242,34314,1314]}
    contentContainerStyle={{
      backgroundColor : "yellow"
    }}
    //auto gride
    numColumns={3}
    //header comp
    ListHeaderComponent={<View
    style={{
      backgroundColor : "orange",
      height : 100,
      marginBottom : 20

    }}
    ><Text>THis is header component of flatlist</Text></View>}
    ListFooterComponent={
<View
    style={{
      backgroundColor : "orange",
      height : 100,
      marginBottom : 20

    }}
    ><Text>THis is Footer component of flatlist</Text></View>

    }
    renderItem={(e) => {
      console.log(e)
      return(
        <View
        style={{
          width :100,
          height : 100,
          backgroundColor : "blue",
          marginBottom :20,
          marginRight : 20,
          borderRadius : 50,
          borderWidth  :1,
          justifyContent : "center",
          alignItems : "center"
        }}
        >
          <Text
          style={{
            fontWeight : 300,
            fontSize : 50,
            color : "white"
          }}
          >{e.item}</Text>
          </View>
      )
    }}
    // horizontal


    />
  {/* </View> */}


   </>
  );
}
