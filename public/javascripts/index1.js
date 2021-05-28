(function(){
	var builder = document.querySelector('.builder');
	var builderLi = builder.querySelectorAll('.builder li');
	var builderP = builder.querySelectorAll('.builder p');
	var ico = builder.querySelectorAll('.builder .ico');

	for(var i = 0;i < builderLi.length;i++) {
		builderLi[i].index = i; 
		builderLi[i].onmouseover = function() {
			for(var j = 0; j < builderLi.length;j++) {
				builderP[j].style.display = 'none';
				ico[j].style.display = 'none';
			}
			builderP[this.index].style.display = 'block';
			ico[this.index].style.display = 'block';
		}
	}
})();
	
