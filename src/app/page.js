/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import ScrollToTop from '@/components/scrollToTop';
import AnimatedSection from '@/components/AnimatedSection';

const menus = [
  { label: 'ABOUT US', id: 'about' },
  { label: 'PRICING', id: 'pricing' },
  { label: 'CONTACT', id: 'contact' },
  { label: 'FAQ', id: 'faq' },
  { label: 'TERM OF SERVICE', id: 'tos' },
];

export default function Home() {
  return (
    <main className=' m-auto'>
      <div className='h-[100vh] bg-[#F8F8F8] min-h-[1000px]'>
        <div className='h-[36%] text-center '>
          <h1 className='text-6xl font-bold text-[#09A4DD] text-center mb-6 pt-[80px]'>
            Cross-border E-Commerce
          </h1>
          <p className='text-center text-xl text-[#797979] font-medium mb-8'>
            Growth Hacking your E-commerce Businesswithout Fix cost
          </p>
          <div className='text-center mb-6'>
            <input
              type='text'
              className='w-96 border-gray-100 outline-none bg-[#E9E9E9] px-5 py-4'
              placeholder='Enter your email'
            />
            <button className='bg-[#0AA5DE] text-white hover:scale-105 duration-75 outline-none py-4 px-5 rounded ml-4 active:scale-95'>
              Get Started
            </button>
          </div>
        </div>
        <div className='h-[64%] relative '>
          <AnimatedSection className='flex items-center justify-center z-30'>
            <Image
              src={'/fram1.png'}
              width={812}
              height={381}
              alt='alt'
              className='z-30'
            />
          </AnimatedSection>
          <div className='absolute bottom-[100px] left-0 right-0 z-10'>
            <div className='px-12'>
              <div className='rectangleDiv '></div>
            </div>
          </div>
          <div className='absolute bottom-0 w-full  h-[200px] '>
            <div className='flex items-center justify-center h-full'>
              <div className='w-[70%]  shadow text-center h-full grid grid-cols-12 gap-4 bg-white z-30 p-8 rounded'>
                <div className='col-span-4 h-full w-full flex items-center justify-center'>
                  <div className='hover:scale-105 duration-75 active:scale-95 cursor-pointer'>
                    <div className=''>
                      <div className='flex items-center justify-center'>
                        {iconDola}
                      </div>
                      <div className='text-2xl py-2 text-[#09A4DD]'>$1B+</div>
                      <div className='text-[#A3A3A3]'>In revenue</div>
                    </div>
                  </div>
                </div>
                <div className='col-span-4 h-full w-full flex items-center justify-center'>
                  <div className='text-center hover:scale-105 duration-75 active:scale-95 cursor-pointer'>
                    <div className='flex items-center justify-center'>
                      {iconWallet}
                    </div>
                    <div className='text-2xl py-2 text-[#09A4DD]'>100,000+</div>
                    <div className='text-[#A3A3A3]'>Sales site</div>
                  </div>
                </div>
                <div className='col-span-4 h-full w-full flex items-center justify-center'>
                  <div className='text-center hover:scale-105 duration-75 active:scale-95 cursor-pointer'>
                    <div className='flex items-center justify-center'>
                      {iConUs}
                    </div>
                    <div className='text-2xl py-2 text-[#09A4DD]'>3,530+</div>
                    <div className='text-[#A3A3A3]'>Active seller</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[100vh] px-[100px] min-h-[1000px]' id='about'>
        <div className='grid grid-cols-12 gap-8 pt-[160px]'>
          <div className='col-span-6'>
            <h1 className='text-6xl font-bold mb-12'>
              Exceptional Conversion Rate
            </h1>
            <div className='mb-12'>
              <h5 className='text-xl flex items-center mb-2'>
                <div>{iconLight}</div>
                <div className='ml-2'>Pioneering technology</div>
              </h5>
              <p>
                Pioneering conversion rate optimization technology, helping you
                to convert 2-4 times more than conventional platforms.
              </p>
            </div>
            <div className='mb-12'>
              <h5 className='text-xl flex items-center mb-2'>
                <div>{iconText}</div>
                <div className='ml-2'>Resource distribution algorithm</div>
              </h5>
              <p>
                Unique resource distribution algorithm optimizes page load time,
                balances loads, and enhances customer experience, ensuring high
                conversion rates even at large revenue scales.
              </p>
            </div>
            <div className='mb-12'>
              <h5 className='text-xl flex items-center mb-2'>
                <div>{iconThing}</div>
                <div className='ml-2'>Generative AI technology</div>
              </h5>
              <p>
                Applying Generative AI technology to optimize abandoned checkout
                rate, the rate of returning customers is 2-3 times higher than
                conventional platforms.
              </p>
            </div>
          </div>
          <div className='col-span-6 flex items-center justify-center h-full'>
            <Image
              src={'/banner1.svg'}
              width={578}
              height={578}
              alt='xd'
              className='animate-fade-right animate-once animate-duration-1000'
            />
          </div>
        </div>
      </div>
      <div className='h-[100vh] px-[100px] min-h-[1000px]'>
        <div className='grid grid-cols-12 gap-8 pt-[160px]'>
          <div className='col-span-6 flex items-center justify-center h-full'>
            <Image src={'/banner2.svg'} width={578} height={578} alt='xd' />
          </div>
          <div className='col-span-6'>
            <h1 className='text-6xl font-bold mb-12'>Profit Maximization</h1>
            <div className='mb-12'>
              <h5 className='text-xl flex items-center mb-2'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 28 28'
                    fill='none'>
                    <circle cx='14' cy='14' r='14' fill='#FFFDD9' />
                    <circle cx='14' cy='14' r='10' fill='#FFF8B8' />
                    <path
                      d='M13.5714 19.0769C12.0286 19.0769 10.5286 18.2462 9.62857 16.7692H11.8571V15.8462H8.42857V19.5385H9.28571V17.8308C10.3571 19.2154 11.9 20 13.5714 20V19.0769ZM20 17.2308V16.3077H19.1C19.0571 16.0308 18.9286 15.7538 18.8 15.4769L19.4429 14.7846L18.8429 14.1385L18.2 14.8308C17.9857 14.6923 17.7286 14.5538 17.4286 14.5077V13.5385H16.5714V14.5077C16.3143 14.5538 16.0571 14.6923 15.8 14.8308L15.1571 14.1385L14.5571 14.7846L15.2 15.4769C15.0714 15.7077 14.9429 15.9846 14.9 16.3077H14V17.2308H14.9C14.9429 17.5077 15.0714 17.7846 15.2 18.0615L14.5571 18.7538L15.1571 19.4L15.8 18.7077C16.0143 18.8462 16.2714 18.9846 16.5714 19.0308V20H17.4286V19.0308C17.6857 18.9846 17.9429 18.8462 18.2 18.7077L18.8429 19.4L19.4429 18.7538L18.8 18.0615C18.9286 17.8308 19.0571 17.5538 19.1 17.2308H20ZM17 18.1538C16.2714 18.1538 15.7143 17.5538 15.7143 16.7692C15.7143 15.9846 16.2714 15.3846 17 15.3846C17.7286 15.3846 18.2857 15.9846 18.2857 16.7692C18.2857 17.5538 17.7286 18.1538 17 18.1538ZM15.2857 11.2308H17.5143C16.1 8.87692 13.1857 8.23077 11 9.75385C9.67143 10.6769 8.85714 12.2923 8.85714 14H8C8 10.6769 10.4857 8 13.5714 8C15.2429 8 16.7857 8.78462 17.8571 10.1692V8.46154H18.7143V12.1538H15.2857V11.2308Z'
                      fill='#DCC917'
                    />
                  </svg>
                </div>
                <div className='ml-2'>Automation process</div>
              </h5>
              <p>
                Automating the operation process, saving 50-80% of the cost
                compared to traditional models.
              </p>
            </div>
            <div className='mb-12'>
              <h5 className='text-xl flex items-center mb-2'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 28 28'
                    fill='none'>
                    <circle cx='14' cy='14' r='14' fill='#E8FDEA' />
                    <circle cx='14' cy='14' r='10' fill='#C7FED0' />
                    <path
                      d='M8 18.8V8H13.4545V10.4H18.9091V15.2H17.8182V11.6H13.4545V12.8H14.5455V14H13.4545V15.2H14.5455V16.4H13.4545V17.6H15.6364V18.8H8ZM9.09091 17.6H10.1818V16.4H9.09091V17.6ZM9.09091 15.2H10.1818V14H9.09091V15.2ZM9.09091 12.8H10.1818V11.6H9.09091V12.8ZM9.09091 10.4H10.1818V9.2H9.09091V10.4ZM11.2727 17.6H12.3636V16.4H11.2727V17.6ZM11.2727 15.2H12.3636V14H11.2727V15.2ZM11.2727 12.8H12.3636V11.6H11.2727V12.8ZM11.2727 10.4H12.3636V9.2H11.2727V10.4ZM17.8182 20V18.8H16.7273V17.6H17.8182V16.4H18.9091V17.6H20V18.8H18.9091V20H17.8182ZM15.6364 14V12.8H16.7273V14H15.6364ZM15.6364 16.4V15.2H16.7273V16.4H15.6364Z'
                      fill='#5FCC79'
                    />
                  </svg>
                </div>
                <div className='ml-2'>Unlimited stores</div>
              </h5>
              <p>
                Unlimited stores, support customers to increase sales and
                develop sellers.
              </p>
            </div>
            <div className='mb-12'>
              <h5 className='text-xl flex items-center mb-2'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 28 28'
                    fill='none'>
                    <circle cx='14' cy='14' r='14' fill='#E8F3FD' />
                    <circle cx='14' cy='14' r='10' fill='#C7D7FE' />
                    <path
                      d='M16.8421 9.2C16.6746 9.2 16.514 9.13679 16.3955 9.02426C16.2771 8.91174 16.2105 8.75913 16.2105 8.6C16.2105 8.44087 16.2771 8.28826 16.3955 8.17574C16.514 8.06321 16.6746 8 16.8421 8H19.3684C19.5359 8 19.6966 8.06321 19.815 8.17574C19.9335 8.28826 20 8.44087 20 8.6V11C20 11.1591 19.9335 11.3117 19.815 11.4243C19.6966 11.5368 19.5359 11.6 19.3684 11.6C19.2009 11.6 19.0403 11.5368 18.9218 11.4243C18.8034 11.3117 18.7368 11.1591 18.7368 11V10.0484L15.0781 13.5242C14.9597 13.6367 14.7991 13.6999 14.6316 13.6999C14.4641 13.6999 14.3035 13.6367 14.1851 13.5242L12.4211 11.8484L9.07811 15.0242C8.95899 15.1335 8.79945 15.194 8.63385 15.1926C8.46825 15.1912 8.30985 15.1281 8.19275 15.0169C8.07565 14.9056 8.00922 14.7552 8.00778 14.5978C8.00635 14.4405 8.07001 14.289 8.18505 14.1758L11.9745 10.5758C12.093 10.4633 12.2536 10.4001 12.4211 10.4001C12.5885 10.4001 12.7491 10.4633 12.8676 10.5758L14.6316 12.2516L17.8438 9.2H16.8421ZM9.26316 17.6V19.4C9.26316 19.5591 9.19662 19.7117 9.07817 19.8243C8.95973 19.9368 8.79908 20 8.63158 20C8.46407 20 8.30343 19.9368 8.18499 19.8243C8.06654 19.7117 8 19.5591 8 19.4V17.6C8 17.4409 8.06654 17.2883 8.18499 17.1757C8.30343 17.0632 8.46407 17 8.63158 17C8.79908 17 8.95973 17.0632 9.07817 17.1757C9.19662 17.2883 9.26316 17.4409 9.26316 17.6ZM12.4211 15.2C12.4211 15.0409 12.3545 14.8883 12.2361 14.7757C12.1176 14.6632 11.957 14.6 11.7895 14.6C11.622 14.6 11.4613 14.6632 11.3429 14.7757C11.2244 14.8883 11.1579 15.0409 11.1579 15.2V19.4C11.1579 19.5591 11.2244 19.7117 11.3429 19.8243C11.4613 19.9368 11.622 20 11.7895 20C11.957 20 12.1176 19.9368 12.2361 19.8243C12.3545 19.7117 12.4211 19.5591 12.4211 19.4V15.2ZM14.9474 15.8C15.1149 15.8 15.2755 15.8632 15.394 15.9757C15.5124 16.0883 15.5789 16.2409 15.5789 16.4V19.4C15.5789 19.5591 15.5124 19.7117 15.394 19.8243C15.2755 19.9368 15.1149 20 14.9474 20C14.7799 20 14.6192 19.9368 14.5008 19.8243C14.3823 19.7117 14.3158 19.5591 14.3158 19.4V16.4C14.3158 16.2409 14.3823 16.0883 14.5008 15.9757C14.6192 15.8632 14.7799 15.8 14.9474 15.8ZM18.7368 13.4C18.7368 13.2409 18.6703 13.0883 18.5519 12.9757C18.4334 12.8632 18.2728 12.8 18.1053 12.8C17.9378 12.8 17.7771 12.8632 17.6587 12.9757C17.5402 13.0883 17.4737 13.2409 17.4737 13.4V19.4C17.4737 19.5591 17.5402 19.7117 17.6587 19.8243C17.7771 19.9368 17.9378 20 18.1053 20C18.2728 20 18.4334 19.9368 18.5519 19.8243C18.6703 19.7117 18.7368 19.5591 18.7368 19.4V13.4Z'
                      fill='#3B84CF'
                    />
                  </svg>
                </div>
                <div className='ml-2'>Empowering Growth</div>
              </h5>
              <p>Propelling Your Sales to Empowering Growth.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[100vh] px-[100px] min-h-[1000px]'>
        <div className='grid grid-cols-12 gap-8 pt-[160px]'>
          <div className='col-span-6'>
            <h1 className='text-6xl font-bold mb-12'>Data Security</h1>
            <div className='mb-12'>
              <h5 className='text-xl flex items-center mb-2'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 28 28'
                    fill='none'>
                    <circle cx='14' cy='14' r='14' fill='#FDF2F2' />
                    <circle cx='14' cy='14' r='10' fill='#FFE9E9' />
                    <path
                      d='M15.4738 16.2015V15.062C15.4738 14.659 15.3185 14.2726 15.0421 13.9876C14.7658 13.7027 14.3909 13.5426 14.0001 13.5426C13.6092 13.5426 13.2344 13.7027 12.958 13.9876C12.6817 14.2726 12.5264 14.659 12.5264 15.062V16.2015C12.3311 16.2018 12.1438 16.282 12.0057 16.4244C11.8676 16.5668 11.7898 16.7598 11.7896 16.9612V19.2403C11.7898 19.4417 11.8676 19.6348 12.0057 19.7772C12.1438 19.9196 12.3311 19.9997 12.5264 20H15.4738C15.6691 19.9997 15.8563 19.9196 15.9945 19.7772C16.1326 19.6348 16.2103 19.4417 16.2106 19.2403V16.9612C16.2103 16.7598 16.1326 16.5668 15.9945 16.4244C15.8563 16.282 15.6691 16.2018 15.4738 16.2015ZM13.2632 15.062C13.2632 14.8605 13.3409 14.6673 13.4791 14.5248C13.6172 14.3823 13.8047 14.3023 14.0001 14.3023C14.1955 14.3023 14.3829 14.3823 14.5211 14.5248C14.6593 14.6673 14.7369 14.8605 14.7369 15.062V16.2015H13.2632V15.062ZM12.5264 19.2403V16.9612H15.4738L15.4741 19.2403H12.5264Z'
                      fill='#FC643E'
                    />
                    <path
                      d='M15.4738 16.2015V15.062C15.4738 14.659 15.3185 14.2726 15.0421 13.9876C14.7658 13.7027 14.3909 13.5426 14.0001 13.5426C13.6092 13.5426 13.2344 13.7027 12.958 13.9876C12.6817 14.2726 12.5264 14.659 12.5264 15.062V16.2015C12.3311 16.2018 12.1438 16.282 12.0057 16.4244C11.8676 16.5668 11.7898 16.7598 11.7896 16.9612V19.2403C11.7898 19.4417 11.8676 19.6348 12.0057 19.7772C12.1438 19.9196 12.3311 19.9997 12.5264 20H15.4738C15.6691 19.9997 15.8563 19.9196 15.9945 19.7772C16.1326 19.6348 16.2103 19.4417 16.2106 19.2403V16.9612C16.2103 16.7598 16.1326 16.5668 15.9945 16.4244C15.8563 16.282 15.6691 16.2018 15.4738 16.2015ZM13.2632 15.062C13.2632 14.8605 13.3409 14.6673 13.4791 14.5248C13.6172 14.3823 13.8047 14.3023 14.0001 14.3023C14.1955 14.3023 14.3829 14.3823 14.5211 14.5248C14.6593 14.6673 14.7369 14.8605 14.7369 15.062V16.2015H13.2632V15.062ZM12.5264 19.2403V16.9612H15.4738L15.4741 19.2403H12.5264Z'
                      stroke='#FC643E'
                    />
                    <path
                      d='M17.6862 11.1895C17.5442 10.4174 17.1846 9.70762 16.654 9.1518C16.1233 8.59597 15.4459 8.21963 14.7091 8.07134C14.2252 7.97337 13.7276 7.97633 13.2448 8.08004C12.7619 8.18376 12.3033 8.38619 11.8952 8.67578C11.487 8.96537 11.1373 9.33643 10.866 9.76775C10.5947 10.1991 10.4072 10.6822 10.3142 11.1895C9.62288 11.3202 9.00322 11.7171 8.57702 12.3024C8.15083 12.8876 7.94893 13.6189 8.01102 14.3522C8.07311 15.0856 8.39471 15.7681 8.91257 16.2656C9.43044 16.763 10.1071 17.0394 10.8095 17.0404H11.0004V16.2542H10.811C10.2961 16.2532 9.80012 16.0505 9.42055 15.6857C9.04097 15.321 8.80524 14.8206 8.75967 14.283C8.71409 13.7454 8.86196 13.2093 9.17422 12.7801C9.48649 12.3509 9.94058 12.0596 10.4473 11.9635L10.9535 11.8672L11.0507 11.3385C11.1826 10.62 11.5493 9.9721 12.0876 9.50618C12.6258 9.04025 13.3021 8.78539 14.0002 8.78539C14.6983 8.78539 15.3746 9.04025 15.9128 9.50618C16.4511 9.9721 16.8177 10.62 16.9497 11.3385L17.0468 11.8672L17.5527 11.9635C18.0593 12.0596 18.5132 12.3507 18.8255 12.7797C19.1378 13.2087 19.2858 13.7445 19.2404 14.282C19.1951 14.8195 18.9597 15.3198 18.5805 15.6847C18.2013 16.0496 17.7056 16.2528 17.1908 16.2542H17.0003V17.0404H17.1908C17.8932 17.0393 18.5698 16.7629 19.0876 16.2654C19.6054 15.7679 19.927 15.0854 19.989 14.352C20.051 13.6187 19.8491 12.8875 19.4229 12.3023C18.9967 11.7171 18.3771 11.3202 17.6858 11.1895'
                      fill='#FC643E'
                    />
                  </svg>
                </div>
                <div className='ml-2'>Private servers</div>
              </h5>
              <p>
                100% data security on private servers with 2-way encryption
                technology, keeping your information safe and confidential.
              </p>
            </div>
            <div className='mb-12'>
              <h5 className='text-xl flex items-center mb-2'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 28 28'
                    fill='none'>
                    <circle cx='14' cy='14' r='14' fill='#FCE8FD' />
                    <circle cx='14' cy='14' r='10' fill='#FEC7F9' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M13.532 7.08934C13.7951 6.98533 14.0825 6.97177 14.3533 7.0506L14.468 7.08934L19.1347 8.9386C19.3713 9.03236 19.5778 9.19525 19.7302 9.40828C19.8826 9.62132 19.9745 9.87572 19.9953 10.1419L20 10.2581V14.0362C20 15.1778 19.7083 16.2982 19.1557 17.2791C18.6032 18.26 17.8103 19.0651 16.8607 19.6094L16.6833 19.7073L14.4473 20.8887C14.3242 20.9537 14.1897 20.9911 14.0523 20.9986C13.9149 21.0061 13.7775 20.9836 13.6487 20.9324L13.5527 20.8887L11.3167 19.7073C10.3504 19.1967 9.53252 18.42 8.94934 17.459C8.36616 16.4981 8.03932 15.3885 8.00333 14.2476L8 14.0362V10.2581C8 9.99119 8.07175 9.72977 8.20689 9.50428C8.34203 9.27879 8.535 9.0985 8.76333 8.98439L8.86533 8.9386L13.532 7.08934ZM14 8.40883L9.33333 10.2581V14.0362C9.33335 14.9204 9.5583 15.7882 9.98464 16.549C10.411 17.3097 11.023 17.9353 11.7567 18.3603L11.9133 18.447L14 19.5495L16.0867 18.447C16.8352 18.0516 17.4693 17.4508 17.9226 16.7075C18.3759 15.9642 18.6317 15.1058 18.6633 14.2222L18.6667 14.0362V10.2581L14 8.40883ZM13.672 10.8379C13.8525 10.7665 14.0496 10.7559 14.236 10.8076L14.328 10.8379L16.1947 11.5776C16.3584 11.6425 16.5016 11.7547 16.6079 11.9014C16.7142 12.0482 16.7794 12.2235 16.796 12.4075L16.8 12.5012V14.0123C16.8 14.5359 16.6685 15.0502 16.4189 15.5025C16.1693 15.9549 15.8106 16.3292 15.3793 16.5871L15.2527 16.659L14.358 17.131C14.2611 17.1823 14.1553 17.2122 14.0472 17.219C13.939 17.2258 13.8306 17.2093 13.7287 17.1705L13.642 17.1317L12.748 16.659C12.3049 16.4248 11.9284 16.0706 11.6572 15.6325C11.3859 15.1944 11.2295 14.688 11.204 14.1651L11.2 14.0123V12.5012C11.2 12.3164 11.2492 12.1354 11.3418 11.9787C11.4344 11.822 11.5669 11.696 11.724 11.6149L11.8053 11.5776L13.672 10.8379ZM14 12.213L12.5333 12.7942V14.013C12.5334 14.2808 12.5992 14.544 12.7242 14.777C12.8492 15.01 13.0292 15.2048 13.2467 15.3423L13.344 15.3987L14 15.7453L14.656 15.3987C14.8829 15.2788 15.0764 15.0989 15.2178 14.8764C15.3592 14.6539 15.4436 14.3965 15.4627 14.1292L15.4667 14.0123V12.7942L14 12.213Z'
                      fill='#FF48DF'
                    />
                  </svg>
                </div>
                <div className='ml-2'>Commitment to safeguarding your data</div>
              </h5>
              <p>
                Commitment to safeguarding your data using cutting-edge
                encryption, guarantees the highest level of security for your
                peace of mind.
              </p>
            </div>
          </div>
          <div className='col-span-6 flex items-center justify-center h-full'>
            <Image src={'/banner3.svg'} width={578} height={578} alt='xd' />
          </div>
        </div>
      </div>
      <div
        className='w-full px-[100px] bg-[#F7F7F7] min-h-[1000px]'
        id='contact'>
        <Swiper
          className='mySwiper h-[100vh]'
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}>
          <SwiperSlide>
            <div className='px-24'>
              <div className=' text-center pt-[160px] pb-[60px]'>
                <h1 className='text-6xl font-bold text-center mb-6  w-[720px] m-auto text-wrap'>
                  The story of the people who choose
                  <span className='text-[#09A4DD]'>&nbsp;Onepage</span>
                </h1>
              </div>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-7 text-4xl font-semibold flex-col justify-between flex'>
                  <div>
                    &quot;Since using Onepage, there is no longer a &quot;The
                    more you scale up, the more you lose &quot;,{' '}
                    <span className='bg-gradient-to-r from-[#76FFAD]  to-[#148CDE] inline-block text-transparent bg-clip-text'>
                      the conversion rate is stable
                    </span>
                    , especially at large revenue scale”
                  </div>
                  <div className='pb-12'>
                    <span className='font-bold'>Alain K -</span>{' '}
                    <i className='font-light'>Zcomify</i>
                  </div>
                </div>
                <div className='col-span-5 flex items-center justify-center'>
                  <Image src={'/swiper1.svg'} alt='' width={370} height={475} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='px-24'>
              <div className=' text-center pt-[160px] pb-[60px]'>
                <h1 className='text-6xl font-bold text-center mb-6  w-[720px] m-auto text-wrap'>
                  The story of the people who choose
                  <span className='text-[#09A4DD]'>&nbsp;Onepage</span>
                </h1>
              </div>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-7 text-4xl font-semibold flex-col justify-between flex'>
                  <div>
                    &quot;I choose Onepage because even when my conversion rates
                    are optimized, the product runs longer, but we still have
                    &quot;,{' '}
                    <span className='bg-gradient-to-r from-[#76FFAD]  to-[#148CDE] inline-block text-transparent bg-clip-text'>
                      full platform independence.
                    </span>
                  </div>
                  <div className='pb-12'>
                    <span className='font-bold'>Nam Nguyen -</span>{' '}
                    <i className='font-light'>Best4Sale</i>
                  </div>
                </div>
                <div className='col-span-5 flex items-center justify-center'>
                  <Image src={'/swiper2.svg'} alt='' width={370} height={475} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='px-24'>
              <div className=' text-center pt-[160px] pb-[60px]'>
                <h1 className='text-6xl font-bold text-center mb-6  w-[720px] m-auto text-wrap'>
                  The story of the people who choose
                  <span className='text-[#09A4DD]'>&nbsp;Onepage</span>
                </h1>
              </div>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-7 text-4xl font-semibold flex-col justify-between flex'>
                  <div>
                    &quot;Since using Onepage, we are free to
                    <span className='bg-gradient-to-r from-[#76FFAD]  to-[#148CDE] inline-block text-transparent bg-clip-text'>
                      choose a fulfillment partner
                    </span>
                    &nbsp;or a
                    <span className='bg-gradient-to-r from-[#76FFAD]  to-[#148CDE] inline-block text-transparent bg-clip-text'>
                      payment gateway partner,
                    </span>
                    business operations are much more convenient. &quot;
                  </div>
                  <div className='pb-12'>
                    <span className='font-bold'>Jessica P -</span>
                    <i className='font-light'>Piddy</i>
                  </div>
                </div>
                <div className='col-span-5 flex items-center justify-center'>
                  <Image src={'/swiper3.svg'} alt='' width={370} height={475} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='px-[260px] min-h-[1000px]' id='pricing'>
        {/* h-[100vh] */}
        <div className=' text-center pt-[75px] pb-[36px]'>
          <h1 className='text-6xl font-bold text-center mb-6 m-auto text-wrap'>
            Simple pricing, pay as you earn
          </h1>
        </div>
        <div className='grid grid-cols-12 gap-12'>
          <div className='col-span-6 rounded border border-[#E3E2E2] p-8 flex flex-col justify-between'>
            <div>
              <div className='text-center text-4xl text-[#016EB9] font-semibold mb-4'>
                <div>Basic</div>
                <div>0.5% Revenue</div>
              </div>
              <ul>
                <li>Unlimited number of sellers</li>
                <li>Unlimited number of websites</li>
                <li>
                  Optimal order processing tool for cross border ecommerce, easy
                  to operate thousands of orders/day
                </li>
                <li>Highest conversion rate</li>
                <li>Be proactively fulfilled with your own supplier</li>
                <li>
                  Take the initiative to build a payment gateway by yourself,
                  have the full right to develop business according to the
                  direction of the enterprise
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <button className='bg-[#0AA5DE] text-white hover:scale-105 duration-75 outline-none py-4 px-5 rounded ml-4 active:scale-95'>
                CONTACT NOW
              </button>
            </div>
          </div>
          <div className='col-span-6 rounded border border-[#E3E2E2] p-8 flex flex-col justify-between '>
            <div>
              <div className='text-center text-4xl text-[#016EB9] font-semibold mb-4'>
                <div>Advance</div>
                <div>0.7% Revenue</div>
              </div>
              <ul>
                <li>Unlimited number of sellers</li>
                <li>Unlimited number of websites</li>
                <li>
                  Optimal order processing tool for cross border ecommerce, easy
                  to operate thousands of orders/day
                </li>
                <li>Highest conversion rate</li>
                <li>Be proactively fulfilled with your own supplier</li>
                <li>
                  Take the initiative to build a payment gateway by yourself,
                  have the full right to develop business according to the
                  direction of the enterprise
                </li>
                <li>Prioritize updating features on demand</li>
              </ul>
            </div>
            <div className='text-center mt-8'>
              <button className='bg-[#0AA5DE] text-white hover:scale-105 duration-75 outline-none py-4 px-5 rounded ml-4 active:scale-95'>
                CONTACT NOW
              </button>
            </div>
          </div>
        </div>
        <div className='w-[70%] mx-auto my-8 bg-[#F0F0F0] p-8 rounded'>
          <h1 className='text-[#252525] text-4xl font-semibold text-center mb-4 w-[70%] m-auto'>
            Optional - Smart Abandoned Cart Recovery System Fee 0.8$/ Successful
            Abandoned Order
          </h1>
          <ul className='w-[70%] m-auto'>
            <li>
              Unlock lost sales with our Smart Abandoned Cart Recovery System
            </li>
            <li>
              Seamlessly engage shoppers with personalized reminders,
              irresistible offers, and a user-friendly interface
            </li>
            <li>Maximize conversions and revenue effortlessly</li>
          </ul>
          <div className='text-center mt-4'>
            <button className='bg-white text-[#0AA5DE] hover:scale-105 duration-75 active:scale-95 outline-none py-4 px-5 rounded ml-4 '>
              CONTACT NOW
            </button>
          </div>
        </div>
      </div>
      <div className='h-[100vh] px-[260px] min-h-[1000px]' id='faq'>
        <div className='w-[70%] m-auto mb-[90px]'>
          <h1 className='mt-[80px] text-[#09A4DD] text-center text-4xl mb-4'>
            Frequently asked questions
          </h1>
          <p className='font-semibold text-center text-xl'>
            Please email our support team if you have any questions about
            <span className='text-[#09A4DD]'> Onepage Commerce </span>services
          </p>
        </div>
        <div>
          <div className='flex mb-3'>
            <div className='mr-8 min-w-[52px] h-[52px]'>
              <Image src={'/answer.svg'} width={52} height={52} alt='' />
            </div>
            <div>
              <h6 className=' text-lg font-bold'>
                What is it like to have your own sales platform with your brand?
              </h6>
              <hr className='my-3' />
              <p>
                The service is for businesses that want to build their own
                platform with completely separate domain names and technical
                infrastructure. Businesses no longer worry about lag, system
                errors... increase conversion rate when doing business with
                large revenue scale.
              </p>
            </div>
          </div>
          <div className='flex mb-3'>
            <div className='mr-8 min-w-[52px] h-[52px]'>
              <Image src={'/answer.svg'} width={52} height={52} alt='' />
            </div>
            <div>
              <h6 className=' text-lg font-bold'>
                I am a business providing fulfillment services for merchants,
                can I use Onepage?
              </h6>
              <hr className='my-3' />
              <p>
                Onepage provides solutions for businesses to provide fulfillment
                services for thousands of sellers.
              </p>
            </div>
          </div>
          <div className='flex mb-3'>
            <div className='mr-8 min-w-[52px] h-[52px]'>
              <Image src={'/answer.svg'} width={52} height={52} alt='' />
            </div>
            <div>
              <h6 className=' text-lg font-bold'>
                I just want to sell, will Onepage provide full service of
                back-sales operation?
              </h6>
              <hr className='my-3' />
              <p>
                Onepage does not do fulfillment, but we can help you connect
                directly with Chinese partners to process orders, optimize costs
                and increase profits for your business.
              </p>
            </div>
          </div>
          <div className='flex mb-3'>
            <div className='mr-8 min-w-[52px] h-[52px]'>
              <Image src={'/answer.svg'} width={52} height={52} alt='' />
            </div>
            <div>
              <h6 className=' text-lg font-bold'>
                Why does Onepage only do technology, not services like
                fulfillment or payment gateway?
              </h6>
              <hr className='my-3' />
              <p>
                Going up from the community, developing for the community, we
                want to focus on developing our core values of technology, best
                supporting business teams and teams. We want to help partners
                develop and own their own platform.
              </p>
            </div>
          </div>
          <div className='flex mb-3'>
            <div className='mr-8 min-w-[52px] h-[52px]'>
              <Image src={'/answer.svg'} width={52} height={52} alt='' />
            </div>
            <div>
              <h6 className=' text-lg font-bold'>
                I don't have a payment gateway to sell, does Onepage have a
                service to provide a payment gateway for merchants?
              </h6>
              <hr className='my-3' />
              <p>
                Onepage does not provide payment gateway services. However,
                currently, Onepage is a strategic partner of many major payment
                gateways in the market, we can help you own stable and genuine
                payment gateways so you can sell with peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
}

