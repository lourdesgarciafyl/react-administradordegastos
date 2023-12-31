import { useGlobalState } from "../../context/GlobalState";


function TransactionItem ({transaction}) {
    const {deleteTransaction} = useGlobalState();
    return (
        <>
         <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between align-items-center">
            <p className="text-sm">{transaction.description}</p>
            <div>
            <span>${transaction.amount}</span>
            <button className="bg-indigo-700 text-white p-2 ms-1"
            onClick={()=>{deleteTransaction(transaction.id)}}>
                X
            </button>
            </div>
        </li>
        </>
    )
}

export default TransactionItem;