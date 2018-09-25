import networkStatusChange from './actions'
import { loadCountries } from '../../scenes/home/components/CountriesList/actions'
import { loadAccents } from '../../scenes/home/components/AccentsList/actions'
import showSnackbarMessage from '../../services/snackbar'

export default function init (store) {
  function dispatchNetworkStatusChangeAction () {
    store.dispatch(networkStatusChange(window.navigator.onLine))

    showSnackbarMessage({
      message: window.navigator.onLine ? 'Perfect! Ai revenit online.' : 'Oups! Ai pierdut conexiunea la internet.'
    })

    if (window.navigator.onLine) {
      store.dispatch(loadCountries())
      store.dispatch(loadAccents())
    }
  }

  window.addEventListener('offline', dispatchNetworkStatusChangeAction)
  window.addEventListener('online', dispatchNetworkStatusChangeAction)
  if (store.getState().ui.network.online !== window.navigator.onLine) {
    store.dispatch(networkStatusChange(window.navigator.onLine))
  }
}
