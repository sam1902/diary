window.onload = loadText;

function loadText(){
	container = $("#previous-entries");
	container.children().remove(); // Clean the slate

	$.get("fetchText.php", function(data){
		data = $.parseJSON(data);
		data.forEach(function(entry, i, arr){
			container.append(  $('<h4/>', {
				text: entry["timestamp"] + " GMT",
				class: "timestamp"
			}));
			container.append(
				$('<p/>', { 
					html: parseToHTML(entry["text"]),
					class: "entry"
				})
			);
		});
		if(/PDOException/g.test(data)){
			alert("Error loading, check database config");
		}else{
			container.addClass('flash');
			setTimeout(function() {
				container.removeClass('flash');
			}, 500);
		}
	});
}

function uploadText(){
	txtArea = $("#main-textarea");
	$.ajax({
		url: 'uploadText.php',
		type: 'POST',
		data: { 'textArea': txtArea.val() },
		success: function(data){
			console.log(data);
			if(data !== ""){
				alert("Error uploading the file");
			}else{
				txtArea.val('');
				$('#upload-btn').addClass('flash');
				setTimeout(function() {
					$('#upload-btn').removeClass('flash');
				}, 500);
			}
		}
	});
}

function parseToHTML(text){
	//text = text.replace(/(?<!<hr>)\n/g, "<br>"); // Use this when browser will finally support negative lookbehind
	//But for now do it in two steps: 
	text = text.replace(/<hr>\n/g, '<hr>');
	text = text.replace(/\n/g, '<br>');
	return text;
}
