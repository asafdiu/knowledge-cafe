

const EachBookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="bg-slate-400 p-4 m-4 rounded-xl">
            <h2>{title}</h2>
        </div>
    );
};

export default EachBookmark;