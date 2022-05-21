
const URL = 'http://localhost:5000/amigos'

let showFriends = () => {
	let lista = $('#lista')
	
	$.ajax({
		url: URL,
		type: 'GET',
		success: (response) => {
			response.forEach(element => {
				let li = `<li>${element.name}</li>`
				lista.append(li)
			})
		}
	})
	lista.empty()
}

let searchFriend = () => {
	let inputValue = $('#input').val() //--> Es lo mismo que [let inputValue = document.querySelector('#input').value]
	console.log(inputValue)
	$.ajax({
		url: `${URL}/${inputValue}`,
		type: 'GET',
		success: (response) => {
			$('#amigo').text(`${response.name}, edad ${response.age}, su mail es ${response.email}`)

		}
	})
}

let toggleDisplay = () => {
	let message = $('#msgFriends')

	// message.style.display = block;
	$('#msgFriends').removeClass('hide')
}

let deleteFriend = () => {
	let inputValue = $('#inputDelete').val()
	$.ajax({
		url: `${URL}/${inputValue}`,
		type: 'DELETE',
		success: (response) => {
			$('#sucess').text(`Amigo ${inputValue} eliminado con exito`)
			$('#inputDelete').val('')
			showFriends()
		}
	})
	if($('#lista li').length === 1){
		toggleDisplay()
	}

}

$('#boton').click(showFriends)
$('#search').click(searchFriend)
$('#delete').click(deleteFriend)