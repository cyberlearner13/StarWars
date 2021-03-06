import types from '../constants/actionTypes';

const initialState = {
	fetching: false,
	fetched: false,
	data: {},
	err: {},
};
export default function(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_MOVIE:
			return { ...state, fetching: true, fetched: false, data: {}, err: {} };
		case types.FETCH_MOVIE_SUCCESS:
			return { ...state, data: action.payload, fetching: false, fetched: true, err: {} };
		case types.FETCH_MOVIE_RESET:
			return { ...state, data: {}, fetching: false, fetched: false, err: {} };
		default:
			return state;
	}
}
