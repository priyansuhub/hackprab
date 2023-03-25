import React,{useState,useEffect} from 'react'
import ConfusionMatrix from '../charts/ConfusionMatrix';
import Histogram from '../charts/Histogram';
import Scatterplot from '../charts/Scatterplot';
import './align-data.css'

function ViewData() {
    const [data, setData] = useState([]);
    const [monthlySalary, setMonthlySalary] = useState([])
    const [fico, setFico] = useState([])
    const [utilization, setUtilization] = useState([])
    const [cardLimit, setCardLimit] = useState([])
    const [cardInterestRate, setCardInterestRate] = useState([])
    const [modelOutput, setModelOutput] = useState([])
    const [modelTarget, setModelTarget] = useState([])
    useEffect(() => {
      fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(data => setData(JSON.parse(data)))
        .catch(error => console.error(error));
    }, []);

    const assignData = ()=>{
        // const value = Object.values(data.monthly_salary)
        // setMonthlySalary(value)
        const val1 = Object.values(data.monthly_salary)
        setMonthlySalary(val1)
        setFico(Object.values(data.fico))
        setUtilization(Object.values(data.utilization))
        setCardLimit(Object.values(data.card_limit))
        setCardInterestRate(Object.values(data.card_interest_rate))
        setModelOutput(Object.values(data.model_output))
        setModelTarget(Object.values(data.model_target))
        console.log(modelTarget)
        console.log(fico)

    }
    return (
        <div className='align-data'>
        <button onClick={assignData}>Print IT</button>
        <Histogram data={fico}/>
        <Scatterplot xData={fico} yData={modelTarget}/>
        </div>
      );
    }
  export default ViewData