<!-- eslint-disable no-console -->
<template>
	<div class="app">
		<header></header>
		<aside>
			<el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
				<el-radio-button :label="false">expand</el-radio-button>
				<el-radio-button :label="true">collapse</el-radio-button>
			</el-radio-group>
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				:collapse="isCollapse"
				background-color="#15231b"
				text-color="#fff"
				active-text-color="#41b349"
				:router="true"
			>
				<el-menu-item index="1" route="/home">
					<el-icon><House /></el-icon>
					<template #title>首页</template>
				</el-menu-item>
				<el-sub-menu index="2">
					<template #title>
						<el-icon><DocumentCopy /></el-icon>
						<span>我的博客</span>
					</template>
					<el-menu-item index="2-1" route="/blog/blogEdit">
						<el-icon><Edit /></el-icon>
						<template #title>写 </template>
					</el-menu-item>
					<el-menu-item index="2-1" route="/blog/blogView">
						<el-icon><Search /></el-icon>
						<template #title> 查 </template>
					</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="3">
					<template #title>
						<el-icon><Histogram /></el-icon>
						<span>报表</span>
					</template>
					<el-menu-item index="3-1" route="/">
						<el-icon><Star /></el-icon>
						<template #title> 浏览&收藏 </template>
					</el-menu-item>
					<el-menu-item index="3-1" route="/">
						<el-icon><ChatDotSquare /></el-icon>
						<template #title> 评论 </template>
					</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="4">
					<template #title>
						<el-icon><Files /></el-icon>
						<span>档案</span>
					</template>
					<el-menu-item index="4-1" route="/">
						<el-icon><User /></el-icon>
						<template #title> 用户档案 </template>
					</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="5">
					<template #title>
						<el-icon><Setting /></el-icon>
						<span>设置</span>
					</template>
					<el-menu-item index="5-1" route="/">
						<template #title>权限管理</template>
						<el-icon><Lock /></el-icon>
					</el-menu-item>
					<el-menu-item index="5-2" route="/">
						<el-icon><Tickets /></el-icon>
						<template #title> 博客模板 </template>
					</el-menu-item>
					<el-menu-item index="5-3" route="/">
						<template #title>博客装修</template>
						<el-icon><BrushFilled /></el-icon>
					</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="6">
					<template #title>
						<el-icon><Cpu /></el-icon>
						<span>实验室</span>
					</template>
					<el-menu-item>
						<el-icon><Mouse /></el-icon>
						<template #title>大胆点</template>
					</el-menu-item>
				</el-sub-menu>
			</el-menu>
		</aside>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isCollapse = ref(false);
</script>

<style scoped lang="scss">
.app {
	position: relative;
	height: 100vh;
	width: 100vw;

	header {
		height: 5rem;
		width: 100%;
		// 云杉绿
		background-color: #15231b;
	}

	aside {
		position: absolute;
		top: 5rem;
		bottom: 0;
		width: 12.5rem;
		background-color: #15231b;
	}

	main {
		margin-left: 12.5rem;
		height: calc(100vh - 5rem);
		overflow: auto;
		// 明绿
		background-color: #9eccab;
	}
}
</style>
