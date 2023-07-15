/* stylelint-disable rule-empty-line-before */
<template>
	<div class="search-selections">
		<div class="mod-auto-selections">
			<div
				class="auto-selection-item"
				v-for="(optionItem, index) in selects"
				:key="index"
			>
				<el-autocomplete
					v-model="optionItem.value"
					value-key="label"
					:fetch-suggestions="
						(queryString, cb) =>
							querySearch(queryString, cb, optionItem.options)
					"
					clearable
					class="inline-input w-50"
					:placeholder="'请输入' + optionItem.label"
				>
					<template #prepend>
						{{ optionItem.label }}
					</template>
				</el-autocomplete>
			</div>
		</div>
		<div class="mod-search-btns">
			<el-button class="btn">查询</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { toRefs, defineProps } from 'vue';
import {
	AutoComplateOptionItem,
	// AutoComplateOptionItemLabel,
	AutoCompleteOptions,
} from '../../model/AutoCompleteModel.ts';

const props = defineProps({
	selects: {
		type: Array<AutoCompleteOptions>,
		default: () => [],
	},
});
const { selects } = toRefs(props);
const createFilter =
	(queryString: string) => (option: AutoComplateOptionItem) =>
		option.label.toLowerCase().indexOf(queryString.toLowerCase()) > -1;
const querySearch = (
	queryString: string,
	cb: any,
	options: Array<AutoComplateOptionItem>
) => {
	const result = queryString
		? options.filter(createFilter(queryString))
		: options;
	cb(result);
};
</script>

<style scoped lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
:deep(.el-input-group__prepend) {
	display: flex;
	align-items: flex-end;
	background-color: transparent;
	color: #fff;
	box-shadow: 0 0 0 0;
	font-size: 16px;
}
/* stylelint-disable-next-line selector-class-pattern */
:deep(.el-input__wrapper) {
	border-radius: 8px;
	outline: none;
	box-shadow: 0 0 0 0;
}
/* stylelint-disable-next-line selector-class-pattern */
:deep(.el-input) {
	width: 250px;
	line-height: 30px;
}

.search-selections {
	display: flex;
	justify-content: flex-start;
	width: 100%;
	height: 100%;

	.mod-auto-selections {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: center;
		width: 90%;
		height: 100%; //父元素的100%
		.auto-selection-item {
			padding: 10px;
		}
	}

	.mod-search-btns {
		width: 10%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;

		.btn {
			margin: 10px;
		}
	}
}
</style>
