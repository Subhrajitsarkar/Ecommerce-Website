import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

export const productsArr = [
    {
        id: 1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        ],
        reviews: [
            { author: 'John Doe', comment: 'Great product!' },
            { author: 'Jane Smith', comment: 'I love it!' },
        ],
    },
    {
        id: 2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        ],
        reviews: [
            { author: 'Peter Jones', comment: 'Not bad.' },
            { author: 'Mary Williams', comment: 'Could be better.' },
        ],
    },
    {
        id: 3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        ],
        reviews: [
            { author: 'David Brown', comment: 'Amazing!' },
        ],
    },
    {
        id: 4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        ],
        reviews: [
            { author: 'Susan Green', comment: 'Just what I was looking for.' },
            { author: 'Tom Wilson', comment: 'Perfect!' },
            { author: 'Emily Davis', comment: 'Highly recommended.' },
        ],
    },
]

export default function Products() {
    return (
        <section className="py-5">
            <Container>
                <h2 className="section-title text-center mb-5">Our Products</h2>

                <Row>
                    {productsArr.map((p) => (
                        <Col key={p.id} xs={12} sm={6} md={6} lg={3} className="d-flex align-items-stretch mb-4">
                            <ProductCard product={p} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
