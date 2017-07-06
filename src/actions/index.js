export const INCREASE_COUNTER = 'increase_counter'

export function increaseCounter()  {

  return {
    type: INCREASE_COUNTER,
    payload: 1
  }
}
