import barLine from './modules/barLine'
import funnel from './modules/funnel'
import radar from './modules/radar'
import stackedbarLine from './modules/stackedbarLine'
import heatmap from './modules/heatmap'

import bLData from './data/bLData'
import fnData from './data/fnData'
import rdData from './data/rdData'
import skbLData from './data/skbLData'
import hmData from './data/hmData'

barLine.sketch(bLData);
funnel.sketch(fnData);
radar.sketch(rdData);
stackedbarLine.sketch(skbLData);
heatmap.sketch(hmData);