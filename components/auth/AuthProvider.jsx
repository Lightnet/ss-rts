import { 
  createSignal
, createContext
, useContext 
} from "solid-js";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [session, setSession] = createSignal(props.session || null),
    value = [
      session,
      {
        setSession: setSession,
        AssignSession(data) {
          setSession(data);
        },
        clearSession() {
          setSession(null);
        }
      }
    ];

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }