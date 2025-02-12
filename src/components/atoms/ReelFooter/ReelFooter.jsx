import './ReelFooter.css';

export const ReelFooter = ({channel,description}) =>{



    return(
        <div className="reel-footer-left">

        <div className="reel-footer-text">
            <h2>@{channel}</h2>
            <p>{description}</p>
        </div>

        </div>
    )
}