//ACTION INCREMENT
export const cardData = () => {
  return {
    type: 'CARDDATA'
  }
}

export const indexNo = (n) => {
  return {
    type: 'INDEX',
    payload: n
  }
}

export const increment = (nr) => {
    return {
      type: 'INCREMENT',
      payload: nr
    }
  }
  
  export const decrement = () => {
    return {
      type: 'DECREMENT'
    }
  }

  export const isLog = () => {
    return {
      type: 'SIGN_IN'
    }
  }
  