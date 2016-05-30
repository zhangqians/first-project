
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
 var arr=new Array();
 for(var i=0;i<9;i++)
 {
	 for(var j=0;j<4;j++)
	 {
		 if(collection_a[i].key==collection_b.value[j])
		 arr.push(collection_a[i].key);
		 }
	 }
	 return arr;
}

module.exports = collect_same_elements;