const iconDola = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'>
    <path
      d='M22 18H30C30.5304 18 31.0392 17.7893 31.4142 17.4142C31.7893 17.0391 32 16.5304 32 16C32 15.4696 31.7893 14.9609 31.4142 14.5858C31.0392 14.2107 30.5304 14 30 14H26V12C26 11.4696 25.7893 10.9609 25.4142 10.5858C25.0392 10.2107 24.5304 10 24 10C23.4696 10 22.9609 10.2107 22.5858 10.5858C22.2107 10.9609 22 11.4696 22 12V14C20.4087 14 18.8826 14.6321 17.7574 15.7574C16.6321 16.8826 16 18.4087 16 20C16 21.5913 16.6321 23.1174 17.7574 24.2426C18.8826 25.3679 20.4087 26 22 26H26C26.5304 26 27.0392 26.2107 27.4142 26.5858C27.7893 26.9609 28 27.4696 28 28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0392 29.7893 26.5304 30 26 30H18C17.4696 30 16.9609 30.2107 16.5858 30.5858C16.2107 30.9609 16 31.4696 16 32C16 32.5304 16.2107 33.0391 16.5858 33.4142C16.9609 33.7893 17.4696 34 18 34H22V36C22 36.5304 22.2107 37.0391 22.5858 37.4142C22.9609 37.7893 23.4696 38 24 38C24.5304 38 25.0392 37.7893 25.4142 37.4142C25.7893 37.0391 26 36.5304 26 36V34C27.5913 34 29.1174 33.3679 30.2427 32.2426C31.3679 31.1174 32 29.5913 32 28C32 26.4087 31.3679 24.8826 30.2427 23.7574C29.1174 22.6321 27.5913 22 26 22H22C21.4696 22 20.9609 21.7893 20.5858 21.4142C20.2107 21.0391 20 20.5304 20 20C20 19.4696 20.2107 18.9609 20.5858 18.5858C20.9609 18.2107 21.4696 18 22 18ZM24 2C19.6488 2 15.3953 3.29028 11.7775 5.70767C8.15958 8.12506 5.33979 11.561 3.67466 15.581C2.00953 19.6009 1.57386 24.0244 2.42273 28.292C3.27161 32.5596 5.36691 36.4796 8.44366 39.5564C11.5204 42.6331 15.4404 44.7284 19.708 45.5773C23.9756 46.4261 28.3991 45.9905 32.419 44.3253C36.439 42.6602 39.875 39.8404 42.2923 36.2225C44.7097 32.6047 46 28.3512 46 24C46 18.1652 43.6822 12.5695 39.5564 8.44365C35.4306 4.31785 29.8348 2 24 2ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34586C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z'
      fill='#424242'
    />
  </svg>
);

