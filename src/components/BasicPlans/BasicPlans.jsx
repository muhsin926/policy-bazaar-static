import { basicPlansVisa } from '../../assets'
import { insurancePlans } from '../../constants'
import PlanCard from '../Plans/PlanCard'

const BasicPlans = () => {
  return (
    <section id='basicPlan' className='bg-orange-100 rounded p-3 my-5'>
        <div>
            <div className='flex gap-2 '>
                <img src={basicPlansVisa} alt="" />
                <h1>Basic Plans for Visa</h1>
            </div>
        </div>
        <div>
            {insurancePlans?.map((plan,i) => (
                plan?.plans[0]?.AED < 1000 &&  <PlanCard key={i} plan={plan[i]?.plans[0]} company={plan[i]?.company}/>
            ))}
        </div>
    </section>
  )
}

export default BasicPlans