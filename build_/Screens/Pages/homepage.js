import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
// import AuthNavigator from "../../components/AuthNavigator";
import images from "../../constants/images";
// import HomeTabNavigator from "../../components/BottomTabNavigator";



const { width: screenWidth } = Dimensions.get("window");

const homeimages = [
  { title: "Image 1", Image: images.sliderImage1},
  { title: "Image 2", Image: images.sliderImage2 },
  { title: "Image 3", Image: images.sliderImage3 },
];

const teachers = [
  {
    id: "1",
    name: "Rodney",
    course: "Mathematics",
    price: "$50",
    Image: images.sliderImage1,
  },
  {
    id: "2",
    name: "Jane Smith",
    course: "Physics",
    price: "$45",
    Image: images.sliderImage2,
  },
  {
    id: "3",
    name: "Tom Brown",
    course: "Chemistry",
    price: "$40",
    Image: images.sliderImage3,
  },
];

const courses = [
  {
    id: "1",
    title: "Basic Python",
    price: "$30",
    Image: images.sliderImage1,
  },
  {
    id: "2",
    title: "Basic React Native",
    price: "$25",
    Image: images.sliderImage2,
  },
  {
    id: "3",
    title: "Basic JavaScript",
    price: "$35",
    Image: images.sliderImage3,
  },
];

