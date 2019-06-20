<template>
	<div :class="'modal fade ' + (visible ? 'show' : 'hide')" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true" :style="'display:' + (visible ? 'block' : 'none')">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="loginModalLabel">Organization Login</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="toggle">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	      	<div class="alert alert-danger" role="alert" v-show="errorVisible">
			  Either your login or password do not match our record!
			</div>
	        <form action class="sky-form form-sizing-reset">
		      <div>
		          <div class="row">
		            <div class="col-md-12">
		              <ash-textbox
		                v-model="loginAs"
		                v-bind:validate="false"
		                heading="Login"
		                placeholder="Login"
		                helpText="Enter a login for the organization"
		              >
		              </ash-textbox>
		            </div>
		          </div>
				  <div class="row">
		            <div class="col-md-12">
		              <ash-password
		                v-model="password"
  		                v-bind:validate="false"
		                heading="Password"
		                placeholder="Password"
		                helpText="Enter password for organization to login"
		              >
		              </ash-password>
		            </div>
		          </div>
		       </div>
		    </form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-primary" @click="login">Login</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
import Textbox from '../generalFormElements/textbox.vue'
import Password from '../generalFormElements/password.vue'
import LoginModal from './organizationLogin.js';
	
export default{
	data(){
		return {
			visible:false,
			loginAs:null,
			password:null,
			errorVisible:false
		}
	},
	methods:{
		toggle(){
			this.visible = !this.visible;
		},
		login(){
	      const payload = {
	        login: this.loginAs,
	        password: this.password
	      }			
		  
		  const marker = this;
		  this.$store.dispatch('loginOrganization', payload).then(function(){
			  if(marker.$store.state.authentication.loggedIn){
			  	marker.visible = false;
			  	marker.errorVisible = false;
			  	marker.loginAs = null;
			  	marker.password = null;
			  }
			  else{
				  marker.errorVisible = true;
			  }
		  });
		}
	},
    components: {
      'ash-textbox': Textbox,
      'ash-password': Password
    },	
	beforeMount() {
		LoginModal.EventBus.$on('toggle', ()=> {
			this.toggle();
		});
	}
}
</script>

<style scoped>
.modal-body .row{
	margin:0 0 15px;
}

.modal-body .row:last-child{
	margin:0;
}
</style>