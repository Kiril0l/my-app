import React from 'react'
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

let Paginator = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let countPortion = Math.ceil(pageCount / props.portionPage)


    return <div>
        <Stack >
            <Pagination
                siblingCount={2}
                count={countPortion}
                page={props.currentPage}
                onChange={(event, num) => props.onPageChanged(num)} />
        </Stack>
    </div>
}


export default Paginator