import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('October 30, 2024 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor (distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor ((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor ((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor ((distance % (1000 * 60)) / 1000);

            if (distance < 0 ) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return(
        <div>
        <div className="container">
            <div className="home-title-container">
                <div className="home-title">
                <h1>Discover the Rarest Antique that exist</h1>
                </div>
                <div className="home-discover-button">
                        <Link>Discover</Link>
                </div>
            </div>
            </div>

            <div className="container auction-popular-container">
                <div className="ending-auction-container">
                    <h2>Ending Soon Auctions</h2>
                    <p>See what's auction is ending soon.</p>
                </div>
                <div className="row">
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/book-1.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/book-2.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>241</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>20</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>Scroll map</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Map</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 1000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/book-3.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>241</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>20</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>The birth of civilization</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 4500</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/book-4.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>241</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>20</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>The Gospel</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 1500</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/book-5.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>241</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>20</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>The Da Vinci code</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 500</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/book-6.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>241</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>20</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>10</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>The Bible</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                </div>
            </div>

            <div className="upcoming-auction-container">
                    <div className="container auction-upcoming-container">
                    <h2>Upcoming Auctions</h2>
                    </div>
                </div>
            <div className="container auction-upcoming-container">
                <div className="row auction-box">
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage1.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage2.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage3.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage4.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage5.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage6.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                </div>
            </div>
             <div className="container auction-1440">
                <div className="by-hand-container">
                    <h2 className="font-title-homepage">Products picked by hand</h2>
                    </div>
                    <div className="row">
                    <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage7.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage8.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="auction-items">
                    <div className="auction-image">
                        <img src="images/productimage9.jpg"/>
                        <div className="auction-time">
                        <div className="auction-time-items">
                            <div className="countdown-box">
                            <span className="countdown-time">
                                <span className="auction-timer">
                                    <span>{timerDays}</span>
                                    <span className="auction-date">Days</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerHours}</span>
                                <span className="auction-date">Hours</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerMinutes}</span>
                                <span className="auction-date">Minutes</span>
                                </span>
                                <span className="auction-timer">
                                <span>{timerSeconds}</span>
                                <span className="auction-date">Seconds</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="bid-now-button">
                        <button className="bid-button">
                        <Link>Bid Now</Link>
                        </button>
                    </div>
                    </div>
                    <Link className="wrap-auction-detail">
                    <div className="auction-name-price">
                        <div className="auction-name">
                            <span>History</span>
                        </div>
                        <div className="space-between">
                            <div className="auction-category">
                                <p>Books</p>
                            </div>
                        <div className="auction-price">
                        <p>Starting Bid: 2000</p>
                        </div>
                        </div>
                    </div>
                    </Link>
                </div>
                
                    </div>
                    </div>
                    <div className="container auction-1440">
                        <div>
                            <h2 className="font-title-homepage">Browse by category</h2>
                        </div>

                        <div className="row">
                           
                            <div className="category-items">
                            <Link className="Link-category-box">
                                <div className="category-img">
                                    <img src="images/book-1.jpg"></img>
                                </div>
                                <div className="category-name-items">
                                    <h2>Books</h2>
                                </div>
                                </Link>
                            </div>
                            <div className="category-items">
                            <Link className="Link-category-box">
                                <div className="category-img">
                                    <img src="images/book-1.jpg"></img>
                                </div>
                                <div className="category-name-items">
                                    <h2>Books</h2>
                                </div>
                                </Link>
                            </div>
                            <div className="category-items">
                            <Link className="Link-category-box">
                                <div className="category-img">
                                    <img src="images/book-1.jpg"></img>
                                </div>
                                <div className="category-name-items">
                                    <h2>Books</h2>
                                </div>
                                </Link>
                            </div>
                            <div className="category-items">
                            <Link className="Link-category-box">
                                <div className="category-img">
                                    <img src="images/book-1.jpg"></img>
                                </div>
                                <div className="category-name-items">
                                    <h2>Books</h2>
                                </div>
                                </Link>
                            </div>
                            <div className="category-items">
                            <Link className="Link-category-box">
                                <div className="category-img">
                                    <img src="images/book-1.jpg"></img>
                                </div>
                                <div className="category-name-items">
                                    <h2>Books</h2>
                                </div>
                                </Link>
                            </div>
                            <div className="category-items">
                            <Link className="Link-category-box">
                                <div className="category-img">
                                    <img src="images/book-1.jpg"></img>
                                </div>
                                <div className="category-name-items">
                                    <h2>Books</h2>
                                </div>
                                </Link>
                            </div>
                            <div className="category-items">
                            <Link className="Link-category-box">
                                <div className="category-img">
                                    <img src="images/book-1.jpg"></img>
                                </div>
                                <div className="category-name-items">
                                    <h2>Books</h2>
                                </div>
                                </Link>
                            </div>

                        </div>
                    </div>
            </div>
    );
}

export default Home;