
export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES'
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES'
export const SELECT_COUNTRY = 'SELECT_COUNTRY'
let SHEET_URL = "https://docs.google.com/spreadsheets/d/11gLJ6b-EYE1f96XzYjlANgq7mzmNGIgJs4O5__uGRFA/pubhtml";

export const requestCountries = () => ({
  type: REQUEST_COUNTRIES
})

export const receiveCountries = (itemsById, orderedItemsIds) => ({
  type: RECEIVE_COUNTRIES,
  payload: {
    byId: itemsById,
    orderedIds: orderedItemsIds
  }
})

export const selectCountry = (selectedId) => ({
  type: SELECT_COUNTRY,
  payload: selectedId
})

// Thunk
export const loadCountries = () => {
  return (dispatch) => {
    dispatch(requestCountries())

    Tabletop.init({
      key: SHEET_URL,
      callback: function (data, tabletop) {
        console.log(data, tabletop)
      },
      simpleSheet: false
    })
  }
}