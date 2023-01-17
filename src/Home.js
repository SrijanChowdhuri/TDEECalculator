import './index.css'
import { useEffect, useState } from 'react';

const Home = () => {

    
    const[age, setAge] = useState();
    const[height, setHeight] = useState();
    const[weight, setWeight] = useState();
    const[activity, setActivity] = useState();
    const[gender, setGender] = useState();
    const[TDEE, setTDEE] = useState();
    function calcRMR(e){
        e.preventDefault();
        let RMR = '';
        let val = '';
        if(gender === '1'){
            RMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            console.log(RMR);
            if(activity === '1.2'){
                val = (RMR * 1.2);
                console.log(val);
            }
            else if(activity === '1.375'){
                val = RMR * 1.375;
                console.log(val);
            }
            else if(activity === '1.55'){
                val = RMR * 1.55;
                console.log(val);
            }
            else if(activity === '1.725'){
                val = RMR * 1.725
                console.log(val);
            }
            else if(activity === '1.9'){
                val = RMR * 1.9
                console.log(val);
            }
            
        }
        else if(gender === '2'){
            RMR = (10 * weight) + (6.25 * height) - (5 * age) - 161
            console.log(RMR);
            if(activity === '1.2'){
                val = RMR * 1.2;
                console.log(val);
            }
            else if(activity === '1.375'){
                val = RMR * 1.375;
                console.log(val);
            }
            else if(activity === '1.55'){
                val = RMR * 1.55;
                console.log(val);
            }
            else if(activity === '1.725'){
                val = RMR * 1.725
                console.log(val);
            }
            else if(activity === '1.9'){
                val = RMR * 1.9
                console.log(val);
            }
            
        }
        setTDEE(val);
        return ;
    }

    useEffect(() => {
        
    },[gender])
    return (
        <div>
            <span>
            <div className='container'>
            <form>
                <h2>Calculate your Daily Calories</h2>
            <label>
                Gender:
                <br/>
                <select className='options' onChange={(e) => setGender(e.target.value)} name='gender' value ={gender}>
                        <option selected value=" ">  </option>
                        <option selected value="1"> Male </option>
                        <option selected value="2"> Female </option>
                        
                </select>           
            </label>
            <label>
                Weight:
                <input type="number" onChange={(e) => setWeight(e.target.value)} name="weight" placeholder = "Enter in Kilograms" value={weight} />
            </label><br/>
            <label>
                Age:
                <input type="number" onChange={(e) => setAge(e.target.value)} name="age" value={age}/>
            </label><br/>
            <label>
                Height:
                <input type="number" onChange={(e) => setHeight(e.target.value)} name="height" placeholder = "Enter in cms" value={height}/>
            </label><br/>
            <label>
                Enter Your Activity Level:
                <select className='options'  onChange={(e) => setActivity(e.target.value)} name='activity' value ={activity}>
                        <option selected = ''>Choose an Activity Level</option>
                        <option value="1.2">Sedentary:	Little to no exercise</option>
                        <option value="1.375">Light Activity:	Light exercise/sports 1-3 days per week</option>
                        <option value="1.55">Moderate Activity:	Moderate exercise/sports 3-5 days per week</option>
                        <option value="1.725">Very Active:	Hard exercise/sports 6-7 days per week</option>
                        <option value="1.9">Extra Active:	Very hard exercise/sports and physical job</option>
                </select>    
            </label>
            <div className='button-container'>
                <button className='calculate' onClick={calcRMR}>CALCULATE TDEE</button>
            </div>   
            </form>
            <div className='container-2'>
                <h2>Your Maintainence Calories are: {TDEE}</h2>
                <p>Eat {TDEE - 500} kcals daily to lose 0.45 kgs per week </p>
                <p>Eat {TDEE - 1000} kcals daily to lose 0.9 kgs per week</p>
                <p>Eat {TDEE + 500} kcals daily to gain 0.45 kgs per week</p>
            </div>
            
            </div>
            </span>
    </div>
        

    );
}
 
export default Home ;

