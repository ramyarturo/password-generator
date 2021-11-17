import {
    Box,
    Button,
    Flex,
    Grid, Image,
    Textarea,
    VStack,
    useToast
} from "@chakra-ui/react";
import ColorModeSwitcher from "../../components/ColorModeSwitcher";
import generatePassword from "../../utils/generatePassword";
import {useEffect, useRef, useState} from "react";
import SliderInput from "./components/SliderInput";
import IncludeOptionList from "./components/IncludeOptionList";
import includeOptionsData from "../../helpers/includeOptions";
import copyToClipboard from "../../utils/copyToClipboard";
import './main.css'
import localStorageUtils from "../../utils/localStorageUtils";

const MainPage = () => {
    const [password, setPassword] = useState("")
    const [passwordLength, setPasswordLength] = useState(() => localStorage.getItem("passwordLength") || '5')
    const [includeOptions, setIncludeOptions] = useState(() => {
        return includeOptionsData.map(item => {
            item.isChecked = localStorageUtils.getValue(item.key) === 'true'
            return item
        })
    })
    const textAreaRef = useRef()
    const toast = useToast()
    useEffect(() => {
        localStorageUtils.setValue("passwordLength", passwordLength)
    }, [passwordLength])
    const handleGenerateButton = () => {
        const newPassword = generatePassword(passwordLength, includeOptions)
        console.log(newPassword, "length", passwordLength)
        setPassword(newPassword)
    }
    const handleOnOptionStateChange = (key, newState) => {
        localStorageUtils.setValue(key, newState)
        setIncludeOptions(
            includeOptions.map(item => {
                if (item.key === key) {
                    item.isChecked = newState
                }
                return item
            })
        )
    }
    const handleTextAreaClick = () => {
        console.log(textAreaRef.current)
        textAreaRef.current.select()
        copyToClipboard()
        toast({
            title: "Copiado!",
            position: "top",
            isClosable: true
        })
    }

    return (
        <Box className="container" minH="100vh" textAlign="center" fontSize="xl">
            <Grid className="card">
                <Flex className="card-header">
                    <Image className={"key-image"} src={"/key.png"}/>
                    <ColorModeSwitcher className="color-switcher"/>
                </Flex>
                <Flex>
                    <Textarea ref={textAreaRef} onClick={() => handleTextAreaClick()} rows={"2"} resize={"none"}
                              isReadOnly={true}
                              value={password}/>
                </Flex>
                <VStack alignItems={"start"}>
                    <SliderInput passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
                    <IncludeOptionList includeOptions={includeOptions} onChange={handleOnOptionStateChange}/>
                </VStack>
                <Flex className="card-footer">
                    <Button onClick={() => handleGenerateButton()}>Generar Contraseña</Button>
                </Flex>
            </Grid>
        </Box>
    )
}

export default MainPage