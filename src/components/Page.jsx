import Header from './Header'
import Context from './Content'
import Footer from './Footer'

const  Page = () => {
  return (
    <div className='page'>
      <Header/>
      <Context/>
      <Footer/>
    </div>
  )
}

export default Page