import {
    HStack, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Slider, SliderFilledTrack, SliderThumb, SliderTrack
} from "@chakra-ui/react";

export default function SliderInput({passwordLength, setPasswordLength}) {
    const handleChange = (value) => setPasswordLength(value)

    return (
        <HStack  width={"100%"}>
            <NumberInput  maxW="100px" mr="2rem" value={passwordLength} onChange={handleChange}>
                <NumberInputField/>
                <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                </NumberInputStepper>
            </NumberInput>
            <Slider flex="1" focusThumbOnChange={false} value={passwordLength} onChange={handleChange}>
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" children={passwordLength}/>
            </Slider>
        </HStack>
    )
}