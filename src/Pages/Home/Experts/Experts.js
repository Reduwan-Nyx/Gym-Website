import React from 'react';
import machine1 from '../../../images/machine1.jpg'
import machine2 from '../../../images/machine2.jpg'
import machine3 from '../../../images/machine3.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {id:1, name: 'john wick', img: machine1, description: 'Full body portrait of athletic shirtless male doing biceps workouts with dumbbells in a gym club.'},   
    
    {id:2, name: 'Lucas ', img: machine2, description: 'Strong bodybuilder doing heavy weight exercise for back on machine Premium Photo'},   
    
    {id:3, name: 'William', img: machine3, description: 'Bodybuilder training back on exercise machine.'},
]


const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-center'>Our experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;