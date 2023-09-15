import EachBookmark from "../EachBookmarks/EachBookmark";

const Bookmark = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 ml-4 mt-4 p-4">
            <h3>Total reading time: {readingTime}</h3>
            <h2>Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><EachBookmark key={bookmark.id} bookmark={bookmark}></EachBookmark>)
            }
        </div>
    );
};

export default Bookmark;