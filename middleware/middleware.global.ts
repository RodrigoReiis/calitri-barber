export default defineNuxtRouteMiddleware((to, from) => {
    const authToken = ''//localStorage.getItem('token')
    
    const nuxtApp = useNuxtApp()
    console.log(nuxtApp)
    console.log(nuxtApp.$refs)
    //if(!authToken) {
      //return navigateTo('/login')
    //}
    if (to.params.id === '1') {
      return abortNavigation()
    }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    if (to.path !== '/login') {
      return navigateTo('/login')
    }
  })
  