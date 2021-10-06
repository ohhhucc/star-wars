const LIMIT = 10;

export default function TablePagination({page, total, onChange = () => {}}) {

    const pagesCount = Math.ceil(total / LIMIT);

    return (
        <div>
            {
                Array
                    .from({length: pagesCount}, (_, index,) => index + 1)
                    .map(pageIndex => {
                        const isActive = pageIndex === page;
                        const action = () => {
                            if(pageIndex !== page) {
                                onChange(pageIndex);
                            }
                        }
                        return isActive ? (
                            <b key={pageIndex} onClick={action}>
                                {' '}{pageIndex}{' '}
                            </b>
                        ) : (
                            <span key={pageIndex} onClick={action}>
                                {' '}{pageIndex}{' '}
                            </span>
                        )
                    })
            }
        </div>
    )
}