export default function Homepage() {
  return (
    <>
    <View style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>Hello</Text>
            <Text style={styles.userName}>Raheel</Text>
          </View>
          <Image
            style={styles.profilePic}
            source={images.profileImage2}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>


          {/* Search Bar */}
          <View style={styles.searchBarContainer}>
            <Ionicons name="search" size={24} color="grey" />
            <TextInput style={styles.textInput} placeholder="Search" />
            <Ionicons name="location-outline" size={24} color="grey" />
          </View>


          {/* Image Slider */}
          <FlatList
            pagingEnabled
            horizontal
            data={homeimages}
            keyExtractor={(item) => item.title}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.sliderContainer}>
                <Image source={item.Image} style={styles.sliderImage} />
              </View>
            )}
          />


          {/* Popular Teachers */}
          <Text style={styles.sectionTitle}>Popular Teachers</Text>
          <FlatList
            horizontal
            data={teachers}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.horizontalCard}
              >
                <Image source={item.Image} style={styles.cardImage} />
                <View style={styles.cardInfo}>
                  <Text>{item.course}</Text>
                  <Text>{item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          {/* Popular Courses */}
          <Text style={styles.sectionTitle}>Basic Popular Courses</Text>
          <FlatList
            horizontal
            data={courses}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.horizontalCard}
              >
                <Image source={item.Image} style={styles.cardImage} />
                <View style={styles.cardInfo}>
                  <Text>{item.title}</Text>
                  <Text>{item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
      {/* <HomeTabNavigator/> */}
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userName: {
    fontSize: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    fontSize: 15,
    paddingHorizontal: 10,
    height: 50,
    padding: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    elevation: 3,
    marginTop: 10,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sliderContainer: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  sliderImage: {
    width: screenWidth * 0.917,
    height: 140,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  horizontalCard: {
    elevation: 2,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: "#e5e5e5",
  },
  cardImage: {
    height: 100,
    width: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardInfo: {
    height: 65,
    width: 200,
    padding: 10,
  },
});



































// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   FlatList,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";
// import AppTabNavigation from "../components/Tabs";

// const { width: screenWidth } = Dimensions.get("window");

// const images = [
//   { title: "Image 1", url: require("../images/s1.jpg") },
//   { title: "Image 2", url: require("../images/s2.jpg") },
//   { title: "Image 3", url: require("../images/s3.jpeg") },
// ];

// const teachers = [
//   {
//     id: "1",
//     name: "Rodney",
//     course: "Mathematics",
//     price: "$50",
//     url: require("../images/s1.jpg"),
//   },
//   {
//     id: "2",
//     name: "Jane Smith",
//     course: "Physics",
//     price: "$45",
//     url: require("../images/s2.jpg"),
//   },
//   {
//     id: "3",
//     name: "Tom Brown",
//     course: "Chemistry",
//     price: "$40",
//     url: require("../images/s3.jpeg"),
//   },
// ];

// const courses = [
//   {
//     id: "1",
//     title: "Basic Python",
//     price: "$30",
//     url: require("../images/s1.jpg"),
//   },
//   {
//     id: "2",
//     title: "Basic React Native",
//     price: "$25",
//     url: require("../images/s2.jpg"),
//   },
//   {
//     id: "3",
//     title: "Basic JavaScript",
//     price: "$35",
//     url: require("../images/s3.jpeg"),
//   },
// ];

// export default function Homepage({ navigation }) {
//   return (
//     <>
//       <View style={styles.container}>
//         <SafeAreaView>
//           {/* Header */}
//           <View style={styles.header}>
//             <View>
//               <Text style={styles.name}>Hello</Text>
//               <Text style={styles.userName}>Raheel</Text>
//             </View>
//             <Image
//               style={styles.profilePic}
//               source={require("../images/me1.png")}
//             />
//           </View>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             {/* Search Bar */}
//             <View style={styles.searchBarContainer}>
//               <Ionicons name="search" size={24} color="grey" />
//               <TextInput style={styles.textInput} placeholder="Search" />
//               <Ionicons name="location-outline" size={24} color="grey" />
//             </View>

//             {/* Image Slider */}
//             <FlatList
//               pagingEnabled
//               horizontal
//               data={images}
//               keyExtractor={(item) => item.title}
//               showsHorizontalScrollIndicator={false}
//               renderItem={({ item }) => (
//                 <View style={styles.sliderContainer}>
//                   <Image source={item.url} style={styles.sliderImage} />
//                 </View>
//               )}
//             />

//             {/* Popular Teachers */}
//             <Text style={styles.sectionTitle}>Popular Teachers</Text>
//             <FlatList
//               horizontal
//               data={teachers}
//               keyExtractor={(item) => item.id}
//               showsHorizontalScrollIndicator={false}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   activeOpacity={1}
//                   style={styles.horizontalCard}
//                 >
//                   <Image source={item.url} style={styles.cardImage} />
//                   <View style={styles.cardInfo}>
//                     <Text>{item.course}</Text>
//                     <Text>{item.price}</Text>
//                   </View>
//                 </TouchableOpacity>
//               )}
//             />

//             {/* Popular Courses */}
//             <Text style={styles.sectionTitle}>Basic Popular Courses</Text>
//             <FlatList
//               horizontal
//               data={courses}
//               keyExtractor={(item) => item.id}
//               showsHorizontalScrollIndicator={false}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   activeOpacity={1}
//                   style={styles.horizontalCard}
//                 >
//                   <Image source={item.url} style={styles.cardImage} />
//                   <View style={styles.cardInfo}>
//                     <Text>{item.title}</Text>
//                     <Text>{item.price}</Text>
//                   </View>
//                 </TouchableOpacity>
//               )}
//             />
//           </ScrollView>
//         </SafeAreaView>
//       </View>
//       {/* <AppTabNavigation /> */}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#f8f9fa",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   userName: {
//     fontSize: 20,
//   },
//   profilePic: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   searchBarContainer: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     fontSize: 15,
//     paddingHorizontal: 10,
//     height: 50,
//     padding: 2,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "white",
//     elevation: 3,
//     marginTop: 10,
//     alignItems: "center",
//   },
//   textInput: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   sliderContainer: {
//     borderRadius: 10,
//     overflow: "hidden",
//     backgroundColor: "#fff",
//     marginVertical: 10,
//   },
//   sliderImage: {
//     width: screenWidth * 0.917,
//     height: 140,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   horizontalCard: {
//     elevation: 2,
//     borderRadius: 15,
//     marginRight: 10,
//     backgroundColor: "#e5e5e5",
//   },
//   cardImage: {
//     height: 100,
//     width: 200,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   cardInfo: {
//     height: 65,
//     width: 200,
//     padding: 10,
//   },
// });