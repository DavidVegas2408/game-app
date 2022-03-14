import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core';

const PaginationGames = ({ pagAct, setItemIni, setPagAct, setItemEnd, totalItem }) => {

    let totalForPag = 40;
    const totalPag = Math.round(totalItem / totalForPag) + 1;
    let arrayNumber = [];
    let valueIni = 0;
    let valueEnd = 40;

    for (let i = 1; i < totalPag + 1; i++) {
        if (i <= totalPag) {
            arrayNumber = [...arrayNumber, { pag: i, itemIni: valueIni, itemEnd: valueEnd }]
            valueIni = valueIni + totalForPag;
            if ((valueEnd + totalForPag) > totalItem) {
                valueEnd = totalItem;
            } else {
                valueEnd = valueEnd + totalForPag;
            }
        }
    }

    const getSetPagination = (pag, itemIni, itemEnd) => {
        setItemIni(itemIni);
        setItemEnd(itemEnd);
        setPagAct(pag)
    };

    return (
        <div className='container-pagination'>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {
                    arrayNumber.map(el => {
                        return el.pag === pagAct ?
                            <Button color="primary" className='pagination-item' key={el.pag} onClick={() => getSetPagination(el.pag, el.itemIni, el.itemEnd)}>
                                {el.pag}
                            </Button>
                            : <Button className='pagination-item' key={el.pag} onClick={() => getSetPagination(el.pag, el.itemIni, el.itemEnd)}>
                                {el.pag}
                            </Button>
                    })
                }
            </ButtonGroup>
        </div>
    )
}

export default PaginationGames