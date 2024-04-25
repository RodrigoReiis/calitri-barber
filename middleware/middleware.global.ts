export default defineNuxtRouteMiddleware(async (to, from) => {    
    const supabase = useSupabaseClient()
    const { data } = await supabase.auth.getSession()    
    const authToken = data.session?.access_token;
    if(!authToken || to.path == '/' || to.path == '') {
      return navigateTo('/login')
    }
    if (to.params.id === '1') {
      return abortNavigation()
    }
  })
  