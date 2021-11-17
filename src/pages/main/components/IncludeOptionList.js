import IncludeOptionItemList from "./IncludeOptionItemList";


const IncludeOptionList = ({includeOptions, onChange}) => {

    return <>
        {includeOptions.map((item, index) => {
            return <IncludeOptionItemList key={index} item={item} onChange={onChange}/>
        })
        }
    </>
}

export default IncludeOptionList