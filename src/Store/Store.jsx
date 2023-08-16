import {createStore} from 'redux'
import cardItem from '../Services/Reducer/reducers'

const store = createStore(cardItem);

export default store