import './Tags.scss'

export default function Tags ({tags}) {
    return (
        <div className="tags">
            {tags.map((tag) => (
                <div key={tag} className='tags__items'>{tag}</div>
            ))}
        </div>
    )
}