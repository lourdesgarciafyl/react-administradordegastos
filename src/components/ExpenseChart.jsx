import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState';

function ExpenseChart() {
    const {transactions} = useGlobalState()

    const totalIncome = transactions
        .filter(
        (item) => item.amount > 0
            )
        .reduce(
            (acc, item) => (acc += item.amount), 0
            )
    
    const totalExpenses = transactions
        .filter(
            (item) => item.amount < 0
            )
        .reduce(
            (acc, item) => (acc += item.amount), 0
            ) * -1
    
    const totalExpensesPorcentage = Math.round((totalExpenses / totalIncome) * 100)

    const totalIncomePorcentage = 100 - totalExpensesPorcentage

    console.log(totalIncomePorcentage, 'ingresos')
    console.log(totalExpensesPorcentage, 'gastos')

    if(totalIncome > 0 || totalExpenses < 0 ) {
        return (
            <>
            <VictoryPie 
            colorScale={['#e74c3c', '#2ecc71']}
            data={[
                {x: 'Gastos', y: totalExpensesPorcentage},
                {x: 'Ingresos', y: totalIncomePorcentage}                  
            ]}
            animate={{
                duration: 200
            }}
            labels={({datum}) =>`${datum.y}%` }
            labelComponent={<VictoryLabel 
             angle={25}
             style={{
                fill: 'white'
             }}
            />}
            />
            </>
        )
    }
}

export default ExpenseChart;