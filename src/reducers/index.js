import {INCREASE_COUNTER} from '../actions'

export default(state=0, action) => {

  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    default:
      return state
  }

}
