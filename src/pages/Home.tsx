

import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Navigation } from '../components/Navigation'
import { Section01 } from '../components/Sections/Section01'
import { Section02 } from '../components/Sections/Section02'
import { Section03 } from '../components/Sections/Section03'
import { Section04 } from '../components/Sections/Section04'

function Home() {
/* 
  let windowHeight = 0

  function sizeOfY() {
    windowHeight = window.innerHeight;

  };
  sizeOfY();

  window.addEventListener('resize', function () {
    sizeOfY();
  }); */
  

  const [colorActive, setColorActive] = useState(false);
  const [textAnimation1, setTextAnimation1] = useState(false);
  const [textAnimation2, setTextAnimation2] = useState(false);
  const [textAnimation3, setTextAnimation3] = useState(false);

  useEffect(function () {
    function scrollPosition() {
      if (window.scrollY > 40) {
        setColorActive(true);
      } else {
        setColorActive(false);
      }

      if (window.scrollY > 300) {
        setTextAnimation1(true);
      }

      if (window.scrollY > 500) {
        setTextAnimation2(true);
      }

      if (window.scrollY > 600) {
        setTextAnimation3(true);
      }
      /* 
              console.log(window.scrollY); */
    }
    window.addEventListener('scroll', scrollPosition)
  }, [])

  return (
    <Box>
      <div className="divnav">
        <Navigation action={colorActive} />
      </div>

      <div className="divsec">
        <Section01 />

        <Section02 animation1={textAnimation1} animation2={textAnimation2} animation3={textAnimation3} />

        <Section03 />

        <Section04 />
      </div>
    </Box >
  )
}

export default Home
