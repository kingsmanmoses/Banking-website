import React from 'react';
import './price.css';
import { FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className="pricing-sect">
                    <div className="pricing-wrap">
                        <h1 className="pricing-head">Pricing</h1>
                        <div className="pricing-container">
                            <Link to="/sign-up" className="pricing-card">
                                <div className="pricing-cardinfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>$8.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing-feature">
                                        <li>100 Transactions</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing-card">
                                <div className="pricing-cardinfo">
                                    <div className="icon">
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Gold</h3>
                                    <h4>$29.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing-feature">
                                        <li>1000 Transactions</li>
                                        <li>3.5% Cash Back</li>
                                        <li>$100,000 Limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="blue">
                    Choose Plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing-card">
                                <div className="pricing-cardinfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>Diamond</h3>
                                    <h4>$99.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing-feature">
                                        <li>Unlimited Transactions</li>
                                        <li>5% Cash Back</li>
                                        <li>Unlimited Spending</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Pricing;
