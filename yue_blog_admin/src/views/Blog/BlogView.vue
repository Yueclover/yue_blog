<template>
	<div id="blog-view">
		<div class="header">
			<AutoComplete :selects="selects"></AutoComplete>
		</div>
		<div class="main">
			<YueTable :tableData="tableData" :tableColName="tableColName"></YueTable>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
	// AutoComplateOptionItem,
	// AutoComplateOptionItemLabel,
	AutoCompleteOptions,
} from '../../model/AutoCompleteModel.ts';
import AutoComplete from '../../components/common/AutoComplete.vue';
import YueTable from '../../components/common/YueTable.vue';
import { YueTableData } from '../../model/YueTableModel.ts';

const selects = ref<Array<AutoCompleteOptions>>([
	{
		label: '博客名',
		value: '',
		sqlLabel: 'blog_name',
		options: [
			{
				label: '博客1',
				value: '1',
			},
			{
				label: '博客2',
				value: '2',
			},
		],
	},
	{
		label: '类别',
		value: '',
		sqlLabel: 'class_name',
		options: [
			{
				label: 'js',
				value: '1',
			},
			{
				label: 'html',
				value: '2',
			},
			{
				label: 'css',
				value: '3',
			},
		],
	},
]);
const tableData = ref<Array<YueTableData>>([
	{
		blog_id: '1222222',
		blog_name: '1111111111111111111111111111111111',
		class_id: '1', // 类别id
		class_name: '1',
		author_id: '1',
		author_name: '1',
		write_time: '1', // 第一次保存时间
		edit_time: '1', // 最新编辑时间
		publish_time: '1', // 发布时间
		browser_times: '1', // 浏览量
		like_times: '1', // 点赞量
		favorite_times: '1', // 收藏
		forwarding_times: '1', // 转发
	},
	{
		blog_id: '1',
		blog_name: '1',
		class_id: '1', // 类别id
		class_name: '1',
		author_id: '1',
		author_name: '1',
		write_time: '1', // 第一次保存时间
		edit_time: '1', // 最新编辑时间
		publish_time: '1', // 发布时间
		browser_times: '1', // 浏览量
		like_times: '1', // 点赞量
		favorite_times: '1', // 收藏
		forwarding_times: '1', // 转发
	},
	{
		blog_id: '1',
		blog_name: '1',
		class_id: '1', // 类别id
		class_name: '1',
		author_id: '1',
		author_name: '1',
		write_time: '1', // 第一次保存时间
		edit_time: '1', // 最新编辑时间
		publish_time: '1', // 发布时间
		browser_times: '1', // 浏览量
		like_times: '1', // 点赞量
		favorite_times: '1', // 收藏
		forwarding_times: '1', // 转发
	},
]);
const tableColName = ref<YueTableData>({
	blog_id: '博客编号',
	blog_name: '博客名',
	class_id: '类别编号', // 类别id
	class_name: '类别名',
	author_id: '作者ID',
	author_name: '作者名',
	write_time: '保存时间', // 第一次保存时间
	edit_time: '最近更新', // 最新编辑时间
	publish_time: '发布时间', // 发布时间
	browser_times: '浏览量', // 浏览量
	like_times: '点赞量', // 点赞量
	favorite_times: '收藏量', // 收藏
	forwarding_times: '转发量', // 转发
});
</script>

<style scoped lang="scss">
#blog-view {
	height: 100%;

	.header {
		width: 100%;
		height: 60px;
	}

	.main {
		height: calc(100% - 60px);
	}
}
</style>
