import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading } from '../../components'
// import React from "react"
// import raw from '../../script/test.txt';
import Wrapper from '../../assets/wrappers/DashboardFormPage'
// import * as child from 'child_process'


// const clickHandler = () => {
//   fetch(raw)
//       .then(t => t.text()).then(text => {
//           console.log('you text', text)
//       })
// }


const Stats = () => {
  const { showStats, isLoading } = useAppContext()

  // useEffect(() => {
  //   showStats()
  //   // eslint-disable-next-line
  // }, [])
  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
      <StatsContainer />
      {/* { <ChartsContainer />} */}
      {/* <Wrapper>
         <div className='form-center'>
      <button
              type='submit'
              className='btn btn-block submit-btn'
              // onClick={child.exec(ls)}
              // onClick={handleSubmit}
              // disabled={isLoading}
            >
              Start
            </button>
    </div></Wrapper> */}
     
    </>
  )
}

export default Stats
