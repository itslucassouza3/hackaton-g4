import { ListUsersContent, UserleftContent, UserRightContent } from "./styles";
import { useState } from 'react';
import Filters from "./Filters";
import { Users } from "./Users";





const TalentBankContent = () => {

    return (
        <>
            <ListUsersContent>
                <UserleftContent>
                    <Filters />
                </UserleftContent>
                <UserRightContent>
                    <Users />
                </UserRightContent>
            </ListUsersContent>
        </>
    );
};

export default TalentBankContent;



















