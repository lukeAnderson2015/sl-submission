import { DetailsPane } from "./types";
import './DetailsPane.css';

function DetailsPaneComponent ({title, image, subtitle, tags, containerClassName}: DetailsPane) {
    return (
        <div className={`${containerClassName} details-pane`}>
            <img className="details-pane__image" alt="product" src={image}/>
            <h2 className="details-pane__title">{title}</h2>
            <p className="details-pane__subtitle">{subtitle}</p>
            <div className="details-pane__tags-container">
                <div className="details-pane__tags">
                    {tags.map(t => <button key={t} className="details-pane__tag">{t}</button>)}
                </div>
            </div>
        </div>
    )
}

export default DetailsPaneComponent;