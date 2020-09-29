<template>
  <div class="form-container">
    <div class="form-top-bar">
      <div class="bar-top-line"></div>
      <div class="bar-bottom-container">
        <h1>EMS</h1>
        <p>Register</p>
      </div>
    </div>
    <form>
      <div class="input-container">
          <label for="email" ref="emailLabel">E-mail</label>
          <input @focus="onFocus()" 
                @blur="activeClassClear()" 
                id="email" 
                type="text"
                ref="emailInput">
          <div class="bottom-line-wrapper">
            <span ref="emailSpan"></span>
          </div>
      </div>
      <div class="input-container">
          <label for="password" ref="passwordLabel">Password</label>
          <input @focus="onFocus()" 
                @blur="activeClassClear()" 
                id="password" 
                type="password"
                ref="passwordInput">
                
          <div class="bottom-line-wrapper">
            <span ref="passwordSpan"></span>
          </div>
      </div>
      <div class="input-container">
          <label for="password2" ref="passwordLabel2">Repeat password</label>
          <input @focus="onFocus()" 
                @blur="activeClassClear()" 
                id="password2" 
                type="password"
                ref="passwordInput2">
                
          <div class="bottom-line-wrapper">
            <span ref="passwordSpan2"></span>
          </div>
      </div>
      <div class="agreement__container">
        <input type="checkbox" name="agreement" id="agreement">
        <label for="agreement" class="agreement__text">Ich stimme der Betreuung eines Kindes mit Asperger-Syndrom namens Tomasz und Kulig zu</label>
      </div>
      <button id="form-submit-btn">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data (){
    return {
      msg: 'Welcome'
    }
  },
  methods: {
    activeClassClear(){
      if(this.$refs.passwordInput.value === "") {
        this.$refs.passwordLabel.classList.remove("active");
        this.$refs.passwordSpan.classList.remove("active");
      }
      if(this.$refs.passwordInput2.value === "") {
        this.$refs.passwordLabel2.classList.remove("active");
        this.$refs.passwordSpan2.classList.remove("active");
      }
      if(this.$refs.emailInput.value === "") {
         this.$refs.emailLabel.classList.remove("active");
         this.$refs.emailSpan.classList.remove("active");
      }
    },
    onFocus(){
      if(document.activeElement.id === "password"){
        this.activeClassClear();
        this.$refs.passwordLabel.classList.add("active");
        this.$refs.passwordSpan.classList.add("active");
      }else if(document.activeElement.id === "password2"){
        this.activeClassClear();
        this.$refs.passwordLabel2.classList.add("active");
        this.$refs.passwordSpan2.classList.add("active");
      }else if(document.activeElement.id === "email"){
        this.activeClassClear();
        this.$refs.emailLabel.classList.add("active");
        this.$refs.emailSpan.classList.add("active");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>