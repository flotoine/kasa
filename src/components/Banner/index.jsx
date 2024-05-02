export default function Banner () {
    let className = "";
    (window.location.href.includes('a-propos')) ? 
    className = "banner__about" : className = "banner__home"
    
    return (
        
        <div className = {`banner ${className}`}>
            <h1 className={`banner__text ${className}__text`}>Chez vous, <br className={`${className}__text--break`}></br> partout et ailleurs</h1>
        </div>
    )
}