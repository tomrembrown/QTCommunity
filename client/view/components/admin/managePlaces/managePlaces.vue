<template>
  <div class="container">
	<h1>Manage Places</h1>
	  
	<button type="button" class="btn btn-primary btn-lg" @click="addPlace=true"><i class="fas fa-plus"></i> Add Place</button>
	
	<add-place v-if="addPlace" @submitted="refreshPlace">
	</add-place>
	  
    <table class="table crud">
	  <thead>
		  <tr>
			<th scope="col" colspan="3">Places</th>
		  </tr>
	  </thead>
	  <tbody>
		 <tr v-for="(place, index) in places">
			 <td>
				<div class="first-line">{{place.name}}</div>
				<div>{{place.address}}</div>
			 </td>
			 <td>
				 <button class="btn btn-secondary" @click="editPlace(index)">Edit</button>
			 </td>
			 <td>
				 <button class="btn btn-link" @click="deletePlace(index)">Delete</button>
			 </td>
		 </tr>
	  </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import addPlace from './addPlace.vue';

export default {
  data() {
    return {
	  places:[],
	  addPlace:false
    }
  },
  components: {
    'add-place': addPlace
  },
  computed: {
  },
  methods: {
    editPlace(index){
	    debugger;
    },
    deletePlace:function(index){
	  let deleted = this.places.splice(index, 1);
	  let $this = this;
	  
	  axios.get(
		'deleteRoutesServer/deletePlace/' + this.$store.getters.getOrganizationID + '/' + deleted[0].id
      ).then(this.refreshPlace);
    },
    refreshPlace:function(){
		let $this = this;
		let organizationID = this.$store.getters.getOrganizationID;
		$this.addPlace = false;
		
		axios.get(
		  'readRoutesServer/readPlaces/' + organizationID
		).then(function(response){
			$this.places = response.data;
			if($this.places == "" || $this.places.length == 0){
				$this.addPlace = true;
			}
		});	    
    }
  },  
  mounted(){
	  this.refreshPlace();
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/general/crudTable';
</style>
