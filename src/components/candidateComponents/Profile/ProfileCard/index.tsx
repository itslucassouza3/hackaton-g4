import { Button, Card } from "antd";
import { ButtonContent } from "./styles";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { useState } from "react";
import { Link } from "react-router-dom";


export function ProfileCard({ title, name }: any) {
    const [loading, setLoading] = useState(false);
    return (
        <Card
            style={{
                width: 600,
                marginTop: 16,
                flexDirection: 'row',
            }}
            loading={loading}>
            <Meta
                avatar={<SearchOutlined />}
                title={title}
                description={name}
            />
            <ButtonContent>
                <Link to="/signup"><EditOutlined /></Link>
            </ButtonContent>
        </Card>
    )
}