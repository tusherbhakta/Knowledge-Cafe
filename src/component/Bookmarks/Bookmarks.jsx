import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className='md:w-1/3 '>
            <div className='border-2 border-[#6047EC] rounded-xl py-5 px-12 bg-[#6047EC1A]'>
                <h2 className='text-2xl font-bold text-[#6047EC] text-center'>Spent time on read : {readingTime} min</h2>
            </div>
            <div className=" bg-[#1111110D] rounded-xl">
                <h1 className="text-2xl font-bold mt-8 ml-8">Bookmarked Blogs: {bookmarks.length} </h1>
                {
                    bookmarks.map( (bookmark,idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
                }
            </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
