import React from 'react'

import logo from '../assets/images/Logo-2.png'

import Grid from '../components/Grid'

import { Link } from 'react-router-dom'

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about'
    },
    {
        display: 'Liên hệ',
        path: '/about'
    },
    {
        display: 'Tuyển dụng',
        path: '/about'
    },
    {
        display: 'Tin tức',
        path: '/about'
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about'
    },
]


const footerCustomLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0935726645</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0935726645</strong>
                            </p>
                            <p>
                                Góp ý khiếu nại <strong>0935726645</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, i) => (
                                    <p key={i}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomLinks.map((item, i) => (
                                    <p key={i}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>  
                    <div className="footer__about">
                        <Link to="/">
                            <img src={logo} className="footer__logo" alt="" />
                        </Link>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
