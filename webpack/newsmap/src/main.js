import barLine from './modules/barLine'
import funnel from './modules/funnel'
import radar from './modules/radar'
import stackedbarLine from './modules/stackedbarLine'

import bLData from './data/bLData'
import fnData from './data/fnData'
import rdData from './data/rdData'
import skbLData from './data/skbLData'

barLine.sketch(bLData);
funnel.sketch(fnData);
radar.sketch(rdData);
stackedbarLine.sketch(skbLData);