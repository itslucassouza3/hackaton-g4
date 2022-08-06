import { useEffect, useState } from "react";
import { JobListLeftcontent } from "../JoblistContent/styles";


export function CandidateContent({ props, setIsOpen, isOpen }: any) {
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        if (isOpen.description === props.description) {
            setIsSelected(true)
        }
        else {
            setIsSelected(false)
        }
    }, [isOpen, props, isSelected])


    return (
        <JobListLeftcontent onClick={() => setIsOpen(props)} isSelected={isSelected} >
            <h1>{props.vaga}</h1>
            <p>{props.local}</p>
            <p>{props.recruter}</p>
        </JobListLeftcontent>
    )
}