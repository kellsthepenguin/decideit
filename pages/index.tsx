import type { NextPage } from 'next'
import Option from '../components/Option'

const Home: NextPage = () => {
  return (
    <div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
      <p className='text-xl'>선택지</p>
      <div className='relative flex gap-8 w-[50vw] overflow-auto'>
        <Option option={{ name: 'aaasaddffqqf', color: '#FF6974'}} />
        <Option option={{ name: 'aaasaddffqqf', color: '#FF6974'}} />
        <Option option={{ name: 'aaasaddffqqf', color: '#FF6974'}} />
        <Option option={{ name: 'aaasaddffqqf', color: '#FF6974'}} />
        <Option option={{ name: 'aaasaddffqqf', color: '#FF6974'}} />
        <Option option={{ name: 'aaasaddffqqf', color: '#FF6974'}} />
        <Option option={{ name: 'aaasaddffqqf', color: '#FF6974'}} />
      </div>
    </div>
  )
}

export default Home
