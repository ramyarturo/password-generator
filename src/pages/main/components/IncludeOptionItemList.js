import {FormLabel, HStack, Switch} from "@chakra-ui/react";


const IncludeOptionItemList = ({item, onChange}) => {
    const handleOnChange = (isChecked) => {
        onChange(item.key, isChecked)
    }
    return <>
        <HStack>
            <FormLabel htmlFor={item.key} mb="0">
                {item.option}
            </FormLabel>
            <Switch isChecked={item.isChecked} id={item.key} onChange={({target}) => handleOnChange(target.checked)}/>
        </HStack>
    </>

}

export default IncludeOptionItemList