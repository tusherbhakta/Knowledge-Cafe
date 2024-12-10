import PropTypes from 'prop-types';
import { MdBookmarks } from "react-icons/md";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title, cover, author_img,author,reading_time,posted_date,hashtag, id} = blog;
    return (
        <div className='mb-10'>
            <img className='w-full rounded-lg mb-9' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='font-bold text-2xl'>{author}</h3>
                        <p className='text-[#11111199] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='items-center'>
                    <span className='font-medium text-xl text-[#11111199]'>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className='ml-3 text-red-400 text-2xl'><MdBookmarks></MdBookmarks></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold my-5'>{title}</h1>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx} ><a href="" className='font-medium text-xl text-[#11111199]'>{hash}</a> </span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time,id)} className='text-[#6047EC] underline text-xl font-semibold mt-5 mb-9'>Mark as read</button>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;