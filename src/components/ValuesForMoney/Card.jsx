import { moneyPlan } from '../../assets'
import { insurancePlans } from '../../constants'
import PlanCard from '../Plans/PlanCard'

const Card = () => {
  return (
    <section id='valueForMoney' className='bg-blue-100 rounded-md p-3'>
        <div className='flex gap-3 items-center mb-2'>
        <img className='w-8' src={moneyPlan} alt="" />
        <h1>Value for money plans</h1>
        </div>
        <div className=''>
        <PlanCard plan={insurancePlans[2]?.plans[0]} company={insurancePlans[2]?.company} flag={true}/>
        </div>
    </section>
  )
}

export default Card