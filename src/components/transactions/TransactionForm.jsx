import {useState} from 'react'
import {useGlobalState} from "../../context/GlobalState"

function TransactionForm() {
  const {addTransaction} = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(description, amount)
    addTransaction({
      description,
      amount,
      id: window.crypto.randomUUID(),
    })
  }

  return (
    <div>
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Ingresa una descripción' 
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type='number' step='0.01' placeholder='Ingresa un monto'
         onChange={(e) => setAmount(e.target.value)} 
      />
      <button>Agregar transacción</button>
    </form>
    </div>
  )
}

export default TransactionForm
