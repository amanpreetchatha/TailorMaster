import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: 500
  },
  button:{
    backgroundColor: "#bbb",
    padding: 10,
    margin: 10,
    borderRadius: 16,
    width: 150,
    textAlign: "center",
    color: "#000"
  },
  heading: {
    marginTop: 50,
    margin: 10,
    fontWeight: 600,
    fontSize: 30,
    color: "#fff"    
  },
  inputField: {
    borderWidth: 2,
    borderColor: "#aaa",
    margin: 10,
    padding: 10,
    fontWeight: 800,
    color: "#aaa"
  },
  welcome: {
    color: "#fff",
    alignSelf: "flex-end",
    marginBottom: 50
  }
});
