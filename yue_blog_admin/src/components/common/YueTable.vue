<template>
	<div class="yue-table">
		<el-table
			:data="tableData"
			border
			style="width: 100%; height: 100%"
			show-summary
			:show-overflow-tooltip="true"
			@selection-change="handleSelectionChange"
		>
			<el-table-column type="selection" width="55" />
			<el-table-column
				v-for="(item, index) in Object.keys(tableData[0])"
				:key="index"
				:prop="item"
				:label="tableColName[item]"
				width="180"
			/>
		</el-table>
		<el-pagination
			layout="prev, pager, next"
			:total="1000"
			class="yue-pagination"
		/>
	</div>
</template>

<script setup lang="ts">
import { toRefs, defineProps } from 'vue';
import { YueTableData } from '../../model/YueTableModel.ts';

const props = defineProps({
	tableData: {
		type: Array<YueTableData>,
		default: () => [],
	},
	tableColName: {
		type: Object,
		default: () => {},
	},
});
const { tableData } = toRefs(props);

const handleSelectionChange = (selection: YueTableData) => {
	// eslint-disable-next-line no-console
	console.log(selection);
};
</script>

<style scoped lang="scss">
.yue-table {
	position: relative;
	padding: 10px;
	padding-bottom: 50px;
	box-sizing: border-box;
	width: 100%;
	height: 100%;

	.yue-pagination {
		position: absolute;
		bottom: 10px;
		right: 10px;
		background-color: transparent;
		// height: 30px;
	}
}
</style>
