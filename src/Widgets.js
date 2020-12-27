import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
    const newsArticles = (heading, subtitle) => {
        return(
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticles("Huawei working on a new Kirin 990-based laptop", "Kirin 990-based laptop")}
            {newsArticles("Google Pixel 6 tipped to get under-display selfie camera", "Under-display selfie camera")}
            {newsArticles("WhatsApp working on interesting call feature", "before it rolls out multi-device support")}
            {newsArticles("Polling underway in municipal body elections in Haryana", "Municipal body elections")}
            {newsArticles("Amit Shah to visit Manipur today", "inaugurate several projects")}
            {newsArticles("Best iPhone deals you can get today", "Flipkart Electronics Sale")}
        </div>
    )
}

export default Widgets
