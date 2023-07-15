<template>
	<div id="blog-edit">
		<div class="editor">
			<QuillEditor theme="snow"></QuillEditor>
		</div>
	</div>
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
</script>

<style scoped lang="scss">
#blog-edit {
	.editor {
		width: 100%;
		height: 100%;
		background-color: #fff;
	}
}
</style>
