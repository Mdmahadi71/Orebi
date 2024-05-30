import React from 'react'

const Paginationarea = ({pageNumber,paginets,pageProdect ,next,prew}) => {
    return (
        <div>
            <div>
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex -space-x-px text-base h-10">
                        <li onClick={()=>prew()}>
                            <a class="flex items-center justify-center lg:px-4 px-3 lg:h-10 h-5 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        {pageNumber.map((item,i)=>(
                            <li onClick={()=>paginets(item)}>
                            <a class={pageProdect == i + 1 ? "flex items-center justify-center lg:px-4 px-2 lg:h-10 h-5 leading-tight text-white bg-[black] border border-gray-300" : 
                            "flex items-center justify-center lg:px-4 px-2 lg:h-10 h-5 leading-tight text-[black] bg-[white] border border-gray-300"}>{item + 1}</a>
                        </li >
                        ))}
                        <li onClick={()=>next()}>
                            <a class="flex items-center justify-center lg:px-4 px-3 lg:h-10 h-5 leading-tight
                             text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100
                              hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                               dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Paginationarea
