import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
]

export default function Products() {
    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-5">MUSIC</h2>

                <Row>
                    {productsArr.map((product, index) => (
                        <Col key={index} md={6} lg={3} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
