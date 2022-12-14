import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress, Box, Stack, StackDivider, Heading, Text,  Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
    <Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>
  <Progress value={80} />
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
        // The size prop affects the height of the button
// It can still be overridden by passing a custom height
<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
>
  Button
</Button>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    </div>
  );
}

export default App;
