// @flow
// this file is defining public API of core module

// components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PluginWrapper from './components/PluginWrapper';

import sockets from './sockets';
import reducer from './reducer';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

import * as utils from './utils';

export default {
  components: { Navigation, Footer, PluginWrapper },
  reducer,
  actionTypes,
  actions,
  sockets,
  utils
};
