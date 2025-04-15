import moment from 'moment';
import Logo from '../assets/logo.png'






const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-10'>
           <div className=''>
            <img className='w-[500px]' src={Logo} alt="" />
           </div>
           <h1 className=' text-gray-500 text-2xl'>Journalism Without Fear or Favour</h1>
           <p className='text-3xl'>
            {moment().format("dddd, MMMM Do YYYY")}
            </p>
        </div>
    );
};

export default Header;