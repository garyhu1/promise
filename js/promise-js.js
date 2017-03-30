window.onload = function() {
	var btn = document.getElementById("btn");

	function test(f1, f2) {
		var r = Math.random() * 2;
		console.log('获得的随机数为：' + r);
		setTimeout(function() {
			if(r < 1) {
				console.log('call f1()...');
				f1("200 OK");
			} else {
				console.log('call f2()...');
				f2('time out:'+r*1000+'second');
			}
		}, r * 1000);
	}
	btn.onclick = function() {
		var p = new Promise(test).then(function(result) {
			console.log('成功：'+result);
		}).catch(function(reason) {
			console.log('失败：'+reason);
		});
	}
}