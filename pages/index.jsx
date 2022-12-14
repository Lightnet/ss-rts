/*
  Project Name: ss-rts
  License: MIT
  Created by: Lightnet
*/

//import { createEffect } from 'solid-js'
//import { supabase } from '../libs/supabaseclient.js';
import Auth from '../components/auth/Auth.jsx';
import Account  from '../components/auth/Account.jsx';
import { useAuth } from '../components/auth/AuthProvider.jsx';

export default function PageHome() {

  const [session, {setSession}] = useAuth();

  //createEffect(() => {
    //console.log(supabase.auth)
    //supabase.auth.getSession().then(({ data: { session } }) => {
      //setSession(session)
    //})
    //console.log(supabase.auth.session())
    //supabase.auth.onAuthStateChange((_event, session) => {
      //setSession(session)
    //})
  //})

  return (
    <div class="container" style={{ padding: '50px 0 100px 0' }}>
      {!session() ? <Auth /> : <Account session={session()} />}
    </div>
  )
}