import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernPlans = () => {
    const [email, setEmail] = useState('');

    const plans = [
        {
            category: 'STRATEGY',
            title: 'Money Momentum',
            description: 'Tract Premium helps you start saver investments insights covering.',
            performance: '7.20%',
            period: '3 yrs CAGR',
            color: '#10b981', // Green
            bgColor: '#d1fae5',
            textColor: '#064e3b'
        },
        {
            category: 'PLANS',
            title: 'Long-Term',
            description: 'Create a vision. To get started, imagine your dream life.',
            performance: '14.20%',
            period: '25 yrs CAGR',
            color: '#ffffff', // White on Black
            bgColor: '#111827', // Dark/Black
            textColor: '#ffffff'
        },
        {
            category: 'STRATEGY',
            title: 'Focussed',
            description: 'Be focused Life planning, however, can serve as a roadmap or guide.',
            performance: '11.20%',
            period: '1 yr returns',
            color: '#8b5cf6', // Purple
            bgColor: '#ede9fe',
            textColor: '#4c1d95'
        },
        {
            category: 'PLANS',
            title: 'Fixed Income',
            description: 'Get multiple benefits, and lumpsum option & Guaranteed Returns',
            performance: '8.20%',
            period: '5 yrs CAGR',
            color: '#f59e0b', // Yellow
            bgColor: '#fef3c7',
            textColor: '#92400e'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="modern-ui-root" style={{ 
            fontFamily: "'Poppins', 'Montserrat', sans-serif",
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            padding: '60px 5% 40px',
            color: '#111827'
        }}>
            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
                
                .modern-ui-root {
                    font-family: 'Poppins', sans-serif;
                    overflow-x: hidden;
                }
                
                .hero-headline {
                    font-size: 64px;
                    font-weight: 800;
                    line-height: 1.1;
                    letter-spacing: -0.04em;
                    margin-bottom: 24px;
                    text-align: center;
                    color: #000;
                }
                
                @media (max-width: 768px) {
                    .hero-headline {
                        font-size: 40px;
                    }
                }
                
                .hero-subtitle {
                    font-size: 18px;
                    color: #666;
                    text-align: center;
                    margin-bottom: 48px;
                    font-weight: 400;
                }
                
                .input-container {
                    display: flex;
                    align-items: center;
                    background: #fff;
                    border: 1px solid #e5e7eb;
                    border-radius: 100px;
                    padding: 8px 8px 8px 24px;
                    max-width: 500px;
                    margin: 0 auto 80px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                    transition: all 0.3s ease;
                }
                
                .input-container:focus-within {
                    border-color: #111827;
                    box-shadow: 0 4px 30px rgba(0,0,0,0.08);
                }
                
                .modern-input {
                    border: none;
                    outline: none;
                    flex: 1;
                    font-size: 16px;
                    padding: 12px 0;
                    background: transparent;
                }
                
                .sign-up-btn {
                    background: #111827;
                    color: #fff;
                    border: none;
                    border-radius: 100px;
                    padding: 14px 32px;
                    font-weight: 600;
                    font-size: 15px;
                    cursor: pointer;
                    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                
                .sign-up-btn:hover {
                    transform: scale(1.05);
                }
                
                .sign-up-btn:active {
                    transform: scale(0.95);
                }
                
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 32px;
                }
                
                .section-title {
                    font-size: 24px;
                    font-weight: 800;
                    color: #000;
                    margin: 0;
                }
                
                .explore-link {
                    color: #111827;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                
                .plans-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 20px;
                }
                
                .plan-card {
                    border-radius: 20px;
                    padding: 24px;
                    height: 320px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,0.04);
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    cursor: pointer;
                }
                
                .plan-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                }
                
                .category-badge {
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    margin-bottom: 12px;
                }
                
                .plan-title {
                    font-size: 20px;
                    font-weight: 800;
                    margin-bottom: 12px;
                    line-height: 1.2;
                }
                
                .plan-desc {
                    font-size: 13px;
                    line-height: 1.6;
                    opacity: 0.7;
                    margin-bottom: 24px;
                }
                
                .perf-container {
                    margin-top: auto;
                }
                
                .perf-period {
                    font-size: 11px;
                    font-weight: 600;
                    opacity: 0.6;
                    margin-bottom: 4px;
                }
                
                .perf-value {
                    font-size: 32px;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }
                
                .card-action-btn {
                    position: absolute;
                    bottom: 24px;
                    right: 24px;
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    background: rgba(0,0,0,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .plan-card:hover .card-action-btn {
                    background: rgba(0,0,0,1);
                    color: #fff;
                }
                
                .footer-links {
                    margin-top: 80px;
                    padding-top: 32px;
                    border-top: 1px solid #f3f4f6;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            ` }} />

            {/* Content Container */}
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    <h1 className="hero-headline">
                        Life Planning, Making<br />
                        Easy to Turn Dreams a Reality.
                    </h1>
                    <p className="hero-subtitle">
                        Get Exclusive offers on purchase of any plans
                    </p>

                    <div className="input-container">
                        <Mail size={18} color="#999" style={{ marginRight: '16px' }} />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="modern-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="sign-up-btn">
                            Sign Up
                        </button>
                    </div>
                </motion.div>

                {/* Section Header */}
                <div className="section-header">
                    <h3 className="section-title">Featured Plans</h3>
                    <Link to="/saved" className="explore-link">
                        Explore All <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Plans Grid */}
                <motion.div 
                    className="plans-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {plans.map((plan, i) => (
                        <motion.div 
                            key={i}
                            className="plan-card"
                            variants={itemVariants}
                            style={{ 
                                backgroundColor: plan.bgColor,
                                color: plan.textColor
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div>
                                <div className="category-badge">{plan.category}</div>
                                <h4 className="plan-title">{plan.title}</h4>
                                <p className="plan-desc">{plan.description}</p>
                            </div>
                            
                            <div className="perf-container">
                                <div className="perf-period">{plan.period}</div>
                                <div className="perf-value">{plan.performance}</div>
                            </div>

                            <div className="card-action-btn" style={{ 
                                backgroundColor: plan.title === 'Long-Term' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                color: plan.title === 'Long-Term' ? '#fff' : 'inherit'
                            }}>
                                <ArrowRight size={20} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Section */}
                <div className="footer-links">
                    <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#666', fontWeight: 500 }}>
                        <span>Terms Policy</span>
                        <span>•</span>
                        <span>Customer Story</span>
                    </div>
                    
                    <button style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: '1px solid #e5e7eb',
                        background: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <ArrowRight size={20} color="#000" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModernPlans;
