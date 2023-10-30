import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      <h3 className="ps-2 text-slate-300 text-xl font-bold block">Historial</h3>
      <ul className="ms-2">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