const iconWallet = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'>
    <path
      d='M20 10C19.6044 10 19.2178 10.1173 18.8889 10.3371C18.56 10.5568 18.3036 10.8692 18.1522 11.2346C18.0009 11.6001 17.9613 12.0022 18.0384 12.3902C18.1156 12.7781 18.3061 13.1345 18.5858 13.4142C18.8655 13.6939 19.2219 13.8844 19.6098 13.9616C19.9978 14.0387 20.3999 13.9991 20.7654 13.8478C21.1308 13.6964 21.4432 13.44 21.6629 13.1111C21.8827 12.7822 22 12.3956 22 12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10ZM12 10C11.6044 10 11.2178 10.1173 10.8889 10.3371C10.56 10.5568 10.3036 10.8692 10.1522 11.2346C10.0009 11.6001 9.96126 12.0022 10.0384 12.3902C10.1156 12.7781 10.3061 13.1345 10.5858 13.4142C10.8655 13.6939 11.2219 13.8844 11.6098 13.9616C11.9978 14.0387 12.3999 13.9991 12.7654 13.8478C13.1308 13.6964 13.4432 13.44 13.6629 13.1111C13.8827 12.7822 14 12.3956 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM28 10C27.6044 10 27.2178 10.1173 26.8889 10.3371C26.56 10.5568 26.3036 10.8692 26.1522 11.2346C26.0009 11.6001 25.9613 12.0022 26.0384 12.3902C26.1156 12.7781 26.3061 13.1345 26.5858 13.4142C26.8655 13.6939 27.2219 13.8844 27.6098 13.9616C27.9978 14.0387 28.3999 13.9991 28.7654 13.8478C29.1308 13.6964 29.4432 13.44 29.6629 13.1111C29.8827 12.7822 30 12.3956 30 12C30 11.4696 29.7893 10.9609 29.4142 10.5858C29.0391 10.2107 28.5304 10 28 10ZM40 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8V40C2 41.5913 2.63214 43.1174 3.75736 44.2426C4.88258 45.3679 6.4087 46 8 46H40C41.5913 46 43.1174 45.3679 44.2426 44.2426C45.3679 43.1174 46 41.5913 46 40V8C46 6.4087 45.3679 4.88258 44.2426 3.75736C43.1174 2.63214 41.5913 2 40 2ZM42 40C42 40.5304 41.7893 41.0391 41.4142 41.4142C41.0391 41.7893 40.5304 42 40 42H8C7.46957 42 6.96086 41.7893 6.58579 41.4142C6.21071 41.0391 6 40.5304 6 40V22H42V40ZM42 18H6V8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6H40C40.5304 6 41.0391 6.21071 41.4142 6.58579C41.7893 6.96086 42 7.46957 42 8V18Z'
      fill='#424242'
    />
  </svg>
);
const iConUs = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'>
    <path
      d='M24.6 24.44C25.6672 23.5163 26.5231 22.3738 27.1097 21.09C27.6964 19.8063 28 18.4114 28 17C28 14.3478 26.9464 11.8043 25.0711 9.92893C23.1957 8.05357 20.6522 7 18 7C15.3478 7 12.8043 8.05357 10.9289 9.92893C9.05357 11.8043 8 14.3478 8 17C7.99998 18.4114 8.3036 19.8063 8.89025 21.09C9.4769 22.3738 10.3328 23.5163 11.4 24.44C8.60028 25.7078 6.22493 27.7551 4.55796 30.3371C2.89099 32.9191 2.00294 35.9266 2 39C2 39.5304 2.21071 40.0391 2.58579 40.4142C2.96086 40.7893 3.46957 41 4 41C4.53043 41 5.03914 40.7893 5.41421 40.4142C5.78929 40.0391 6 39.5304 6 39C6 35.8174 7.26428 32.7652 9.51472 30.5147C11.7652 28.2643 14.8174 27 18 27C21.1826 27 24.2348 28.2643 26.4853 30.5147C28.7357 32.7652 30 35.8174 30 39C30 39.5304 30.2107 40.0391 30.5858 40.4142C30.9609 40.7893 31.4696 41 32 41C32.5304 41 33.0391 40.7893 33.4142 40.4142C33.7893 40.0391 34 39.5304 34 39C33.9971 35.9266 33.109 32.9191 31.442 30.3371C29.7751 27.7551 27.3997 25.7078 24.6 24.44ZM18 23C16.8133 23 15.6533 22.6481 14.6666 21.9888C13.6799 21.3295 12.9108 20.3925 12.4567 19.2961C12.0026 18.1997 11.8838 16.9933 12.1153 15.8295C12.3468 14.6656 12.9182 13.5965 13.7574 12.7574C14.5965 11.9182 15.6656 11.3468 16.8295 11.1153C17.9933 10.8838 19.1997 11.0026 20.2961 11.4567C21.3925 11.9108 22.3295 12.6799 22.9888 13.6666C23.6481 14.6533 24 15.8133 24 17C24 18.5913 23.3679 20.1174 22.2426 21.2426C21.1174 22.3679 19.5913 23 18 23ZM37.48 23.64C38.7599 22.1987 39.596 20.4181 39.8876 18.5127C40.1792 16.6072 39.9139 14.6581 39.1235 12.9C38.3332 11.1419 37.0516 9.64959 35.4329 8.60285C33.8143 7.5561 31.9276 6.99948 30 7C29.4696 7 28.9609 7.21071 28.5858 7.58579C28.2107 7.96086 28 8.46957 28 9C28 9.53043 28.2107 10.0391 28.5858 10.4142C28.9609 10.7893 29.4696 11 30 11C31.5913 11 33.1174 11.6321 34.2426 12.7574C35.3679 13.8826 36 15.4087 36 17C35.9972 18.0505 35.7186 19.0818 35.1921 19.9908C34.6657 20.8999 33.9097 21.6548 33 22.18C32.7035 22.351 32.4558 22.5953 32.2807 22.8895C32.1056 23.1836 32.009 23.5178 32 23.86C31.9916 24.1995 32.0699 24.5356 32.2273 24.8365C32.3848 25.1374 32.6163 25.3933 32.9 25.58L33.68 26.1L33.94 26.24C36.3508 27.3834 38.3846 29.192 39.802 31.4526C41.2193 33.7133 41.9611 36.3319 41.94 39C41.94 39.5304 42.1507 40.0391 42.5258 40.4142C42.9009 40.7893 43.4096 41 43.94 41C44.4704 41 44.9791 40.7893 45.3542 40.4142C45.7293 40.0391 45.94 39.5304 45.94 39C45.9563 35.9309 45.1876 32.9085 43.7069 30.2201C42.2262 27.5317 40.0827 25.2666 37.48 23.64Z'
      fill='#424242'
    />
  </svg>
);

