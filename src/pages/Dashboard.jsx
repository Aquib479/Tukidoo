import React, { useCallback, useEffect, useState } from 'react';
import '../css/dashboard.css';
import Charts from '../components/Charts';

const Dashboard = ({ setActive, isActive }) => {
    const [data, setData] = useState([]);
    const [InputData, setInputData] = useState({
        "category_6": "",
        "category_7": "",
        "category_8": "",
        "category_9": "",
        "category_10": ""
    });

    // handle the input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...InputData,
            [name]: value,
        });
    }

    // handle the form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const FormData = {
            "amount": {
                "category_6": InputData.category_6,
                "category_7": InputData.category_7,
                "category_8": InputData.category_8,
                "category_9": InputData.category_9,
                "category_10": InputData.category_10
            }
        }

        await fetch('https://stg.dhunjam.in/account/admin/4', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData),
        })
            .then(response => response.json())
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            });
        get_data();
    }

    // fetch data of loggedIn User
    const get_data = useCallback(async () => {
        await fetch('https://stg.dhunjam.in/account/admin/4', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(res => {
                const Data = [];
                Data.push(res.data);
                setData(Data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        get_data();
        setActive(false);
    }, [setActive, get_data]);

    return (
        <>
            <div className="login-component">
                <div className="page">
                    {
                        data.map(val => {
                            return <form key={val.id} className="contents" onSubmit={handleSubmit}>
                                <div className="headings">
                                    <h1 className='heading'>{val.name},</h1>
                                    <h1 className='heading'>{val.location}</h1>
                                    <h1 className='heading'>on Dhun Jam</h1>
                                </div>
                                <div className="user-inputs">
                                    <div className='input-1' >
                                        <p className='text-1'>Do you want to change your customers for requesting songs</p>
                                        <p className='text-2'>Custom song request amount-</p>
                                        <p className='text-3'>Regular song request amounts, from high to low</p>
                                    </div>
                                    <div className='input-3'>
                                        <div className="radio-buttons">
                                            <div className='custom-radio'>
                                                <input
                                                    type="radio"
                                                    name="radioGroup"
                                                    id="radio1"
                                                    checked={val.charge_customers ? true : false}
                                                    disabled={val.charge_customers ? true : false}
                                                    readOnly
                                                />
                                                <label htmlFor="radio1">Yes</label>
                                            </div>
                                            <div className='custom-radio'>
                                                <input
                                                    type="radio"
                                                    name="radioGroup"
                                                    id="radio2"
                                                    checked={val.charge_customers ? false : true}
                                                    disabled={val.charge_customers ? true : false}
                                                    readOnly
                                                />
                                                <label htmlFor="radio2">No</label>
                                            </div>
                                        </div>
                                        <div className="input-box">
                                            <input
                                                className={`${val.charge_customers ? 'input bg-input-true input-text-center' : 'input input-text-center bg-input-false'}`}
                                                name='category_6'
                                                defaultValue={val.amount.category_6}
                                                type='number'
                                                disabled={val.charge_customers === true ? false : true}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="input-boxes">
                                            <input
                                                type='number'
                                                name='category_7'
                                                defaultValue={val.amount.category_7}
                                                className={`${val.charge_customers ? 'input bg-input-true input-text-center' : 'input input-text-center bg-input-false'}`}
                                                onChange={handleChange}
                                                disabled={val.charge_customers === true ? false : true}

                                            />
                                            <input
                                                type='number'
                                                name='category_8'
                                                defaultValue={val.amount.category_8}
                                                className={`${val.charge_customers ? 'input bg-input-true input-text-center' : 'input input-text-center bg-input-false'}`}
                                                onChange={handleChange}
                                                disabled={val.charge_customers === true ? false : true}

                                            />
                                            <input
                                                type='number'
                                                name='category_9'
                                                defaultValue={val.amount.category_9}
                                                className={`${val.charge_customers ? 'input bg-input-true input-text-center' : 'input input-text-center bg-input-false'}`}
                                                onChange={handleChange}
                                                disabled={val.charge_customers === true ? false : true}

                                            />
                                            <input
                                                type='number'
                                                name='category_10'
                                                defaultValue={val.amount.category_10}
                                                className={`${val.charge_customers ? 'input bg-input-true input-text-center' : 'input input-text-center bg-input-false'}`}
                                                onChange={handleChange}
                                                disabled={val.charge_customers === true ? false : true}

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bar-graph">
                                    <Charts
                                        value_1={val.amount.category_6}
                                        value_2={val.amount.category_7}
                                        value_3={val.amount.category_8}
                                        value_4={val.amount.category_9}
                                        value_5={val.amount.category_10}
                                    />
                                </div>
                                <div className="button-main">
                                    <button
                                        type='submit'
                                        className={`${isActive
                                            ? 'button active button-true'
                                            : val.charge_customers &&
                                                val.amount.category_6 >= 99 &&
                                                val.amount.category_7 >= 79 &&
                                                val.amount.category_8 >= 59 &&
                                                val.amount.category_9 >= 39 &&
                                                val.amount.category_10 >= 19
                                                ? 'button button-true'
                                                : 'button button-false'}`}
                                        disabled={
                                            val.charge_customers &&
                                                val.amount.category_6 >= 99 &&
                                                val.amount.category_7 >= 79 &&
                                                val.amount.category_8 >= 59 &&
                                                val.amount.category_9 >= 39 &&
                                                val.amount.category_10 >= 19 ? false : true
                                        }
                                    >Save</button>
                                </div>
                            </form>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard