import React from 'react'
import { FormControl, FormLabel, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { Field } from 'formik'

const SubscribeInput = ({ label, name, type = 'text', icon, placeholder, errors, onChange }) => {

  // função handle
  const handleChange = e => onChange(e)

  return (
    <FormControl isRequired>
      {label !== undefined &&
        <FormLabel>{label}</FormLabel>
      }

      <InputGroup size={['md', 'lg']}>
        {icon !== undefined &&
          <InputLeftElement pointerEvents='none' color='gray.600'>
            {icon}
          </InputLeftElement>
        }
        <Input
          as={Field}
          name={name}
          type={type}
          placeholder={placeholder}
          focusBorderColor='teal.400'
          bgColor='white'
          borderRadius='none'
          onChange={handleChange}
        />
      </InputGroup>
      <Text fontStyle='italic' fontSize='sm'>{errors}</Text>
    </FormControl>
  )
}

export default SubscribeInput