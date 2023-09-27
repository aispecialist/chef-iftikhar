import React from 'react'
import { NavLink } from 'react-router-dom'
import pakistanfood from './pakistanfood';
import chinesefood from './datacenter/chinesefood';
import thaifood from './datacenter/thaifood';
import drinks from './datacenter/drinks';
import salad from './datacenter/salad';
import italian from './datacenter/italian';
const Foodlist = () => {
    return (
        <div className='container-fluid flexClass bg-dark bg-gradient'>
            <div className="boder-class text-left rounded my-4 p-3">
                <h2 className='my-2 shadow-sm gTitlefont bg-info border border-warning  rounded py-2'>Paksitani Food List</h2>
                {pakistanfood.map((item, index) => (
                    <div className="text-start" key={index}>
                        <NavLink className="text-success text-uppercase text-start text-decoration-none" to="/pakistani">{item.name}</NavLink>
                    </div>
                ))}
            </div>
            <div className="boder-class text-center  rounded my-4 p-3">
                <h2 className='my-2 shadow-sm gTitlefont bg-info border border-warning  rounded py-2'>Chinese Food List</h2>
                {chinesefood.map((item, index) => (
                    <div className='text-start'  key={index}>
                        <NavLink className="text-warning text-uppercase text-start text-decoration-none"  to="/chinese">{item.name}</NavLink>
                    </div>
                ))}
            </div>
            <div className="boder-class text-startrounded my-4 p-3">
                <h2 className='my-2 shadow-sm gTitlefont bg-info border border-warning  rounded py-2'>Thai Food List</h2>
                {thaifood.map((item, index) => (
                    <div className="text-start" key={index}>
                        <NavLink className="text-warning text-uppercase text-start text-decoration-none" to="/thai">{item.name}</NavLink>
                    </div>
                ))}
            </div>
            <div className="boder-class text-center  rounded my-4 p-3">
                <h2 className='my-2 shadow-sm gTitlefont bg-info border border-warning  rounded py-2'>Drinks</h2>
                {drinks.map((item, index) => (
                    <div className="text-start" key={index}>
                        <NavLink className="m-2 text-warning text-uppercase text-start text-decoration-none" to="/drinks">{item.name}</NavLink>
                    </div>
                ))}
            </div>
            <div className="boder-class text-center  rounded my-4 p-3">
                <h2 className='my-2 shadow-sm gTitlefont bg-info border border-warning  rounded py-2'>Salad</h2>
                {salad.map((item, index) => (
                    <div className="text-start" key={index}>
                        <NavLink className="text-warning text-uppercase text-start text-decoration-none" to="/salad">{item.name}</NavLink>
                    </div>
                ))}
            </div>
            <div className="boder-class text-center  rounded my-4 p-3">
                <h2 className='my-2 shadow-sm gTitlefont bg-info border border-warning  rounded py-2'>Italian Food List</h2>
                {italian.map((item, index) => (
                    <div className="text-start" key={index}>
                        <NavLink className="text-warning text-uppercase text-start text-decoration-none" to="/italian">{item.name}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Foodlist