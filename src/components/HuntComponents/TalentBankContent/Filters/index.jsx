import React, { useState } from 'react';
import { Button, Input, Tree } from 'antd';
import Tooltip from 'antd/es/tooltip';
import { SearchOutlined } from "@ant-design/icons";
import { FilterButton, FiltersContent, InputContent } from './styles';


const treeData = [
    {
        title: 'Nome da empresa',
        key: '0-0',
        children: [
            {
                title: 'G4 Educação',
                key: '0-0-0',
            },
        ],
    },
    {
        title: 'País',
        key: '0-1',
        children: [
            { title: 'Brasil', key: '0-1-0-0' },
        ],
    },
    {
        title: 'Cidade',
        key: '0-2',
        children: [
            { title: 'Mogi das cruzes', key: '0-1-0-0' },
        ],
    },
];

const Filters = () => {
    const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
    const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    const onExpand = (expandedKeysValue) => {
        console.log('onExpand', expandedKeysValue);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };

    const onCheck = (checkedKeysValue) => {
        console.log('onCheck', checkedKeysValue);
        setCheckedKeys(checkedKeysValue);
    };

    const onSelect = (selectedKeysValue, info) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeysValue);
    };

    return (
        <FiltersContent>
            <InputContent>
                <Input
                    placeholder="Buscar Usuário"
                    prefix={
                        <Tooltip title="Extra information">
                            <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </InputContent>
            <Tree
                checkable
                onExpand={onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                onCheck={onCheck}
                checkedKeys={checkedKeys}
                onSelect={onSelect}
                selectedKeys={selectedKeys}
                treeData={treeData}
            />
            <FilterButton>
                <Button>Filtrar</Button>
            </FilterButton>
        </FiltersContent>
    );
};

export default Filters;