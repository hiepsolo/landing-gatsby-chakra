import {
  Box,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react';
import React, { useRef } from 'react';

const OurVideo = ({ isOpen, onClose }) => {
  const ourVideo = useRef(null);
  const handleVideoClick = (e) => {
    e.stopPropagation();
  };
  const setVolumeDefault = () => {
    ourVideo.current.volume = 0.2;
  }
  return (
    <>
      <Modal size="full" isOpen={isOpen} onClose={() => onClose()}>
        <ModalOverlay background={'rgba(0,0,0, 0.7)'}/>
        <ModalContent
          onClick={() => {
            onClose();
          }}
          background={'none'}
        >
          <ModalCloseButton color={'#fff'} />
          <ModalBody mt={14} display={'flex'}>
            <Center width="100%">
              <Box width={{base: '100%', xl: '70%'}}>
                <video
                  ref={ourVideo}
                  onClick={handleVideoClick}
                  controls
                  width="100%"
                  onLoadStart={setVolumeDefault}
                >
                  <source src="https://www.youtube.com/watch?v=T0xxOYuWKsQ" type="video/mp4" />
                </video>
              </Box>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OurVideo;
