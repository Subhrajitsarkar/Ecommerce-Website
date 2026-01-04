import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './Home.css'

export default function Home() {
    const tours = [
        ['JUL16', 'DETROIT, MI', 'DTE ENERGY MUSIC THEATRE'],
        ['JUL19', 'TORONTO,ON', 'BUDWEISER STAGE'],
        ['JUL22', 'BRISTOW, VA', 'JIGGY LUBE LIVE'],
        ['JUL29', 'PHOENIX, AZ', 'AK-CHIN PAVILION'],
        ['AUG 2', 'LAS VEGAS, NV', 'T-MOBILE ARENA'],
        ['AUG 7', 'CONCORD, CA', 'CONCORD PAVILION'],
    ]

    return (
        <div>
            <header className="home-hero text-center">
                <Container>
                    <h1 className="hero-title">The Generics</h1>
                    <Button variant="outline-info" className="hero-cta my-3">
                        Get our Latest Album
                    </Button>

                    <div className="hero-play mt-4">
                        <Button variant="link" className="play-btn">
                            <span className="play-icon">►</span>
                        </Button>
                    </div>
                </Container>
            </header>

            <section className="tours py-5">
                <Container>
                    <h2 className="text-center tours-title">TOURS</h2>

                    <div className="tours-list mt-4">
                        {tours.map((t, i) => (
                            <div className="tour-row d-flex align-items-center" key={i}>
                                <div className="col-date">{t[0]}</div>
                                <div className="col-city">{t[1]}</div>
                                <div className="col-venue flex-grow-1">{t[2]}</div>
                                <div className="col-action">
                                    <Button variant="info" size="sm">
                                        BUY TICKETS
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Products removed from Home - use /store route to view products */}
        </div>
    )
}
