import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'


const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl:
            'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl:
            'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl:
            'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl:
            'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
]


export default function Products() {
    return (
        <section className="py-5">
            <Container>
                <h2 className="section-title text-center mb-5">Our Products</h2>


                <Row>
                    {productsArr.map((p, idx) => (
                        <Col key={idx} xs={12} sm={6} md={6} lg={3} className="d-flex align-items-stretch mb-4">
                            <ProductCard product={p} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}