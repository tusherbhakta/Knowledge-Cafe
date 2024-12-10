import PropTypes from 'prop-types'

function Bookmark({bookmark}) {
    const {title}= bookmark;
  return (
    <div className='mt-4 mx-8 p-5 bg-slate-200 rounded-xl'>
        <h3 className='text-lg font-semibold'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.array
}

export default Bookmark;
