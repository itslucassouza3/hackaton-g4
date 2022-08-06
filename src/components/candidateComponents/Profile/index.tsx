import { ProfileContainer } from './styles'
import { ProfileCard } from './ProfileCard/index';

const data =
{
    id: 1,
    name: 'Lucas Souza',
    email: 'lucasvini193@hotmail.com',
    picture: 'https://avatars.githubusercontent.com/u/61891084?v=4',
    phone: '11997693962',
    cpf: '00000000000',
    createdAt: '11112022',
    updatedAt: '',
    wage_expectation: '9000,00',
    english_level: '',
    professional_experience: '',
    work_type: '',
    linkedin_profile: '',
    location: 'São Paulo, Brazil',
}


export function ProfileContent() {
    return (
        <ProfileContainer>
            <p>SOBRE MIM</p>
            <ProfileCard title="MEU NOME" name={data.name} />
            <ProfileCard title="MINHA LOCALIZAÇÃO" name={data.location} />
            <ProfileCard title="MEU CELULAR" name={data.phone} />
            <ProfileCard title="MINHA FOTO" name={data.picture} />

            <p>PERFIL PROFISSIONAL</p>
            <ProfileCard title="MINHA ESPECIALIDADE" name={data.work_type} />
            <ProfileCard title="TEMPO DE EXPERIÊNCIA" name={data.professional_experience} />
            <ProfileCard title="MODELO DE CONTRATAÇÃO" name={data.work_type} />
            <ProfileCard title="PERFIL NO LINKEDIN" name={data.linkedin_profile} />

            <p>FORMAÇÃO E SKILLS</p>
            <ProfileCard title="HABILIDADES" name={data.linkedin_profile} />
            <ProfileCard title="MEU NÍVEL DE INGLÊS" name={data.english_level} />
        </ProfileContainer>
    );
}