const iconLight = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'>
    <circle cx='14' cy='14' r='14' fill='#F4F2FD' />
    <circle cx='14' cy='14' r='10' fill='#EFE9FF' />
    <path
      d='M15.2053 14.8314C14.8745 15.2086 14.4716 15.5172 14.0182 15.7409V17.0266C14.0182 17.1402 13.973 17.2493 13.8926 17.3296C13.8123 17.41 13.7033 17.4552 13.5896 17.4552H11.0182C10.9045 17.4552 10.7955 17.41 10.7151 17.3296C10.6348 17.2493 10.5896 17.1402 10.5896 17.0266V15.7409C9.68647 15.2901 8.99604 14.5032 8.66647 13.5491C8.3369 12.5951 8.39446 11.5498 8.82679 10.6377C9.25912 9.72559 10.0318 9.01929 10.9789 8.67038C11.9261 8.32147 12.9723 8.35775 13.893 8.77144M10.5896 19.5714H14.0182'
      stroke='#6420F2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14.3389 11.3721C14.0381 11.3198 14.0381 10.8878 14.3389 10.8355C14.8716 10.7428 15.3646 10.4936 15.7551 10.1196C16.1456 9.74556 16.4159 9.26374 16.5315 8.73553L16.5495 8.65153C16.6146 8.3541 17.0381 8.35239 17.1058 8.64896L17.1281 8.74581C17.2481 9.27163 17.5208 9.75026 17.912 10.1216C18.3031 10.4929 18.7953 10.7404 19.3266 10.833C19.6292 10.8861 19.6292 11.3198 19.3266 11.373C18.7955 11.4657 18.3035 11.7132 17.9125 12.0845C17.5215 12.4559 17.2489 12.9344 17.1289 13.4601L17.1066 13.557C17.0389 13.8535 16.6155 13.8518 16.5504 13.5544L16.5332 13.4712C16.4175 12.9428 16.147 12.4608 15.7562 12.0868C15.3653 11.7128 14.8719 11.4645 14.3389 11.3721Z'
      stroke='#6420F2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);
