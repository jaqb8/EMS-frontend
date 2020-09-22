<template>
  <div class="login">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/login.vue";
import axios from "axios";

export default {
  name: "login",
  methods: {
    async login(){
      const data = await axios.post("http://localhost:5001/ems-employee-managment-system/us-central1/app/api/users", 
      {
        email: "stolec@gmail.com",
        password: "xdxdxd",
        department: "Aspergers",
        position: "Aspi"
      }, 
      {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(data);
      return data;
    }
  },
  components: {
    Login
  }
};
</script>
