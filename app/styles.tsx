import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "#333",
    fontWeight: 500,
    
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
    borderWidth: 2,
    borderColor: "#aaa",
    margin: 10,
    padding: 10,
    fontWeight: 800,

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
});


export default styles;