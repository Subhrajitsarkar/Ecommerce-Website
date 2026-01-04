import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

const musicProducts = [
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

const merchProducts = [
    {
        title: 'T-Shirt',
        price: 19.99,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
    },
    {
        title: 'Coffee Cup',
        price: 6.99,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
    },
]

export default function Products() {
    return (
        <>
            {/* MUSIC */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">MUSIC</h2>
                    <Row>
                        {musicProducts.map((product, index) => (
                            <Col md={6} className="mb-4" key={index}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* MERCH */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">MERCH</h2>
                    <Row>
                        {merchProducts.map((product, index) => (
                            <Col md={6} className="mb-4" key={index}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}
