<template>
    <div style="text-align: center;">
        <div v-if="userDataList === null">
            <img width="300" src="https://gifburg.com/images/gifs/loading/gifs/0013.gif" />
            <h4>데이터를 불러오는 중입니다.</h4>
        </div>

        <div v-else-if="userDataList.length < 1">
            <h4>
                <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
                유저가 발견되지 않았습니다.
            </h4>
        </div>

        <div v-else>
            <span v-for="(user,idx) in userDataList" :key="idx">
                <router-link :to="{name: 'getData', params:{userId:user.id}}">
                    <h4>{{ user.id }}</h4>
                </router-link>
            </span>
        </div>
        <button @click="fetchData()">새로고침</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userDataList : null,
        }
    },
    
    methods: {
        fetchData: function() {
            let self = this;
            this.$axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function(response) {
                // response
                if(response.status !== 200){
                    alert('통신에러!');
                    self.userDataList = [];
                }else{
                    self.userDataList = response.data;
                }
            })
            // .catch(function(error) {
            // console.log(error);
            // });
        }
    },
    
    mounted() {
        this.fetchData();
    },
}
</script>

<style>

</style>