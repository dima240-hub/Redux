import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    color: 'black',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'black',
    width: '80%',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
  button: {
    backgroundColor: 'black',
    width: 280,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {color: 'white', fontSize: 15},
  image: {width: 200, height: 200, resizeMode: 'contain', marginTop: 20},
  submit: {
    backgroundColor: 'black',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    margin: 20,
    borderRadius: 15,
  },
  transparent: {
    backgroundColor: 'red',
    borderColor: 'white',
  },
  textSubmit: {color: 'white', fontSize: 25},
  placeHolder: {
    color: 'white',
    left: 10,
  },
  centerButtons: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
