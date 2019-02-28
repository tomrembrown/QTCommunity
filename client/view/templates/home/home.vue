<template>
  <div id="home">
    <div class="home-wrapper container">
      <div class="quote-wrapper">
        <div class="quote">
          <i class="fas fa-quote-left"></i>
          {{quotation}}
          <i class="fas fa-quote-right"></i>
        </div>
        <div class="attribute">{{person}}</div>
      </div>
    </div>
    <div class="headliner-wrapper">
      <div class="headliner">Queer Toronto</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotation: "to put here",
      person: "a person"
    };
  },
  methods: {
    getRandomQuotation: function() {
      this.$http
        .get("readRoutesServer/readRandomQuotation")
        .then(function(response) {
          this.quotation = response.data.quotation;
          this.person = response.data.person;
        });
    }
  },
  beforeMount() {
    this.getRandomQuotation();
  }
};
</script>

<style lang="scss" scoped>

@import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";

#home {
  background-size: cover;
  background-image: url("/img/queer-toronto-header-1.jpg");
  background-position: 50% 50%;
  width: 100%;
  height: 500px;
  position: relative;
}

#home:after {
  position: absolute;
  content: " ";
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 5;
}

#home .home-wrapper {
  position: relative;
  height: 100%;
}

#home .home-wrapper {
  position: absolute;
  width: 30%;
  top: 25px;
  right: 25px;
  z-index: 6;
  color: #fff;
  text-align: right;
}

#home .quote-wrapper .quote {
  font-size: 1.2em;
  margin-bottom: 10px;
}

#home .quote-wrapper .attribute {
  font-weight: bold;
}

#home .quote-wrapper .attribute:before {
  content: "- ";
}

#home .headliner-wrapper {
  position: relative;
  height: 100%;
  z-index: 6;
}

#home .headliner-wrapper .headliner {
  position: absolute;
  bottom: 25px;
  left: 25px;
  font-size: 3em;
  color: #fff;
}
</style>