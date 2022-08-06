import { CardButtonContent, CardContent, UsersContent } from "./styles";
import { Button, Card, Dropdown, Menu, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const menu = (
    <Menu
        items={[
            {
                label: '1st menu item',
                key: '1',
                icon: <UserOutlined />,
            },
            {
                label: '2nd menu item',
                key: '2',
                icon: <UserOutlined />,
            },
            {
                label: '3rd menu item',
                key: '3',
                icon: <UserOutlined />,
            },
        ]}
    />
);

const data = [
    {
        img: 'https://avatars.githubusercontent.com/u/61891084?v=4',
        name: 'Lucas Souza',
        setor: 'Front-end',
    },
    {
        img: 'https://avatars.githubusercontent.com/u/61891084?v=4',
        name: 'Lucas Souza',
        setor: 'Front-end',
    },
    {
        img: 'https://avatars.githubusercontent.com/u/61891084?v=4',
        name: 'Lucas Souza',
        setor: 'Front-end',
    },
    {
        img: 'https://avatars.githubusercontent.com/u/61891084?v=4',
        name: 'Lucas Souza',
        setor: 'Front-end',
    },
    {
        img: 'https://avatars.githubusercontent.com/u/61891084?v=4',
        name: 'Lucas Souza',
        setor: 'Front-end',
    },
    {
        img: 'https://avatars.githubusercontent.com/u/61891084?v=4',
        name: 'Lucas Souza',
        setor: 'Front-end',
    },
    {
        img: 'https://avatars.githubusercontent.com/u/61891084?v=4',
        name: 'Lucas Souza',
        setor: 'Front-end',
    },
    {
        img: 'https://avatars.githubusercontent.com/u/61891084?v=4',
        name: 'Lucas Souza',
        setor: 'Front-end',
    },
]

export function Users() {
    return (
        <UsersContent>
            {data.map((user: any) => {
                return (
                    <Card >
                        <CardContent>
                            <img alt="example" src={user.img} />
                            <div>
                                <p>
                                    {user.name}
                                </p>
                                <span>{user.setor}</span>
                            </div>
                        </CardContent>
                        <CardButtonContent>
                            <Dropdown overlay={menu}>
                                <Button>
                                    Button
                                    <DownOutlined />
                                </Button>
                            </Dropdown>
                        </CardButtonContent>
                    </Card>
                )
            })}
        </UsersContent>
    )
}