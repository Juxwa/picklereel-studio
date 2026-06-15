// src/App.jsx
import { useAuth } from './hooks/useAuth.js'
import LoginScreen from './screens/LoginScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'

export default function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-background)',
        color: 'var(--color-primary)',
        fontFamily: 'var(--font-heading)',
        fontSize: 20,
      }}>
        Loading...
      </div>
    )
  }

  return user ? <HomeScreen /> : <LoginScreen />
}
