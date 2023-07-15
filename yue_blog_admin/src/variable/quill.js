const options = [
	{
		bounds: '', // 放置编辑器的容器
		debug: 'info',
		formats: 'All formats', //
		modules: {
			history: {
				// Enable with custom configurations
				delay: 2500,
				userOnly: true,
			},
			syntax: true,
			toolbar: [
				['bold', 'italic', 'underline', 'strike'], // 粗体、斜体、下划线、删除线
				[{ header: 1 }, { header: 2 }], // 标题1和标题2
				[{ list: 'ordered' }, { list: 'bullet' }], // 有序列表和无序列表
				[{ script: 'sub' }, { script: 'super' }], // 上标和下标
				[{ indent: '-1' }, { indent: '+1' }], // 缩进
				[{ direction: 'rtl' }], // 文字方向
				[{ size: ['small', false, 'large', 'huge'] }], // 字号
				[{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题等级
				[{ color: [] }, { background: [] }], // 字体颜色和背景色
				[{ font: [] }], // 字体
				[{ align: [] }], // 对齐方式
				['clean'],
			],
		},
	},
];
export default options;
