const currencyBRL = n => {
	if (n === 0 || typeof n !== 'number')
		return 'R$ 0,00';
	 else
		return `R$ ${parseFloat(Math.round(n * 100) / 100).toFixed(2).toString().split('.')}`;

};
