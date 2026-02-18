import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import './ForgotPassword.css';
import robotImg from '../../assets/images/LoginRobot.png';

// Generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const ForgotPassword = () => {
    const navigate = useNavigate();

    // Steps: 'email' | 'otp' | 'reset' | 'done'
    const [step, setStep] = useState('email');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [resendTimer, setResendTimer] = useState(0);

    const otpRefs = useRef([]);

    // Countdown timer for resend
    useEffect(() => {
        if (resendTimer > 0) {
            const t = setTimeout(() => setResendTimer(r => r - 1), 1000);
            return () => clearTimeout(t);
        }
    }, [resendTimer]);

    // ── Step 1: Send OTP ──────────────────────────────────────────────
    const handleSendOtp = (e) => {
        e.preventDefault();
        const code = generateOTP();
        setGeneratedOtp(code);
        setResendTimer(60);
        setOtpError('');
        setOtp(['', '', '', '', '', '']);
        // TODO: replace with real email API (e.g. EmailJS / backend endpoint)
        console.log(`OTP for ${email}: ${code}`);
        setStep('otp');
    };

    // ── OTP input handling ────────────────────────────────────────────
    const handleOtpChange = (index, value) => {
        if (!/^\d?$/.test(value)) return; // digits only
        const updated = [...otp];
        updated[index] = value;
        setOtp(updated);
        setOtpError('');
        if (value && index < 5) otpRefs.current[index + 1]?.focus();
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        const updated = [...otp];
        pasted.split('').forEach((ch, i) => { updated[i] = ch; });
        setOtp(updated);
        otpRefs.current[Math.min(pasted.length, 5)]?.focus();
    };

    // ── Step 2: Verify OTP ───────────────────────────────────────────
    const handleVerifyOtp = (e) => {
        e.preventDefault();
        const entered = otp.join('');
        if (entered === generatedOtp) {
            setStep('reset');
            setOtpError('');
        } else {
            setOtpError('Incorrect code. Please try again.');
        }
    };

    // ── Step 3: Reset Password ───────────────────────────────────────
    const handleResetPassword = (e) => {
        e.preventDefault();
        if (newPassword.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }
        // TODO: call your backend to update the password
        console.log('Password reset for:', email);
        setStep('done');
    };

    // ── SVG icons ────────────────────────────────────────────────────
    const EmailIcon = () => (
        <svg className="form-label-icon" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );

    const LockIcon = () => (
        <svg className="form-label-icon" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );

    return (
        <div className="login-container">
            <div className="robo-login-card">
                <img src={robotImg} alt="robot" className="robot-image" />
            </div>

            <div className="login-card-wrapper">
                <div className="login-card">

                    {/* ── STEP 1: Enter Email ── */}
                    {step === 'email' && (
                        <>
                            <button className="fp-back-btn" onClick={() => navigate(-1)}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                                Back to Login
                            </button>

                            <h2 className="login-title">Forgot Password</h2>
                            <p className="fp-subtitle">
                                Enter your registered email and we'll send a 6-digit verification code.
                            </p>

                            <form onSubmit={handleSendOtp} className="login-form">
                                <div className="form-group">
                                    <label htmlFor="fp-email" className="form-label">
                                        Email <EmailIcon />
                                    </label>
                                    <input
                                        id="fp-email"
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="form-input"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-button">Send Code</button>
                            </form>
                        </>
                    )}

                    {/* ── STEP 2: Enter OTP ── */}
                    {step === 'otp' && (
                        <>
                            <button className="fp-back-btn" onClick={() => setStep('email')}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                                Change Email
                            </button>

                            <h2 className="login-title">Enter Code</h2>
                            <p className="fp-subtitle">
                                We sent a 6-digit code to <strong>{email}</strong>.<br />
                                Check your inbox and enter it below.
                            </p>

                            <form onSubmit={handleVerifyOtp} className="login-form">
                                <div className="otp-boxes" onPaste={handleOtpPaste}>
                                    {otp.map((digit, i) => (
                                        <input
                                            key={i}
                                            ref={el => otpRefs.current[i] = el}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChange={e => handleOtpChange(i, e.target.value)}
                                            onKeyDown={e => handleOtpKeyDown(i, e)}
                                            className={`otp-box ${otpError ? 'otp-box--error' : ''}`}
                                        />
                                    ))}
                                </div>

                                {otpError && <p className="fp-error">{otpError}</p>}

                                <button
                                    type="submit"
                                    className="login-button"
                                    disabled={otp.join('').length < 6}
                                >
                                    Verify Code
                                </button>
                            </form>

                            <div className="fp-resend-row">
                                {resendTimer > 0 ? (
                                    <span className="fp-timer">Resend code in {resendTimer}s</span>
                                ) : (
                                    <button className="fp-resend-btn" onClick={handleSendOtp}>
                                        Resend Code
                                    </button>
                                )}
                            </div>
                        </>
                    )}

                    {/* ── STEP 3: New Password ── */}
                    {step === 'reset' && (
                        <>
                            <h2 className="login-title">New Password</h2>
                            <p className="fp-subtitle">Choose a strong new password for your account.</p>

                            <form onSubmit={handleResetPassword} className="login-form">
                                <div className="form-group">
                                    <label className="form-label">New Password <LockIcon /></label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={e => { setNewPassword(e.target.value); setPasswordError(''); }}
                                        className="form-input"
                                        placeholder="At least 6 characters"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Confirm Password <LockIcon /></label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={e => { setConfirmPassword(e.target.value); setPasswordError(''); }}
                                        className="form-input"
                                        placeholder="Re-enter your password"
                                        required
                                    />
                                </div>
                                {passwordError && <p className="fp-error">{passwordError}</p>}
                                <button type="submit" className="login-button">Reset Password</button>
                            </form>
                        </>
                    )}

                    {/* ── STEP 4: Done ── */}
                    {step === 'done' && (
                        <div className="fp-success">
                            <div className="fp-success-icon">✅</div>
                            <h2 className="login-title">Password Reset!</h2>
                            <p className="fp-subtitle">
                                Your password has been successfully updated.<br />
                                You can now log in with your new password.
                            </p>
                            <button className="login-button" onClick={() => navigate(-1)}>
                                Back to Login
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
