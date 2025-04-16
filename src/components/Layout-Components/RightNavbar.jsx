import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import swimming from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playground from '../../assets/playground.png';

const RightNavbar = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>Login With </h1>

            <div className='grid gap-3 mt-3'>
                <button className="btn bg-white text-black border-[#e5e5e5]">
                    {/* Google Icon */}
                    <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
                        <g>
                            <path d="M0 0H512V512H0" fill="#fff" />
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                            <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                        </g>
                    </svg>
                    Login with Google
                </button>

                <button className="btn bg-black text-white border-black">
                    {/* GitHub Icon */}
                    <svg aria-label="GitHub logo" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="white" d="..." />
                    </svg>
                    Login with GitHub
                </button>
            </div>

            <h1 className='font-bold text-2xl pt-5'>Find Us On</h1>
            <div className='grid mt-8 gap-3'>
                <button className='btn'><FaFacebook /> Facebook</button>
                <button className='btn'><FaTwitter /> Twitter</button>
                <button className='btn'><FaInstagramSquare /> Instagram</button>
            </div>

            <h1 className='text-2xl font-bold mt-5 mb-5'>Q-Zone</h1>
            <div className='bg-[#F3F3F3] '>
                <section >
                    <img src={swimming} alt="Swimming" />
                </section>
                <section>
                    <img src={classImg} alt="Class" />
                </section>
                <section>
                    <img src={playground} alt="Playground" />
                </section>
            </div>
        </div>
    );
};

export default RightNavbar;
