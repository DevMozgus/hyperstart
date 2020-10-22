export const generateTitle = (state, selected) => {
  let newNumber = Math.floor(Math.random() * (state.titles.length-1))
  newNumber =
  newNumber === state.titles.findIndex(element => element === state.currentTitle) ?
  newNumber + 1 % (state.titles.length-1) :
  newNumber

  return { ...state, currentTitle: selected.target.value || state.titles[newNumber] }
}

export const generateImage = (state, selected) => {
  let newNumber = Math.floor(Math.random() * (state.images.length-1))
  newNumber =
  newNumber === state.images.findIndex( element => element.title === state.currentImage.title) ?
  newNumber + 1 % (state.images.length-1) :
  newNumber

  return { ...state, currentImage: selected.target.value ? state.images[selected.target.value] : state.images[newNumber] }
}
