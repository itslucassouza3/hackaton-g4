import { useState } from "react"
import { CandidateContent } from "../CandidateContet"
import { CardContent, ContentSelected, JobListContainer, JobListRightContent } from "./styles"

const jobs = [
    {
        description:
            'Experiência em Treinamento e Desenvolvimento Conhecimento de gestão de projetos Proatividade na busca de novos processos, metodologias e inovação para a área Conhecimento de Universidade Corporativa Experiência com ciclos de avaliação e processos globais Experiência com implementação de ferramenta de gestão de Treinamento e Desenvolvimento.',
        vaga: 'Full Stack development',
        local: 'São Paulo',
        recruter: 'Renaldo cavalcante',
        id: '1',
        areas: ['tech', 'dados', 'head']
    },
    {
        description: 'Dev backend',
        vaga: 'BackendDevelopment',
        local: 'São Paulo',
        recruter: 'Renaldo cavalcante',
        id: '1',
        areas: ['tech', 'dados', 'head']
    },
    {
        description: 'fullstack'
    },
    {
        description: 'fullstack'
    },
]

export function JobListContent() {
    const [isOpen, setIsOpen] = useState(jobs[0])



    return (
        <JobListContainer>
            <CardContent>
                {jobs.map((job) => {
                    return (
                        <CandidateContent
                            key={job.id}
                            props={job}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                    )
                })}
            </CardContent>
            <JobListRightContent>
                {isOpen && (
                    <ContentSelected>
                        <div className="header-content">
                            <h1>{isOpen.vaga}</h1>
                            <p>{isOpen.local}</p>
                            <p>{isOpen.recruter}</p>
                        </div>

                        <h3>Áreas</h3>
                        {isOpen.areas?.map((area) => {
                            return (
                                <span>{area}</span>
                            )
                        })}

                        <div className="Button-content">
                            <button>Candidatar</button>
                        </div>
                        <div className="description-content">
                            <span>Sobre a vaga</span>
                            <p>{isOpen.description}</p>
                        </div>
                    </ContentSelected>
                )}
            </JobListRightContent>
        </JobListContainer>
    )
}