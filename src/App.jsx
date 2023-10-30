import { GlobalProvider } from "./context/GlobalState";
import TransactionForm from "./components/transactions/TransactionForm";
import Balance from "./components/Balance";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";
function App() {
  return (
    <>
      <GlobalProvider>
        <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
          <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex">
            <div className="me-2">
            <h1 className='text-center'>Administrador de gastos</h1>
            <hr />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
            <ExpenseChart />              
            <TransactionList />
            </div>
          </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
