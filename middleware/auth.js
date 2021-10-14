
export default ({store, redirect}) => {
    if(!store.getters.hasToken){
      redirect('signin')
    }
}