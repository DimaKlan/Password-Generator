function generate() {
	const inputLength = document.getElementById('inputLength').value;
	const inputUpper = document.getElementById('inputUpper');
	const inputLower = document.getElementById('inputLower');
	const inputNum = document.getElementById('inputNum');
	const inputSymbols = document.getElementById('inputSymbols');
	const result = document.getElementById('result');

	const textLower = 'abcdefghijklmnopqrstuvwxyz';
	const textUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const textNum = '0123456789';
	const textSymbols = '!№;%:?*()_+=";';
	let text = ''
	let password = '';

	text += inputLower.checked ? textLower : '';
	text += inputUpper.checked ? textUpper : '';
	text += inputNum.checked ? textNum : '';
	text += inputSymbols.checked ? textSymbols : '';


	for (let i = 0; i < inputLength ; i++) {
		const randomIndex = Math.floor(Math.random() * text.length)
		password += text[randomIndex]
	}

	if(inputLength == 1){
		return result.textContent = 'The password must consist of 2 characters!'
	}else if (inputLength >= 101){
		return result.textContent = 'The password cannot contain more than 100 characters!'
	}else if (!inputUpper.checked && !inputLower.checked && !inputNum.checked && inputSymbols.checked){
		return result.textContent = 'Select at least one item'
	}else {
		return result.textContent = `Password: ${password}`
	}
}
