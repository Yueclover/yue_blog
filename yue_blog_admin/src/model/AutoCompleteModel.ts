export interface AutoComplateOptionItem{
    label:string// 下拉框option显示(数据库对应值中文)
    value:string// 数据库对应值
}
// autoComplete 的label及对应的数据库字段名
export interface AutoComplateOptionItemLabel{
    label:string// 下拉框label
    value:string// 数据库对应字段
}
export interface AutoCompleteOptions{
    label:string// 下拉框label
    value:string// 下拉框选中的值
    sqlLabel:string// 数据库对应字段
    options:Array<AutoComplateOptionItem>
}