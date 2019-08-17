<template>
  <div class="container">
	<h1>Manage Events</h1>
	  
	<button type="button" class="btn btn-primary btn-lg" @click="addEvent=true"><i class="fas fa-plus"></i> Add Event</button>
	
	<edit-event v-if="addEvent" @submitted="refreshEvent">
	</edit-event>
	  
    <table class="table crud">
	  <thead>
		  <tr>
			<th scope="col" colspan="3">Events</th>
		  </tr>
	  </thead>
	  <tbody>
		 <tr v-for="(event, index) in events">
			 <td>
				<div class="first-line">{{event.name}}</div>
			 </td>
			 <td>
				 <button class="btn btn-secondary" @click="editEvent(index)">Edit</button>
			 </td>
			 <td>
				 <button class="btn btn-link" @click="deleteEvent(index)">Delete</button>
			 </td>
		 </tr>
	  </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import editEvent from './editEvent.vue';

export default {
  data() {
    return {
	  events:[],
	  addEvent:false
    }
  },
  components: {
    'edit-event': editEvent
  },
  computed: {
  },
  methods: {
    editEvent(index){
	    debugger;
    },
    deleteEvent:function(index){
	  let deleted = this.events.splice(index, 1);
	  let $this = this;
	  
	  axios.get(
		'deleteRoutesServer/deleteEvent/' + this.$store.getters.getOrganizationID + '/' + deleted[0].id
      ).then(this.refreshPlace);
    },
    refreshEvent:function(){
		let $this = this;
		let organizationID = this.$store.getters.getOrganizationID;
		
		$this.addEvent = false;
		
		axios.get(
		  'readRoutesServer/readEvents/' + organizationID
		).then(function(response){
			$this.events = response.data;
			if($this.events == "" || $this.events.length == 0){
				$this.addEvent = true;
			}
		});	    
    }
  },  
  mounted(){
	  this.refreshEvent();
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/general/crudTable';
</style>
