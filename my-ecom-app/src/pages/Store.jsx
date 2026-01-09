import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Products from '../components/Products';

export default function Store() {
    const { token } = useContext(CartContext);
    const history = useHistory();

    useEffect(() => {
        if (!token) {
            history.push('/login');
        }
    }, [token, history]);

    if (!token) {
        return null; // or a loading spinner
    }

    return (
        <section className="page">
            <Products />
        </section>
    );
}
