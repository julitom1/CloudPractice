function addRecord(record){
	let tbody = document.getElementById("record");
	let newReord = document.createElement("tr");
	newReord.innerHTML = `<tr><td>${record.id}</td><td>${record.clientName}</td><td>${record.date}</td></tr>`;
	tbody.appendChild(newReord);
}

function create() {
	var clientName = document.getElementById("name").value;
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/client",
		contentType: "application/json",
		data: JSON.stringify({
			name: clientName
		}),
		success: function(result) {
			addRecord(result);
		}
	});
}


function getClients() {
	$.ajax({
		url: "http://localhost:8080/clients",
		success: function(result) {
			result.forEach(record => {
				addRecord(record)
			})
		}
	});
}


getClients();