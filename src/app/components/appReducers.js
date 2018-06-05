import { APP_ON_LOAD } from './appActions';

export function mainState(
  state = {
    loading: true
  },
  action
) {
  switch (action.type) {
    case APP_ON_LOAD:
      return Object.assign({}, state, {
        loading: false
      });

    default:
      return state;
  }
}
