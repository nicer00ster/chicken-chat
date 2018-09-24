import ReduxSagaFirebase from 'redux-saga-firebase';
import { app } from './base';

const rsf = new ReduxSagaFirebase(app);

export default rsf;
