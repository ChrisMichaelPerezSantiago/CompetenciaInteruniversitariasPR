<template>
  <div class="home">
   <h1>Home</h1>
  </div>
</template>

<script>
  import db from '../firebase/config';
  import firebase from 'firebase';

  export default {
    name: 'home',
    data(){
      return{
        userAuth: null
      }
    },

    created(){
      firebase.auth().onAuthStateChanged((user) =>{
        if(user){
          this.userAuth = user;
        }else{
          this.userAuth = {};
        }
      });
    },

    beforeRouteEnter(to , from , next){
      // Verify if the user was previously authenticated
      // in google, to then be redirected to the main page.
      // If not authenticated, the user will be redirected
      // to the login page.
      next((vm) => {
        firebase.auth().onAuthStateChanged((user) =>{
          if(user){
            next();
          }else{
            vm.$router.push("/login");
          }
        });
      });
    }
  };
</script>
