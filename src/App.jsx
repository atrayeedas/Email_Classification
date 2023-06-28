import React from 'react';
import { Box, Button, FormControl, FormLabel, Text, Textarea } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Atrayee from './assets/atrayee.png'
import Som from './assets/som.png';
import Niladri from './assets/niladri.jpg'
import './App.css'

function App() {
  const textareaRef = useRef();

  const sendToSpamFilterMessage = async () => {
    //new Audio('./assets/click.wav').play();

    const res = await fetch('http://localhost:5000/spamcheck', {
      method: "POST",
      body: JSON.stringify(textareaRef.current.value),
    });
    const data = await res.json();

    toast(data?.ServerMessage)
  };

  return (
    <>
      <Toaster toastOptions={{
        style: {
          textAlign: 'center',
          fontWeight: '900',
          color: 'black',
        }
      }} />
      <Box h={'100vh'} w={'full'} id='container'>
        <motion.div
          id='first-container'
          className='element-div'
          initial={{ x: -1500 }}
          animate={{ x: 0 }}>
          <motion.p
            initial={{ x: -155, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: 'all 1s' }}>
            <h1 style={{ fontSize: window.innerWidth <1200?'4em':'5.5em', fontWeight: '900' }}>Hi! I am Somthirtha</h1>
            <motion.span>
              Currently pursuing MCA from Heritage Institute of Technology.
              I contributed in the backend model of filtering process and data training
              of this project.
            </motion.span>
          </motion.p>
          <motion.img
            transition={{ type: 'spring' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            src={Som}
            alt={'profile'} />
        </motion.div>

        <motion.div
          id={'second-container'}
          className={'element-div'}
          initial={{ x: 1500 }}
          animate={{ x: 0 }}>
          <motion.p
            style={{ textAlign: window.innerWidth < 1200 ? 'center' : 'right' }}
            initial={{ x: 175, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: 'all 1s' }}>
            <h1 style={{ fontSize: window.innerWidth <1200?'4em':'5.5em', fontWeight: '900' }}>Hi! I am Niladri</h1>
            <motion.span>
            Currently pursuing MCA from Heritage Institute of Technology.
            I contributed to the UI/UX design of this project.

            </motion.span>
          </motion.p>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            src={Niladri}
            alt={'profile'} />
        </motion.div>

        <motion.div
          id={'container'}
          className={'element-div'}
          initial={{ x: 1500 }}
          animate={{ x: 0 }}>
          <motion.p
            style={{ textAlign: window.innerWidth < 1200 ? 'center' : 'left' }}
            initial={{ x: 175, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: 'all 1s' }}>
            <h1 style={{ fontSize: window.innerWidth <1200?'4em':'5.5em', fontWeight: '900' }}>Hi! I am Atrayee</h1>
            <motion.span>
              Currently pursuing MCA from Heritage Institute of Technology.
              My Contribution is in the UI/UX designing of the project. This is a simple
              application of Multinomial NB & SVM to predict whether the email is spam or ligitimate.
            </motion.span>
          </motion.p>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            src={Atrayee}
            alt={'profile'} />         
        </motion.div>

        <motion.div id={'fourth-container'} className='element-div' initial={{scale:0.5}} whileInView={{scale:1}} >
          <FormControl display={'flex'} flexDir={'column'} alignItems={'center'}>
            <FormLabel color={'white'} mb={25} fontWeight={900}>Spam DETECTOR</FormLabel>
            <Textarea resize={'none'} bg={'white'} w={window.innerWidth > 1200 ? '50vw' : '85vw'} textAlign={'center'}
              h={'40vh'} placeholder='ENTER TEXT TO CHECK SPAM' ref={textareaRef} fontWeight={900} />
            <Button type='submit' variant={'solid'} bg={'blue.600'} w={200} fontWeight={900}
              onClick={sendToSpamFilterMessage}
              mt={window.innerWidth > 1200 ? '10%' : '50%'} boxShadow={'0px 0px 15px -5px blue'} color={'white'}>CHECK</Button>
          </FormControl>
        </motion.div>
      </Box></>
  )
}

export default App
