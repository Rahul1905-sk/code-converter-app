// Converter.js

import React, { useState } from 'react';
import { Box, Textarea, Button, Flex, Text, Code, Select, Heading } from '@chakra-ui/react';
import axios from 'axios';

const Converter = () => {
  const [sourceCode, setSourceCode] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('python');
  const [convertedCode, setConvertedCode] = useState('');
  const [showTargetTerminal, setShowTargetTerminal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCodeChange = (e) => {
    setSourceCode(e.target.value);
  };

  const handleTargetLanguageChange = (e) => {
    setTargetLanguage(e.target.value);
  };

  const handleConvert = async () => {
    setLoading(true);

    try {
      const response = await axios.post('https://long-puce-rabbit-slip.cyclic.app/codeConverter', {
        data: sourceCode + `convert this code to ${targetLanguage} language`,
        hello: 'hello',
      });

      setConvertedCode(response.data);
      setLoading(false);
      setShowTargetTerminal(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDebug = async () => {
    setLoading(true);

    try {
      const response = await axios.post('https://long-puce-rabbit-slip.cyclic.app/codeConverter', {
        data: sourceCode + `is there any error in this code or not?`,
      });

      setConvertedCode(response.data);
      setLoading(false);
      setShowTargetTerminal(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleQualityCheck = async () => {
    setLoading(true);

    try {
      const response = await axios.post('https://long-puce-rabbit-slip.cyclic.app/codeConverter', {
        data: sourceCode + `if there is any optimized approach of this code or not?`,
      });

      setConvertedCode(response.data);
      setLoading(false);
      setShowTargetTerminal(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Flex direction="column" alignItems="center">
      <Heading size={'xl'}> Code Converter App </Heading>
    
      <Box w="90%" maxW="500px" my="4">
        <Flex direction="column">
          <Text fontSize="xl" fontWeight="bold" mb="2">
            Source Code
          </Text>
          <Textarea
            value={sourceCode}
            onChange={handleCodeChange}
            placeholder="Enter source code..."
            size="md"
            h="200px"
            resize="vertical"
            mb="2"
          />
          <Flex alignItems="center" mb="2">
            <Select
              value={targetLanguage}
              onChange={handleTargetLanguageChange}
              mr="2"
            >
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
              <option value="c">C</option>
              <option value="c++">C++</option>
              <option value="python">Python</option>
            </Select>
            <Button colorScheme="teal" onClick={handleConvert}>
              Convert
            </Button>
          </Flex>
        </Flex>
      </Box>

      {showTargetTerminal && (
        <Box w="90%" maxW="500px" my="4">
          <Flex direction="column">
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Converted Code
            </Text>
            <Textarea
              p="2"
              h="200px"
              bgColor="white"
              mb="2"
              value={convertedCode}
              readOnly
              whiteSpace="pre-wrap"
            />
          </Flex>
        </Box>
      )}

      <Box w="90%" maxW="500px" my="4">
        <Flex direction="row" justifyContent="space-around">
          <Button
            colorScheme="teal"
            onClick={handleDebug}
            mb="2"
            isLoading={loading}
            loadingText="Debugging..."
          >
            Debug
          </Button>
          <Button
            colorScheme="teal"
            onClick={handleQualityCheck}
            isLoading={loading}
            loadingText="Checking..."
          >
            Quality Check
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Converter;
