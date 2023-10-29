import { GlobalProvider } from "./context/GlobalState"
import Header from "./components/Header"
import TransactionForm from "./components/TransactionForm"
import Balance from "./components/Balance"

function App() {

  return (
    <>
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
    </GlobalProvider>
    </>
  )
}

export default App
