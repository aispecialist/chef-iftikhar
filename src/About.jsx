import React from 'react'

const About = () => {
  return (
    <div className='container rounded  my-4 p-3 bg-dark'>
      <h1 className=' m-2 p-3 rounded text-secondary gTitlefont bg-dark'>ABOUT ME</h1>
      <div className=' m-2 fw-bold rounded  p-1 gSubfont text-white text-wrap bg-info'><p className=' m-2 p-3 fs-3 text-white text-uppercase bg-info'>NAME : Iftikhar Malik</p></div>
      <div className=' m-2 fw-bold rounded  p-1 gSubfont text-dark text-wrap bg-info'><div className=' m-2 p-3  text-dark   bg-info'>EDUCATION : <p className='fs-4'> Certificate of professional cookery | Year of pass- 2015 | COTHM- College of Tourism & Hotel Management, Lahore</p></div></div>
      <div className=' m-2 fw-bold rounded  p-1 gSubfont text-white text-wrap bg-info'>WORK EXPERIENCE :
      <p className=' m-2 p-3 fs-3 rounded border border-dark text-white bg-info'>Multiple Trading House (2014-2016) |   Worked in Multiple Trading House as chef for two years. Handled complete kitchen independently for 30 persons.</p>
      <p className=' m-2 p-3 fs-3 rounded border border-dark text-white bg-info'>GOURMET Hotel Lahore (2013-2014) |     Worked in Gourmet Hotel Lahore as chef for one year </p>
      <p className=' m-2 p-3 fs-3 rounded border border-dark text-white bg-info'>Global College (2009-2013) |  Worked in Global College as chef for four years. </p>
      <p className=' m-2 p-3 fs-3 rounded border border-dark text-white bg-info'>Caret Jewelers (2006-2009) |    Worked in Global College as chef for three years. </p>
      </div>
    </div>
  )
}

export default About