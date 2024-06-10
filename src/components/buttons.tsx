interface ImageButtonProps {
    imgSrc?: string;
    alt?: string;
    placeholder?: string;
    className: string; 
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    tinyPara?: string;
}

const ImageButton = ({ imgSrc, alt, placeholder, className, onClick, tinyPara  }:ImageButtonProps ) => {
    let child;
    if (imgSrc && !placeholder) {
        child = <img src={imgSrc} alt={alt} className=" h-auto" style={{ maxWidth: '30%'}}/>
    } else if (placeholder && !imgSrc) {
        child = <span>{placeholder}</span>
    } else if (imgSrc && placeholder) {
        child = <><img src={imgSrc} alt={alt} className=" h-auto " style={{ maxWidth: '30%'}}/>
       <div className="grid">
            <p className="text-sm">{tinyPara}</p><span><b>{placeholder}</b></span>
       </div>
        </>
    }
    
  return (
    <button className={`flex items-center justify-around px-4 py-2 border border-slate-300 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-familyBlue ${className}`} onClick={onClick}>
        {child}
    </button>
  );
};

export default ImageButton;
