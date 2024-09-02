import style from './Pizza.module.css'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Pizza() {
    const [pizza, setPizza] = useState([]);
    const getPizza = async () => {
        const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data = await response.json();
        setPizza(data.recipes);
    }
    useEffect(() => {
        getPizza();
    }, []);
    return (
        <div className='container' >
            {pizza.length == 0 ? <h2>Loading...</h2> :
                <div className='row g-4'>
                    {pizza.map(pizzaType =>
                        <div className='col-lg-3 text-center'>
                            <div className='card p-3'>
                                <h4>{pizzaType.title.split(' ').slice(0, 3).join(' ')}</h4>
                                <img src={pizzaType.image_url} />
                                <span>Publisher is : </span><h4>{pizzaType.publisher}</h4>
                            </div>
                        </div>
                    )
                    }
                </div>
            }
        </div>
    )
}
