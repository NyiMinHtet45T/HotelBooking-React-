import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FooterComponent from './FooterComponent';
import { RiBardFill, RiDoorOpenLine, RiNumbersLine, RiSparkling2Fill, RiUserLine } from '@remixicon/react';

export default function MostPopularRoom() {

    const nevigate = useNavigate();

    return (
        <>
            <section className="section_container popular_container">
                <h2 className="section_header"><RiBardFill color='blue' /> Popular Rooms <RiSparkling2Fill color='blue' /></h2>
                <div className="popular_grid">
                    <div className="popular_card">
                        <img src='/image/rolled-up-clean-towels-bed_53876-149702.jpg' width={500} height={300} alt="popular lotel" />
                        <div className="popular_content">
                            <div className="popular_card_header">
                                <h4><RiDoorOpenLine size={16} /> Double</h4>
                                <p><RiNumbersLine size={16} /> 208</p>
                                <h4>MMK 480000</h4>
                            </div>
                            <div className='bu_content'>
                                <span><RiUserLine size={15} /> 2</span>
                                <div style={{ marginTop: 10 }}>
                                    
                                    <Link to={"/room-detail/19"} className='btnDetail btn'>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular_card">
                        <img src='/image/room-interior-hotel-bedroom_23-2150683419.jpg' width={500} height={300} alt="popular lotel" />
                        <div className="popular_content">
                            <div className="popular_card_header">
                                <h4><RiDoorOpenLine size={16} /> Luxury</h4>
                                <p><RiNumbersLine size={16} /> 102</p>
                                <h4>MMK 500000</h4>
                            </div>
                            <div className='bu_content'>
                                <span><RiUserLine size={15} /> 3</span>
                                <div style={{ marginTop: 10 }}>

                                    <Link to={"/room-detail/6"} className='btnDetail btn'>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular_card">
                        <img src='/image/white-bed-with-white-pillows_1203-460.jpg' width={500} height={300} alt="popular lotel" />
                        <div className="popular_content">
                            <div className="popular_card_header">
                                <h4><RiDoorOpenLine size={16} /> Single</h4>
                                <p><RiNumbersLine size={16} /> 206</p>
                                <h4>MMK 467000</h4>
                            </div>
                            <div className='bu_content'>
                                <span><RiUserLine size={15} /> 1</span>
                                <div style={{ marginTop: 10 }}>

                                    <Link to={"/room-detail/18"} className='btnDetail btn'>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular_card">
                        <img src='/image/elegant-hotel-room-with-big-bed_1203-1494.jpg' width={500} height={300} alt="popular lotel" />
                        <div className="popular_content">
                            <div className="popular_card_header">
                                <h4><RiDoorOpenLine size={16} /> Superior</h4>
                                <p><RiNumbersLine size={16} /> 103</p>
                                <h4>MMK 450000</h4>
                            </div>
                            <div className='bu_content'>
                                <span><RiUserLine size={15} /> 4</span>
                                <div style={{ marginTop: 10 }}>

                                    <Link to={"/room-detail/7"} className='btnDetail btn'>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular_card">
                        <img src='/image/white-comfortable-pillow-blanket-bed-with-light-lamp_74190-12054.jpg' width={500} height={300} alt="popular lotel" />
                        <div className="popular_content">
                            <div className="popular_card_header">
                                <h4><RiDoorOpenLine size={16} /> Sea View</h4>
                                <p><RiNumbersLine size={16} /> 203</p>
                                <h4>MMK 520000</h4>
                            </div>
                            <div className='bu_content'>
                                <span><RiUserLine size={15} /> 2</span>
                                <div style={{ marginTop: 10 }}>

                                    <Link to={"/room-detail/15"} className='btnDetail btn'>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular_card">
                        <img src='/image/small-hotel-bedroom-with-white-walls-panoramic-window_1262-12488.jpg' width={500} height={300} alt="popular lotel" />
                        <div className="popular_content">
                            <div className="popular_card_header">
                                <h4><RiDoorOpenLine size={16} /> Double</h4>
                                <p><RiNumbersLine size={16} /> 104</p>
                                <h4>MMK 320000</h4>
                            </div>
                            <div className='bu_content'>
                                <span><RiUserLine size={15} /> 2</span>
                                <div style={{ marginTop: 10 }}>
                                    <Link to={"/room-detail/8"} className='btnDetail btn'>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client">
                <div className="section_container clint_container">
                    <h2 className="section_header">What out Client say</h2>
                    <div className="client_grid">
                        <div className="client_card">
                            <img src="" alt="" />
                            <p>
                                The booking process was seamleass, and the confirmation was
                                instant. I hightly recommend Booking For hassle-free hotel bookings
                            </p>
                        </div>
                        <div className="client_card">
                            <img src="" alt="" />
                            <p>
                                The booking process was seamleass, and the confirmation was
                                instant. I hightly recommend Booking For hassle-free hotel bookings
                            </p>
                        </div>
                        <div className="client_card">
                            <img src="" alt="" />
                            <p>
                                The booking process was seamleass, and the confirmation was
                                instant. I hightly recommend Booking For hassle-free hotel bookings
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_container">
                <div className="reward_container">
                    <p>100+ discount codes</p>
                    <h4>Join rewards and discover amazing discount on your booking</h4>
                    <button onClick={() => nevigate("/rooms")} className="reward_btn">Start Booking</button>
                </div>
            </section>

            <FooterComponent />
        </>
    )
}
