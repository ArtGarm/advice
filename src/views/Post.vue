<template>
  <div class="home">
    <h1>Post {{ $route.params.id }} {{ $route.params.tag }} </h1>

    <p>
        post content
        {{ postContent }}
    </p>
  </div>
</template>

<script>

	export default {
        name: 'Post',
        data(){
            return{
                
            }
        },
        computed :{
            postContent (){
                return this.$store.state.postContent;
            }
        },

        created (){
            this.$store.dispatch('loadPostContent', {
                tag : this.$route.params.id ,
                id : this.$route.params.tag
            }).then( () => {
                
                console.log( ' loadPostContent ' );
                
            });
        }
	}

</script>
