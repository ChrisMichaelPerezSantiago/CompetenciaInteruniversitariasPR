<template>
  <div>
    <h1>Log In</h1>
    <button @click.prevent="logIn()">login</button>
  </div>    
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    methods:{
      // User Authentication for Login
      logIn(){
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then((result) =>{
          // This gives you a Google Access Token.
          //You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // Redirect user after login
          this.$router.push('/');

        }).catch((error) =>{
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });
      }
    }
  }
</script>

<style>

</style>