const iconText = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'>
    <circle cx='14' cy='14' r='14' fill='#E8FDFD' />
    <circle cx='14' cy='14' r='10' fill='#C7FBFE' />
    <path
      d='M15.8 17C15.6813 17 15.5653 17.0352 15.4667 17.1011C15.368 17.167 15.2911 17.2608 15.2457 17.3704C15.2003 17.48 15.1884 17.6007 15.2115 17.7171C15.2347 17.8334 15.2918 17.9404 15.3757 18.0243C15.4596 18.1082 15.5666 18.1653 15.6829 18.1885C15.7993 18.2116 15.92 18.1997 16.0296 18.1543C16.1392 18.1089 16.233 18.032 16.2989 17.9333C16.3648 17.8347 16.4 17.7187 16.4 17.6C16.4 17.4409 16.3368 17.2883 16.2243 17.1757C16.1117 17.0632 15.9591 17 15.8 17ZM12.2 17H10.4C10.2409 17 10.0883 17.0632 9.97574 17.1757C9.86321 17.2883 9.8 17.4409 9.8 17.6C9.8 17.7591 9.86321 17.9117 9.97574 18.0243C10.0883 18.1368 10.2409 18.2 10.4 18.2H12.2C12.3591 18.2 12.5117 18.1368 12.6243 18.0243C12.7368 17.9117 12.8 17.7591 12.8 17.6C12.8 17.4409 12.7368 17.2883 12.6243 17.1757C12.5117 17.0632 12.3591 17 12.2 17ZM17.6 17C17.4813 17 17.3653 17.0352 17.2667 17.1011C17.168 17.167 17.0911 17.2608 17.0457 17.3704C17.0003 17.48 16.9884 17.6007 17.0115 17.7171C17.0347 17.8334 17.0918 17.9404 17.1757 18.0243C17.2596 18.1082 17.3666 18.1653 17.4829 18.1885C17.5993 18.2116 17.72 18.1997 17.8296 18.1543C17.9392 18.1089 18.033 18.032 18.0989 17.9333C18.1648 17.8347 18.2 17.7187 18.2 17.6C18.2 17.4409 18.1368 17.2883 18.0243 17.1757C17.9117 17.0632 17.7591 17 17.6 17ZM15.8 13.4C15.6813 13.4 15.5653 13.4352 15.4667 13.5011C15.368 13.567 15.2911 13.6608 15.2457 13.7704C15.2003 13.88 15.1884 14.0007 15.2115 14.1171C15.2347 14.2334 15.2918 14.3404 15.3757 14.4243C15.4596 14.5082 15.5666 14.5653 15.6829 14.5885C15.7993 14.6116 15.92 14.5997 16.0296 14.5543C16.1392 14.5089 16.233 14.432 16.2989 14.3333C16.3648 14.2347 16.4 14.1187 16.4 14C16.4 13.8409 16.3368 13.6883 16.2243 13.5757C16.1117 13.4632 15.9591 13.4 15.8 13.4ZM12.2 13.4H10.4C10.2409 13.4 10.0883 13.4632 9.97574 13.5757C9.86321 13.6883 9.8 13.8409 9.8 14C9.8 14.1591 9.86321 14.3117 9.97574 14.4243C10.0883 14.5368 10.2409 14.6 10.4 14.6H12.2C12.3591 14.6 12.5117 14.5368 12.6243 14.4243C12.7368 14.3117 12.8 14.1591 12.8 14C12.8 13.8409 12.7368 13.6883 12.6243 13.5757C12.5117 13.4632 12.3591 13.4 12.2 13.4ZM17.6 9.8C17.4813 9.8 17.3653 9.83519 17.2667 9.90112C17.168 9.96705 17.0911 10.0608 17.0457 10.1704C17.0003 10.28 16.9884 10.4007 17.0115 10.5171C17.0347 10.6334 17.0918 10.7404 17.1757 10.8243C17.2596 10.9082 17.3666 10.9653 17.4829 10.9885C17.5993 11.0116 17.72 10.9997 17.8296 10.9543C17.9392 10.9089 18.033 10.832 18.0989 10.7333C18.1648 10.6347 18.2 10.5187 18.2 10.4C18.2 10.2409 18.1368 10.0883 18.0243 9.97574C17.9117 9.86321 17.7591 9.8 17.6 9.8ZM17.6 13.4C17.4813 13.4 17.3653 13.4352 17.2667 13.5011C17.168 13.567 17.0911 13.6608 17.0457 13.7704C17.0003 13.88 16.9884 14.0007 17.0115 14.1171C17.0347 14.2334 17.0918 14.3404 17.1757 14.4243C17.2596 14.5082 17.3666 14.5653 17.4829 14.5885C17.5993 14.6116 17.72 14.5997 17.8296 14.5543C17.9392 14.5089 18.033 14.432 18.0989 14.3333C18.1648 14.2347 18.2 14.1187 18.2 14C18.2 13.8409 18.1368 13.6883 18.0243 13.5757C17.9117 13.4632 17.7591 13.4 17.6 13.4ZM20 9.8C20 9.32261 19.8104 8.86477 19.4728 8.52721C19.1352 8.18964 18.6774 8 18.2 8H9.8C9.32261 8 8.86477 8.18964 8.52721 8.52721C8.18964 8.86477 8 9.32261 8 9.8V11C8.00265 11.444 8.16933 11.8714 8.468 12.2C8.16933 12.5286 8.00265 12.956 8 13.4V14.6C8.00265 15.044 8.16933 15.4714 8.468 15.8C8.16933 16.1286 8.00265 16.556 8 17V18.2C8 18.6774 8.18964 19.1352 8.52721 19.4728C8.86477 19.8104 9.32261 20 9.8 20H18.2C18.6774 20 19.1352 19.8104 19.4728 19.4728C19.8104 19.1352 20 18.6774 20 18.2V17C19.9974 16.556 19.8307 16.1286 19.532 15.8C19.8307 15.4714 19.9974 15.044 20 14.6V13.4C19.9974 12.956 19.8307 12.5286 19.532 12.2C19.8307 11.8714 19.9974 11.444 20 11V9.8ZM18.8 18.2C18.8 18.3591 18.7368 18.5117 18.6243 18.6243C18.5117 18.7368 18.3591 18.8 18.2 18.8H9.8C9.64087 18.8 9.48826 18.7368 9.37574 18.6243C9.26321 18.5117 9.2 18.3591 9.2 18.2V17C9.2 16.8409 9.26321 16.6883 9.37574 16.5757C9.48826 16.4632 9.64087 16.4 9.8 16.4H18.2C18.3591 16.4 18.5117 16.4632 18.6243 16.5757C18.7368 16.6883 18.8 16.8409 18.8 17V18.2ZM18.8 14.6C18.8 14.7591 18.7368 14.9117 18.6243 15.0243C18.5117 15.1368 18.3591 15.2 18.2 15.2H9.8C9.64087 15.2 9.48826 15.1368 9.37574 15.0243C9.26321 14.9117 9.2 14.7591 9.2 14.6V13.4C9.2 13.2409 9.26321 13.0883 9.37574 12.9757C9.48826 12.8632 9.64087 12.8 9.8 12.8H18.2C18.3591 12.8 18.5117 12.8632 18.6243 12.9757C18.7368 13.0883 18.8 13.2409 18.8 13.4V14.6ZM18.8 11C18.8 11.1591 18.7368 11.3117 18.6243 11.4243C18.5117 11.5368 18.3591 11.6 18.2 11.6H9.8C9.64087 11.6 9.48826 11.5368 9.37574 11.4243C9.26321 11.3117 9.2 11.1591 9.2 11V9.8C9.2 9.64087 9.26321 9.48826 9.37574 9.37574C9.48826 9.26321 9.64087 9.2 9.8 9.2H18.2C18.3591 9.2 18.5117 9.26321 18.6243 9.37574C18.7368 9.48826 18.8 9.64087 18.8 9.8V11ZM15.8 9.8C15.6813 9.8 15.5653 9.83519 15.4667 9.90112C15.368 9.96705 15.2911 10.0608 15.2457 10.1704C15.2003 10.28 15.1884 10.4007 15.2115 10.5171C15.2347 10.6334 15.2918 10.7404 15.3757 10.8243C15.4596 10.9082 15.5666 10.9653 15.6829 10.9885C15.7993 11.0116 15.92 10.9997 16.0296 10.9543C16.1392 10.9089 16.233 10.832 16.2989 10.7333C16.3648 10.6347 16.4 10.5187 16.4 10.4C16.4 10.2409 16.3368 10.0883 16.2243 9.97574C16.1117 9.86321 15.9591 9.8 15.8 9.8ZM12.2 9.8H10.4C10.2409 9.8 10.0883 9.86321 9.97574 9.97574C9.86321 10.0883 9.8 10.2409 9.8 10.4C9.8 10.5591 9.86321 10.7117 9.97574 10.8243C10.0883 10.9368 10.2409 11 10.4 11H12.2C12.3591 11 12.5117 10.9368 12.6243 10.8243C12.7368 10.7117 12.8 10.5591 12.8 10.4C12.8 10.2409 12.7368 10.0883 12.6243 9.97574C12.5117 9.86321 12.3591 9.8 12.2 9.8Z'
      fill='#1FC0DF'
    />
  </svg>
);
const iconThing = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'>
    <circle cx='14' cy='14' r='14' fill='#FDE8FD' />
    <circle cx='14' cy='14' r='10' fill='#FEC7F6' />
    <path
      d='M12.178 10.5H11.505L10.5 14.5H11.014L11.246 13.5625H12.404L12.63 14.5H13.161L12.178 10.5ZM11.3135 13.161L11.822 10.975H11.8445L12.3365 13.1615L11.3135 13.161ZM13.619 14.5V10.5H14.119V14.5H13.619ZM13.7125 15H10V10H15V12.39C15.5918 12.0078 16.3076 11.8672 17 11.997V11H16V10C15.9992 9.73503 15.8936 9.48113 15.7062 9.29377C15.5189 9.1064 15.265 9.00079 15 9H14V8H13V9H12V8H11V9H10C9.73503 9.00079 9.48113 9.1064 9.29377 9.29377C9.1064 9.48113 9.00079 9.73503 9 10V11H8V12H9V13H8V14H9V15C9.00079 15.265 9.1064 15.5189 9.29377 15.7062C9.48113 15.8936 9.73503 15.9992 10 16H11V17H12V16H13V17H14V16.004C13.8415 15.6906 13.7439 15.3499 13.7125 15ZM14.75 14.75C14.75 14.4039 14.8526 14.0655 15.0449 13.7778C15.2372 13.49 15.5105 13.2657 15.8303 13.1332C16.1501 13.0008 16.5019 12.9661 16.8414 13.0336C17.1809 13.1011 17.4927 13.2678 17.7374 13.5126C17.9822 13.7573 18.1489 14.0691 18.2164 14.4086C18.2839 14.7481 18.2492 15.0999 18.1168 15.4197C17.9843 15.7395 17.76 16.0128 17.4722 16.2051C17.1845 16.3974 16.8461 16.5 16.5 16.5C16.2702 16.5001 16.0426 16.4548 15.8302 16.3669C15.6179 16.279 15.4249 16.1501 15.2624 15.9876C15.0999 15.8251 14.971 15.6321 14.8831 15.4198C14.7952 15.2074 14.7499 14.9798 14.75 14.75ZM16.5 17.5C15.332 17.5 13 18.0865 13 19.25V20H20V19.25C20 18.086 17.668 17.5 16.5 17.5Z'
      fill='#FB46E6'
    />
  </svg>
);
