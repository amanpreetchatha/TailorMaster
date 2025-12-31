import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "#333",
    fontWeight: 500,
    borderWidth: 2,
    padding: 12,
  },
  heading: {
    marginTop: 50,
    marginBottom: 50,
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
    color: "#333"
  },
  inputField: {
    borderColor: "#aaa",
    margin: 10,
    padding: 10,
    fontWeight: 500,

  },
  welcome: {
    color: "#333",
    alignSelf: "flex-end",
    marginBottom: 50
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  mb20:{
    marginBottom: 50
  },
  text:{
    color: "#222",
    fontWeight: 700,
    fontSize: 18

  },
  subText:{
    color: "#222",
    fontWeight: 700,
    fontSize: 15
  },
  list:{
    borderWidth: 1
  },
  listItem:{
    backgroundColor: "#eee"
  },
  checkBox:{
    backgroundColor: "opaque",
    borderWidth: 0
  },
  measurements:{
    width: 200
  }
});


export default styles;