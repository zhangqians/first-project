function calculate_median(arr) {
  //请勿改动函数名
  var arrs=new Array();
  var sum1;
  var sum;
  for( var i=0;i<arr.length;i++)
 {
	if(i%2!=0)
	{
		arrs.push(arr[i]);
		}  
}
arrs.sort(function(a,b){return a-b;});
if(arrs.length%2!=0)
{
	return arrs[(arrs.length-1)/2];
	}
else
{    var x=arrs[arrs.length/2];
     var y=arrs[arrs.length/2-1];
	 sum1=x+y;
	 sum=sum1/2;
	 return sum;
	}
}
module.exports = calculate_median;
