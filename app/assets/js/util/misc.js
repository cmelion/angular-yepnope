var hbo = hbo || {};

//Convenience method to build namespaced objects or reuse existing object/namespaces
hbo.namespace = function(namespacePath){
	var i = 1, a=arguments, ptr = null, l1, l2, pathArr, j = 0, base=namespacePath;
	if (typeof base != "object") {
		i = 0;
		base = window;
	}		
	for(l1=a.length; i<l1; i++){
		pathArr = a[i].split(".");
		ptr = base;
		for(l2=pathArr.length; j<l2; j++){
			if (typeof ptr[pathArr[j]] == 'undefined') {
				ptr[pathArr[j]] = {};
			}
			ptr = ptr[pathArr[j]]; 
		}
	}
	return ptr;
};