import './Section.css';
import placeholderImage from '../../assets/gray_box.png'

function Section({ heading, caption, description, imagePosition = 'right' }) {
  return (
    <div className="section">
      <h1 className="section-heading">{heading}</h1>
      <div className={`section-content ${imagePosition}`}>
        <div className="section-text">
          <h3>{caption}</h3>
          <p>{description}</p>
        </div>
        <img src={placeholderImage}/>
      </div>
    </div>
  );
}

export default Section;