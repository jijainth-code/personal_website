import React from 'react';
import HeaderThree from '../common/header/jaiHeaderThree';
import SEO from '../common/SEO';
import BannerThree from '../component/banner/jaiBannerThree';
import ProjectTwo from '../component/project/ProjectTwo';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BrandOne from '../component/brand/BrandOne';
import ProjectThree from '../component/project/ProjectThree';
import TestimonialTwo from '../component/testimonial/TestimonialTwo';
import FooterTwo from '../common/footer/FooterTwo';
import FormThree from '../component/contact/FormThree';

const PersonalPortfolio = () => {

    return (
        <>
        <SEO title="Personal Portfolio"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderThree />
            <BannerThree />
            {/* <ProjectThree /> */}
            <BrandOne />
            <TestimonialTwo />

            <div className="section-padding bg-color-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-address mb--30">
                            <SectionTitle 
                                subtitle=""
                                title="Contact me ? "
                                description=""
                                textAlignment="heading-light-left"
                                textColor=""
                            />
                            <div className="address-list">
                                <div className="address">
                                <h6 className="title">E-Mail</h6>
                                <p>jijainthdhinakaran@aol.com</p>
                                </div>
                                <div className="address">
                                <h6 className="title">Address</h6>
                                <p>München, Bavaria, Germany </p>
                                </div>
                                <div className="address">
                                <h6 className="title">Phone</h6>
                                <p>+491749566895</p>
                                from 11:00 - 19:30
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-box mb--30">
                                <h3 className="title">send a quick message here !</h3>
                                <FormThree />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterTwo />

        </main>
        </>
    )
}

export default PersonalPortfolio;

