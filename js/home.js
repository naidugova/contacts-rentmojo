$(document).ready(function(){

  $("#add").click(function(){
  	$(".main").hide();
  	$(".contactadd").show();
  }
  	);

  $("#backtohome").click(function(){
  	$(".main").show();
  	$(".contactadd").hide();
  })

  $("#addnum").click(function(){
  	var elem=`<tr><td>
				<input type="number" name="cnumber" placeholder="Enter mobile number">
				<a class="remnum"><span class="fas fa-times addcontact"></span></a>
			</td></tr>`
			
	$("#mobrow").after(elem);

  });

  $("#addemail").click(function(){
  	var elem=`<tr><td>
				<input type="email" name="cemail" placeholder="Enter email address">
				<a class="rememail"><span class="fas fa-times addcontact"></span></a>
			</td></tr>`
	$("#emailrow").after(elem);

  });

  $("a").click(function(){
  	$(".remnum").parent().remove();
  });
});