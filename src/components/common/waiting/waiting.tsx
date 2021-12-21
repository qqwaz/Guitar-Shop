import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Waiting() {
  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%'}}>
      <Loader
        type='TailSpin'
        color='#000'
      />;
    </div>
  );
}

export default Waiting;
