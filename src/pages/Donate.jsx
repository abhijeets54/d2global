import React from 'react'
import { Container, CustomImageList } from '../components'
import DonateComponent from '../../src/components/Donate/DonateComponent'


function Projects() {
  return (
    <div className="w-full text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className=" w-full">
          <DonateComponent />
            <h1 className="text-2xl font-bold hover:text-gray-500 mt-5"></h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
