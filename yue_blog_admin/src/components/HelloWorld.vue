<script setup lang="ts">
</script>

<template>
	<div class="main">
        <div class="wave">
            
        </div>
    </div>
	
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

body{
    height: 100vh;
    background: linear-gradient(rgb(95 95 250)10%,rgb(3 3 110));

}

.main,.wave{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);


}

.main{
    border:3px solid darkturquoise;
    padding: 10px;
}

.wave{
    background: darkturquoise;
    overflow: hidden;
    
}

.wave::after{
    content: "";
    width: 300px;
    height: 300px;
    background: rgb(255 255 255 / 80%);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-60%);
    border-radius: 40%;
    animation: wave 5s linear infinite;

}

.wave::before{
    content:"waterball" ;
    position: absolute;
    left: 50%;
    top: 0;
    color: darkturquoise;
    z-index: 99;
    transform: translate(-50%,30px);

}

@keyframes wave{
	0%{
        transform: translate(-50%,-30%) rotate(0deg);
    }

    100%{
        transform: translate(-50%,-60%) rotate(360deg);
    }
}





</style>
