const filter = word => {
	const favorites = Array.apply(0, new Array(localStorage.length))
		.map((o, i) => localStorage.key(i));
	const favoritesId = favorites.filter(favorite => {
		if(favorite.includes(word)){
			return favorite;
		}
	});
	return favoritesId;
};

const takeId = favorite => favorite.split('-')[1];

const takeFavoritesId = word => {
	const favorites = filter(word);
	return favorites.map(takeId);
};

const returnRowsArray = rows => (rows instanceof Array) ? rows : [rows];

export {
	takeFavoritesId,
	returnRowsArray
};
