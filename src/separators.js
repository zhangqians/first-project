'use strict';

function thousands_separators(num) {
var mynum=num +"";
if(mynum.length<=3)
{
	return mynum;
	}  
	if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(mynum))
	{
		return mynum;
		}
		var x=RegExp.$1;
		var y=RegExp.$2;
		var z=RegExp.$3;
		var r=new RegExp();
		r.compile("(\\d)(\\d{3})(,|$)");
		while(r.test(y))
		{
			y=y.replace(r,"$1,$2$3");
			}
			return x + "" + y + "" +z;
}

module.exports = thousands_separators;
