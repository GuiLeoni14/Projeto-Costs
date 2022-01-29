import './styles.scss';
import loadingImage from '../../../assets/img/loading.svg';
export default function Loading() {
    return (
        <div className="loading_container">
            <img className="loading_image" src={loadingImage} alt="loading" />
        </div>
    );
}
