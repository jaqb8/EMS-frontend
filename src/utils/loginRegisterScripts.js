export const mixin = {
  methods: {
    activeClassClear() {
      if (this.$refs.passwordInput.value === '') {
        this.$refs.passwordLabel.classList.remove('active');
        this.$refs.passwordSpan.classList.remove('active');
      }
      if (this.$refs.passwordInput2 && this.$refs.passwordInput2.value === '') {
        this.$refs.passwordLabel2.classList.remove('active');
        this.$refs.passwordSpan2.classList.remove('active');
      }
      if (this.$refs.emailInput.value === '') {
        this.$refs.emailLabel.classList.remove('active');
        this.$refs.emailSpan.classList.remove('active');
      }
    },
    onFocus() {
      if (document.activeElement.id === 'password') {
        this.activeClassClear();
        this.$refs.passwordLabel.classList.add('active');
        this.$refs.passwordSpan.classList.add('active');
      } else if (document.activeElement.id === 'password2') {
        this.activeClassClear();
        this.$refs.passwordLabel2.classList.add('active');
        this.$refs.passwordSpan2.classList.add('active');
      } else if (document.activeElement.id === 'email') {
        this.activeClassClear();
        this.$refs.emailLabel.classList.add('active');
        this.$refs.emailSpan.classList.add('active');
      }
    }
  }
};
