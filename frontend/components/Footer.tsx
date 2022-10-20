import Link from 'next/link'

export default function Footer() {
  return (
    <>
        <div className='flex items-start max-w-full max-h-full  lg:h-40 xl:h-50 md:h-1/4'>
        <footer className='w-full body-font '>
          <div
            className='container flex flex-col flex-wrap px-8 py-10  mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap'>
            <div className='flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left'>
              <p className='flex items-center justify-center font-bold text-gray-100 title-font md:justify-start hover:text-orange-400'>
                Surya Tirta Chandra
              </p>
              <p className="mt-1 text-sm font-bold text-gray-100">anda butuh ayam?</p>
            </div>
            <div className='flex flex-wrap flex-grow text-center lg:-mb-10 md:mt-0'>
              <div className='w-full px-4 mt-4 lg:w-1/4 md:w-1/4'>
                <p className='font-bold text-gray-100 cursor-pointer hover:text-orange-400'>Chat saya dong !!</p>
              </div>
              <div className='w-full px-4 mt-4 lg:w-1/4 md:w-1/4'>
                <p className='font-bold text-gray-100 cursor-pointer hover:text-orange-400'>Servis ?</p>
              </div>
              <div className='w-full px-4 mt-4 lg:w-1/4 md:w-1/4'>
                <p className='font-bold text-gray-100 cursor-pointer hover:text-orange-400'>Sosial Media Saya  &rarr; </p>
              </div>
              <div className='w-full px-4 lg:w-1/4 md:w-1/4 lg:text-right'>
                <div className='mt-4 text-gray-100 cursor-pointer hover:text-gray-700'>
                  <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
                    <div className='w-5 h-5 mr-5'>
                      <Link href="https://www.facebook.com/suryatirta.chandra/" >
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </Link>
                    </div>
                    <div className='w-5 h-5 mr-5'>
                      <Link href="https://twitter.com/suryach38382731" >
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          viewBox="0 0 24 24">
                          <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                          </path>
                        </svg>
                      </Link>
                    </div>
                    <div className='w-5 h-5 mr-5'>
                      <Link href="https://www.instagram.com/cullya_/" >
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2" viewBox="0 0 24 24">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </Link>
                    </div>
                    <div className='w-5 h-5 mr-5 '>
                      <Link href="https://www.linkedin.com/in/surya-tirta-chandra-04451723b/" >
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"
                          strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24">
                          <path stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                          </path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </Link>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
</>
  );
}